export class TxManager {
    private txIds = null;
    private data = null;

    constructor () {
        this.data = new Array();
        this.txIds = new Array();
    }

    add (txId, data) {
      console.info("adding " + txId + " using data " + data);
      this.txIds.push(txId);
      this.data.push(data);
    }

    getIndexByTxId (txId) {
      var result = -1;

      for(var idx =0; idx < this.txIds.length; idx++ ) {
        if(this.txIds[idx] === txId) {
          result = idx;
          idx = this.txIds.length;
        }
      }

      return result;
    }

    getDataByTxId (txId) {
      return this.data[this.getIndexByTxId(txId)];
    }
}