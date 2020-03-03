import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ITodo} from '../../../../shared/interfaces/i-todo.interface';

@Component({
  selector: 'app-todo-create',
  templateUrl: './todo-create.component.html',
  styleUrls: ['./todo-create.component.scss']
})
export class TodoCreateComponent implements OnInit {
  @Output() eventTodoData = new EventEmitter<ITodo>();

  todoForm: FormGroup;

  constructor(private fb: FormBuilder) {
  }

  ngOnInit(): void {
    this.initForm();
  }


  initForm() {
    this.todoForm = this.fb.group({
      value: [null, Validators.required],
      createDate: [Date.now()],
      done: [false]
    });
  }

  emitHandler(formValue: ITodo) {
    this.initForm();
    this.eventTodoData.emit(formValue);
  }


}
