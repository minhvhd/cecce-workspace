import {Injectable, inject} from "@angular/core";
import {Store} from '@ngrx/store'
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {onLogin} from "./login.action";
import {of, switchMap} from "rxjs";

@Injectable()
export class LoginEffect {
  #store = inject(Store);
  #action = inject(Actions);

  onLogin$ = createEffect(() =>
    this.#action.pipe(
      ofType(onLogin),
      switchMap(({email, password}) => of(null))
    ), {dispatch: false}
  );
}
