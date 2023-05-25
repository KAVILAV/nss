import React from 'react'
import { Link } from "react-router-dom";
function Home() {
  return (
    <div>
        <Link to="/admin">Go to Register</Link>  <br />
        <Link to="/user">Go to UserRegister</Link>  <br />
    </div>
  )
}

export default Home