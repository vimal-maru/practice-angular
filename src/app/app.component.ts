import { Component } from '@angular/core';
import { TodoListComponent } from './todo-list/todo-list.component';
import { DynamicStyleComponent } from './dynamic-style/dynamic-style.component';
import { DirectivesComponent } from './directives/directives.component';
import { RouterLink, RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./header/header.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
 

}
