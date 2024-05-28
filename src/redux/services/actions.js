// actions.js
import { servicesActionTypes } from './action-types';

export const serviceTitle = (title) => ({
  type: servicesActionTypes.SERVICE,
  payload: title,
});
