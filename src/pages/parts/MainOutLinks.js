import React from 'react';
import OutLink from './OutLink';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../../components/font-awesome';

export default function MainOutLinks({color}) {
  let style = { color };
  return(
    <ul className="list-inline">
      <li className="list-inline-item pr-2">
        <OutLink href="https://github.com/the0bob">
          <FontAwesomeIcon icon={["fab", "github"]} size={'3x'}  />
        </OutLink>
      </li>
      {/* <li className="list-inline-item p-2">
        <OutLink href="https://codepen.io/the0bob/">
          <FontAwesomeIcon icon={["fab", "codepen"]} size={'3x'} />
        </OutLink>
      </li>
      <li className="list-inline-item p-2">
        <OutLink href="https://www.hackerrank.com/the0bob/">
          <FontAwesomeIcon icon={["fab", "hackerrank"]} size={'3x'}  />
        </OutLink>
      </li> */}
      <li className="list-inline-item pl-2">
        <OutLink href="https://www.linkedin.com/in/im-bob/">
          <FontAwesomeIcon icon={["fab", "linkedin"]} size={'3x'}  />
        </OutLink>
      </li>
    </ul>
  );
}
