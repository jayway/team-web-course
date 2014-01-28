# AngularJS Course

## Goals of the course

After this course...

  * ...participant should be able to work in an AngularJS project.
  * ...participant should be able to understand where to look in the code to solve a problem.
  * ...participant should not necessarily be able to start and lead an AngularJS project.
  * ...participant should not necessarily know everything about how to best structure an application.

## Sections

This course follows closely the structure of the official AngularJS Tutorial, and uses it specifically for labs.

<ol start="0">
  <li>Bootstrapping</li>
  <li>Static Template</li>
  <li>Angular Templates</li>
  <li>Filtering Repeaters</li>
  <li>Two-way Data Binding</li>
  <li>XHRs &amp; Dependency Injection</li>
  <li>Templating Links &amp; Images</li>
  <li>Routing &amp; Multiple Views</li>
  <li>More Templating</li>
  <li>Filters</li>
  <li>Event Handlers</li>
  <li>REST and Custom Services</li>
  <li>Applying Animations</li>
</ol>

In addition, differences between the jQuery way and _The Angular Way_ is empazised throughout.

## Tips for the instructor:

  * Don't try to teach too many details at once.
  * Don't make examples over-architectured.
  * Emphazise differences between the jQuery way and the AngularJS way, wherever applicable.

## Lab

### Prerequisites

  * Install git
  * Install NodeJS v0.10, recommended to [install via nvm](https://github.com/creationix/nvm/tree/master#readme):
    1. `curl https://raw.github.com/creationix/nvm/master/install.sh | sh`
    1. `nvm install 0.10`
    1. `nvm alias default 0.10`
    1. Test installation with `node --version`
  * Install [Karma](http://karma-runner.github.io/) for running tests in the exercises
    1. `npm install -g karma`

### Optionally install

  * Chrome plugin for visual debugging: [AngularJS Batarang](https://chrome.google.com/webstore/detail/angularjs-batarang/ighdmehidhipcmcojjgiloacoafjmpfk)
    _It will help you understand how stuff works!_

### Which steps to do

<ol start="0">
  <li>Demo: Bootstrapping</li>
  <li>Demo: Static Template</li>
  <li><strong>Do: Angular Templates</strong></li>
  <li><strong>Do: Filtering Repeaters</strong></li>
  <li>Demo: Two-way Data Binding</li>
  <li>(Optional: XHRs &amp; Dependency Injection)</li>
  <li>Demo: Templating Links &amp; Images</li>
  <li>Demo: Routing &amp; Multiple Views</li>
  <li><strong>Do: More Templating</strong></li>
  <li><strong>Do: Filters</strong></li>
  <li><strong>Do: Event Handlers</strong></li>
  <li>(Optional: REST and Custom Services)</li>
  <li>(Optional: Applying Animations)</li>
</ol>

### Go ahead --> [docs.angularjs.org/tutorial](http://docs.angularjs.org/tutorial/)

## Also

When you need to create an AngularJS project (for fun or profit), we recommend Yeoman.

### How to get started with Yeoman and AngularJS

These instructions are at least valid for a clean Ubuntu 12.10.

  1. Install prerequisites as specified above (git, nodejs, karma).
  1. `sudo apt-get install aptitude`
  1. `sudo aptitude install ruby-compass`
  1. Follow instructions on front page of [yeoman.io](http://yeoman.io/) for setting up and running an AngularJS project.

### Optionally customize project configuration

  * Edit `karma.conf`:
    * Change browser(s) to run end-2-end tests on, for example `browsers = ['Chrome'];` to `browsers = ['Firefox'];`
  * Edit `Gruntfile.js`:
    * Change `hostname: 'localhost'` to `hostname: '0.0.0.0'` if you want to access the local server from another computer.

## Resources

  * [AngularJS Homepage](http://angularjs.org/)
  * [AngularJS Tutorial](http://docs.angularjs.org/tutorial/) (our lab!)
  * [AngularJS API Reference documentation](http://docs.angularjs.org/)
  * [Yeoman](http://yeoman.io/)

