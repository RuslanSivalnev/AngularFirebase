import {Injectable, NgZone} from '@angular/core';
import {auth} from 'firebase/app';
import {AngularFireAuth} from '@angular/fire/auth';
import {AngularFirestore, AngularFirestoreDocument} from '@angular/fire/firestore';
import {Router} from '@angular/router';
import {IUser} from '../../shared/interfaces/i-user.interface';
import {BehaviorSubject} from 'rxjs';
import {NotificationsService} from './notifications.service';

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  userData: any;
  user = new BehaviorSubject<IUser | null>(this.getUser);

  constructor(
    public afs: AngularFirestore,
    public afAuth: AngularFireAuth,
    public router: Router,
    public ngZone: NgZone,
    private notificationsService: NotificationsService
  ) {
    this.afAuth.authState.subscribe(user => {
      if (user) {
        this.userData = user;
        localStorage.setItem('user', JSON.stringify(this.userData));
        JSON.parse(localStorage.getItem('user'));
      } else {
        localStorage.setItem('user', null);
        JSON.parse(localStorage.getItem('user'));
      }
    });

    this.afAuth.auth.onAuthStateChanged((user) => {
      if (user) {
        this.user.next(user);
      } else {
        this.user.next(null);
      }
    });
  }

  get getUser() {
    return JSON.parse(localStorage.getItem('user'));
  }

  // Sign in with email/password
  SignIn(email, password) {
    return this.afAuth.auth.signInWithEmailAndPassword(email, password)
      .then((result) => {
        this.SetUserData(result.user);
      })
      .then(() => {
        this.ngZone.run(() => {
          this.router.navigate(['user']);
        });
      })
      .catch((error) => {
        this.notificationsService.warn(error.message);
      });
  }

  // Sign up with email/password
  SignUp(email, password) {
    return this.afAuth.auth.createUserWithEmailAndPassword(email, password)
      .then((result) => {
        this.SetUserData(result.user);
      })
      .then(() => {
        this.router.navigate(['user']);
      })
      .catch((error) => {
        this.notificationsService.warn(error.message);
      });
  }

  // Sign in with Google
  GoogleAuth() {
    return this.AuthLogin(new auth.GoogleAuthProvider());
  }

  // Auth logic to run auth providers
  AuthLogin(provider) {
    return this.afAuth.auth.signInWithPopup(provider)
      .then((result) => {
        this.SetUserData(result.user);
      })
      .then(() => {
        this.ngZone.run(() => {
          this.router.navigate(['user']);
        });
      })
      .catch((error) => {
        // this.user.next(null);
        this.notificationsService.error(error.message);
      });
  }

  SetUserData(user) {
    const userRef: AngularFirestoreDocument<any> = this.afs.doc(`users/${user.uid}`);
    const userData: IUser = {
      uid: user.uid,
      email: user.email,
      displayName: user.displayName,
      photoURL: user.photoURL,
      emailVerified: user.emailVerified
    };
    return userRef.set(userData, {
      merge: true
    });
  }

  // Sign out
  SignOut() {
    this.afAuth.auth.signOut().then(() => {
      localStorage.removeItem('user');
      this.router.navigate(['auth']);
    });
  }
}
