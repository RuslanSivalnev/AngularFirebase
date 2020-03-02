import {Component} from '@angular/core';
import {AuthService} from './core/services/auth.service';
import {Observable} from 'rxjs';
import {IUser} from './shared/interfaces/i-user.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'AngularFirebase';

  user$: Observable<IUser | boolean> = this.authService.user.asObservable();

  constructor(public authService: AuthService) {
  }

  signOut() {
    this.authService.SignOut();
  }
}
