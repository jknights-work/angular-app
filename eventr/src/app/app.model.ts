import { EventEmitter, Output } from '@angular/core';

export class AppModel {
  
  id;
  @Output() onChanges = new EventEmitter<any>(); 
  
  public get (property : String){

        var result;
        switch (property) {
            case "id":
                result = this.id;
                break;
        }
        return result;
    }

    public set (property : String, value, sourceId) {

        var changes;
        switch (property) {
            case "id":
                this.id = value;
                changes = [{
                    property: property,
                    value: value
                }];
                break;
        }
        return changes;
    }

  changed (changedValues/*Array*/, sourceId/*String*/) {
     this.onChange(changedValues, sourceId);
     this.onChanges.emit({changes : changedValues, sourceId : sourceId})
  }

  public onChange (changedValues, sourceId) {
    console.log("model", changedValues);
  }

}