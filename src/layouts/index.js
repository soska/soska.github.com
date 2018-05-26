import React from 'react';
import Link from 'gatsby-link';
import Footer from '../components/footer';
import Logo from '../components/logo';
import gray from 'gray-percentage';
require('prismjs/themes/prism-solarizedlight.css');

import { rhythm, scale } from '../utils/typography';

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

const NavLink = ({ to, children }) => (
  <Link
    css={{
      fontSize: rhythm(0.45),
      textTransform: 'uppercase',
      letterSpacing: '0.04em',
      display: 'block',
      padding: rhythm(0.5),
      color: gray(40),
      '&:hover': {
        color: 'tomato',
      },
    }}
    to={to}
  >
    {children}
  </Link>
);

const Nav = () => (
  <nav
    css={{
      display: 'flex',
      justifyContent: 'center',
      borderBottom: `1px solid ${gray(95)}`,
    }}
  >
    <NavLink to="/">Home</NavLink>
    <NavLink to="/about">About</NavLink>
    <NavLink to="/projects">Projects</NavLink>
  </nav>
);

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
        <Nav />
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
          {children()}
        </div>
        <Footer />
      </div>
    );
  }
}

export default Template;
