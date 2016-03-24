import {Component} from 'angular2/core';
import {ROUTER_DIRECTIVES, RouteConfig} from "angular2/router";
import {HeroService} from "./hero.service";
import {DashboardComponent} from "./dashboard.componen";
import {HeroesComponent} from "./heroes.component";

@Component({
    selector: 'main-app',
    template: `
    <h4>{{title}}</h4>
    
    <nav>
      <a [routerLink]="['Dashboard']">Dashboard</a>
      <a [routerLink]="['Heroes']">Heroes</a>
    </nav>
    <div>
        <div>Пример2!</div>
        
        <input class="form-control" type="text" #phone placeholder="Ввод данных">
        <h4>{{strMessage}}</h4>
	    <button (click)="onClickMe(phone.value)">Нажми!</button>
	</div>
	
	
    `
    , directives: [ROUTER_DIRECTIVES],
    providers: [HeroService]
})
@RouteConfig([
    {path: '/', redirectTo: ['Dashboard'] },
    {path: '/dashboard', name: 'Dashboard', component: DashboardComponent, useAsDefault: true},
    {path: '/heroes', name: 'Heroes', component: HeroesComponent},
    {path:'/heroes/:id', name: 'CrisisDetail', component: HeroesComponent}
])
export class AppComponent2 {
    strMessage = '...';
    public title = 'Tour of Heroes';

    onClickMe(value) {
        this.strMessage = 'Телефон - ' + value;
        console.log(value);
    }

}

