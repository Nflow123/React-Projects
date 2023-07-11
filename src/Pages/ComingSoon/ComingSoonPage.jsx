import React from 'react';
import { Link } from 'react-router-dom';
import './ComingSoon.css';
function ComingSoonPage() {
  return (
    <div className="coming-soon">
      <h1>Coming Soon</h1>
      <p>The page you are looking for Are Not Added Yet.</p>
      <Link to="/">Go back to the homepage</Link>
    </div>
  )
}

export default ComingSoonPage
