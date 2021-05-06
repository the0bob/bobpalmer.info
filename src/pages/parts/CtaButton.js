import React from 'react';

export default function CtaButton({href, children}) {
  return (
    <a href={href} className="btn btn-dark btn-lg" style={{marginTop:'16px', minWidth:'10em'}}>
      {children}
    </a>
  );
}
