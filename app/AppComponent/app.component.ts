import {Component} from 'angular2/core';
import {TodoInput} from './../todoInput/todo-input';

// let styles = require('./home.css');
//let template = require('./app/AppComponent/app.component.html');

interface Hero {
    id:number;
    name:string;
}

@Component({
    selector: 'main-app',
    directives: [TodoInput],
    templateUrl: './app/AppComponent/app.component.html'
    //styleUrls: ['../app.component.css']
})

export class AppComponent {
    heroes = HEROES;
    selectedHero:Hero;

    onSelect(hero:Hero) {
        this.selectedHero = hero;
    }

    public menuItems = [
        {caption: 'Главная222', link: ['#Home']},
        {caption: 'Контакты333', link: ['#Contact']},
        {caption: 'О нас', link: ['#About']}
    ];
}

var HEROES:Hero[] = [
    {'id': 12, 'name': 'Narco'},
    {'id': 13, 'name': 'Bombasto'},
    {'id': 11, 'name': 'Mr. Nice'},
    {'id': 14, 'name': 'Celeritas'},
    {'id': 15, 'name': 'Magneta'},
    {'id': 16, 'name': 'RubberMan'},
    {'id': 17, 'name': 'Dynama'},
    {'id': 18, 'name': 'Dr IQ'},
    {'id': 19, 'name': 'Magma'},
    {'id': 20, 'name': 'Tornado'}
];

