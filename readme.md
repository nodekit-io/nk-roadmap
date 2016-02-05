# Roadmap for NodeKit;  fork for other Open Source Projects 

Static generator for wekan/trello style roadmap from markdown file

Output is on the `gh-pages` branch

## Install, build and publish to Github Pages 

``` js
git clone https://github.com/nodekit-io/nk-roadmap.git
npm install
npm run
```

 ## Editing the Roadmap 

 Each of the `.roadmap.md` files in `/src` is generated into an html file based on markdown header levels
 So edit using any text editor and rerun the build/publish step
 
 ## Contributing to the {NK} NodeKit roadmap
 
Just submit a pull request with an updated 'index.roadmap.md' file on master branch;  gh-pages branch is a manual update for now

 ## Fork for your own roadmap 

Fork the project, then edit the header.hbs partial and optionally the layout.hbs file to match your branding