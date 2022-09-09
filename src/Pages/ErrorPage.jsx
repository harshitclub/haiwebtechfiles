import React from 'react'
import '../Styles/Pages/ErrorPage.css'
import error from '../assets/error.gif'

const ErrorPage = () => {
  return (
    <>
    <div className='errorContainer'>
        <div className="errorImage">
            <img src={error} alt='error 404'/>
        </div>
        <div className="errorInfo">
            <p>Page Not Found! | Go To Homepage</p>
        </div>
        <div className="errorLink">
            <a href='/'><h2>Go To Homepage</h2></a>
        </div>
    </div>
    </>
  )
}

export default ErrorPage