import { CommonComponent } from '../../common/common.component';

export class CourseModel extends CommonComponent {
    
    txId; 
    id;
    title;
    name;
    description;
    isFavourite;

    public get (property : String){

        var result;
        switch (property) {
            case "id":
                result = this.id;
                break;
            case "title":
                result = this.title;
                break;
            case "name":
                result = this.name;
                break;
            case "description":
                result = this.description;
                break;
            case "isFavourite":
                result = this.isFavourite;
                break;
            default:
                break;
        }
        return result;
    }

    public set (property : String, value, sourceId) {

        var changes;
        switch (property) {
            case "txId":
                this.txId = value;
                changes = [{
                    property: property,
                    value: value
                }];
                this.changed(changes, sourceId);
                break;
            case "id":
                this.id = value;
                changes = [{
                    property: property,
                    value: value
                }];
                this.changed(changes, sourceId);
                break;
            case "title":
                this.title = value;
                changes = [{
                    property: property,
                    value: value
                }];
                this.changed(changes, sourceId);
                break;
            case "name":
                this.name = value;
                changes = [{
                    property: property,
                    value: value
                }];
                this.changed(changes, sourceId);
                break;
            case "description":
                this.description = value;
                changes = [{
                    property: property,
                    value: value
                }];
                this.changed(changes, sourceId);
                break;
            case "isFavourite":
                this.isFavourite = value;
                changes = [{
                    property: property,
                    value: value
                }];
                this.changed(changes, sourceId);
                break;
        }
        return changes;
    }

    public update (changes) {
        console.log("heard update", changes);
    }


}