import { Component } from '@angular/core';

import { TodoListModelService } from '../../model/todo-list/todo-list-model.service';

@Component({
   selector: 'todo-list',
   templateUrl: 'app/pages/todo-list/todo-list.component.html'
})
export class TodoListComponent {
   taskDialog: boolean = false;
   list: any[] = [];
   taskData: string;
   taskId: number;
   constructor(private todoListModelService: TodoListModelService) {
      this.list = this.todoListModelService.getTodoList();
   }

   public addNewTaskDialog() {
      this.taskDialog = true;
      this.taskId = undefined;
      this.taskData = undefined;
   }

   public editTask(task: any) {
      this.taskDialog = true;
      this.taskData = task.task;
      this.taskId = task.id;
   }

   public saveEditTask() {
      this.taskDialog = false;
      this.list = this.todoListModelService.updateList(this.taskId, this.taskData);
   }

   public deleteTask(task: any) {
      this.taskDialog = false;
      this.taskId = task.id;
      this.list = this.todoListModelService.deleteList(this.taskId);
   }

   public cancelTask() {
      this.taskData = '';
      this.taskDialog = false;
   }

   public saveTask() {
      if (!this.taskData) {
         return;
      }
      if (this.taskId) {
         this.saveEditTask();
         return;
      }
      this.taskDialog = false;
      this.list = this.todoListModelService.addTodoList(this.taskData);
   }
}
