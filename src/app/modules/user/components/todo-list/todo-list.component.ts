import {ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ITodo} from '../../../../shared/interfaces/i-todo.interface';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TodoListComponent implements OnInit {
  @Input() todoList: ITodo[];
  @Output() emitDelete = new EventEmitter();
  @Output() emitUpdate = new EventEmitter();
  @Output() emitResolve = new EventEmitter();

  constructor() {
  }

  ngOnInit(): void {
  }

}
