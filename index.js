var Metalsmith = require('metalsmith');
var stylus = require('metalsmith-stylus');
var asset = require('metalsmith-static');
var mdtojson = require("markdowneyjr");
var layouts = require('metalsmith-layouts'); 
var ghpages = require('gh-pages'); 
var path = require('path')
var extname = path.extname;
var _ = require('lodash')

var nib = require('nib');

var metalsmith = Metalsmith('.');
metalsmith
  .use(asset({src: "public", dest: "public"}))
  .use(asset({src: "gh-pages", dest: "."}))
  .use(stylus({
    // Set stylus output to compressed
    compress: false,
    // Use the 'nib' plug-in
    use: [nib()]
    }))
  .use(concat)
  .use(mdcards)
  .use(layouts({
    engine: "handlebars",
    partials: "partials",
    default: "layout.hbs",
    pattern: "*.html"
  }))
  .build(function(err) {
      if (!err)
        ghpages.publish(path.join(__dirname, 'build'), function(err) { 
            if (err)
              console.log(err)
           else
              console.log("published to gh-pages")
         });
         else
             console.log(err);
  });
  
  
  
/**
 * mdcards plugin.
 *
 * @param {Object} files
 * @param {Metalsmith} metalsmith
 * @param {Function} done
 */

function mdcards(files, metalsmith, done){
    
  for (var file in files) {
    if (!file.endsWith('.roadmap.md')) continue;
    
   var mymarkdown = files[file].contents.toString();
   var mdjson = mdtojson(mymarkdown,{});
   files[file.replace('.roadmap.md', '.html')] = {
      contents: new Buffer("Hello World"),
      roadmap: mdjson
    };
    console.log(mdjson);
    delete files[file];
  }

  done();
}
  
/**
 * Concat plugin.
 *
 * @param {Object} files
 * @param {Metalsmith} metalsmith
 * @param {Function} done
 */

function concat(files, metalsmith, done){
  var css = '';

  for (var file in files) {
    if ('.css' != extname(file)) continue;
    css += files[file].contents.toString();
    delete files[file];
  }

  files['roadmap.css'] = {
    contents: new Buffer(css)
  };

  done();
}