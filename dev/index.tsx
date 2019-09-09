import chokidar from 'chokidar'
import { exec } from 'child_process'
import debounce from 'lodash.debounce'
let compiling = false
let followOn = false

const recompileTypescript = debounce(() => {
  if (compiling) {
    followOn = true
    return
  }
  console.log('recompiling project')
  compiling = true
  exec('tsc --project ./tsconfig.json', function(error, stdout, stderr) {
    compiling = false
    if (followOn) {
      followOn = false
      recompileTypescript()
    } else {
      console.log('distribution up to date')
    }
  })
}, 200)

recompileTypescript()
chokidar.watch('./@types/**/*').on('change', () => {
  recompileTypescript()
})
chokidar.watch('./atoms/**/*').on('change', () => {
  recompileTypescript()
})
chokidar.watch('./extensions/**/*').on('change', () => {
  recompileTypescript()
})
chokidar.watch('./functions/**/*').on('change', () => {
  recompileTypescript()
})
chokidar.watch('./styled/**/*').on('change', () => {
  recompileTypescript()
})
chokidar.watch('./typescript/**/*').on('change', () => {
  recompileTypescript()
})
