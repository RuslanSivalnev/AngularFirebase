import {AngularFireDatabase, AngularFireList, AngularFireObject} from '@angular/fire/database';
import {Injectable} from '@angular/core';
import {ITodo} from '../../../shared/interfaces/i-todo.interface';
import {Router} from '@angular/router';
import {map} from 'rxjs/operators';
import {NotificationsService} from '../../../core/services/notifications.service';

@Injectable({
  providedIn: 'root'
})

export class TodoService {
  todosRef: AngularFireList<any>;
  todoRef: AngularFireObject<any>;

  constructor(
    private db: AngularFireDatabase,
    private router: Router,
    private notificationsService: NotificationsService
  ) {
  }

  /* Create todo */
  addTodo(todo, userId) {
    this.todosRef = this.db.list(`/todo-list/${userId}`);
    this.todosRef.push({
      done: todo.done,
      value: todo.value,
      createDate: todo.createDate
    })
      .then(_ => {
        this.notificationsService.success('cool man, to-do was added');
      })
      .catch(error => {
        this.notificationsService.error(error);
      });
  }

  /* Get todo */
  getTodo(userId: string) {
    this.todoRef = this.db.object(`/todo-list/${userId}`);
    return this.todoRef;
  }

  /* Get todo list */
  getTodoList(userId) {
    return this.db.list(`/todo-list/${userId}`).snapshotChanges().pipe(
      map(changes => changes.map(c => {
          return ({key: c.payload.key, value: c.payload.val()}) as ITodo;
        })
          .sort((a, b) => +b.value.createDate - +a.value.createDate)
      ));

  }

  /* Update todo */
  updateTodo(userId, todo: ITodo) {
    this.todosRef = this.db.list(`/todo-list/${userId}`);
    this.todosRef
      .update(todo.key, todo.value)
      .then(_ => this.notificationsService.error('man, to-do was corrected'))
      .catch(error => this.notificationsService.error(error));
  }

  /* Delete todo */
  deleteTodo(userId: string, key: string): void {
    this.db.list(`/todo-list/${userId}`)
      .remove(key)
      .then(_ => this.notificationsService.info('man, to-do was deleted'));
  }
}
