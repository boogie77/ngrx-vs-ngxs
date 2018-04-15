import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { Store, select } from '@ngrx/store';
import * as fromApp from './shared/app.reducer';

import { RouterActions } from './shared/router.actions';
import { AppActions } from './shared/app.actions';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  state$: Observable<fromApp.AppState>;
  OrderStatus = fromApp.OrderStatus;

  constructor(private store: Store<fromApp.AppState>) {
    this.state$ = store.select(state => state);
  }

  clickHandler(username) {
    this.store.dispatch(AppActions.SetUsername(username));
    this.store.dispatch(RouterActions.Navigate('salad/order'));
  }

  confirm() {
    this.store.dispatch(AppActions.ConfirmOrder({}));
  }

}

