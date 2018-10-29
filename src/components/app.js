import React, { Component } from 'react'

import BookList from '../containers/bookList'
import BookDetail from '../containers/bookDetail'

export default class App extends Component {
  render() {
    //console.log('inside app',this.props)
    return (
      <div>
        <BookList />
        <BookDetail />
      </div>
    )
  }
}
