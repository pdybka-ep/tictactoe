Angular Postman
===============

> Neither snow nor rain nor heat nor gloom of night stays these couriers from the swift completion of their appointed rounds.

## Installation

You can simply download and extract the package downloaded from GitHub. Alternatively, you can download the files via [Bower](http://bower.io/) (a JavaScript package management system):

```
bower install angular-postman
```

which will also automatically install Postman and AngularJS if needed.

Once you have the files downloaded, link to the files in your code *after* you include the main Angular files (`ngAnimate` highly recommended for sexy Postman animations):

```html
<!-- script order matters! -->
<script src="/path/to/angular.min.js"></script>
<script src="/path/to/angular-animate.min.js"></script>
<script src="/path/to/postman.min.js"></script>
<link rel="stylesheet" href="/path/to/postman.css">
```

## Usage

At its core, Postman is a service that allows you to send what we call `parcel`s, which pops up in the upper right corner* of your screen.

Just include `Postman` into your project and inject the `postman` service into your controller and use one of the 4 methods to create a `parcel`:

<small>*If the screen width is below 540px, it will use the mobile styles, which has the `parcel` appear at the bottom.</small>

```js
angular.module('DemoApp', ['Postman', 'ngAnimate'])

.controller('mainCtrl', ['$scope', 'postman', function ($scope, postman) {
    $scope.warn = function() { postman.warn('WARNING!', 'An optional message...'); };
    $scope.error = function() { postman.error('ERROR!', 'An optional message...'); };
    $scope.success = function() { postman.success('SUCCESS!'); };
    $scope.info = function() { postman.info('INFO!', 'An optional message... This message is quite a bit longer. It will never go more than 50% of the screen.'); };
}]);
```

`ngAnimate` is optional, but highly recommended for Postman animations.

## Options

```js
postman.warn|error|info|success(parcelTitle, parcelBody);
```

* **parcelTitle**: The title for the parcel.
* **parcelBody**: *(optional)* An optional message to add to the parcel that is in a smaller font than the title.

Each of these functions return a promise a la Angular's `$q`. If the `parcel` is clicked by the user, that promise will resolve.

## Demo

Very basic demo: [http://cwspear.github.io/angular-postman/](http://cwspear.github.io/angular-postman/). More advanced usage demo coming soon-ish.

## History

* **2013-09-30** Initial release.

## Roadmap

I want to add some more configuration options, such as some pre-defined animations, icons, placement, etc.

## Me

Follow me on Twitter: [@CWSpear](https://twitter.com/CWSpear) or check out my [blog](http://cameronspear.com/blog/).
