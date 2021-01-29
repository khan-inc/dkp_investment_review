import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { CounterComponent } from './counter/counter.component';
import { FetchDataComponent } from './fetch-data/fetch-data.component';
import { TodoComponent } from './todo/todo.component';
import { ApiAuthorizationModule } from 'src/api-authorization/api-authorization.module';
import { AuthorizeGuard } from 'src/api-authorization/authorize.guard';
import { AuthorizeInterceptor } from 'src/api-authorization/authorize.interceptor';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ModalModule } from 'ngx-bootstrap/modal';
import { AppTemplateComponent } from './template/template-container.controller';
import { AppTemplateActionComponent  } from './template-action/template-action.component';
import { AppTemplateViewComponent } from './template-view/template-view.component';
import { ChartsModule } from 'ng2-charts';
import { DocumentTemplateComponent } from './document-tempate/documentTemplate.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DocumentHistoryGridComponent } from './documentHistoryGrid/documentHistoryGrid.component';
import { AlertModule } from 'ngx-bootstrap';
// import { WidgetService } from './service/widget.service';
import { DocumentPreviewComponent } from './document-preview/document-preview.component';
import { DocumentTemplateListComponent } from './document-template-list/document-template-list.component';

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    CounterComponent,
    FetchDataComponent,
    TodoComponent,
    AppTemplateComponent,
    AppTemplateActionComponent,
    AppTemplateViewComponent,
    DocumentTemplateComponent,
    DashboardComponent,
    DocumentHistoryGridComponent,
    DocumentPreviewComponent,
    DocumentTemplateListComponent,
    DocumentHistoryGridComponent,
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    FontAwesomeModule,
    HttpClientModule,
    FormsModule,
    ApiAuthorizationModule,
    ChartsModule,
    RouterModule.forRoot([
      { path: '', component: DashboardComponent, pathMatch: 'full' },
      { path: 'Home', component: HomeComponent },
      { path: 'counter', component: CounterComponent },
      { path: 'fetch-data', component: FetchDataComponent },
      { path: 'todo', component: TodoComponent },
      { path: 'apptemplate', component: AppTemplateComponent },
      { path: 'documentPreview', component: DocumentPreviewComponent }
    ]),
    BrowserAnimationsModule,    
    ModalModule.forRoot(),
    AlertModule.forRoot()
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthorizeInterceptor, multi: true },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
