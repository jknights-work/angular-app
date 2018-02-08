import { Directive, ElementRef, Renderer } from '@angular/core';

@Directive({
    selector : '[inputDirective]',
    host : {
        '(click)' : 'onClick($event)',
        '(focus)' : 'onFocus($event)',
        '(blur)' : 'onBlur($event)'
    }
})
export class InputDirective {

    constructor (private el : ElementRef, private renderer : Renderer) {

    }

    onClick ($event) {
        
    }

    onFocus ($event) {
        this.renderer.setElementStyle(this.el.nativeElement, "width", "200px");
    }

    onBlur ($event) {
        this.renderer.setElementStyle(this.el.nativeElement, "width", "120px");
    }

}