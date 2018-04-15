import { unionize, ofType } from 'unionize';

export const AppActions = unionize({
  SetUsername: ofType<string>(),
  ConfirmOrder: ofType(),
  OrderSuccess: ofType(),
  OrderFailed: ofType()
}, 'type', 'payload');

export type AppActionsType = typeof AppActions._Union;
