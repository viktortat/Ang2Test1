import {Component} from 'angular2/core';
import {TodoInput} from './todo-input';

@Component({
    selector: 'main-app',
    template: '<h1>Привет! Это Ваш первый Component!</h1>'
})
export class AppComponent {
    constructor() { }
}