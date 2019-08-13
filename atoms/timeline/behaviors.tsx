import * as d3 from 'd3'
import { Mode, Timescale, Bucket } from './types'
import { convertDateToTimezoneDate } from './util'
/**
 *
 * Selection Drag does two things:
 * 1. When the user drags across the timeline, a range selection will be created.
 * 2. If the drag event is only 150ms or less from start to finish AND ends on a rect object,
 * assume that the user meant to click instead of drag, and properly trigger a click action on the rect.
 *
 * @param currentDataBuckets
 */
export const getSelectionDrag = (
  currentDataBuckets: Bucket[],
  xScale: Timescale,
  mode: Mode,
  timezone: string,
  onSelect: () => void
) => {
  let clickStart: number

  return d3
    .drag()
    .on('start', () => {
      clickStart = d3.event.x
      const newLeftDate = convertDateToTimezoneDate(
        xScale.invert(clickStart),
        timezone
      )

      if (mode === 'single') {
        setSelectionRange([newLeftDate])
      } else {
        setIsDragging(true)
        hideElement(d3.select(hoverLineRef.current))
        setSelectionRange([newLeftDate])
      }
    })
    .on('end', () => {
      if (!mode) {
        showElement(d3.select(hoverLineRef.current))
        setIsDragging(false)
        const clickDistance = clickStart - d3.event.x
        const sourceEvent = d3.event.sourceEvent
        if (Math.abs(clickDistance) < 5) {
          const nodeName = sourceEvent.srcElement.nodeName
          setSelectionRange([])
          if (nodeName === 'rect' || nodeName === 'line') {
            const x = d3.event.x
            const bucket = currentDataBuckets.find(b => b.x1 < x && x <= b.x2)
            const idsToSelect = bucket!.data.map(d => d.id)
            props.onSelect && props.onSelect(idsToSelect)
          }
        }
      }
    })
    .on('drag', () => {
      if (mode !== 'single') {
        const diff = d3.event.x - d3.event.subject.x
        let dragCurrent = clickStart + diff

        const initialDate = convertDateToTimezoneDate(
          xScale.invert(clickStart),
          timezone
        )

        const dragDate = convertDateToTimezoneDate(
          xScale.invert(dragCurrent),
          timezone
        )

        if (diff > 0) {
          setSelectionRange([initialDate, dragDate])
        } else {
          setSelectionRange([dragDate, initialDate])
        }
      }
    })
}
