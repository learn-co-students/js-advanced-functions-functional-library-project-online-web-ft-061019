const fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function(src, fn) {
      let newArr = []
      for (let i = 0; i < src.length; i++){
      const element = fn(src[i])
      newArr.push(element)
      }
      return src
    },

    map: function(src, fn) {
      let newArr = []
      for (let i = 0; i < src.length; i++) {
          const element = fn(src[i])
          newArr.push(element)
       }
       return newArr
    },

    reduce: function(src, cb, starting=0) {
      let s = (!!starting) ? starting : src[0]
      let i = (!!starting) ? 0 : 1
    
      for (; i < src.length; i++) {
        s = cb(src[i], s)
      }
    
      return s;

    },

    functions: function() {

    },


  }
})()

fi.libraryMethod()
