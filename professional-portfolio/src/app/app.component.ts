import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { slider} from './animation';
import {
  trigger,
  transition,
  style,
  query,
  animate,
} from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger('myAnimation', [
      transition('* => *', [
        query(
          ':enter',
          [style({ opacity: 0 })],
          { optional: true }
        ),
        query(
          ':leave',
           [style({ opacity: 1 }), animate('0.5s', style({ opacity: 0 }))],
          { optional: true }
        ),
        query(
          ':enter',
          [style({ opacity: 0 }), animate('0.5s', style({ opacity: 1 }))],
          { optional: true }
        )
      ])
    ])
  ]
})
export class AppComponent {
}
