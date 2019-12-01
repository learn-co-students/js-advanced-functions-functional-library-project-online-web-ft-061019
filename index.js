const fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function(collection, callback) {
      if (typeof collection === 'object'){
        for (const key in collection){
          callback(collection[key])
        }
      } else {
        for (const element of collection){
          callback(element)
        }
      }
      return collection;
    },

    map: function(collection, callback) {
      let newArray = [];
      if (typeof collection === 'object'){
        for (const key in collection){
          newArray.push(callback(collection[key]))
        }
      } else {
        for (const element of collection){
          newArray.push(callback(element))
        }
      }
    return newArray;
    },

    reduce: function(collection, callback, acc) {
      if (!acc) {
        acc = collection[0];
        collection = collection.slice(1)
      }
      for (const element of collection) {
        acc = callback(acc, element)
      }
      return acc
    },

    find: function(collection, predicate){
      if (typeof collection === 'object'){
        for (const key in collection){
          if (predicate(collection[key])=== true){
            return collection[key];
          }
        }
      } else {
        for (const element of collection){
          if (predicate(element) === true){
            return element;
          }
        }
      }
    },

    filter: function(collection, predicate){
      let newArray = [];
      if (typeof collection === 'object'){
        for (const key in collection){
          if (predicate(collection[key])=== true){
            newArray.push(collection[key]);
          }
        }
      } else {
        for (const element of collection){
          if (predicate(element)=== true){
            newArray.push(element)
          }
        }
      }
      return newArray;
    },


    size: function(collection){
      let newArray = [];
      if (typeof collection === 'object'){
        for (const key in collection){
          newArray.push(collection[key]);
        }
      } else {
        newArray = collection;
      }
      return newArray.length;
    },

    first: function(array, n){
      if (!n){
        return array[0];
      } else {
        array.splice(n);
        return array;
      }
    },

    last: function(array, n){
      if (!n){
        return array.slice(-1)[0]
      } else {
        return array.slice(-n);
      }
    },

    sortBy: function(collection, callback){
      let newArray = [...collection];
      return newArray.sort(function(a, b){
        return callback(a) - callback(b)
      })
    },

    compact: function(array){
      let newArray = [];
      for (const element in array){
        if (!!array[element] === true){
          newArray.push(array[element])
        }
      }
      return newArray;
    },

    unpack: function(receiver, array) {
      for (let value of array)
        receiver.push(value)
    },  //--> StackOverflow reference to write flatten function

    flatten: function(collection, shallow, newArray=[]) {
      if (!Array.isArray(collection)) return newArray.push(collection)
      if (shallow) {
        for (let value of collection)
          Array.isArray(value) ? this.unpack(newArray, value) : newArray.push(value)
      } else {
        for (let value of collection) {
          this.flatten(value, false, newArray)
        }
      }
      return newArray;
    },

    uniq: function(array, isSorted, callback){
      let newArray = [];
      if (isSorted === false){
        array.sort(function(a, b){
          return a - b;
        })
      }
      for (const element of array){
        if (callback){
          if (!newArray.find(e => callback(e) === callback(element))){
            newArray.push(element)
          }
        } else {
          if (!newArray.find(e => e === element)){
            newArray.push(element)
          }
        }
      }
      return newArray;
    },



  keys: function(object){
    let keys = [];
    for (const key in object){
      keys.push(key)
    }
    return keys;
  },

  values: function(object){
    let values = [];
    for (const value in object){
      values.push(object[value])
    }
    return values;
  },

  function: function(object){
    const functionArray = [];
    for (const func in object){
      if (typeof object[func] === 'function')
      functionArray.push(func)
    }
    return functionArray.sort();
  },



  }
})();

fi.libraryMethod()
