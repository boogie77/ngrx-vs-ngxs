import { unionize, ofType } from 'unionize';

export const SaladActions = unionize({
  AddTopping: ofType<any>(),
  StartOver: ofType()
}, 'type', 'payload');

export type SaladActionsType = typeof SaladActions._Union;
