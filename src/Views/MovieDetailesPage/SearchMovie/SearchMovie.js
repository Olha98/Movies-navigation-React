import React from 'react'


export default function SearchMovie({ search, hendelClick }) {

  return (
    <form>
      <label>
        <input velue={search} />
        <button onClick={hendelClick}>Search</button>
      </label>
    </form>
  )
}
