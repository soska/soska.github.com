const fs = require('mz/fs');
const mkdir = require('mz-modules/mkdirp');
const path = require('path');
const pagesPath = path.resolve(__dirname, 'src/posts');
const _ = require('lodash');

const getPostPath = postName => {
  const date = new Date();
  const parts = [
    date.getYear() + 1900,
    date.getMonth() + 1,
    date.getDate(),
    _.kebabCase(postName),
  ];
  return parts.join('/');
};

const frontMatter = ({ postName, postPath }) =>
  [
    '---',
    `path: ${postPath}`,
    `date: ${JSON.stringify(new Date())}`,
    `title: ${postName}`,
    `tags: []`,
    '---',
  ].join('\n');

const postTemplate = ({ postName, postPath }) =>
  [frontMatter({ postName, postPath }), `Lorem ipsum dolor sit amet`].join(
    '\n\n'
  );

const createPost = postName =>
  new Promise((resolve, reject) => {
    const postPath = getPostPath(postName);
    const fullPath = path.join(pagesPath, postPath);
    mkdir(fullPath)
      .then(() => {
        return fs.writeFile(
          path.join(fullPath, 'index.md'),
          postTemplate({ postName, postPath }),
          'utf8'
        );
      })
      .then(() => {
        resolve(fullPath);
      })
      .catch(ex => {
        reject(ex);
      });
  });

const main = () => {
  const title = process.argv.slice(2).join(' ');
  createPost(title)
    .then(fullPath => {
      console.log(`\n---\n- New post created at \n- ${fullPath}\n---`);
    })
    .catch(ex => {
      throw ex;
    });
  // console.log(title);
};

main();

// createPost('Hello World again');
