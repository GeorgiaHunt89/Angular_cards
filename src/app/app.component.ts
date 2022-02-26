import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
posts = [
  {
    title: 'Neat Tree',
    imageUrl: 'assets/tree.jpeg',
    username: 'nature',
    content: 'I saw this amazing tree today'
  },
  {
    title: 'Snowy Mountain',
    imageUrl: 'assets/mountain.jpeg',
    username: 'mountainlover',
    content: 'Here is my favourite mountain'
  },
  {
    title: 'Mountain Biking',
    imageUrl: 'assets/biking.jpeg',
    username: 'Biking111',
    content: 'Picture from some mountain biking last weekend'
  },
];

}
