import {Component} from 'angular2/core';

@Component({
    selector: 'main-app',
    template: `
    <div>
        <div>Пример2!</div>
        
        <input class="form-control" type="text" #phone placeholder="Ввод данных">
        <h4>{{strMessage}}</h4>
	    <button (click)="onClickMe(phone.value)">Нажми!</button>
	</div>
    `
})

export class AppComponent2 {
    strMessage = '...';

    onClickMe(value) {
        this.strMessage = 'Телефон - ' + value;
        console.log(value);
    }

}

