import {Component, OnDestroy, OnInit} from '@angular/core';
import {TodoService} from '../../services/todo.service';
import {AuthService} from '../../../../core/services/auth.service';
import {IUser} from '../../../../shared/interfaces/i-user.interface';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ITodo} from '../../../../shared/interfaces/i-todo.interface';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit, OnDestroy {
  $stream;
  user: IUser | null;
  createTodoForm: FormGroup;

  constructor(
    private todoService: TodoService,
    private authService: AuthService,
    private fb: FormBuilder
  ) {
    this.$stream = authService.user.subscribe(user => this.user = user);
  }

  ngOnInit(): void {
    this.intiForm();
  }

  intiForm() {
    this.createTodoForm = this.fb.group({
      title: [null, Validators.required],
      value: [null, Validators.required],
      createDate: [Date.now()],
      done: [false]

    });
  }


  createTodo(formValue: ITodo) {
    this.todoService.addTodo(formValue, this.user.uid);
  }

  ngOnDestroy(): void {
    this.$stream.unsubscribe();
  }

}
