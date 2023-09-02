import React from 'react'
import {Link} from 'react-router-dom'

function Family() {
  return (
    <Link to={'/family'}>
    <div className='item'> Family</div>
    </Link>
  )
}

export default Family