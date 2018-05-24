import React from 'react';
import photo from '../assets/me.jpg';
import { rhythm } from '../utils/typography';
import Helmet from 'react-helmet';

const About = () => (
  <div>
    <Helmet title={`About Armando Sosa`} />
    <h1
      css={{
        textAlign: 'center',
        fontSize: rhythm(3),
        marginBottom: rhythm(1),
        color: 'tomato',
      }}
    >
      About Me
    </h1>
    <div>
      <img
        src={photo}
        css={{
          width: '200px',
          float: 'left',
          margin: '22px',
          marginTop: '11px',
          borderRadius: '11px',
        }}
      />
      <div css={{ paddingLeft: '120px', paddingRight: '120px' }}>
        <p>
          Hello! My full name is <em>Armando Quetzalcoatl Sosa Garay</em>, but
          my friends just call me <strong>Armando</strong>. All three of them.
        </p>

        <p>
          I'm a small mexican dude who has been doing internet stuff for what
          feels like an eternity. I used to be a graphic designer but, fun fact:
          that's the worst paid profession in Mexico, so I pivoted to
          programming and I've been doing a lot better.
        </p>

        <p>
          When I am not in front of a computer you may find me attending church,
          playing music, or just hanging out with my wonderful wife.
        </p>

        <p>
          I am a type-2 diabetic, which sucks because eating is my favorite
          hobby. Look, it's not my fault that I live in the country with the
          best food in the <del>world</del> universe.
        </p>

        <p>
          I've been working as a remote front-end engineer since 2009 for
          companies in New York, San Francisco, and Colombia. Currently I am
          eployed by <a href="https://paidlabs.com">Paid Labs</a> as a React
          Developer.
        </p>

        <p>
          …And I think I'll stop with my rambling. If you want to know more, you
          can <a href="#">follow me on twitter</a> or send me an electronic
          letter to <em>arm.sosa[at]gmail.com.</em>
        </p>
      </div>
    </div>
  </div>
);

export default About;
