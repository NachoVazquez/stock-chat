import { createAction, props } from '@ngrx/store';

export const addNewMessage = createAction(
  '[ChatInput] Add New Message',
  props<{ message: string }>()
);
