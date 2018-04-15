import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { Actions, Effect } from '@ngrx/effects';
import { Observable } from 'rxjs/Observable';
import { filter, map, mergeMap } from 'rxjs/operators';
import { AppActions } from './app.actions';
import { OrderService } from '../order.service';

@Injectable()
export class AppEffects {
  @Effect()
  confirmOrder$: Observable<Action> = this.actions$.pipe(
    filter(AppActions.is.ConfirmOrder),
    mergeMap(action =>
      this.orderService.post().pipe(
        map(success => success ? AppActions.OrderSuccess({}) : AppActions.OrderFailed({}))
      )
    )
  );

  constructor(private actions$: Actions, private orderService: OrderService) {}
}
