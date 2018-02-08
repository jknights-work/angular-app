import { DataSource } from '../common/datasource/datasource';
import { AuthorService } from '../authors/service/author.service';
import { CourseService } from '../courses/service/course.service';
import { HelperService } from '../common/service/helper.service';
import { Http } from '@angular/http';

const helper : HelperService = new HelperService();

export class Portal extends DataSource {

    connect () {}

    disconnect () {}

    startTx (type, data) {
        var self = this;
        var clientToken = this.generateUUID();
        var handler = this.getHandler("post", type);
        var returned = clientToken;

        // Send data // 
        this.txManager.add(clientToken, data);
        // Connection here //
        var msg = {
            "action" : "default",
            "entityType" : type,
            "txId" : clientToken, 
            "courses" : [
                {
                    "txId" : clientToken,
                    "id" : 1,
                    "title" : "Course 1",
                    "name" : "course1",
                    "description" : "Course 1 for dummies",
                    "isFavourite" : true
                },
                {
                    "id" : 2,
                    "title" : "Course 2",
                    "name" : "course2",
                    "description" : "Course 2 for experts",
                    "isFavourite" : false
                }
            ],
            "authors" : [
                {
                    "id" : 1,
                    "person" : {
                        "suffix" : "Mr",
                        "firstName" : "James",
                        "lastName" : "Knights",
                        "age" : 25,
                        "gender" : "M"
                    }, 
                    "address" : {
                        "buildingNo" : 1,
                        "street" : "Todd Crescent",
                        "city" : "Sittngbourne",
                        "county" : "Kent",
                        "country" : {
                            "name" : "United Kingdom",
                            "code" : "GBR"
                        },
                        "postalCode" : "ME10 2TZ"
                    },
                    "rating" : 5,
                    "course_ids" : [1]
                }
            ]
        };
        var txData = self.txManager.getDataByTxId(clientToken);
        this.newMessage(msg);
        
    }

    updateTx (txId, data) {
        console.log("updating data");
        data.set("title", "updated course title");
        var msg = data;
        msg["action"] = "change",
        msg["entityType"] = "COURSE";
        this.newMessage(msg)

    }

    cancelTx () {

    }

    processMessage (msg) {
        var handler = this.getHandler(msg["action"], msg["entityType"]);
        var txData = this.txManager.getDataByTxId(msg["txId"]);

        if (helper.isNotNull(handler)) {
            handler.handleEvent(txData, msg, msg["txId"]);
        }
        
    }

    registerEventHandlers () {
        this.registerEventHandler("change", "COURSE", CourseService);
        this.registerEventHandler("post", "COURSE", CourseService);
        this.registerEventHandler("default", "COURSE", CourseService);

        this.registerEventHandler("change", "AUTHOR", AuthorService);
        this.registerEventHandler("post", "AUTHOR", AuthorService);
        this.registerEventHandler("default", "AUTHOR", AuthorService);
    }

}