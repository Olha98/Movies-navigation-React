import React, { Component } from 'react'


export default class SearchMovie extends Component {
  state = {
    search: '',
  }



  hendelSubmit = (e) => {
    e.preventDefault()
    const { search } = this.state;
    this.props.onSubmit(search)
  }

  hendelChange = (e) => {
    const { value } = e.target
    this.setState({ search: value})
  }

  render() {
    const { search } = this.state;
    return (
      <form onSubmit={this.hendelSubmit}>
        <label>
          <input type="text" value={search} name="query" onChange={this.hendelChange} />
          <button type="submit">Search</button>
        </label>
      </form>
    )
  }
}
