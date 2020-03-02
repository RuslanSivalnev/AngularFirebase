import {Component, OnInit} from '@angular/core';
import {IUser} from '../../../../shared/interfaces/i-user.interface';
import {AuthService} from '../../../../core/services/auth.service';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.scss']
})
export class InfoComponent implements OnInit {
  user$: Observable<IUser | boolean> = this.authService.user.asObservable();

  constructor(private authService: AuthService) {
  }

  ngOnInit(): void {
  }


}
