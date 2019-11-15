### Kreiranje Direktive [here](#kreiranje-direktive)



# RUTIRANJE

```
var myApp = angular.module('myApp', ['ngRoute']);

myApp.config(function ($routeProvider) {

    $routeProvider
        .when('/', { templateUrl: 'pages/main.html', controller: 'mainController'})
        .when('/second', { templateUrl: 'pages/second.html', controller: 'secondController'})
});
```


# KREIRANJE DIREKTIVE

```
myApp.directive('searchResult', function() {
    return {
        templateUrl: 'directives/searchresult.html',
        scope: {
            personName: '@',
            personAdress: '@'
        }
    }
});
```

# KREIRANJE SERVISA

```
weatherApp.service('weatherService', ['$resource', function($resource) {

    this.getWeather = (cityName, days) => {
        var weatherAPI = $resource("http://api.openweathermap.org/data/2.5/forecast?units=metric&APPID=b151ea0800d6facc676150985a669d65", 
        { callback: "JSON_CALLBACK" },
        { get: { method: "JSONP" }},);

        return weatherAPI.get({ q: cityName, cnt: days });
    }
}])
```

# UPOTREBA NG-CLASS

```
<a href="#/forecast/2" ng-class="{'bg-primary': days === '2'}">2</a>
```

# UPOTREBA NG_PATTERN

```
$scope.mobilePatern = /(^\d{3}-\d{3}-\d{3}$)/;
input type="text" class="form-control" ng-model="subscriber.mobilePhone" name="mobilePhone" ng-pattern="mobilePatern">
```

# POZIV FUNCKIJE IZ DIREKTIVE

```
ng-click="addAccident({date: item.dt})"
```