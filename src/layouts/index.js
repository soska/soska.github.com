import React from 'react';
import Link from 'gatsby-link';
import Footer from '../components/footer';
import Logo from '../components/logo';

import { rhythm, scale } from '../utils/typography';

const logo = (
  <div style={{ padding: '22px', textAlign: 'center', background: 'white' }}>
    <svg style={{ width: '60px' }} viewBox="0 0 800 800">
      <defs />
      <path
        style={{ fill: 'tomato' }}
        d="M799.86,114.54V.25H-.14V343.11h684V459H-.14V800.25h800V228.82H115.31V114.54ZM115.31,686V573.27H683.83V686Z"
      />
    </svg>
  </div>
);

const Header = () => {
  return (
    <h1
      style={{
        ...scale(1.5),
        marginBottom: rhythm(1.5),
        marginTop: 0,
      }}
    >
      <Link
        style={{
          boxShadow: 'none',
          textDecoration: 'none',
          color: 'tomato',
        }}
        to={'/'}
      >
        Hola!
      </Link>
    </h1>
  );
};

class Template extends React.Component {
  render() {
    const { location, children } = this.props;
    let header;

    let rootPath = `/`;
    if (typeof __PREFIX_PATHS__ !== `undefined` && __PREFIX_PATHS__) {
      rootPath = __PATH_PREFIX__ + `/`;
    }

    return (
      <div>
        <Logo />
        <div
          style={{
            marginLeft: 'auto',
            marginRight: 'auto',
            maxWidth: rhythm(28),
            minHeight: '80vh',
            padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
          }}
        >
          {location.pathname === rootPath && <Header />}
          {header}
          {children()}
        </div>
        <Footer />
      </div>
    );
  }
}

export default Template;
