import React from 'react'
import ReviewsList from './ReviewsList'
import css from './Reviews.module.css'

export default function Reviews({ results }) {

  return (
    <div className={css.boxtReviews}>
      {results.length > 0 ? results.map(result =>  <ReviewsList key={result.id} {...result}/>) : <p className={css.boxtReviewsTitle}>We don't have any review. </p>}
  </div>
 
   
  )
}