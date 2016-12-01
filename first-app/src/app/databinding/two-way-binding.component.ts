import { Component } from '@angular/core';

@Component({
  selector: 'app-two-way-binding',
  template: `
    <input type="text" [(ngModel)]="person.name">
    <input type="text" [(ngModel)]="person.namecd">
  `,
  styles: []
})
export class TwoWayBindingComponent {
  person = {
    name: 'Gus',
    age: 26
  };

}
