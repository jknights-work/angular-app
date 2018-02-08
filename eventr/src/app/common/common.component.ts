import { Component, EventEmitter, Output } from '@angular/core';
import { HelperService } from './service/helper.service';

export class CommonComponent {
  
  public helper : HelperService = new HelperService();
  @Output() _onChange = new EventEmitter<any>();
  @Output() _onClicked = new EventEmitter<any>();  

  constructor () {

  }

  public set (property/*String*/, value/*Object*/, sourceId/*String*/) {
    switch (property) {
      default:
        break;
    }
  }

  public setter (params, paramName, sourceId) {
    if(typeof params !== 'undefined' && params !== null) {
      if (typeof params[paramName] !== 'undefined' && [paramName] !== null) {
        this.set(paramName, params[paramName], sourceId);
      }
    }
  }

  clicked ($event, property) {
    this._onClicked.emit({property : property});
    this.onClick($event, property);   
    console.log("common comp", this._onClicked);
  }

  changed (changedValues/*Array*/, sourceId/*String*/) {
     this.onChange(changedValues, sourceId);
     this._onChange.emit({changes : changedValues, sourceId : sourceId});
     console.log("common comp changed", this._onClicked);
     
  }

  public onChange (changedValues, sourceId) {
    console.log("app", changedValues);
  }

  public onClick ($event, property) {
    console.log("click", property);
  }
    

}
