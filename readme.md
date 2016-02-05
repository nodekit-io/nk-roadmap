# Roadmap for Open Source Projects

Static generator for wekan/trello style roadmap from markdown file

Output is on the `gh-pages` branch

## Install, build and publish to Github Pages 

``` js
git clone https://github.com/nodekit-io/nk-roadmap.git
npm install
npm run
```

## Edit Roadmap 

Each of the `.roadmap.md` files in `/src` is generated into an html file based on markdown header levels
So edit using any text editor and rerun the build/publish step
