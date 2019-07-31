type data = {
  id: string
  attributes: {
    created: Date
    modified: Date
  }
}

export const test_data: data[] = [
  {
    id: '1',
    attributes: {
      created: new Date(1990, 0, 1),
      modified: new Date(1992, 1, 1),
    },
  },
]
