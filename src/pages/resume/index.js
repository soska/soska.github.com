import React from 'react';
import Remarkable from 'react-remarkable';

const Contact = () => (
  <dl>
    <dt>Address</dt>
    <dd>Guadalajara, Mexico Area</dd>

    <dt>Email</dt>
    <dd>arm.sosa[at]gmail.com</dd>

    <dt>Nationality</dt>
    <dd>Mexican</dd>

    <dt>Phone</dt>
    <dd>+52 1 331241 60 62</dd>
  </dl>
);

const src = `

# Armando Sosa

## Front End Software Engineer

### Links

* [Github Profile](https://github.com/soska)
* [Dribbble Porfolio](https://dribbble.com/soska)
* [Twitter Profile](https://twitter.com/soska)
* [Personal Blog](https://armandososa.org)
* [Freelance Portfolio](https://nolimit-studio.com)

### Employment History

Designer and programmer hybrid with 13 years experience in web development. I'm an expert at CSS, UI design and Front-end engineering. Entrepreneurial personality with a creative view of life.

#### Frontend Software Engineer at Paid

Aug 2015 - Present

I was in charge of designing, building and maintaining the user-facing admin dashboard for our customers. It was built using modern front-end technologies like React, Redux, and Webpack.

#### Hacker in Residence at Social Atom Ventures

Aug 2014 - Aug 2015

Social Atom Ventures is a venture capital firm specialized in investing in Latin American early-stage startups. I was hired as an expert to mentor and advise the founders of matters regarding design and usability.

#### Software Engineer at Onswipe

Aug 2010 - Aug 2014

I was the first engineer at Onswipe. Initially, I built a WordPress plugin that turned plain websites into iPad optimized web applications. After that idea got founded and turned into a company I worked on developing and maintaining Onswipe's native ad platform.

#### Design Consultant at Crowdvine

Aug 2010 - Aug 2014

This company used to provide web-based site builder for event organizers. I was brought in to help with the development and design side of the business.

#### Freelance Consulting

2005 - 2010

I worked as a web design freelance consultant for many companies around the world. The work I made spanned from website design, HTML, CSS, and JavaScript coding to WordPress theme development. I was well regarded by my customers and some of them invited me to work at their companies full time.

### Skills

* Front End Javascript Development
  * React
  * Modern Javascript (ES6+)
  * Redux
  * Webpack
  * Rollup
  * NPM
* Web Development
  * Ample CSS expertise
  * PHP and WordPress Plugin and Theme Development
  * PHP
  * NodeJS
* Design
  * User Interface and User Experience Design
  * Branding, Marketing and Identity Design.
  * Sketch, Photoshop, Illustrator, etc.
* Work Ethic
  * Experience with Agile Methodologies
  * 13+ years of remote working experience.
  * 100% percent endorsed by any past employer.

## Hobbies

* I perform and produce music as my main hobby.
* I enjoy public speaking.
* I like to cook.
* I am a blogger since 2004.
* I also like to work on open source and side projects.


## Languages

* English
* Spanish

## Contact

`;

export default () => (
  <div>
    <Remarkable>{src}</Remarkable>
    <Contact />
  </div>
);
