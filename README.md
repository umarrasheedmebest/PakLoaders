# PakLoadersDrivers React Native

This repository contains the react native source code that generates both iOS and Android applications for the PakLoadersDrivers product.


### Tech

GiftYa uses a number of open source projects to work properly:

* [Redux](redux.js.org) - A predictable state container for JavaScript apps
* [Axios](https://github.com/axios/axios) - Promise based HTTP client for the browser and node.js
* [Node.js](https://nodejs.org/) - Node.js is a JavaScript runtime built on Chrome's V8 JavaScript engine.

### Clone Project

Clone the PakLoaders React Native project into the preferred folder on your computer filesystem
```sh
git clone https://github.com/umarrasheedmebest/PakLoadersDriver.git
```

### Installation
This tutorial requires [Homebrew](https://brew.sh/) to be installed on your Macbook 

Install the dependencies

```sh
$ brew install node
$ brew install watchman
$ yarn install
```

#### Note
You may experience permissions issues on your computer when using Homebrew for the first time.  If you are unable to 
install dependencies with Homebrew, try the following commands in order:
```
brew doctor
sudo chown -R $(whoami) $(brew --prefix)/*
sudo install -d -o $(whoami) -g admin /usr/local/Frameworks
```


#### iOS

Install [XCode](https://apps.apple.com/us/app/xcode/id497799835?mt=12) from the Mac Store

Install Cocoapods
```sh
$ sudo gem install cocoapods
```

Install Pod Dependencies
```
$ cd ios/ 
$ pod install
$ cd ..
$ npx react-native run-ios
```

#### Android

Install [Android Studio](https://developer.android.com/studio/index.html)

npx react-native run-android
```

Refer to [React Native Docs](https://facebook.github.io/react-native/docs/getting-started) if any issues arise or if additional help is required reach out to a tech leader 
# Upgrade_PakLoaders
