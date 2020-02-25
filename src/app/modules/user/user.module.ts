import {NgModule} from '@angular/core';

import {UserRoutingModule} from './user-routing.module';
import {AboutComponent} from './pages/about/about.component';
import {UserComponent} from './pages/user.component';
import {InfoComponent} from './pages/info/info.component';
import {SharedModule} from '../../shared/shared.module';


@NgModule({
  declarations: [
    UserComponent,
    AboutComponent,
    InfoComponent
  ],
  imports: [
    SharedModule,
    UserRoutingModule
  ]
})
export class UserModule {
}
