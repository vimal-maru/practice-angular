import { Routes } from '@angular/router';
import { TodoListComponent } from './todo-list/todo-list.component';
import { DynamicStyleComponent } from './dynamic-style/dynamic-style.component';
import { DirectivesComponent } from './directives/directives.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ProfileComponent } from './profile/profile.component';
import { RouteStudyComponent } from './route-study/route-study.component';
import { FormsComponent } from './forms/forms.component';
import { ReactiveFromsComponent } from './forms/reactive-froms/reactive-froms.component';
import { TemplateDrivenFormsComponent } from './forms/template-driven-forms/template-driven-forms.component';
import { PipesTestComponent } from './pipes-test/pipes-test.component';
import { LifeCycleComponent } from './life-cycle/life-cycle.component';
import { UserservicedemoComponent } from './userservicedemo/userservicedemo.component';
import { RestDemoComponent } from './rest-demo/rest-demo.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'todo-list', component: TodoListComponent },
  { path: 'dyanamic-style', component: DynamicStyleComponent },
  { path: 'directives', component: DirectivesComponent },
  {
    path: 'profile',
    component: ProfileComponent,
    data: { personName: 'jarvis' },
  },
  { path: 'profile/:id/:name', component: ProfileComponent },
  { path: 'routes', component: RouteStudyComponent },
  { path: 'forms', component: FormsComponent },
  { path: 'reactive-from', component: ReactiveFromsComponent },
  { path: 'template-from', component: TemplateDrivenFormsComponent },
  { path: 'pipes', component: PipesTestComponent },
  { path: 'life-cycle', component: LifeCycleComponent },
  { path: 'service-demo', component: UserservicedemoComponent },
  { path: 'rest-demo', component: RestDemoComponent },

  //keep this in last so it will no disturb other match
  { path: '**', component: PageNotFoundComponent },
];
