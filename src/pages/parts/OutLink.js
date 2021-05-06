import React from 'react';

export default function OutLink({href, children}) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer">{children}</a>
  );
}
