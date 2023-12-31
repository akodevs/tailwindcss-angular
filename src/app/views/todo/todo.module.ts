import { PerfectScrollbarModule } from 'app/shared/components/perfect-scrollbar';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule as MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule as MatCheckboxModule } from '@angular/material/checkbox';
import { MatChipsModule as MatChipsModule } from '@angular/material/chips';
import { MatRippleModule, MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDialogModule as MatDialogModule } from '@angular/material/dialog';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule as MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule as MatInputModule } from '@angular/material/input';
import { MatMenuModule as MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTooltipModule as MatTooltipModule } from '@angular/material/tooltip';
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { TodoRoutingModule } from "./todo-routing.module";
import { TodoComponent } from "./todo/todo.component";
import { TodoListComponent } from "./todo-list/todo-list.component";
import { TodoDetailsComponent } from "./todo-details/todo-details.component";
import { DragDropModule } from '@angular/cdk/drag-drop';
import { TodoSearchPipe } from './todo-search.pipe';
import { TagDialogueComponent } from './tag-dialogue/tag-dialogue.component';

@NgModule({
  declarations: [TodoComponent, TodoListComponent, TodoDetailsComponent, TodoSearchPipe, TagDialogueComponent],
  imports: [
    CommonModule, 
    TodoRoutingModule,
    MatIconModule,
    MatCheckboxModule,
    MatMenuModule,
    MatButtonModule,
    MatDividerModule,
    DragDropModule,
    MatRippleModule,
    MatToolbarModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatInputModule,
    ReactiveFormsModule,
    MatTooltipModule,
    MatDialogModule,
    MatChipsModule,
    PerfectScrollbarModule
  ],
  // entryComponents: [TagDialogueComponent]
})
export class TodoModule {}
