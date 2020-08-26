import React from 'react'
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"
import Loader from 'react-loader-spinner'
import css from './Loader.module.css'

export default class Spinner extends React.Component {

  render() {
    return (
      <Loader type="Oval" color="#000" height={50} width={50} className={css.loading_style}/>
    );
  }
}