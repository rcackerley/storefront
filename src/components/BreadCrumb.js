import React from 'react';
import { Link, withRouter } from 'react-router-dom';

let BreadCrumb = (props) => {
  let urls = props.location.pathname.split('/');
  urls.shift();
  console.log(urls);
  if (urls[0] === "") {
    return null
  }
  else {
    return <div className="breadcrumbs">
      {urls.map(level => <Link to={`/${level}`}>{level} | </Link> )}
    </div>
  }
}

let BreadCrumbContainer = withRouter(BreadCrumb);

export default BreadCrumbContainer;
