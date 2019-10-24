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
import {CheckboxModule, InputMaskModule, MessageModule, MessageService, SplitButtonModule, ToolbarModule} from 'primeng/primeng';
import { ContribsFormComponent } from './components/contribs/contribs-form/contribs-form.component';
import { PageHeaderComponent } from './components/shared/page-header/page-header.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import {AuthService} from './services/auth.service';
import { StartComponent } from './components/start/start.component';
import {ToastModule} from 'primeng/toast';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    HomeComponent,
    MenuComponent,
    ContribsListComponent,
    ContribsFormComponent,
    PageHeaderComponent,
    StartComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    PanelMenuModule,
    TableModule,
    MenubarModule,
    ToolbarModule,
    SplitButtonModule,
    InputMaskModule,
    MessageModule,
    CheckboxModule,
    ToastModule
  ],
  providers: [ContribuyenteService, AuthService, MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
