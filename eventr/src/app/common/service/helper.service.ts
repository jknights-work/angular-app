export class HelperService {
    
    /** Checks whether params are either null or undefined */
    isNull (params) {
        var result = false;
        if (params === null || typeof params === 'undefined') {
            result = true;
        }
        return result;
    }
    /** Inverse of is Null */
    isNotNull (params) {
        return !this.isNull(params);
    }
    /**
     * Searches in array, returns boolean
     */
    arrayContains (array, str) {
        var result = null;
        if (array.length > 0 && str !== null) {
            result = array.indexOf(str);
        }
        return result !== -1;
    }
    isBlank (value) {
    // Returns true if 'value' is null or an empty string
      var result;
      if (this.isNull(value)) {
        result = true;
      } else {
        result = (value.trim().length === 0);
      }
      return result;
    }
     

}