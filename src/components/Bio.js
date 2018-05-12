import React from 'react';
import { rhythm } from '../utils/typography';
import gray from 'gray-percentage';

const roles = ['Christian', 'Husband', 'Developer', 'Musician'];

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
    }, 1000);
  }

  componentDidMount() {
    this.changeRole();
  }

  componentWillUnmount() {
    if (this.timeout) {
      this.clearTimeout(this.timeout);
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
          padding: rhythm(0.3),
          paddingLeft: rhythm(0.6),
          paddingRight: rhythm(0.6),
          color: '#6c5ce7',
          background: '#fafad9',
          borderRadius: 2,
          boxShadow: 'rgba(0,0,0,.05) 6px 6px 0px',
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
        }}
      >
        Hello! I am a <Role roles={roles} /> currently living in Guadalajara,
        Mexico.
      </div>
    );
  }
}

export default Bio;
