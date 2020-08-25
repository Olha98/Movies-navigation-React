import React from 'react'
import css from './ReviewsList.module.css'

export default function ReviewsList({ content, author }) {

  return (
    <div className={css.listItemReviews}>
      <h3>Author: {author}</h3>
      <p>{content}</p>
    </div>
  )
}