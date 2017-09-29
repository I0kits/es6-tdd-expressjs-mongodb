import React from 'react';
import './NotFound.scss';

class NotFound extends React.Component {
  render() {
    return (
      <div className="notFound">
        <h1>Http Error 404</h1>
        <span>The page not Found</span>
      </div>
    );
  }
}

export default NotFound;
