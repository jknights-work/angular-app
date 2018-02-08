import { CourseModel } from '../model/course.model';
import { HelperService } from '../../common/service/helper.service';
import { Handler } from '../../common/handler/handler';

export class CourseService extends Handler {
    
    private helper : HelperService = new HelperService()
    
    constructor () {
        super();
    }

    
    default (txData, data, txId) {
        var result = [];
        var courses = data["courses"];
        for (var  i = 0, len = courses.length; i < len; i++) {
            var model = this.createCourse(courses[i]);
            //  TO DO - CREATE APP CONTENTS MODEL
            txData[i] = model;
            result.push(model);
        }
        return result;
    }

    public update (changes, sourceId) {

        console.log("heard update", changes);

    }

    private createCourse (data) {
        var result = new CourseModel();
        if (this.helper.isNotNull(data)) {
            result.set("txId", data["txId"], this);
            result.set("id", data["id"], this);
            result.set("title", data["title"], this);
            result.set("name", data["name"], this);
            result.set("description", data["description"], this);
            result.set("isFavourite", data["isFavourite"], this);
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
        console.log("Model Changed here!!!");
    }

}