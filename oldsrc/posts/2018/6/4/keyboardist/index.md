---
path: 2018/6/4/
date: "2018-06-04T19:18:32.839Z"
title: Presenting Keyboardist
subtitle: This is me, showing my first open source package.
tags: [Open Source, Keyboardist, React, JavaScript]
---

![](keyboardist.png)

I really like my keyboard shortcuts. Nothing says Power User&trade; than expertly using an application without even without touching the mouse. So, whenever I am building a web app I always try to add some keyboard capabilites to navigate the UI.

Recently, while making our React Dashboard I wanted to add some keyboard shortcuts, for example, having the global search input gain focus when the slash (`/`) key is pressed. That's a pretty common and useful shortcut right?. I couldn't find an easy and declarative way to do this in React so I built a component that works like this.

```javascript
class Dashboard extends React.Component {
  focusSearch() {
    // do some vodoo here to get the search focused
  }

  doSomethingElseWhenPressingSpace() {
    console.log('Space was pressed');
  }

  render() {
    return (
      <div className="dashboard">
        <Keyboardist
          bindings={{
            Slash: this.focusSearch,
            Space: this.doSomethingElseWhenPressingSpace,
          }}
        />
      </div>
    );
  }
}
```

I really liked this approach because it is declarative and since it's a component, it takes care of suscribing/unsuscribing to events using the component's lifecycle. We've been using this in production for a couple years now and despite some tweaking I'm very happy with it.

Just recently I realized that most of what this component is doing is not tied to React itself, so I extracted the code into a dependency-free, library-agnostic JavaScript library called [Keyboardist](https://github.com/soska/keyboardist) and I'm releasing it along with [React-Keyboardist](https://github.com/soska/react-keyboardist) which is the React wrapper.

This is what pure-javascript Keyboardist looks like.

```javascript
// import the library
import createListener from 'keyboardist';

// creates a listener, by default it listens to 'keydown' events.
const listener = createListener();

//the listener has a suscribe function
const subscription = listener.subscribe('Slash', focusSearch);

// And later you want to cancel the subscription for some reason
subscription.unsuscribe();
```

It has a [really simple API](https://github.com/soska/keyboardist) and I hope to make wrappers for other frameworks other than React.

You can install them via `npm` or `yarn`.

## Demos

I built two simple demos for both Keyboardist and React-Keyboardist. Their require, you know, a keyboard.

* [Keyboardist Demo](https://soska.github.io/keyboardist/docs/index.html)
* [React-Keyboardist Demo](https://soska.github.io/react-keyboardist/docs/index.html)

## Meta

This is my first ever Open Source package and I'm kinda freaked out about the reception (or lack thereof) that this is going to receive. Regardless, I would be very happy to hear any feedback. If you have any, you can [find me on Twitter](https://twitter.com/soska) or via email at **arm.sosa[at]gmail.com**.
