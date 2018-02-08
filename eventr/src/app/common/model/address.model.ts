import { CommonComponent } from '../../common/common.component';

export class AddressModel extends CommonComponent { 

    company;
    buildingNo;
    street;
    city;
    county;
    country;
    postalCode;

     public get (property : String){

        var result;
        switch (property) {
            case "company":
                result = this.company;
                break;
            case "buildingNo":
                result = this.buildingNo;
                break;
            case "street":
                result = this.street;
                break;
            case "city":
                result = this.city;
                break;
            case "county":
                result = this.county;
                break;
            case "country":
                result = this.country
                break;
            case "postalCode":
                result = this.postalCode;
                break;
            default:
                break;
        }
        return result;
    }

    public set (property : String, value, sourceId) {

        var changes;
        switch (property) {
            case "company":
                this.company = value;
                changes = [{
                    property: property,
                    value: value
                }];
                this.changed(changes, sourceId);
                break;
            case "buildingNo":
                this.buildingNo = value;
                changes = [{
                    property: property,
                    value: value
                }];
                this.changed(changes, sourceId);
                break;
            case "street":
                this.street = value;
                changes = [{
                    property: property,
                    value: value
                }];
                this.changed(changes, sourceId);
                break;
            case "city":
                this.city = value;
                changes = [{
                    property: property,
                    value: value
                }];
                this.changed(changes, sourceId);
                break;
            case "county":
                this.county = value;
                changes = [{
                    property: property,
                    value: value
                }];
                this.changed(changes, sourceId);
                break;
            case "country":
                this.country = value;
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