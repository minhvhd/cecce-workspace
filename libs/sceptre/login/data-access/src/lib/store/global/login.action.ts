import {createAction, props} from "@ngrx/store";

export const onLogin = createAction('[Sceptre Login] On Login', props<{ email: string; password: string }>());

export const onForgotPassword = createAction('[Sceptre] On Forgot Password');
