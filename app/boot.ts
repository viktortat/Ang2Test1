///<reference path="../node_modules/angular2/typings/browser.d.ts"/>
import {bootstrap} from 'angular2/platform/browser';
import {AppComponent2} from './app.component2';
import { enableProdMode } from 'angular2/core';
enableProdMode();

bootstrap(AppComponent2)
    .then(success => console.log('Bootstrap (загрузка выполнена) successfully!'))
    .catch(err => console.log(err));