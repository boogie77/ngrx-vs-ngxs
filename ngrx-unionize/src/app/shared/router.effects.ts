import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Effect, Actions } from '@ngrx/effects';
import { filter, map, tap } from 'rxjs/operators';
import { RouterActions } from './router.actions';


@Injectable()
export class RouterEffects {
  @Effect({ dispatch: false })
  navigate$ = this.actions$.pipe(
    filter(RouterActions.is.Navigate),
    map((action: any) => action.payload),
    tap(path => {
      console.log(path);
      this.router.navigate([path]);
    })
  );

  constructor(private actions$: Actions, private router: Router) {}
}
