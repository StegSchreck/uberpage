<p align="center">
  <img src="https://raw.githubusercontent.com/StegSchreck/uberpage/master/uberpage/public/img/UberPage.png" width="300px">
</p>

# UberPage
[![Build Status](https://travis-ci.org/StegSchreck/uberpage.svg?branch=master)](https://travis-ci.org/StegSchreck/uberpage)
[![Codacy Badge](https://api.codacy.com/project/badge/Grade/8e7a29576bd641b68f54157d5cb5c6bd)](https://app.codacy.com/app/StegSchreck/uberpage?utm_source=github.com&utm_medium=referral&utm_content=StegSchreck/uberpage&utm_campaign=Badge_Grade_Dashboard)
[![Codacy Badge](https://api.codacy.com/project/badge/Coverage/8e7a29576bd641b68f54157d5cb5c6bd)](https://www.codacy.com/app/StegSchreck/uberpage?utm_source=github.com&utm_medium=referral&utm_content=StegSchreck/uberpage&utm_campaign=Badge_Coverage)
[![License](https://img.shields.io/github/license/StegSchreck/uberpage.svg)](https://github.com/StegSchreck/uberpage/blob/master/LICENSE)
[![Latest Release](https://img.shields.io/github/release/StegSchreck/uberpage.svg?logo=github)](https://github.com/StegSchreck/uberpage/releases)

A simple webpage for displaying a collection of links. Each link can have an optional background image, link text, or icon. The layout of the links will be generated automatically, depending on the number of links to be displayed.

For a live demo, you can visit [uberpage.schreck.berlin](https://uberpage.schreck.berlin), for which this project was created initially.

## How to Use
* Fill `data.js` with your items. See about possible configuration in the next paragraph.
* Put the necessary images in appropriate quality at `public/img`. Reference them in the `data.js` by filename only, not including the path.
* Deploy on somewhere. I've included a guide for hosting it on [AWS](DEPLOY_ON_AWS.md) or as [GitHub user page](DEPLOY_ON_GITHUB_PAGES.md).
* Done.

### Possible Configuration Values for an Item
`data.js`: 
```javascript
    export default {
      items: [
        {
          link: 'https://github.com/StegSchreck', // optional
          title: 'https://github.com/StegSchreck', // optional
          description: 'My open source projects on GitHub', // optional
          text_color: '#ffffff', // defaults to '#4A86E8' - affects both title and description (if set)
          background_logo: 'GitHub_white.svg', // optional
          background_logo_size: '70%', // defaults to '50%'
          background_picture: 'cover.jpg', // optional
          background_picture_size: 'cover', // defaults to 'cover'
          background_color: '#000000', // defaults to '#282c34'
        },
        // ... more items ...
      ],
      // ...
    }
```

The effect of the background configuration values is as follows (from top to bottom):
* `title` (or `description` on hover)
* `background_logo`
* `background_picture`
* `background_color`

This means if both `background_logo` and `background_picture` are set, that the logo will cover parts of the picture.
Additionally, if a `title` is set, it with have a darkening effect on whatever is underneath to make it more readable.

## Acknowledgements

### Third Party Stuff
* [React](https://reactjs.org/)
* [Nova Square font](https://fonts.google.com/specimen/Nova+Square)
* [Bungee Hairline font](https://fonts.google.com/specimen/Bungee+Hairline)

## Why this Name?
Obviously there is no connection to any mobility provider. The word "uber" is taken from the German word "über", meaning "over", "above" or "on top". As this project is meant to act as an overview page for multiple other pages via linking, this name can be taken literally.
