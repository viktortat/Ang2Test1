System.register(['angular2/platform/browser', 'angular2/core', "angular2/router", "./AppComponent/app.component", "./Core/hero.service"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var browser_1, core_1, router_1, app_component_1, hero_service_1;
    return {
        setters:[
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (app_component_1_1) {
                app_component_1 = app_component_1_1;
            },
            function (hero_service_1_1) {
                hero_service_1 = hero_service_1_1;
            }],
        execute: function() {
            core_1.enableProdMode();
            browser_1.bootstrap(app_component_1.AppComponent, [
                router_1.ROUTER_PROVIDERS,
                hero_service_1.HeroService,
                core_1.provide(router_1.APP_BASE_HREF, { useValue: '/' })
            ])
                .then(function (success) { return console.log('Bootstrap successfully (успешная загрузка) !'); })
                .catch(function (err) { return console.log(err); });
        }
    }
});
//# sourceMappingURL=boot.js.map