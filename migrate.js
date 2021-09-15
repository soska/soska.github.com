const fs = require('fs');
const path = require('path');
const glob = require("glob");
const _ = require('lodash')


glob('oldsrc/posts/**/*.md', function(error, files){
  if (error) {
    throw error;
  }

  const posts = [];
  for (let i = 0; i < files.length; i++) {
    const fileName = files[i];
    const name = fileName.replace("oldsrc/posts/2018/",'').replace('/index.md','')
    const [month, date, slug] = name.split('/');
    fs.copyFileSync(fileName, path.resolve(__dirname,'posts',slug+'.md'));
    // posts.push({
    //   month,
    //   date,
    //   slug
    // })


  }
  console.log(posts);


})
