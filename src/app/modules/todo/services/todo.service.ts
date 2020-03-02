import {AngularFireDatabase, AngularFireList, AngularFireObject} from '@angular/fire/database';
import {Injectable} from '@angular/core';
import {ITodo} from '../../../shared/interfaces/i-todo.interface';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})

export class TodoService {
  todosRef: AngularFireList<any>;
  todoRef: AngularFireObject<any>;

  constructor(
    private db: AngularFireDatabase,
    private router: Router
  ) {
  }

  /* Create todo */
  addTodo(todo: ITodo, userId) {
    this.todosRef = this.db.list(`/todo-list/${userId}`);
    this.todosRef.push({
      done: todo.done,
      title: todo.title,
      value: todo.value,
      createDate: todo.createDate
    })
      .then(() => {
        this.router.navigate(['user/to-do']);
      })
      .catch(error => {
        this.errorMgmt(error);
      });
  }

  /* Get todo */
  getTodo(userId: string) {
    this.todoRef = this.db.object(`/todo-list/${userId}`);
    return this.todoRef;
  }

  /* Get todo list */
  getTodoList(userId) {
    this.todosRef = this.db.list(`/todo-list/${userId}`);
    return this.todosRef;
  }

  /* Update todo */
  // updateTodo(id, todo: ITodo) {
  //   this.todoRef.update({
  //
  //   })
  //     .catch(error => {
  //       this.errorMgmt(error);
  //     });
  // }

  /* Delete todo */
  deleteTodo(userId: string) {
    this.todoRef = this.db.object(`/todo-list/${userId}`);
    this.todoRef.remove()
      .catch(error => {
        this.errorMgmt(error);
      });
  }

  private errorMgmt(error) {
    console.log(error);
  }
}
