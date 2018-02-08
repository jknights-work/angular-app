import { Component, Input} from '@angular/core';
import { CommonComponent } from './common/common.component';
import { HelperService } from './common/service/helper.service';
import { Portal } from './datasource/portal';
import { CourseModel } from './courses/model/course.model';
import { AuthorModel } from './authors/model/author.model';

const COURSES : CourseModel[] = [];
const AUTHORS : AuthorModel[] = [];

@Component({
  selector: 'narratones',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent extends CommonComponent {

  public datasource = null;
  courses = COURSES;
  course : CourseModel; 

  authors = AUTHORS;
  author : AuthorModel;
 

  constructor () {
    super();
    this.initDataSource();
  }

  public set (property/*String*/, value/*Object*/, sourceId/*String*/) {
    switch (property) {
      default:
        break;
    }
  }

  private initDataSource () {
    
    this.datasource = new Portal();
    this.datasource.registerEventHandlers();
    this.datasource.startTx("COURSE", this.courses);
    this.datasource.startTx("AUTHOR", this.authors);
    

  }

  changed (changedValues/*Array*/, sourceId/*String*/) {

  }

  onChange (changedValues, sourceId) {

  }

  onCourseSelect (data) {
    console.log("changing course", data);
    if (this.helper.isNotNull(data["property"])) {
      this.course = data["property"];
      console.log("course changed", this.course);
    } else {
      console.log("No Course Found");
    }
    this.clicked(null, this.courses);
    var action = "action:delete";
    this.datasource.updateTx(this.course["txId"], this.course);
  }

    

}
