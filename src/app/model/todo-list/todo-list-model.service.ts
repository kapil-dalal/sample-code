import { Injectable } from '@angular/core';
import { LIST } from './moke-data';
import { UserService } from '../../services/auth/user.service';
@Injectable()
export class TodoListModelService {
   private todoListData: any = [];
   constructor(private userService: UserService) {

   }
   public getTodoList() {
      this.todoListData = [];
      for (let i = 0; i < LIST.length; i++) {
         let obj = LIST[i];
         if (obj.userId === this.userService.getId()) {
            this.todoListData.push(obj);
         }
      }
      return this.todoListData;
   }

   public addTodoList(task: string) {
      let id = 0;
      for (let i = 0; i < LIST.length; i++) {
         let obj = LIST[i];
         if (id < obj.id) {
            id = obj.id;
         }
      }
      id++;
      LIST.push({ id: id, task: task, userId: this.userService.getId() });
      return this.getTodoList();
   }

   public updateList(id: number, task: string) {
      for (let i = 0; i < LIST.length; i++) {
         let obj = LIST[i];
         if (obj.id === id) {
            obj.task = task;
         }
      }
      return this.getTodoList();
   }

   public deleteList(id: number) {
      for (let i = 0; i < LIST.length; i++) {
         let obj = LIST[i];
         if (obj.id === id) {
            LIST.splice(i, 1);
            break;
         }
      }
      return this.getTodoList();
   }
}
