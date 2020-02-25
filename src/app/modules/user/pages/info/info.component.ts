import {Component, OnInit} from '@angular/core';
import {User} from '../../../../shared/interfaces/user';
import {AuthService} from '../../../../core/services/auth.service';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.scss']
})
export class InfoComponent implements OnInit{
  user: User;

  constructor(private authService: AuthService) {
  }

  ngOnInit(): void {
    this.user = this.authService.getUser;
  }

}
