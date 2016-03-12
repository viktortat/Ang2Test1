import {Component} from 'angular2/core';
import {TodoInput} from './todo-input';

@Component({
    selector: 'main-app',
    directives: [TodoInput],
    templateUrl: 'app/tml/appComp.html'
    //styleUrls: ['app/appComp.css']
})
export class AppComponent {
    public menuItems = [
        { caption: 'Главная', link: ['#Home'] },
        { caption: 'Контакты', link: ['#Contact'] },
        { caption: 'О нас', link: ['#About'] }
    ];
    constructor() {}
}