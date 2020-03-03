import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {UserComponent} from './pages/user.component';
import {InfoComponent} from './pages/info/info.component';
import {TodoComponent} from './pages/todo/todo.component';

const routes: Routes = [
  {
    path: '', component: UserComponent, children: [
      {
        path: '', redirectTo: 'info'
      },
      {
        path: 'info', component: InfoComponent
      },
      {
        path: 'to-do', component: TodoComponent
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
