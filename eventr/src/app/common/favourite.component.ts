import { Component, Input, Renderer, ElementRef, ChangeDetectorRef, Output } from '@angular/core';
import { CommonComponent } from '../common/common.component';

@Component({
    selector : 'favourite', 
    templateUrl : './ui/favourite.component.html',
    styleUrls : ['./ui/favourite.component.css']
})
export class FavouriteComponent extends CommonComponent {

    @Input() isFavourite : boolean = false;
    class : String;
    

    constructor (private el : ElementRef, private renderer : Renderer, private cdr : ChangeDetectorRef) {
        super();
       // this.set("isFavourite", params["isFavourite"], this);
    }

    public get (property : String){

        var result;
        switch (property) {
            case "isFavourite":
                result = this.isFavourite;
                break; 
        }
        return result;
    }
    
     
    public set (property : String, value, sourceId) {

        var changes;
        switch (property) {
            case "isFavourite":
                this.isFavourite = value;
            changes = [{
                property: property,
                value: value
            }];
            break;
        }
        return changes;
    }

    ngAfterViewInit() {
       this.setColour();
       this.cdr.detectChanges();
    }

    onClick ($event) {
        this.isFavourite = !this.isFavourite;
        this.setColour();
        this.changed({property : "isFavourite", value : this.isFavourite}, this);
    }

    setColour () {
        if (this.isFavourite) {
            this.class = "glyphicon glyphicon-star";
            this.renderer.setElementStyle(this.el.nativeElement, 'color', '#ffd83d');
        } else {
            this.class = "glyphicon glyphicon-star-empty";
            this.renderer.setElementStyle(this.el.nativeElement, 'color', '#989898'); 
        }

    }

    doClass() {
        alert("changing");
    }

}