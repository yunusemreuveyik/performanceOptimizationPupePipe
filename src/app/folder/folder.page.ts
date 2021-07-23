import { Component, HostListener, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TheoryService } from '../services/theory.service';
import { UsersService } from '../services/users.service';
import { GetUserTheoryPipe } from '../get-user-theory.pipe';

@Component({
  selector: 'app-folder',
  templateUrl: './folder.page.html',
  styleUrls: ['./folder.page.scss'],
})
export class FolderPage implements OnInit {
  public folder: string;

  @HostListener('click')
  clicked() {
    console.log('clicked');
  }

  constructor(private activatedRoute: ActivatedRoute,
    private userService: UsersService,
    private theoryService: TheoryService) { }

  ngOnInit() {
    this.folder = this.activatedRoute.snapshot.paramMap.get('id');
  }
  getTheory(userID: number) {
    console.log('change detection: ', userID);

    return this.theoryService.getTheory(userID);
  }
}
