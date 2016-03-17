"use strict";
///<reference path="../node_modules/angular2/typings/browser.d.ts"/>
var browser_1 = require('angular2/platform/browser');
var app_component2_1 = require('./app.component2');
var core_1 = require('angular2/core');
core_1.enableProdMode();
browser_1.bootstrap(app_component2_1.AppComponent2)
    .then(function (success) { return console.log('Bootstrap (загрузка выполнена) successfully!'); })
    .catch(function (err) { return console.log(err); });
//# sourceMappingURL=boot.js.map