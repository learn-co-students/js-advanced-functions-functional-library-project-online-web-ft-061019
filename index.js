const fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function(collection, callbackFn) {
      for (const elem in collection) {
        if (collection.hasOwnProperty(elem)) {
          const element = collection[elem];
          callbackFn(element) 
        }
      }
      return collection
    },

    map: function(collection, callbackFn) {
      let newCollection = []

      for (const elem in collection) {
          const element = collection[elem];
          newCollection.push(callbackFn(element))
      }
      return newCollection
    },

    reduce: function(collection, callbackFn, acc = 0) {
      let r = (!!acc ? acc : collection[0])
      // set my for loop's iterator variable here based on if an acc value is given or not. 
      // if not given, my r value is set to the first value in the collection and thus the first iteration must be skipped
      // otherwise, I'll need to start at my iteration at 0 with the given acc value
      let i = (!!acc ? 0 : 1)

      for (/* i already set*/; i < collection.length; i++) {
        const element = collection[i];
        r = callbackFn(r, element)
      }

      return r
    },

    find: function(collection, predicateFn) {
      let found = false
      for (const elem in collection) {
        const element = collection[elem];
        if (predicateFn(element)) {
          found = true
          return element
        }
      }
      if (found === false) {
        return undefined
      }
    },

    filter: function(collection, predicateFn) {
      let found = []
      for (const elem in collection) {
        const element = collection[elem];
        if (predicateFn(element)) {
          found.push(element)
        }
      }
      return found
    },

    size: function(collection) {
      return Object.keys(collection).length
    },

    first: function(collection, n) {
      if (n) {
        return collection.slice(0, n)
      } else {
        return collection[0]
      }
    },

    last: function(collection, n) {
      if (n) {
        return collection.slice(collection.length - n, collection.length)
      } else {
        return collection[collection.length - 1]
      }
    },

    compact: function(array) {
      return array.filter(elem => !!elem)
    },

    sortBy: function(array, callbackFn) {
      console.log(array)
      console.log("callbackFn: ", callbackFn.toString())
      let newArr = array.map(elem => callbackFn(elem))
      // let newArr = array.map(function(elem) {
      //   callbackFn(elem)
      // })
      let newArr = [...array]
      newArr = newArr.sort(callbackFn)

      // function sortArr(array, callbackFn) {
      //   array.map(elem => callbackFn(elem))
      // }
    
      // let arr2 = array.sort(array.map(elem => callbackFn(elem)))
      // console.log(arr2)
      // console.log("newArr: ", newArr)
      // console.log("newArr: ", newArr.sort(function(a, b){return a - b}))
      return newArr 
    },

    functions: function() {

    },


  }
})()

fi.libraryMethod()
