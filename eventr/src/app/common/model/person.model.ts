import { CommonComponent } from '../../common/common.component';

export class PersonModel extends CommonComponent {

    suffix;
    firstName;
    lastName;
    gender;
    age;

    public get (property : String){

        var result;
        switch (property) {
            case "suffix":
                result = this.suffix;
                break;
            case "firstName":
                result = this.firstName;
                break;
            case "lastName":
                result = this.lastName;
                break;
            case "fullName":
                result = this.suffix + this.firstName + this.lastName;
                break;
            case "gender":
                result = this.gender;
                break;
            case "age":
                result = this.age;
                break;
            default:
                break;
        }
        return result;
    }

    public set (property : String, value, sourceId) {

        var changes;
        switch (property) {
            case "suffix":
                this.suffix = value;
                changes = [{
                    property: property,
                    value: value
                }];
                this.changed(changes, sourceId);
                break;
            case "firstName":
                this.firstName = value;
                changes = [{
                    property: property,
                    value: value
                }];
                this.changed(changes, sourceId);
                break;
            case "lastName":
                this.lastName = value;
                changes = [{
                    property: property,
                    value: value
                }];
                this.changed(changes, sourceId);
                break;
            case "gender":
                this.gender = value;
                changes = [{
                    property: property,
                    value: value
                }];
                this.changed(changes, sourceId);
                break;
            case "age":
                this.age = value;
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