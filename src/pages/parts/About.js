import React from 'react';
import ScrollableAnchor from 'react-scrollable-anchor';
import OutLink from './OutLink';
import CtaButton from './CtaButton';

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
                  My name is Bob; I make the bleep bloops make the ching chings.
                </p>
                <p>
                  I have six years under my belt developing web-based software professionally, formal education including a Bachelor's in Computer Science from <OutLink href="http://park.edu/">Park University</OutLink>, and have been a programming / DIY / PC enthusiast my whole life. I've built web-based software and apps from the ground up, updated existing systems and websites, written code in a dozen languages, and have integrated with more cloud services and APIs than I care to list here. Most of my experience is in a full stack role, working with various front end frameworks (React, Vue, Angular), back end languages (Java, C#, Node, PHP), database systems (Postgres, Mongo, MySql, MSSQL), and AWS (S3, Route 53, EC2, Redshift, EFS, etc). After tinkering with game concepts most of my life, I've recently been learning Unity, brushing up on my C#, and educating myself on every step of the game development process. I have a few skills in graphic design, photo editing, technical writing, team leadership, and basic business accounting as well.
                </p>
                <p>
                  In addition to building solutions from the ground up, I also have experience implementing requested features for legacy systems, fixing bugs, integrating 3rd party products, maintaining proprietary systems, and optimizing code. My work involves a variety of programming languages, data formats, and back-end systems. In addition to UX, APIs, and Game Design, I am also interested in working with Expert Systems, Simulations, or Artificial Intelligence applications.
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