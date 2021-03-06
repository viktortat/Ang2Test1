System.register(['angular2/core', './todo-input'], function(exports_1, context_1) {
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
    var core_1, todo_input_1;
    var AppComponent, HEROES;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (todo_input_1_1) {
                todo_input_1 = todo_input_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent() {
                    this.heroes = HEROES;
                    this.menuItems = [
                        { caption: 'Главная222', link: ['#Home'] },
                        { caption: 'Контакты333', link: ['#Contact'] },
                        { caption: 'О нас', link: ['#About'] }
                    ];
                }
                AppComponent.prototype.onSelect = function (hero) {
                    this.selectedHero = hero;
                };
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'main-app',
                        directives: [todo_input_1.TodoInput],
                        templateUrl: '../../app/AppComponent/app.component.html',
                        styleUrls: ['../../app/AppComponent/app.component.css']
                    }), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
            HEROES = [
                { 'id': 12, 'name': 'Narco' },
                { 'id': 13, 'name': 'Bombasto' },
                { 'id': 11, 'name': 'Mr. Nice' },
                { 'id': 14, 'name': 'Celeritas' },
                { 'id': 15, 'name': 'Magneta' },
                { 'id': 16, 'name': 'RubberMan' },
                { 'id': 17, 'name': 'Dynama' },
                { 'id': 18, 'name': 'Dr IQ' },
                { 'id': 19, 'name': 'Magma' },
                { 'id': 20, 'name': 'Tornado' }
            ];
        }
    }
});
//# sourceMappingURL=app.component.js.map