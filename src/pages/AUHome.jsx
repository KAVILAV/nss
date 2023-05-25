import React from 'react';
import '../css/AUHome.css'
import { Link } from 'react-router-dom'; //<Link to="/user">

function HomePage() {
  return (
    <div>
      <div className="button-container">
        <Link to="/admin">
          <button>Admin</button>
        </Link>
        <Link to="/user">
          <button>User</button>
        </Link>
      </div>
    </div>
  );
}

export default HomePage;
