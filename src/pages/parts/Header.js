import React from 'react';
import ScrollableAnchor from 'react-scrollable-anchor';
import MainOutLinks from './MainOutLinks';
// import "./styles.css";

export default function Header(props) {
  const style={
    position: 'relative',
    display: 'table',
    width: '100vw',
    height: '100vh',
    backgroundColor: '#333',
    background: 'url(https://s3.amazonaws.com/www.bobpalmer.info/img/header.jpg) no-repeat center center scroll',
    WebkitBackgroundSize: 'cover',
    MozBackgroundSize: 'cover',
    OBackgroundSize: 'cover',
    backgroundSize: 'cover',
    backgroundAttachment: 'fixed',
  }
  return (
    <ScrollableAnchor id="top">
      <header style={style}>
        <div className={"content"}>
          <h1>I'm Bob</h1>
          <h3>Full Stack Developer</h3>
          <br />
          <MainOutLinks />
          <br />
          <a href="#about" className="btn btn-dark btn-lg">
            Learn More
            <span className="m-1 fa fa-angle-down"></span>
          </a>
        </div>
      </header>
    </ScrollableAnchor>
  );
}
