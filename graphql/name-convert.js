const rename = name => name.replace(/-/g, '_').replace(/\./g, '__')
const undoRename = name => name.replace(/__/g, '.').replace(/_/g, '-')

module.exports = {
  rename,
  undoRename,
}
