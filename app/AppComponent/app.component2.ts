import {Component} from 'angular2/core';
import {ROUTER_DIRECTIVES, RouteConfig} from "angular2/router";
import {DashboardComponent} from "../dashboard/dashboard.componen";
import {HeroService} from "../Core/hero.service";
import {HeroesComponent} from "../HeroesComponent/heroes.component";


@Component({
    selector: 'main-app',
    template: `
    <h4>{{title}}</h4>
    
    <div>
        <div>Пример2!</div>
        
        <input class="form-control" type="text" #phone placeholder="Ввод данных">
        <h4>{{strMessage}}</h4>
	    <button (click)="onClickMe(phone.value)">Нажми!</button>
	</div>
	<hr>
    <nav>
      <a [routerLink]="['Dashboard']">Dashboard</a>
      <a [routerLink]="['Heroes']">Heroes</a>
    </nav>
	
	 <router-outlet></router-outlet>
	 
    <hr>
    
    <div [ngClass]="['bold-text', 'green']">array of classes</div>
    <div [ngClass]="'italic-text blue'">string of classes</div>
    <div [ngClass]="{'small-text': true, 'red': true}">object of classes</div>
    <div [ngStyle]="{'color': color, 'font-size': size, 'font-weight': 'bold'}">style using ngStyle</div>
    <div [style.color]="'orange'">style using property syntax, this text is orange</div>
    
    <input [(ngModel)]="color" />
    <button (click)="size = size + 1">+</button>
    <button (click)="size = size - 1">-</button>
    
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

