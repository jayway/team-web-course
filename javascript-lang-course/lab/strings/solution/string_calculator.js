var jscourse = window.jscourse || {}
jscourse.StringCalculator = StringCalculator = {
  add: function(inputString) {
      if (inputString) {
          // notice forEach only for ECMAScript 5
          // use e.g. underscore.js otherwise
          var sum = 0;
          inputString.split(',').forEach(function(val) { sum += parseInt(val, 10) })
          return sum;                               
      } else {
          return 0;
      }
  }
}
