;(function(undefined) {
    angular.module('Postman', [])

    .run(['$compile', '$rootScope', '$rootElement', function($compile, $rootScope, $rootElement) {
        var elem = angular.element('<postman-parcels parcels="postmanParcels"></postman-parcels>');
        var $elem = $compile(elem)($rootScope);

        // append to $rootElement (ng-app element) unless it's <html>, then append to <body>
        if($rootElement[0].tagName !== 'HTML') $rootElement.append($elem);
        else angular.element(document.body).append($elem);
    }])

    .directive('postmanParcels', ['$timeout', function ($timeout) {
        return {
            restrict: 'EA',
            template: '' +
                '<div class="postman-parcels">' +
                    '<div class="postman-parcel" ng-class="parcel.type" ng-repeat="parcel in parcels | orderBy:\'-id\' track by parcel.id" ng-click="dismiss(parcel)" ng-mouseenter="stopTimer(parcel)" ng-mouseleave="startTimer(parcel)">' + 
                        '<div class="postman-title">{{parcel.title}}</div>' +
                        '<div class="postman-body">' +
                            '<div ng-repeat="line in parcel.body">{{line}}</div>' +
                        '</div>' +
                    '</div>' + 
                '</div>',
            replace: true,
            scope: { parcels: '=' },
            link: function (scope, elem, attrs) {
                // helper function to get by ID
                var getParcelIndexById = function(id) {
                    var index = -1;
                    angular.forEach(scope.parcels, function(m, i) {
                        if(m.id == id) { 
                            index = i;
                            return false;
                        }
                    });
                    return index;
                };

                // don't trigger resolve if it expires organically
                // (i.e. pass in false for doAction)
                scope.dismiss = function(parcel, doAction) {
                    var i = getParcelIndexById(parcel.id);
                    if(doAction !== false) parcel.deferred.resolve();
                    $timeout.cancel(parcel.timeout);
                    if(i >= 0) scope.parcels.splice(i, 1);
                };

                // on mouseenter, stop dismiss timer
                scope.stopTimer = function(parcel) {
                    $timeout.cancel(parcel.timeout);
                };

                // on mouseleave, restart dismiss timer
                scope.startTimer = function(parcel) {
                    parcel.timeout = $timeout(function() {
                        scope.dismiss(parcel, false);
                    }, 6000);
                };

                // start timer on new item added
                scope.$watch('parcels', function(parcels) {
                    if(!parcels || parcels.length < 1) return;

                    var parcel = scope.parcels[parcels.length - 1];

                    if(!parcel.timeout) {
                        scope.startTimer(parcel);
                    }
                }, true);
            }
        };
    }])

    .factory('postman', ['$timeout', '$rootScope', '$q', function ($timeout, $rootScope, $q) {
        var counter = 0;
        $rootScope.postmanParcels = [];

        var deliver = function(title, body, type) {
            var deferred = $q.defer();
            var id = ++counter;

            if (!angular.isArray(body)) body = [body];

            $rootScope.postmanParcels.push({
                type: type,
                body: body,
                title: title,
                deferred: deferred,
                id: id
            });

            return deferred.promise;
        };

        return {
            error: function(title, body) {
                return deliver(title, body, 'error');
            },
            success: function(title, body) {
                return deliver(title, body, 'success');
            },
            info: function(title, body) {
                return deliver(title, body, 'info');
            },
            warn: function(title, body) {
                return deliver(title, body, 'warn');
            }
        };
    }]);
})();