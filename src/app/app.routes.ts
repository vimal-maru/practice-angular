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
import { OverviewComponent } from './overview/overview.component';
import { OverviewComponentsComponent } from './overview-components/overview-components.component';
import { SignalsComponent } from './signals/signals.component';
import { PerformanceOptimizationComponent } from './performance-optimization/performance-optimization.component';
import { StatesComponent } from './states/states.component';
import { TestingComponent } from './testing/testing.component';
import { BuildDeployComponent } from './build-deploy/build-deploy.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { RestDemoProductComponent } from './rest-demo/rest-demo-product/rest-demo-product.component';
import { RestDemoUserComponent } from './rest-demo/rest-demo-user/rest-demo-user.component';
import { TemplateFormUserComponent } from './forms/template-driven-forms/template-form-user/template-form-user.component';
import { TemplateFormEmployeeComponent } from './forms/template-driven-forms/template-form-employee/template-form-employee.component';
import { TemplateFormPersonComponent } from './forms/template-driven-forms/template-form-person/template-form-person.component';
import { ReactiveFormUserComponent } from './forms/reactive-froms/reactive-form-user/reactive-form-user.component';
import { ReactiveFormEmployeeComponent } from './forms/reactive-froms/reactive-form-employee/reactive-form-employee.component';
import { ReactiveFormPersonComponent } from './forms/reactive-froms/reactive-form-person/reactive-form-person.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'overview', component: OverviewComponent },
  { path: 'components', component: OverviewComponentsComponent },
  { path: 'directives', component: DirectivesComponent },
  { path: 'data-binding', component: DataBindingComponent },
  { path: 'dyanamic-style', component: DynamicStyleComponent },
  { path: 'pipes', component: PipesTestComponent },
  { path: 'signals', component: SignalsComponent },
  { path: 'todo-list', component: TodoListComponent },

  { path: 'routes', component: RouteStudyComponent },
  {
    path: 'profile',
    component: ProfileComponent,
    data: { personName: 'jarvis' },
  },
  { path: 'profile/:id/:name', component: ProfileComponent },

  /** Forms routes */
  { path: 'forms', component: FormsComponent },

  { path: 'template-from', component: TemplateDrivenFormsComponent },
  { path: 'template-from-user', component: TemplateFormUserComponent },
  { path: 'template-from-employee', component: TemplateFormEmployeeComponent },
  { path: 'template-from-person', component: TemplateFormPersonComponent },

  { path: 'reactive-from', component: ReactiveFromsComponent },
  { path: 'reactive-from-user', component: ReactiveFormUserComponent },
  { path: 'reactive-from-employee', component: ReactiveFormEmployeeComponent },
  { path: 'reactive-from-person', component: ReactiveFormPersonComponent },

  { path: 'life-cycle', component: LifeCycleComponent },
  { path: 'service-demo', component: UserservicedemoComponent },

  { path: 'rest-demo', component: RestDemoComponent },
  { path: 'product', component: RestDemoProductComponent },
  { path: 'rest-user', component: RestDemoUserComponent },

  { path: 'performance', component: PerformanceOptimizationComponent },
  { path: 'states', component: StatesComponent },
  { path: 'testing', component: TestingComponent },
  { path: 'build', component: BuildDeployComponent },

  //keep this in last so it will no disturb other match
  { path: '**', component: PageNotFoundComponent },
];
