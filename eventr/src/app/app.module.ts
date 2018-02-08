// Modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule, Http } from '@angular/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MaterialModule } from '@angular/material';
import 'hammerjs';

// Common Components
import { CommonComponent } from './common/common.component';
import { AppComponent } from './app.component';
import { FavouriteComponent } from './common/favourite.component';
//Common Models
import { AppModel } from './app.model';
import { AddressModel } from './common/model/address.model';
import { PersonModel } from './common/model/person.model';
// Common Datasource
import { DataSource } from './common/datasource/datasource';
import { TxManager } from './common/datasource/TxManager';
// Common Providers
import { Handler } from './common/handler/handler';
import { HelperService } from './common/service/helper.service';
// Common Directive
import { InputDirective } from './directives/input.directive'; 
// Application Components
import { CourseComponent } from './courses/course.component';
import { CoursesComponent } from './courses/courses.component';
import { AuthorsComponent } from './authors/authors.component';
// Application Models
import { CourseModel } from './courses/model/course.model';
import { AuthorModel } from './authors/model/author.model';
// Application Datasource
import { Portal } from './datasource/portal';
// Application Providers
import { CourseService } from './courses/service/course.service';
import { AuthorService } from './authors/service/author.service';
// Application Directives


@NgModule({
  declarations: [

    // Common Components
    AppComponent,
    FavouriteComponent,
    
    // Common Directives
    InputDirective,

    // Application Components
    CourseComponent,
    CoursesComponent,
    AuthorsComponent

    // Application Directives
    

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    NgbModule.forRoot(),
    MaterialModule
  ],
  providers: [
    Handler,
    DataSource,
    TxManager,
    CommonComponent,
    // Common Models
    AppModel,
    AddressModel,
    PersonModel,
    // Common Providers
    HelperService,
    // Application Datasource
    Portal,
    // Application Models
    AuthorModel,
    CourseModel,
    // Application Providers
    CourseService,
    AuthorService
    

   ],
  bootstrap: [AppComponent]
})
export class AppModule { }
