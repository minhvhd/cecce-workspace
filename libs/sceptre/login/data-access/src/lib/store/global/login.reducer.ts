import {createReducer, State, on} from "@ngrx/store";

export const loginReducerKey = 'loginReducerKey';

export interface LoginGlobalState {
  email: string;
  password: string;
}
const initState: LoginGlobalState = {
  email: '',
  password: ''
};

export const loginReducer = createReducer(
  initState,
);
