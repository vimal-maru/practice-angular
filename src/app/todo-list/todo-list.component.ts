import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-todo-list',
  imports: [FormsModule, FooterComponent],
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.css',
})
export class TodoListComponent {
  userName = signal('Jarvis');
  userEmail = signal('jarvis@gmail.com');
  userAge = signal(30);

  isUserShow = signal<boolean>(true);

  showUser() {
    this.isUserShow.set(true);
  }

  hideUser() {
    this.isUserShow.set(false);
  }

  updateUser() {
    this.userName.update(() => 'ironman');
    this.userEmail.update(() => 'ironman@gmail.com');
    this.userAge.update((age) => age + 30);
    // this.userAge.set(200);
  }

  //todo example
  task = '';
  taskList: { id: number; task: string }[] = [];

  addTask() {
    this.taskList.push({ id: this.taskList.length + 1, task: this.task });
    this.task = '';
  }

  deleteTask(taskId: number) {
    this.taskList = this.taskList.filter((item) => item.id != taskId);
  }
}
