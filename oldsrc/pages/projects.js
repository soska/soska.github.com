import React from 'react';
import Helmet from 'react-helmet';
import { rhythm } from '../utils/typography';
import gray from 'gray-percentage';

import keyboardist from '../assets/keyboardist.png';
import givemeacolor from '../assets/givemeacolor.png';
import savage from '../assets/savage.png';

const github = name => `https://github.com/soska/${name}`;

const Project = ({ name, link, children }) => {
  return (
    <div
      css={{
        marginTop: rhythm(1),
        marginBottom: rhythm(1),
        padding: rhythm(1),
        background: 'white',
        borderRadius: rhythm(0.15),
        boxShadow: 'rgba(0,0,0,.05) 6px 6px 0',
      }}
    >
      <a
        href={link}
        css={{
          display: 'block',
          paddingBottom: rhythm(0.5),
          marginBottom: rhythm(0.5),
          borderBottom: `1px solid ${gray(90)}`,
        }}
      >
        {name}
      </a>
      <div>{children}</div>
    </div>
  );
};

const Projects = () => {
  return (
    <div>
      <Helmet title={`Projects | Armando Sosa`} />
      <h2>Open Source</h2>
      <Project name="Keyboardist" link={github('keyboardist.js')}>
        <img src={keyboardist} alt="Keyboardist" />
        Easy way to add key shortcuts to your Javascript application.
      </Project>
      <Project name="React Keyboardist" link={github('react-keyboardist')}>
        React wrapper for Keyboardist
      </Project>
      <h2>Fun Tools</h2>
      <Project name="Give Me A Color" link={'https://givemeacolor.com'}>
        <img src={givemeacolor} alt="GiveMeAColor.com" />
        Sometimes one needs a random color to get the inspiration going.
      </Project>
      <Project name="Savage" link={'https://savage.now.sh'}>
        <img src={savage} alt="GiveMeAColor.com" />
        Quick way to turn an SVG file into a React Component.
      </Project>

      {/*      <Project name="Unavatar" link={github('unavatar')}>
        React component to add alphanumeric avatars to users.
      </Project>
      <Project name="Adaptables" link={github('adaptables')}>
        React component to create responsive tables.
      </Project>*/}
    </div>
  );
};
export default Projects;
