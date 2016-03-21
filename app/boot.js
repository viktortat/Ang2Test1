System.register(['angular2/platform/browser', './app.component2', 'angular2/core'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var browser_1, app_component2_1, core_1;
    return {
        setters:[
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (app_component2_1_1) {
                app_component2_1 = app_component2_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            core_1.enableProdMode();
            browser_1.bootstrap(app_component2_1.AppComponent2)
                .then(function (success) { return console.log('Bootstrap (загрузка выполнена) successfully!'); })
                .catch(function (err) { return console.log(err); });
        }
    }
});

//# sourceMappingURL=boot.js.map
