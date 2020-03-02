import {Component, OnDestroy, OnInit} from '@angular/core';
import {AuthService} from '../../../../core/services/auth.service';
import {IUser} from '../../../../shared/interfaces/i-user.interface';
import {TodoService} from '../../services/todo.service';
import {Observable} from 'rxjs';
import {ITodo} from '../../../../shared/interfaces/i-todo.interface';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit, OnDestroy {
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
    this.todoList$ = this.todoService.getTodoList(this.user.uid).valueChanges();
  }

  ngOnInit(): void {
  }

  addTodo() {
  }


  ngOnDestroy(): void {
    this.streamUser$.unsubscribe();
  }
}
