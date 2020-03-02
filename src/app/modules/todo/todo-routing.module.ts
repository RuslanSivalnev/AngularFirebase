import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {TodoComponent} from './pages/todo.component';
import {ListComponent} from './pages/list/list.component';
import {EditComponent} from './pages/edit/edit.component';
import {CreateComponent} from './pages/create/create.component';


const routes: Routes = [
  {
    path: '', component: TodoComponent, children: [
      {
        path: '', component: ListComponent
      },
      {
        path: 'edit/:id', component: EditComponent
      },
      {
        path: 'create', component: CreateComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TodoRoutingModule {
}
