import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FolderPageRoutingModule } from './folder-routing.module';

import { FolderPage } from './folder.page';
import { GetUserTheoryPipe } from '../get-user-theory.pipe';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FolderPageRoutingModule,
    
  ],
  declarations: [FolderPage, GetUserTheoryPipe],
  exports:[GetUserTheoryPipe],
  providers:[]
})
export class FolderPageModule {}
