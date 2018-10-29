export const book_selected = 'BOOK_SELECTED'
const selectBook = book => {
  return {
    type: book_selected,
    payload: book
  }
}

export { selectBook }
