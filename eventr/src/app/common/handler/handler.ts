export class Handler {
 handleEvent (txData, data, txId) {

      if (data["action"] != undefined) {
        var actions = data["action"].split(".");
        if (actions.length >= 1) {
          switch (actions[0]) {
            case "set":
              this.set(txData, data, txId);
              break;
            case "add":
              this.add(txData, data, txId);
              break;
            case "change":
              this.change(txData, data, txId);
              break;
            case "remove":
              this.remove(txData, data, txId);
              break;
            case "replace":
              this.replace(txData, data, txId);
              break;
            default:
              this.default(txData, data, txId);
              break;
          }
        } else {
          this.default(txData, data, txId);
        }
      } else {
        this.default(txData, data, txId);
      }

    }

    change  (txData, data, txId) {
      console.debug(".change: not implemented yet")
    }

    set  (txData, data, txId) {
      console.debug(".set: not implemented yet")
    }

    default  (txData, data, txId) {
      console.debug(".set: not implemented yet")
    }

    replace  (txData, data, txId) {
      console.debug(".set: not implemented yet")
    }

    remove  (txData, data, txId) {
      console.debug(".set: not implemented yet")
    }

    add  (txData, data, txId) {
      console.debug(".set: not implemented yet")
    }
}