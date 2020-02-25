import {Component} from '@angular/core';
import {AuthService} from './core/services/auth.service';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'AngularFirebase';

  isLogged$: Observable<boolean>;

  constructor(public authService: AuthService) {
    this.isLogged$ = this.authService.isLoginSubject.asObservable();

  }

  signOut() {
    this.authService.SignOut();
  }
}
