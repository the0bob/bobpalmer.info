import React from 'react';
import ScrollableAnchor from 'react-scrollable-anchor';
import { skills } from '../../data.json';

function SkillGroup({faIcon, name, items}) {
  const favIconClasses = `${faIcon} fa-stack-1x`;
  return (
    <div className="col-lg-3 col-md-3 col-sm-6 col-xs-6">
      <div className="skill">
        <span className="fa-stack fa-4x">
          <i className="fa fa-circle fa-stack-2x"></i>
          <i className={favIconClasses} style={{
            color: '#007bff',
          }}></i>
        </span>
        <h4>
          <strong>{name}</strong>
        </h4>
        <ul>
          {items.map((skill, index) => (
            <li key={index} dangerouslySetInnerHTML={{__html: skill}} />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default function Skills() {
  return (
    <ScrollableAnchor id="skills">
      <section className="skills text-white">
        <div className="container">
          <div className="row text-center">
            <div className="col-lg-12 mx-auto">
              <h2>Skills </h2>
              <hr className="small" />
              <div className="row">
                {skills.map((skillGroup, index) => (
                  <SkillGroup key={index} {...skillGroup}/>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </ScrollableAnchor>
  );
}
