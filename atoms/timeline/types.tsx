export type Mode = 'single' | 'range' | undefined

export type Bucket = {
  x1: number
  x2: number
  selected: boolean
  data: Data[]
}

export type TooltipProps = {
  x: number
  y: number
  message: string | any
}

export type Timescale = d3.ScaleTime<number, number>
