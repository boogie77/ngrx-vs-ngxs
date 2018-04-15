import { AppActions, AppActionsType } from './app.actions';

export enum OrderStatus { pending, confirmed, declined }

export interface AppState {
  username: string;
  orderId: number;
  status?: OrderStatus;
  salad?: any;
}

export const initialState = {
  username: '',
  orderId: Math.floor(Math.random() * 23000)
};

export function appReducer(state: AppState = initialState, action: AppActionsType) {
  return AppActions.match({

    SetUsername(username) {
      return { ...state, username };
    },

    ConfirmOrder() {
      return { ...state, status: OrderStatus.pending };
    },

    OrderSuccess() {
      return { ...state, status: OrderStatus.confirmed };
    },

    OrderFailed() {
      return { ...state, status: OrderStatus.declined };
    }

  }, () => state)(action);
}
