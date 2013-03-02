# AngularJS Course

## Goals of the course

  * Participant should be able to work in an AngularJS project.
  * Participant should be able to understand where to look in the code to solve a problem.
  * Participant should not necessarily be able to start and lead an AngularJS project.
  * Participant should not necessarily know everything about how to best structure an application.

### Specifically...

  * Don't try to teach too many details.
  * Don't make the examples/labs over-architectured.
  * Emphazise differences between the jQuery way and the AngularJS way.

## Prerequisites

  * Install git
  * Install NodeJS v0.8, recommended to [install via nvm](https://github.com/creationix/nvm/tree/master#readme):
    1. `curl https://raw.github.com/creationix/nvm/master/install.sh | sh`
    1. `nvm install 0.8`
    1. `nvm alias default 0.8`
    1. Test installation with `node --version`
  * Install [Testacular](http://testacular.github.com/) for running tests in the exercises
    1. `npm install -g testacular`

## Overview

  * What AngularJS is
    * JS library
        * `<script src="angular.js"></script>`
        * Will look for `ng-app` and take over that part of the DOM: e.g. `<html ng-app>` or `<div ng-app>`
    * Highly opinionated in certain areas
      * Within an AngularJS app, do things the Angular way.
      * Still possible to use AnguarJS for part of an app.
    * Extends HTML to be suitable for single page webapps
  * What the Angular way is
    * Declare in HTML when things should be displayed
    * Declare in HTML to what data it should be connected (Data-binding)
    * Let Angular handle the DOM
      * (just declare how you need it connected to your models already!)
    * Plain object models
    * HTML / Controller / Service
      * HTML declares view
      * Controller connect data to HTML view
      * Extract code from Controller to Service, to keep it clean
      * Services are injectable into controllers, services
  * What the Angular way is NOT
    * Locate a DOM node, manipulate it
    * Fetch data via AJAX, update DOM

## Also

  * Before doing the tutorial:
    * Describe the tutorial, its purpose and that they will not do all of it.
    * Demo the web app they will create, quickly for context.
    * Show the list of which exercises to do.
  * Alternate slides with tutorial exercises, to keep the attention level up.
  * Show how unit testing, and end-to-end testing is done in Angular with Testacular.
  * Show how easy Yeoman is to use, and recommend it.

## Resources

  * [AngularJS Homepage](http://angularjs.org/)
  * [AngularJS Tutorial](http://docs.angularjs.org/tutorial/)
  * [AngularJS API Reference documentation](http://docs.angularjs.org/)
  * [Yeoman](http://yeoman.io/)

## How to get started with Yeoman and AngularJS

These instructions are valid for Ubuntu 12.10.

  1. Install prerequisites as specified above (git, nodejs, testacular).
  1. `sudo apt-get install aptitude`
  1. `sudo aptitude install ruby-compass`
  1. Follow instructions on front page of [yeoman.io](http://yeoman.io/) for setting up and running an AngularJS project.

### Optionally customize project configuration

  * Edit `testacular.conf`:
    * Change browser(s) to run end-2-end tests on, for example `browsers = ['Chrome'];` to `browsers = ['Firefox'];`
  * Edit `Gruntfile.js`:
    * Change `hostname: 'localhost'` to `hostname: '0.0.0.0'` if you want to access the local server from another computer.
