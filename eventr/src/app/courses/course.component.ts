import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonComponent } from '../common/common.component';
import { CourseModel } from './model/course.model';
import { CourseService } from './service/course.service';

@Component({
    selector : 'course',
    templateUrl : './ui/course.component.html',
    styleUrls : ['./ui/course.component.css']
})

export class CourseComponent extends CommonComponent {

    @Input() course : CourseModel;
    id : number = 0;
    title : String = "";
    name : String = "";
    description : String = "";
    @Input() isFavourite : boolean = false;

    constructor () {
        super();
    }

    public set (property : String, value, sourceId) {
        var changes;
        switch (property) {
            case "course":
                this.course = value;
                if (this.helper.isNotNull(value.get("id"))) {
                    this.id = value.get("id");
                } if (this.helper.isNotNull(value.get("title"))) {
                    this.title = value.get("title");
                } if (this.helper.isNotNull(value.get("name"))) {
                    this.name = value.get("name");
                } if (this.helper.isNotNull(value.get("isFavourite"))) {
                    this.isFavourite = value.get("isFavourite");
                }
            changes = [{
                property: property,
                value: value
            }];
            this.changed(changes, sourceId);
            //this.onUpdate(changes, sourceId);
            break;
        }
        return changes;
    }
 
    private onFavouriteChange ($event) {

        console.log("course", $event);

        if (this.helper.isNotNull(this.isFavourite)) {
            this.isFavourite = !this.isFavourite;
            this.course.set("isFavourite", this.isFavourite, this);
        }

    }

    onClicked () {
       alert("clicked!");
    }


}