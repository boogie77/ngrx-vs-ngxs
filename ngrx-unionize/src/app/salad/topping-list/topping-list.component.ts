import { Component, OnInit } from '@angular/core';
import { SaladActions } from '../salad.actions';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'topping-list',
  templateUrl: './topping-list.component.html',
  styleUrls: ['./topping-list.component.scss']
})
export class ToppingListComponent implements OnInit {

  choices = [
    'Olives',
    'Tomatoes',
    'Croutons',
    'Pickles',
    'Shrimp',
    'Pepitas',
    'Carrots'
  ];

  toppings$: Observable<string[]>;
  price$;

  constructor(private store: Store<any>) { }

  ngOnInit() {
    this.toppings$ = this.store.pipe(select(state => state.salad.toppings));
    this.price$ = this.store.pipe(select(state => state.price));
  }

  add(name) {
    this.store.dispatch(SaladActions.AddTopping(name));
  }


}
