import { unionize, ofType } from 'unionize';

export const RouterActions = unionize({
  Navigate: ofType<string>()
}, 'type', 'payload');

export type RouterActionsType = typeof RouterActions._Union;
