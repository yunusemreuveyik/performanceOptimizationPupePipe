import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  readonly users = [
    { id:1, name: "emre"},
    { id:2, name: "yunus"},
  ]
  constructor() { }
}
