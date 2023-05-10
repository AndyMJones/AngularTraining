import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name = 'rick fakemen'
  imgURL = 'https://picsum.photos/id/1/500/500'
  images = [
    'https://picsum.photos/id/1/500/500',
    'https://picsum.photos/id/2/500/500',
    'https://picsum.photos/id/3/500/500'
  ]
  currentDate = new Date()
  cost = 2000
  temperature = 25.3
  pizza = {
    topping: [ 'pepperoni', 'cheese' ],
    size: 'Large'
  }
  blueClass = false
  fontSize = 16

  getName() {
    return this.name;
  }

  changeImage(event: KeyboardEvent) {
    const input = event.target as HTMLInputElement;
    this.imgURL = input.value;
  }

  logImage(event: string) {
    console.log(event);
  }
}