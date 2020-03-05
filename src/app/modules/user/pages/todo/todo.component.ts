import {Component, OnDestroy, OnInit} from '@angular/core';
import {IUser} from '../../../../shared/interfaces/i-user.interface';
import {Observable} from 'rxjs';
import {ITodo} from '../../../../shared/interfaces/i-todo.interface';
import {AuthService} from '../../../../core/services/auth.service';
import {TodoService} from '../../services/todo.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit, OnDestroy {
  streamUser$;
  user: IUser | null;
  todoList$: Observable<ITodo[]>;

  constructor(
    private todoService: TodoService,
    public authService: AuthService
  ) {
    this.streamUser$ = authService.user.asObservable().subscribe(user => {
      this.user = user;
    });
    this.todoList$ = this.todoService.getTodoList(this.user.uid);
  }

  ngOnInit(): void {
  }


  createTodo(formValue: ITodo) {
    this.todoService.addTodo(formValue, this.user.uid);
  }

  ngOnDestroy(): void {
    this.streamUser$.unsubscribe();
  }

  deleteTodo(key): void {
    this.todoService.deleteTodo(this.user.uid, key);
  }

  updateTodo(todo: ITodo) {
    this.todoService.updateTodo(this.user.uid, todo);
  }

  resolveTodo(todo: ITodo) {
    todo.value.done = !todo.value.done;
    this.todoService.updateTodo(this.user.uid, todo);
  }
}
