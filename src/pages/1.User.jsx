import React from 'react'
import { Link } from 'react-router-dom';
function User() {
  return (
    <div>
        <Link to="/register">Go to Register</Link>  <br />
        <Link to="/userregister">Go to UserRegister</Link>  <br />
        <Link to="/userlogin">Go to userlogin</Link>  <br />
        <Link to="/volget">Go to volget</Link>  <br />
    </div>
  )
}

export default User