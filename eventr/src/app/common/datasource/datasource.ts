import { TxManager } from './TxManager';
import { CommonComponent } from '../common.component';

export class DataSource extends CommonComponent {
    private _isConnected : boolean;
    private eventHandlers = [];
    txManager; 

    constructor () {
        super();
        this.txManager = new TxManager();
    }

    connect () {
        
    }

    disconnect () {

    }

    startTx (type, data) {

    }

    updateTx (type, data) {

    }

    cancelTx () {
        
    }

    newMessage (msg) {
      this.processMessage(msg);
    }

    processMessage (data) {

    }

    registerEventHandler (eventType, entityType, handler) {
        this.eventHandlers.push({
        eventType: eventType,
        entityType: entityType,
        handlerClass: handler
      });
    }

    getHandler (eventType, entityType) {
      
      var result = null;
      console.log("Looking for " + eventType  + "," + entityType);
      for (var i = 0; i < this.eventHandlers.length; i++) {
        console.log("in " + this.eventHandlers[i].eventType  + "," + this.eventHandlers[i].entityType);
        if (this.eventHandlers[i].eventType === eventType && this.eventHandlers[i].entityType === entityType) {
          var o = this.eventHandlers[i].handlerClass;
          result = new (this.eventHandlers[i].handlerClass)();
        }
      }
      
      console.log("Found " + result);

      return result;
    }

    isConnected () {
        return this._isConnected;
    }

    generateUUID() {
        var d = new Date().getTime();
        var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
            var r = (d + Math.random()*16)%16 | 0;
            d = Math.floor(d/16);
            return (c=='x' ? r : (r&0x3|0x8)).toString(16);
        });
        return uuid;
    }


}