import React from 'react';
import { rhythm } from '../utils/typography';
import gray from 'gray-percentage';

const links = [
  ['Twitter', 'https://twitter.com/soska'],
  ['Instagram', 'https://instagram.com/soska'],
  ['Dribbble', 'https://dribbble.com/soska'],
  ['Github', 'https://github.com/soska'],
];

const FooterLink = ({ link }) => {
  const [label, url] = link;
  return (
    <a
      style={{
        padding: rhythm(0.25),
        margin: rhythm(0.25),
      }}
      href={url}
    >
      {label}
    </a>
  );
};

class Footer extends React.Component {
  render() {
    return (
      <div
        style={{
          padding: rhythm(1),
          display: 'flex',
          justifyContent: 'center',
          borderTop: '1px solid ' + gray(90),
          background: 'white',
        }}
      >
        {links.map(link => <FooterLink link={link} />)}
      </div>
    );
  }
}

export default Footer;
