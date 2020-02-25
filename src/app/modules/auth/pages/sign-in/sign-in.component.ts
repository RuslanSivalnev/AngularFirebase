import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AuthService} from '../../../../core/services/auth.service';
import {MatIconRegistry} from '@angular/material/icon';
import {DomSanitizer} from '@angular/platform-browser';
import {Router} from '@angular/router';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {
  signInForm: FormGroup;
  hide = true;
  isLoggedIn$;

  constructor(
    public authService: AuthService,
    private fb: FormBuilder,
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer,
    private router: Router
  ) {
    this.isLoggedIn$ = this.authService.isLoginSubject.asObservable();
    this.matIconRegistry.addSvgIcon('googleSVG', this.domSanitizer.bypassSecurityTrustResourceUrl('./assets/google.svg'));
  }

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.signInForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(4)]]
    });
  }

  submitForm(signInForm) {
    this.authService.SignIn(signInForm.email, signInForm.password).then(() => {
      this.router.navigate(['user']);
    });
  }
}
