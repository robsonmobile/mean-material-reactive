import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { FlexLayoutModule } from '@angular/flex-layout';
import {
  MdButtonModule,
  MdDialogModule,
  MdIconModule,
  MdInputModule,
  MdListModule,
  MdSidenavModule,
  MdToolbarModule
} from "@angular/material";

// components
import { ToolbarComponent } from "./toolbar/toolbar.component";
import { HerosListComponent } from './heros-list/heros-list.component';
import { HeroCreateDialogComponent } from './hero-create-dialog/hero-create-dialog.component';
import { LayoutComponent } from './layout/layout.component';
import { DeleteConfirmDialogComponent } from './delete-confirm-dialog/delete-confirm-dialog.component';

@NgModule({
  entryComponents: [
    HeroCreateDialogComponent,
    DeleteConfirmDialogComponent
  ],
  imports: [
    CommonModule,
    FlexLayoutModule,
    FormsModule,
    MdDialogModule,
    MdButtonModule,
    MdIconModule,
    MdInputModule,
    MdListModule,
    MdSidenavModule,
    MdToolbarModule,
    ReactiveFormsModule
  ],
  declarations: [
    HerosListComponent,
    ToolbarComponent,
    HeroCreateDialogComponent,
    LayoutComponent,
    DeleteConfirmDialogComponent
  ],
  exports: [
    HerosListComponent,
    ToolbarComponent,
    LayoutComponent
  ]
})
export class SharedModule { }
