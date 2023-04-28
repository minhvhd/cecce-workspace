import {Injectable} from "@angular/core";
import {ComponentStore} from "@ngrx/component-store";
import {LoginState} from "./login.state";

@Injectable()
export class LoginStore extends ComponentStore<LoginState> {
  readonly email$ = this.select((state) => state.email);
  readonly password$ = this.select((state) => state.password);

  readonly updateEmail = this.updater<LoginState['email']>((state, email) => ({
    ...state,
    email
  }));

  readonly password = this.updater<LoginState['password']>((state, password) => ({
    ...state,
    password
  }));

  constructor() {
    super({
      email: '',
      password: ''
    });
  }
}
