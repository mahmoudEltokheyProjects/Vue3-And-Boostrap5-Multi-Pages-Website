#!/usr/bin/env sh
# abort on errors
set -e 
# build 
npm run build
# navigate into the build output directory 
cd dist
# if you are deploying to a custom domain
git init 
git add -A
git commit -m 'New Deployment'
git push -f https://github.com/mahmoudEltokheyProjects/Vue3-And-Boostrap5-Multi-Pages-Website.git master:gh-pages
cd -
