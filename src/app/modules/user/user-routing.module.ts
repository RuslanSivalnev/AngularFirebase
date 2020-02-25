import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {AboutComponent} from './pages/about/about.component';
import {UserComponent} from './pages/user.component';
import {InfoComponent} from './pages/info/info.component';

const routes: Routes = [
  {
    path: '', component: UserComponent, children: [
      {
        path: '', redirectTo: 'about'
      },
      {
        path: 'about', component: AboutComponent
      },
      {
        path: 'info', component: InfoComponent
      }
    ]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule {
}
