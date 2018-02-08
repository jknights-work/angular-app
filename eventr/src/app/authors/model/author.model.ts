import { CommonComponent } from '../../common/common.component';

export class AuthorModel extends CommonComponent {
       
       id;
       person;
       address;
       course_ids;
       rating;
       
       public get (property : String){

        var result;
        switch (property) {
            case "id":
                result = this.id;
                break;
            case "person":
                result = this.person;
                break;
            case "address":
                result = this.address;
                break;
            case "course_ids":
                result = this.course_ids;
                break;
            case "rating":
                result = this.rating;
                break;
            default:
                break;
        }
        return result;
    }

    public set (property : String, value, sourceId) {

        var changes;
        switch (property) {
            case "id":
                this.id = value;
                changes = [{
                    property: property,
                    value: value
                }];
                this.changed(changes, sourceId);
                break;
            case "person":
                this.person = value;
                changes = [{
                    property: property,
                    value: value
                }];
                this.changed(changes, sourceId);
                break;
            case "address":
                this.address = value;
                changes = [{
                    property: property,
                    value: value
                }];
                this.changed(changes, sourceId);
                break;
            case "course_ids":
                this.course_ids = value;
                changes = [{
                    property: property,
                    value: value
                }];
                this.changed(changes, sourceId);
                break;
            case "rating":
                this.rating = value;
                changes = [{
                    property: property,
                    value: value
                }];
                this.changed(changes, sourceId);
                break;
        }
        return changes;
    }
}