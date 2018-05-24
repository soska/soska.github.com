import React from 'react';
import { rhythm } from '../utils/typography';
import gray from 'gray-percentage';
import Link from 'gatsby-link';

class Logo extends React.Component {
  render() {
    return (
      <div
        css={{
          padding: '22px',
          textAlign: 'center',
          background: 'white',
          borderBottom: `1px solid ${gray(90)}`,
        }}
      >
        <Link to="/">
          <svg css={{ width: '50px' }} viewBox="0 0 800 800">
            <defs />
            <path
              css={{ fill: 'tomato' }}
              d="M799.86,114.54V.25H-.14V343.11h684V459H-.14V800.25h800V228.82H115.31V114.54ZM115.31,686V573.27H683.83V686Z"
            />
          </svg>
        </Link>
      </div>
    );
  }
}

export default Logo;
