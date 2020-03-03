import {NgModule} from '@angular/core';

import {UserRoutingModule} from './user-routing.module';
import {UserComponent} from './pages/user.component';
import {InfoComponent} from './pages/info/info.component';
import {SharedModule} from '../../shared/shared.module';
import { TodoComponent } from './pages/todo/todo.component';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { TodoCreateComponent } from './components/todo-create/todo-create.component';


@NgModule({
  declarations: [
    UserComponent,
    InfoComponent,
    TodoComponent,
    TodoListComponent,
    TodoCreateComponent
  ],
  imports: [
    SharedModule,
    UserRoutingModule
  ]
})
export class UserModule {
}
