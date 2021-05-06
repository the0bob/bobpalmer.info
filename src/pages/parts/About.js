import React from 'react';
import ScrollableAnchor from 'react-scrollable-anchor';
import OutLink from './OutLink';
import CtaButton from './CtaButton';

import "./styles.css";

export default function About() {
  return (
    <ScrollableAnchor id="about">
      <section className="about">
        <div className="container text-center">
          <div className="row">
            <div className="col-md-4">
              <img className="about-image" src="https://s3.amazonaws.com/www.bobpalmer.info/img/profile.jpg" alt="Bob Palmer" />
            </div>
            <div className="col-md-8">
              <div>
                <p className="lead">
                  My name is Bob; motivated father, programmer, and lover of some things nerdy.
                </p>
                <p>
                  I received my Bachelor of Science studying Computer Science at <OutLink href="http://park.edu/">Park University</OutLink> in 2017. I am currently working as a Full Stack Developer at <OutLink href="https://www.sellozo.com/">Sellozo</OutLink>. In addition to building solutions from the ground up, I also have experience implementing requested features for legacy systems, fixing bugs, integrating 3rd party products, maintaining proprietary systems, and optimizing code. My work involves a variety of programming languages, data formats, and back end systems. I also have an interest in working with Expert Systems, Simulations, Games, or Artificial Intelligence applications.
                </p>
                <div className="clearfix"></div>
              </div>
              <div className="text-center">
              <div className="row">
                <div className="col-md-6">
                  <CtaButton href="#portfolio">
                    See Portfolio
                    <span className="m-1 fa fa-angle-down"></span></CtaButton>
                </div>
                <div className="col-md-6">
                  <CtaButton href="#contact">
                    Contact Me
                    <span className="m-1 fa fa-angle-down"></span>
                  </CtaButton>
                </div>
              </div>
            </div>
            </div>
          </div>
        </div>
      </section>
    </ScrollableAnchor>
  );
}