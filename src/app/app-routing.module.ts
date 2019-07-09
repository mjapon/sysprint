import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './components/home/home.component';
import {LoginComponent} from './components/login/login.component';
import {ContribsListComponent} from './components/contribs/contribs-list/contribs-list.component';
import {ContribsFormComponent} from './components/contribs/contribs-form/contribs-form.component';

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'contribs', component: ContribsListComponent},
  {path: 'contribs/:cnt_id', component: ContribsFormComponent},
  {path: '**', component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
