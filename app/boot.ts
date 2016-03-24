///<reference path="../node_modules/angular2/typings/browser.d.ts"/>
import {bootstrap} from 'angular2/platform/browser';
import {AppComponent2} from './app.component2';
import {enableProdMode, provide} from 'angular2/core';
import {APP_BASE_HREF, ROUTER_PROVIDERS} from "angular2/router";
import {HeroService} from "./hero.service";
enableProdMode();

bootstrap(AppComponent2, [
    ROUTER_PROVIDERS,
    HeroService,
    provide(APP_BASE_HREF, {useValue : '/' })
    //bind(APP_BASE_HREF).toValue(location.pathname)
])
    .then(success => console.log('Bootstrap successfully (успешная загрузка) !'))
    .catch(err => console.log(err));


