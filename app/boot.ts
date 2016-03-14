///<reference path="../node_modules/angular2/typings/browser.d.ts"/>
import {bootstrap} from 'angular2/platform/browser';
import {AppComponent} from './app.component';

bootstrap(AppComponent)
    .then(success => console.log('Bootstrap (загрузка выполнена) successfully!'))
    .catch(err => console.log(err));