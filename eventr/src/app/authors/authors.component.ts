import { Component, Input, Output } from '@angular/core';
import { AuthorService } from './service/author.service';

@Component({
    selector : 'authors',
    templateUrl : './ui/authors.component.html',
    styleUrls : ['./ui/authors.component.css'],
    providers : [AuthorService]
})

export class AuthorsComponent {

    title : String = "Authors";
    name : String = "authors";
    @Input() authors;

    constructor (private service : AuthorService) {
  
    }

    public set (property : String, value, sourceId) {

        var changes;
        switch (property) {
            case "title":
                this.title = value;
                changes = [{
                    property: property,
                    value: value
                }];
                break;
            case "authors":
                this.authors = value;
                changes = [{
                    property: property,
                    value: value
                }];
                break;
        }
        return changes;
    }

    onClick ($event) {
        
    }

}