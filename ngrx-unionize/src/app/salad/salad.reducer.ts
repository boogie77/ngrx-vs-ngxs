import { SaladActions, SaladActionsType } from './salad.actions';
import { createFeatureSelector, createSelector } from '@ngrx/store';

export interface SaladState {
  dressing: string;
  price: number;
  toppings: string[];
}

const initialState: SaladState = {
  dressing: 'ranch',
  price: 9.99,
  toppings: []
};

export function saladReducer(state: SaladState = initialState, action: SaladActionsType) {
  return SaladActions.match({

    AddTopping(topping) {
      const toppings = [...state.toppings, action.payload];
      // console.log(toppings)
      return {
        ...state,
        toppings,
        price: state.price + 0.5
      };
    },

    StartOver() {
      return { ...initialState };
    }

  }, () => state)(action);
}

export const selectFeature = createFeatureSelector<any>('salad');
export const selectDressing = createSelector(selectFeature, (state: SaladState) => state.dressing);
