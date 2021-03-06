System.register(['angular2/core', "angular2/router", "../dashboard/dashboard.componen", "../Core/hero.service", "../HeroesComponent/heroes.component"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, router_1, dashboard_componen_1, hero_service_1, heroes_component_1;
    var AppComponent2;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (dashboard_componen_1_1) {
                dashboard_componen_1 = dashboard_componen_1_1;
            },
            function (hero_service_1_1) {
                hero_service_1 = hero_service_1_1;
            },
            function (heroes_component_1_1) {
                heroes_component_1 = heroes_component_1_1;
            }],
        execute: function() {
            AppComponent2 = (function () {
                function AppComponent2() {
                    this.strMessage = '...';
                    this.title = 'Tour of Heroes';
                }
                AppComponent2.prototype.onClickMe = function (value) {
                    this.strMessage = 'Телефон - ' + value;
                    console.log(value);
                };
                AppComponent2 = __decorate([
                    core_1.Component({
                        selector: 'main-app',
                        template: "\n    <h4>{{title}}</h4>\n    \n    <div>\n        <div>\u041F\u0440\u0438\u043C\u0435\u04402!</div>\n        \n        <input class=\"form-control\" type=\"text\" #phone placeholder=\"\u0412\u0432\u043E\u0434 \u0434\u0430\u043D\u043D\u044B\u0445\">\n        <h4>{{strMessage}}</h4>\n\t    <button (click)=\"onClickMe(phone.value)\">\u041D\u0430\u0436\u043C\u0438!</button>\n\t</div>\n\t<hr>\n    <nav>\n      <a [routerLink]=\"['Dashboard']\">Dashboard</a>\n      <a [routerLink]=\"['Heroes']\">Heroes</a>\n    </nav>\n\t\n\t <router-outlet></router-outlet>\n\t \n    <hr>\n    \n    <div [ngClass]=\"['bold-text', 'green']\">array of classes</div>\n    <div [ngClass]=\"'italic-text blue'\">string of classes</div>\n    <div [ngClass]=\"{'small-text': true, 'red': true}\">object of classes</div>\n    <div [ngStyle]=\"{'color': color, 'font-size': size, 'font-weight': 'bold'}\">style using ngStyle</div>\n    <div [style.color]=\"'orange'\">style using property syntax, this text is orange</div>\n    \n    <input [(ngModel)]=\"color\" />\n    <button (click)=\"size = size + 1\">+</button>\n    <button (click)=\"size = size - 1\">-</button>\n    \n    ",
                        directives: [router_1.ROUTER_DIRECTIVES],
                        providers: [hero_service_1.HeroService]
                    }),
                    router_1.RouteConfig([
                        { path: '/', redirectTo: ['Dashboard'] },
                        { path: '/dashboard', name: 'Dashboard', component: dashboard_componen_1.DashboardComponent, useAsDefault: true },
                        { path: '/heroes', name: 'Heroes', component: heroes_component_1.HeroesComponent },
                        { path: '/heroes/:id', name: 'CrisisDetail', component: heroes_component_1.HeroesComponent }
                    ]), 
                    __metadata('design:paramtypes', [])
                ], AppComponent2);
                return AppComponent2;
            }());
            exports_1("AppComponent2", AppComponent2);
        }
    }
});
//# sourceMappingURL=app.component2.js.map