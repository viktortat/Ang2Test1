import {Component} from 'angular2/core';
import {TodoInput} from './todo-input';

interface Hero {
    id: number;
    name: string;
}

@Component({
    selector: 'main-app',
    directives: [TodoInput],
    templateUrl: 'app/tml/appComp.html',
    styleUrls: ['app/appComp.css']
})
export class AppComponent {
    heroes = HEROES;
    selectedHero: Hero;

    onSelect(hero: Hero) { this.selectedHero = hero; }

    public menuItems = [
        { caption: 'Главная', link: ['#Home'] },
        { caption: 'Контакты', link: ['#Contact'] },
        { caption: 'О нас', link: ['#About'] }
    ];
}

var HEROES: Hero[] = [
    { "id": 11, "name": "Mr. Nice" },
    { "id": 12, "name": "Narco" },
    { "id": 13, "name": "Bombasto" },
    { "id": 14, "name": "Celeritas" },
    { "id": 15, "name": "Magneta" },
    { "id": 16, "name": "RubberMan" },
    { "id": 17, "name": "Dynama" },
    { "id": 18, "name": "Dr IQ" },
    { "id": 19, "name": "Magma" },
    { "id": 20, "name": "Tornado" }
];

