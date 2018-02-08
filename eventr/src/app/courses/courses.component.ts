import { Component, Input, Output, EventEmitter, Inject, ChangeDetectorRef } from '@angular/core';
import { CommonComponent } from '../common/common.component';
import { CourseModel } from './model/course.model';

@Component({
    selector : 'courses',
    templateUrl : './ui/courses.component.html',
    styleUrls : ['./ui/courses.component.css']
})

export class CoursesComponent extends CommonComponent {

    private title : String = "Courses";
    private name : String = "";
    @Input() courses : CourseModel;
    

    constructor (private cdr : ChangeDetectorRef) {
        super();
    }

    public set (property : String, value, sourceId) {

        var changes;
        switch (property) {
            case "courses":
                this.courses = value; 
            changes = [{
                property: property,
                value: value
            }];
            this.changed(changes, sourceId);
            break;
        }
        return changes;
    }

    private onFavouriteChange ($event, course) {

        console.log("courses", $event);
        if (this.helper.isNotNull(course.isFavourite)) {
            course.isFavourite = !course.isFavourite;
            this.set("courses", this.courses, this);
        }

    }

    onCourseSelect ($event, course) {
        console.log("clicked courses", course);
        this.clicked($event, course);
    } 

}