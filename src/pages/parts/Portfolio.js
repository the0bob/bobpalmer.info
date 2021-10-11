import React from 'react';
import ScrollableAnchor from 'react-scrollable-anchor';
import { Carousel } from 'react-responsive-carousel';
import OutLink from './OutLink';
import data from '../../data.json';
import "react-responsive-carousel/lib/styles/carousel.min.css";

function PortfolioItem({img, title, copy, link, cta}) {
  const background = `url(${img}) no-repeat top center`;
  return (
    <div className="portfolio-item-wrapper">
      <div className="portfolio-item">
        <OutLink href={link}>
          <div className="img-portfolio" style={{
            background: background, backgroundSize: 'cover',  width: '100%',  height: '240px',
          }}>
            <h4>{title}</h4>
          </div>
        </OutLink>
        <div className="copy-portfolio" dangerouslySetInnerHTML={{__html:copy}} />
        <div className="cta-portfolio">
          <OutLink href={link}>
            <button className="btn btn-dark">{cta || "View"}</button>
          </OutLink>
        </div>
      </div>
    </div>
  );
}

export default function() {
  const { portfolio = [],  portfolioSettings = {} } = data;
  return (
    <ScrollableAnchor id="portfolio">
      <section className="portfolio">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 mx-auto text-center">
              <h2 key={"heading"}>Portfolio</h2>
              <hr key={"hr"} className="small" />
            </div>
          </div>
        </div>
        <Carousel key={"carousel"} {...portfolioSettings}>
            {portfolio.map((portfolioItem, index) => (
              <PortfolioItem key={index} {...portfolioItem}/>
            ))}
        </Carousel>
      </section>
    </ScrollableAnchor>
  );
}