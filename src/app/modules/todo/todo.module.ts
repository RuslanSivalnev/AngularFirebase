import {NgModule} from '@angular/core';

import {TodoRoutingModule} from './todo-routing.module';
import {TodoComponent} from './pages/todo.component';
import {ListComponent} from './pages/list/list.component';
import {CreateComponent} from './pages/create/create.component';
import {EditComponent} from './pages/edit/edit.component';
import {SharedModule} from '../../shared/shared.module';


@NgModule({
  declarations: [TodoComponent, ListComponent, CreateComponent, EditComponent],
  imports: [
    SharedModule,
    TodoRoutingModule
  ]
})
export class TodoModule {
}
