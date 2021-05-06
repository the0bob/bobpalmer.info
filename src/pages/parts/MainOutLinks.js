import React from 'react';
import OutLink from './OutLink';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../../components/font-awesome';

export default function MainOutLinks({color}) {
  let style = { color };
  return(
    <ul className="list-inline">
      <li className="list-inline-item">
        <OutLink href="https://www.linkedin.com/in/im-bob/">
          <FontAwesomeIcon icon={"linkedin"} />
        </OutLink>
      </li>
      <li className="list-inline-item">
        <OutLink href="https://github.com/the0bob">
          <FontAwesomeIcon icon={"github"} />
        </OutLink>
      </li>
      <li className="list-inline-item">
        <OutLink href="https://codepen.io/the0bob/">
          <FontAwesomeIcon icon={"codepen"} />
        </OutLink>
      </li>
      <li className="list-inline-item">
        <OutLink href="https://www.hackerrank.com/the0bob/">
          <FontAwesomeIcon icon={"hackerrank"} />
          {/* <i className="fab fa-hackerrank fa-fw fa-3x" style={style}></i> */}
        </OutLink>
      </li>
    </ul>
  );
}
