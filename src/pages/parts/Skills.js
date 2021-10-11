import React from 'react';
import ScrollableAnchor from 'react-scrollable-anchor';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faCircle, faFileCode, faDatabase, faCodeBranch} from '@fortawesome/free-solid-svg-icons';
import { faStackOverflow } from '@fortawesome/free-brands-svg-icons';
import { skills } from '../../data.json';

const iconMap = {
  "Languages": faFileCode,
  "Stacks": faStackOverflow,
  "Workflow": faCodeBranch,
  "Database": faDatabase,
};

function SkillGroup({faIcon, name, items}) {
  // https://fontawesome.com/v5.15/how-to-use/on-the-web/using-with/react
  return (
    <div className="col-lg-3 col-md-3 col-sm-6 col-xs-6">
      <div className="skill">
        <span className="fa-stack fa-layers fa-4x">
          <FontAwesomeIcon icon={faCircle} size={'2x'}/>
          <FontAwesomeIcon icon={iconMap[name]} color={'#007bff'}/>
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
