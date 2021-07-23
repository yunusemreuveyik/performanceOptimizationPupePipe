import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TheoryService {
theories = [
  {title: "Quantum theory", userID:1},
  {title: "Black Hole theory", userID:2},
]
  constructor() { }
  getTheory(userID: number){
    return this.theories.find((t) => t.userID == userID)
  }
}
