import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  /*templateUrl: './app.component.html'*/
  template: `<h1>{{title}}</h1>
  <h2>My Heroes</h2>
  <ul class="heroes">
    <li *ngFor="let hero of heroes">
      <span class="badge">{{hero.id}}</span> {{hero.name}}
    </li>
  </ul>
  <h2>{{hero.name}} details!</h2>
  <div><label>id: </label>{{hero.id}}</div>
  <div>
    <label>name: </label>
    <input [(ngModel)]="hero.name" placeholder="name">
  </div>`,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Tour of Heroes';
  hero: Hero = {
    id: 1,
    name: 'Windstorm'
  };
  public heroes = HEROES;
}

export class Hero {
  id: number;
  name: string;
}

const HEROES: Hero[] = [
  {id: 11, name: 'Mr. Nice'},
  {id: 12, name: 'Mr. Narco'},
  {id: 13, name: 'Mr. Bambasto'},
  {id: 14, name: 'Mr. Celeritas'},
  {id: 15, name: 'Mr. Magneta'},
  {id: 16, name: 'Mr. Rubberman'},
  {id: 17, name: 'Mr. Dynama'},
  {id: 18, name: 'Mr. Magma'},
  {id: 19, name: 'Mr. IQ'},
  {id: 20, name: 'Mr. Tornado'}
];
