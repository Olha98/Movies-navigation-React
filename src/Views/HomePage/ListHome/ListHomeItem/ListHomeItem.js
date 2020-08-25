import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom';
import css from './ListHomeItem.module.css'

class ListHomeItem extends Component {
  state={
    from:''
  }

  render() {
    console.log("this.props", this.props)
    const { trendFilm: { title, original_name, id } } = this.props
    return (
      <li data-id={id} className={css.listItem}>
        <Link to={{
          pathname: `/movies/${id}`,
          state: {from: this.props.locathion}
        }} className={css.link}>{title ? title : original_name}
        </Link>
      </li>
    )
  }
}

export default withRouter(ListHomeItem)

// {from: this.props.locathion}