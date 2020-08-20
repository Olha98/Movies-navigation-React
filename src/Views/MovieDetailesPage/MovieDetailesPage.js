import React from 'react'
import { Link, withRouter } from 'react-router-dom';



const MovieDetailesPage = (props) => {

  console.log('props.location.pathname', props.location.pathname)
console.log('props.location', props)
  return (
    <h2>Movie</h2>
  )
}

export default withRouter(MovieDetailesPage)


// {/* <Link to={{
//     pathname: `/Cast/${id}`,
//     state: { from: this.props.location },
//   }}>Cast</Link>

// <Link to={{
//     pathname: `/Reviews/${id}`,
//     state: { from: this.props.location },
//   }}>Reviews</Link>
// </> */}
