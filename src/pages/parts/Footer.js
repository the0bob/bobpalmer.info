import React from 'react';
import ScrollableAnchor from 'react-scrollable-anchor';
import MainOutLinks from './MainOutLinks';

export default function Footer() {
  return (
    <ScrollableAnchor id="footerScroll">
      <footer id="footer">
        <div className="container">
          <div className="row">
            <div className="col-lg-10 mx-auto text-center">
              <MainOutLinks />
              <hr className="small" />
              <p>
                This website was built with React, Bootstrap, and Gatsby. The DNS is hosted on Amazon Route 53, the app itself and deployment is hosted by Digital Ocean Apps, and source control is hosted by GitHub.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </ScrollableAnchor>
  );
}
