import React from 'react';
import { rhythm } from '../utils/typography';
import gray from 'gray-percentage';
import shuffle from '../utils/shuffle';

const roles = shuffle([
  'Christian',
  'Husband',
  'Developer',
  'Designer',
  'Musician',
  'Mexican',
]);

class Role extends React.Component {
  state = {
    currentRole: 0,
  };

  timeout = null;

  changeRole() {
    let { currentRole } = this.state;
    currentRole++;
    if (currentRole > roles.length - 1) {
      currentRole = 0;
    }
    this.setState({ currentRole });
    this.timeout = window.setTimeout(() => {
      this.changeRole();
    }, 2500);
  }

  componentDidMount() {
    this.changeRole();
  }

  componentWillUnmount() {
    if (this.timeout) {
      window.clearTimeout(this.timeout);
    }
  }

  render() {
    const { roles } = this.props;
    const role = roles[this.state.currentRole];

    // window.X = this

    return (
      <span
        style={{
          display: 'inline-block',
          color: 'tomato',
          // padding: rhythm(0.2),
          // paddingLeft: rhythm(0.6),
          // paddingRight: rhythm(0.6),
          // color: '#555',
          // background: '#fafad9',
          // borderRadius: 2,
          // boxShadow: 'rgba(0,0,0,.05) 6px 6px 0px',
        }}
      >
        {role}
      </span>
    );
  }
}

class Bio extends React.Component {
  render() {
    return (
      <div
        style={{
          marginBottom: rhythm(2.5),
          alignItems: 'center',
          color: gray(45),
          fontWeight: 900,
          fontSize: rhythm(1.2),
          lineHeight: rhythm(1.6),
        }}
      >
        I am Armando Sosa. A <Role roles={roles} /> currently living in
        Guadalajara, Mexico. Welcome to my site.
      </div>
    );
  }
}

export default Bio;
