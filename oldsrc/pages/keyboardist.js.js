import React from 'react';

const NotFoundPage = () => {
  if (typeof window !== 'undefined') {
    window.location.href = 'https://soska.github.io/keyboardist.js';
  }

  return <div>redirecting…</div>;
};

export default NotFoundPage;
