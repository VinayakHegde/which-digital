/**
 * @method crteateRange - creates array of given range
 * @param {object} to - end range and from - start range
 * @returns {Array}
 */
const crteateRange = range => {
  const {to, from } = range || { };
  if(isNaN(to) || isNaN(from)){
    throw new TypeError('to and from should be intergers');
  }
  if(Number(to) < Number(from)){
    throw new RangeError('to should be more than or equal to from and atleast 1');
  } 
  if(Number(from) < 1) {
    throw new Error('from should be atleast 1');
  };
  
  // polyfill for Array.prototype.fill 
  if (!Array.prototype.fill) {
    Object.defineProperty(Array.prototype, 'fill', {
      value: function(value) {
        if (this == null) {
          throw new TypeError('this is null or not defined');
        }
  
        const O = Object(this);
        const len = O.length >>> 0;
  
        const start = arguments[1];
        const relativeStart = start >> 0;
  
        const k = relativeStart < 0 ?
          Math.max(len + relativeStart, 0) :
          Math.min(relativeStart, len);
  
        const end = arguments[2];
        const relativeEnd = end === undefined ?
          len : end >> 0;
  
        const finalValue = relativeEnd < 0 ?
          Math.max(len + relativeEnd, 0) :
          Math.min(relativeEnd, len);
  
        while (k < finalValue) {
          O[k] = value;
          k++;
        }
  
        return O;
      }
    });
  }
  return Array(to - from + 1).fill(from).map((x,y) => Number(x) + Number(y))
}

export default crteateRange;