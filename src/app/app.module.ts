import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MenuComponent } from './components/shared/menu/menu.component';
import {PanelMenuModule} from 'primeng/panelmenu';
import {ContribuyenteService} from './services/contribuyente.service';
import { ContribsListComponent } from './components/contribs/contribs-list/contribs-list.component';
import {HttpClientModule} from '@angular/common/http';
import {TableModule} from 'primeng/table';
import {MenubarModule} from 'primeng/menubar';
import {SplitButtonModule, ToolbarModule} from 'primeng/primeng';
import { ContribsFormComponent } from './components/contribs/contribs-form/contribs-form.component';
import { PageHeaderComponent } from './components/shared/page-header/page-header.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    HomeComponent,
    MenuComponent,
    ContribsListComponent,
    ContribsFormComponent,
    PageHeaderComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    PanelMenuModule,
    TableModule,
    MenubarModule,
    ToolbarModule,
    SplitButtonModule
  ],
  providers: [ContribuyenteService],
  bootstrap: [AppComponent]
})
export class AppModule { }
