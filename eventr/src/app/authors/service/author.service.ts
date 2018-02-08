import { AuthorModel } from '../model/author.model';
import { AddressModel } from '../../common/model/address.model';
import { PersonModel } from '../../common/model/person.model';
import { HelperService } from '../../common/service/helper.service';
import { Handler } from '../../common/handler/handler';

export class AuthorService extends Handler {
    
    private helper : HelperService = new HelperService()
    
    constructor () {
        super();
    }

    
    default (txData, data, txId) {
        var result = [];
        var authors = data["authors"];
        for (var  i = 0, len = authors.length; i < len; i++) {
            var model = this.createAuthor(authors[i]);
            //  TO DO - CREATE APP CONTENTS MODEL
            txData[i] = model;
            result.push(model);
        }
        return result;
    }

    public update (changes, sourceId) {

        console.log("heard update", changes);

    }

    private createAuthor (data) {
        var result = new AuthorModel();
        if (this.helper.isNotNull(data)) {
            result.set("id", data["id"], this);
            result.set("person", this.createPerson(data["person"]), this);
            result.set("address", this.createAddress(data["address"]), this);
            result.set("course_ids", data["course_ids"], this);
            result.set("rating", data["rating"], this);
        }
        return result;
    }

    private createAddress (data) {
        var result = new AddressModel();
        if (this.helper.isNotNull(data)) {
            result.set("company", data["id"], this);
            result.set("buildingNo", data["buildingNo"], this);
            result.set("city", data["city"], this);
            result.set("county", data["county"], this);
            result.set("country", data["postalCode"], this);
            result.set("postalCode", data["postalCode"], this);
        }
        return result;
    }

    private createPerson (data) {
        var result = new PersonModel();
        if (this.helper.isNotNull(data)) {
            result.set("suffix", data["suffix"], this);
            result.set("firstName", data["firstName"], this);
            result.set("lastName", data["firstName"], this);
            result.set("gender", data["gender"], this);
            result.set("age", data["age"], this);
        }
        return result;
    }

    private addTo (params, key, target) {
      if (typeof params[key] !== 'undefined' && params[key] !== null) {
        target.set(key, params[key], this);
      }
    }

    post (data) {
        console.log("posting data", data);
    }

    change () {
        console.debug("heard change");
    }

}