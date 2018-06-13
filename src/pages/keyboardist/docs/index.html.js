import React from 'react';

const NotFoundPage = () => {
  if (typeof window !== 'undefined') {
    window.location.href =
      'https://soska.github.io/keyboardist.js/docs/index.html';
  }

  return <div>redirecting…</div>;
};

export default NotFoundPage;
