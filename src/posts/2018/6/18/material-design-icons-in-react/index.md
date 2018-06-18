---
path: 2018/6/18/material-design-icons-in-react
date: "2018-06-18T23:16:56.757Z"
title: Material Design Icons in React
blurb: This is a short post to let you know of a little package I made.
tags: []
---

This is a short post to let you know of a little package I made: [Material-JSX-Icons](https://www.npmjs.com/package/material-jsx-icons).

I love the icons Google has made for its Material Design initiative. They are super well designed, they are beautiful and they are very consistent.

They are my go-to option whe I need icons even whn I don't like to use the rest of the Material Design UI elements and guidelines.

![](icons-library.png)

Google, very graciously, provides many ways to use their icons: [you can download every icon in vector or image formats](https://material.io/tools/icons/) or use the icon font they not only provide but also [host for you](https://google.github.io/material-design-icons/#icon-font-for-the-web).

While the font method is the easiest to setup and use, consensus is that [it may not be the best option](https://css-tricks.com/icon-fonts-vs-svg/) for web. So I wanted to switch to SVG, but I dreaded the process of importing and styling individual SVGs files.

So I made a script that takes every SVG in the Material Design icon repository and transformed it from SVG to JSX using this amazing package: [Svg-To-JSX](https://github.com/janjakubnanista/svg-to-jsx). I found the result very useful!

So I also converted everything to ES5 using Babel and published it to NPM as [Material-JSX-Icons](https://www.npmjs.com/package/material-jsx-icons)

Now it's possible to import and use individual icons as any other react component:

```javascript
import React from 'react';
import PersonIcon from 'material-jsx-icons/person';
import DeleteIcon from 'material-jsx-icons/delete';

const App = () => (
  <div>
    <PersonIcon className={'icon'} />
    <DeleteIcon className={'icon'} />
  </div>
);
```

Don't you think that's cool? I **do** think that's cool.

If you want to know more, [check the README in Github](https://github.com/soska/material-jsx-icons.
