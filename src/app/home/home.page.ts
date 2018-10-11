import { Component } from '@angular/core';
import { Todo } from '../modules/Todo';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  
  public todos: Array<Todo>;

  constructor (private _router: Router) {
    this.todos = [
      { nome: 'todo 1', texto: 'um elemento' },
      { nome: 'todo 2', texto: 'outro elemento' },
      { nome: 'todo 3', texto: 'mais um elemento' }
    ];
  }

  public add(): void {
    this._router.navigate(['/add']);
  }
}
