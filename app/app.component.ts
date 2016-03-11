import {Component} from 'angular2/core';
import {TodoInput} from './todo-input';

@Component({
    selector: 'main-app',
    directives: [TodoInput],
    template: '<h1>Привет! Это Component</h1> ' +
    '<todo-input>ToDO</todo-input>'
})
export class AppComponent {
    constructor() { }
}