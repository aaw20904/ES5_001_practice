
/**
*@fileOverview tools for the rolling a string
*@author <a href="mailto:kozakizdona@gmail.com">Andrew</a>
*@version 1.00
*/

/**
*A class for rolling a string.
*@constructor RollString1
*@default 'Untitled'
*@param {string} a  :the_string for initialization
*/

 function RollString1(a = 'Untitled') {
    /**
     *@property {String} tmpVar a private propery
     *@property {Array} _stringsArray a string container
     */
        /* convert to an array*/
        this._stringsArray = a.split('');
        this.tmpVar;
        
 };

/**
*@function RollString1.prototype.pro
        @param {undefined} none
        @returns {string} 
        */
RollString1.prototype.pro = function () {
    
 /* deleting and saving to tempVariable last letter*/
 this.tmpVar =  this._stringsArray.pop();
  /* adding the element, that have saved in the begin*/
 this._stringsArray.unshift(this.tmpVar);
  /*define property using DefineProperty*/
   return this._stringsArray.join('');
 };

/*---------------------------------------------*/

/**
*@constructor
*@default 'Untitled'
*@param {string} a  :the_string for initialization
*@description A class for rolling a string using Crockford privacy pattern.
*/

 function RollStringCrockford(a = 'Untitled') {
    /**
     *@property {String} tmpVar a private propery
     *@property {Array} _stringsArray a string container
     */
        /* convert to an array*/
        var _stringsArray = a.split('');
        var tmpVar;
     /**
        *A method  for rolling a string.
        @param {undefined} none
        @returns {string} 
        */
     this.pro = function () {
                     /* deleting and saving to tempVariable last letter*/
                     tmpVar =  _stringsArray.pop();
                     /* adding the element, that have saved in the begin*/
                     _stringsArray.unshift( tmpVar );
                     /*define property using DefineProperty*/
                     return  _stringsArray.join('');
                            };

 };

/**
*@function
*isLeapYear
*@param {string} Y year
*@returns {boolean} if true - it`s a leaf year
*/
function isLeapYear(Y = '1980') {
    if(typeof Y !== 'string'){
        console.error('ERROR:the parameter must be a string!')
    }
  return ((parseInt(Y,10) % 100 == 0) || (parseInt(Y,10) % 4 === 0) || (parseInt(Y,10) % 400 === 0)) ? true : false; 

}


/**
*@function
*isTheFirstYanuarySat
*@param {number} startY from it year
*@param {number} finY to this year
*@returns {Object} list of years that have a saturday as  Yanuary
*/
function isTheFirstYanuarySat(startY,finY) {
   var yearsAcc = [];
    /*initializing a variable as start year*/
   var testYear = new Date(startY.toString());
    while (startY <= finY) {
        testYear.setFullYear(startY,0,1);
        if (testYear.getDay() === 6){
            yearsAcc.push(startY);
        }
            startY++;
    }
    return yearsAcc;
}

isTheFirstYanuarySat(1970,2070)
//testDate.setFullYear(1999);
console.log(isTheFirstYanuarySat(1970,2070));

var qu1 = new Date(2001, 11, 1);
console.log(qu1.toString());

/**
*@function 
*howFarIsChristmas
*@param {Date} inpDate - data for calc
*@returns {number} how many days is to Christmas
*/

function howFarIsChristmas(inpDate){
    /*initializing date of Christmas in a given year*/
    var dateChristmas = new Date(inpDate.getFullYear(), 0, 7);
    /* have Christmas became? */
    if(inpDate.getTime() > dateChristmas.getTime()){
        dateChristmas.setFullYear(inpDate.getFullYear() + 1, 0 ,7);
    }
    return ((dateChristmas.getTime() - inpDate.getTime())/86400000) | 0;
}

console.log(howFarIsChristmas(qu1));
/**
*@function
*guessGame
*@param {number} N -an input data
*@returns {string} the result
*/
function guessGame(N){
    /*compare a value with a random number (from 0 to 10)*/ 
    return ( Math.ceil(Math.random()*10) === N) ? "You gess!" : "You lost";
}

var inpD ='';
while(inpD.match(/\d/) === null){
    inpD = prompt("enter a nomber");
}
/**
*@function
*temperatureConverter
*@param {boolean} mode -to Celsius true,to Farengeit - false
*@param {number} temp -temperature
*@returns {number} the result
*/
function temperatureConverter(mode, temp){
    /*Is  'temp' a number? */
    if(typeof temp === 'number'){
        /*then calculate*/
      if(mode === true){
        return ((temp - 32) / 9) * 5;
      }
    return ((temp / 5) * 9) + 32;
    }
};

/**
*@function
*getFileExtension
*@param {string} fileName - a full file name
*@returns {string} a file extension like 'txt','exe','jpeg' e/t/c
*/
function getFileExtension(fileName){
    return /(?<=\.)\w+/g.exec(fileName);
};

/**
*@function 
*thirteenProc
*@param {number} inputNumber - input number
*@returns {number} output data
*/
function thirteenProc(inputNumber){
    var diff = inputNumber - 13;
    return ( diff > 0 ) ? diff * 2 : Math.abs(diff); 
};

/**
@function
*tripleProcess
*@param {number} n1 - the first parameter
*@param {number} n2 - the second parameter
*@returns {number} result of the process
*<p>n1 + n2 =>out. If n1==n2 then (n1 +n2) * 3 => out </p>
*/

function tripleProcess(n1 ,n2){
    return (n1 === n2) ? ((n1 + n2) * 3) : (n1 + n2);
};

/**
*@function
*tripleProcNineteen
*@param {number} imp - input number
*@returns {number} return value
* <p>if inp > 19 then   (inp-19) * 3 =>out; else inp-19=>out</p>
*/
function tripleProcNineteen(inp){
    let sw = inp - 19;
    return (sw > 0) ? (sw * 3) : Math.abs(sw); 
};

/**
*@function 
*testFifty
*@param {number} inp1 - an input number
*@param {number} inp2 - an input number
*@returns {boolean} result 
*/
function testFifty(inp1, inp2){
    var test  = inp1 + inp2; 
return ((test === 50) || (inp1 === 50) || (inp2 === 50)) ? true : false; 
};

/**
*@function
*isNumberInRange -
*@param {number} inp input number
*@return {boolean}
* <p>checking range 20...100 100..400</p>
*/

function isNumberInRange(inp){
    return ( ((inp > 20) && (inp < 100)) || ((inp > 100) && (inp < 400)) ) ? true : false;
};
/**
@function
*testDifferSign
*@param {number} num1 - the first number
*@param {number} num2 - the second number
*@returns {boolean} 
*/
function testDifferSign(num1, num2){
    return ( ((num1 > 0) && (num2 > 0)) || ((num1 < 0) && (num2 < 0)) ) ? false : true;
};

/**
*@function 
*procPy
*@param {string} inString - an input arg
*@returns {string} output result
* <p>RET an arg+'Py'.If arg. cotains 'Py' in begin (as prefix) returns only arg.</p>
*/
function procPy(inString){
    if(/^Py/.test(inString)){
      return inString;
    }
    return 'Py'+inString;
};

/**
*@function
*cutChar
*@param {string} inpString - string for a process
*@param {number} inpNumber - an index of the character for deleting
*@returns {string}
*@description deleting given character from a string
*/
function cutChar(inpString, inpNumber){
    
    /*convert to an array*/
    var z = inpString.split('');
    /*checking correct value of index*/
    if(inpNumber > z.length){
         inpNumber = z.length;
    }
    /* cut the value */
    z.splice(inpNumber,1);
    return z.join('');
}

/**
*@function
*replaceChar
*@param {string} inputString - a string  to process
*@returns {string} resulting string
*@description replacing the first and the last characters
*/
function replaceChar(inputString){
    /*checking length*/
    if(inputString.length <= 1){
        return inputString;
    }
    /*convert to a string*/
  var z = inputString.split('');
  var tmp = [];
    /* store the first and the last elements*/
  tmp[0] = z[0];
  tmp[1] = z[z.length-1];
    /*cuting off the first and the last element*/
  z = z.slice(1,z.length-1);
  return (tmp[1] + z.join('') + tmp[0]);
  
};
/**
*@function
*firstlastChar
*@param {string} inputString - a string  to process
*@returns {string} resulting string
*@description /24/ adding a first character as a suffix and a prefix 
*/
function firstlastChar(inputString){
/*checking length*/
  if(inputString.length <= 2){
        return inputString;
  }
/*convert to a string*/
  var z = inputString.split('');
  var tmp = z[0];
  return tmp + z.join('') + tmp;

};
/**
*@function
*isMult
*@param {number} inputNumber - a number to process
*@returns {number} resulting divider on undefined
*@description /25/is a number a multiple of 3 or a multiple of 7
*https://www.w3resource.com/javascript-exercises/javascript-basic-exercises.php
*/
function isMult(inputNumber){
    if(typeof inputNumber !== 'number'){
        return null;
    } else if( ((inputNumber % 7) === 0) && ((inputNumber % 3) === 0) ){
        return 21;
    } else if((inputNumber % 7) === 0){
        return 7;
    } else if((inputNumber % 3) === 0){
        return 3;
    } else {
        return -1;
    }
}
/**
*@function
*threeCharsFunc
*@param {string} inputString - a string  to process
*@returns {string} resulting string
*@description /26/ adding a last 3 character as a suffix and a prefix 
*/

function threeCharsFunc(inputString){
    /*if the string is too short*/
    if(inputString.length <= 3){
      return inputString;
    }
  var sl = inputString.slice(inputString.length - 3, inputString.length);
  return sl + inputString + sl;
}
/**
*@function
*javaTest
*@param {string} inputString - a string  to process
*@returns {boolean} result
*@description /27/  check whether a string starts with 'Java' and false otherwise.
*/
function javaTest(inputString){
    return /^Java/.test(inputString);    
}

/**
*@function
*numberRange
*@param {number} inputNumber1 - a number to process
*@param {number} inputNumber2 - a number to process
*@param {number} inputNumber3 - a number to process
*@returns {number} resulting divider on undefined
*@description /27/Return true if either of them are in the (50..99) range
*https://www.w3resource.com/javascript-exercises/javascript-basic-exercises.php
*/
function numberRange(inputNumber1, inputNumber2, inputNumber3){
   return ((inputNumber1 >= 50) && (inputNumber1 <= 99)) || ((inputNumber2 >= 50) && (inputNumber2 <= 99)) ? true : false;
};

/**
*@function
*number28
*@param {number?...} inputNumber1 - a number to process
*@description /28/Return true if either of them are in the said range
*https://www.w3resource.com/javascript-exercises/javascript-basic-exercises.php
*/
function number28(){
    if(arguments.length == 0){
        return false;
    } else {
        //iterate all the parameters
        for(var test in arguments){
            if( (test >=50) && (test >= 99) ){
                return true;
            };
          
        }
          //if the condition isn`t met
            return false;
    }
}

/**
*@function
*fnc30
*@param {string} inputString - a string  to process
*@returns {string} result
*@description /30/  check is a string "Script" presents at 5th (index 4) position. if "Script" presents in the string return the string without "Script" otherwise return the original one
*/
 function fnc30(inputString){
     //checking if a 'scpipt' on 5-th position
     if(/(?<=^.{4})Script/g.test(inputString)){
         return inputString.replace(/(?<=^.{4})Script/g,"");
     }  else {
         return inputString;
     }
 }

/**
*@function
*sort31
*@param {number?...} - a number to process
*@description /31/return the highest number
*https://www.w3resource.com/javascript-exercises/javascript-basic-exercises.php
*/

function sort31(){
    ///convert to an array
    var myArray = arguments[0];
    myArray.sort(function(a,b){
        if(a === b){
            return 0;
        } else if(a > b){
            return 1;
        } else if(a < b){
            return -1;
        }
        
    });
    //It is returned afeter sorting
        return myArray[myArray.length - 1];
}; 
/**
*@function
*nearest32
*@param {number} inputNumber1 - a number to process
*@param {number} inputNumber1 - a number to process
*@description /32/return nearest to 100 from two
*https://www.w3resource.com/javascript-exercises/javascript-basic-exercises.php
*/
function nearest32(inputNumber1, inputNumber2){
    if ( Math.abs(inputNumber1 - 100) >= Math.abs(inputNumber2 - 100)){
       return inputNumber2;
    } else {
        return inputNumber1;
    }
};


/**
*@function
*range33
*@param {number?...} - a number to process
*@description /33/are numbers in range 40..60 or in the range 70..100 inclusive/reurn array[(+1,-1,0)]
*https://www.w3resource.com/javascript-exercises/javascript-basic-exercises.php
*/
function compare33(){
    var result = [];
    //convert an array-like arg. to a truue array
    var inpArray = arguments[0];
   return inpArray.map(function(obj1){
       /* checking if the iten in the range */
       if( (obj1 >= 40) && (obj1 <= 60) ){
           return 'low';
       } else if ( (obj1 >= 70) && (obj1 <= 100) ){
           return 'high';
       } else {
           return 'out_range';
       }
   });
};



/**
*A class for rolling a string.
*@constructor biggst34
*@default 'a=1,b=2'
*@param {number,number} a,b numbers for initialization
*/
function biggst34(a = 1,b = 2){
   this.first = 1;
   this.second = 2;
};

Object.defineProperty(biggst34,'readWrite',{
    set: function(value){
      this.first = value[0];
      this.second = value[1];
    }
    get: function(){
        var tmp = [];
        tmp[0] = this.first;
        tmp1[1] = this.second;
        return tmp;
    }
    
});
/**
*A class for rolling a string.
*@constructor biggst34
*@default 'a=1,b=2'
*@param {number,number} a,b numbers for initialization
*/
function Biggst34(a = 1,b = 2){
   var first = [];
   first[0] = a;
   first[1] = b;
   this.returnArray = function() {
       return first;
   };
   
   this.setArray = function(ar1){
        console.log(first,'***',ar1);
         first[0] = ar1[0];
         first[1] = ar1[1];
   };

};
        
/**
*@function
*@param {none}
*@returns {number} the biigst from two from a range 40..60 ,ifthey arn`t in a range return null  
**/
Biggst34.prototype.proc = function() {
  var myArr = this.returnArray();
  if( ((myArr[0] >= 40) && (myArr[0] <= 60)) && ((myArr[1] >= 40) && (myArr[1] <= 60)) ){
      if( myArr[0] > myArr[1] ){
          return myArr[0]; 
      } else {
          return myArr[1]; 
      }
      return null;
  }
}; 

//-----------

/**
*@construuctor TestChar35
*@param {string} str a string for comparing
*@param {string} ch a character for comparing
*@default ' "testing", "s" '
**/

  function TestChar35(str='testing',ch='s'){
    var _strToTest = str;
    var _character = ch;
    //checking length of a new string
    this.setStr = function(val){
        if(val.length > 5){
        _strToTest = val;
        }
    };
    //assign a character for the test
    this.setChar = function(val){
         _character = val;
    };
    this.getStr = function(){
        return _strToTest;
    };
    this.getChar = function(){
        return _character;
    }
    
};

/**
*@function 
*@test35
*@param {none}
*@returns {boolean}
*@description if a given character exists within the 2nd to 4th position in a given string
**/
TestChar35.prototype.test35 = function(){
var tst = this.getStr().slice(1,4);
  if(tst.indexOf(this.getChar()) >= 0){
    return true;
  } else {
    return false;
  }

}; 
/**
*@construuctor TestNum36
*@param {number} numbers an input array for comparing
*@default '[1,1,1]'
**/
function TestNum36(numbers = [1,1,1]){
    //convert from float to integer
    function toInt32(k){
        return k | 0;
    };
    //private property
    var _innerArray = numbers.map(toInt32);
    
    this.writeArray = function(ar){
        if(ar.length >= 2){
            _innerArray = ar.map(toInt32);
        }
    };
    
    this.readArray = function(){
        return _innerArray;
    }
    
    
};
/**
*@function 
*testing
*@param {none}
*@returns {boolean}
*@description tests if the last digits of given integers are the same
**/
TestNum36.prototype.testing = function(){
    //converts to array of strings
  var tst = this.readArray().map(function(y){
      return y.toString();
  });    
    //call Array.prototype.some
 for(var q = 0; q < tst.length; ){
     if(tst[0].charAt(tst[0].length - 1) !== tst[q].charAt(tst[q].length - 1)){
        return false;
        } 
     q++;
 }
  return true;  
}

  /**
*@construuctor str37
*@param {string} ini string for process
*@default '"Hello"'
**/
function str37(ini = 'Hello'){
    var _innerStr = ini;
    //reading a private variable
    this.getValue = function(){
      return _innerStr;
    };
    //reading the length
    this.getLength = function(){
        return _innerStr.length;
    }
    //write a privat variable
    this.setValue = function(val){
      if(typeof val === 'string'){
          _innerStr = val;
      }    
    };
};
/**
*@function 
*process
*@param {none}
*@returns {string}
*@description  new string with first 3 characters are in lower case. If the string length is less than 3 convert all the characters in upper case
**/
str37.prototype.process = function(){
    if(this.getLength() < 3){
        return this.getValue().toUpperCase();
    } else {
        var q = /[a-z]{3}/.exec(this.getValue());
        return (q === null) ? '' : q[0];
    }
    
};
/**
*@construuctor exem38
*@param {string} name nameOfLearner
*@default '"Ivanova_N_N"'
*@param {boolean} isExem exem or not
*@default 'true'
**/

function exem38(name = 'Ivanova_N_N', isExem = true){ 
    //rprivzte members - name
    var _nameOfLearner = name;
    var _isExem  = isExem;
    var _marks = 0;
    //public methods
    this.getLearnerName = function(){
        return _nameOfLearner; };
    this.setMark = function(i){
        _marks = i; };
    this.getMark = function(){
        return _marks;
    };
    this.getStatus = function(){
        return _isExem;  
    };
};

/**
*@function 
*resetMark
*@description  reset the mark to 0
**/
exem38.prototype.resetMark = function(){
    this.setMark(0);
}
/**
*@function 
*addMarkToExist
*@param {number} c
*@description  adding the value to the mark
**/
exem38.prototype.addMarkToExist = function(c){
    if(typeof(c) === 'number'){
        this.setMark(this.getMark() + c);
    }
}

/**
*@function 
*addMarkToExist
*@returns {boolean} Did a learner pass the exem? 
**/

exem38.prototype.passedOrNot = function(){
    var q = this.getMark();
    if(this.getStatus()){
        return ((q >= 89) && (q <= 100)) ? true : false;
    } else {
        return (q >= 90) ? true : false;
    }
};

    /**
*@construuctor sum39
*@param {number} inpArray an array to process
*@default '[5,7,9]'
**/

function sum39(inpArray = [5,7,9]){
    //privater members
    var _innerArray = inpArray;
    //public methods
    this.setArray = function(q){
        _innerArray = q;
    }
    
    this.getArray = function(){
        return _innerArray;
    }
};
/**
*@function
*process
*@description  compute the sum of the integers, If the sum is in the range 50..80 return 65 other wise return 80. **/
sum39.prototype.process = function(){
    var result = 0;
    this.getArray().forEach(function(q){
        result += q;
    });
    return ((result >= 50) && (result <= 80)) ? 65 : 80;
};

 /**
*@construuctor test40
*@param {number} a,b inp numbers to an initialization
*@default '5,3'
**/
function test40(a = 5, b = 3) {
    var _a = a;
    var _b = b;
    //bublic methods
    this.setValues = function (a, b) {
        _a = a;
        _b = b;
    };
    this.getValues = function () {
     var c = [];
     c[0] = _a;
     c[1] = _b;
       return c;
    };
}
/**
*@function
*process
*returns {boolean}
*@description check from two given integers whether
one of them is 8 or their sum or difference is 8. **/
test40.prototype.process = function () {
    var a1 = this.getValues()[0];
    var b1 = this.getValues()[1];
    if ((a1 === 8) || (b1 === 8)) {
        return true;
    } else if ((a1 - b1 === 8) || (b1 - a1 === 8)) {
        return true;
    } else if ((a1 + b1 === 8) || (b1 + a1 === 8)) {
        return true;
    } else {
        return false;
    }
};

/**
*@construuctor test41
*@param {number} inpArr  numbers to an initialization
*@default '3,5,3'
*@description returns an object with numbers and matches
**/

function test41(inpArr = [3, 5, 3, 5, 5, 9]) {
    //private var
    var _innerArray = inpArr;
    //public methods
    this.writeArray = function (z) {
        _innerArray = z;
    };
    this.readArray = function () {
        return _innerArray;
    };
}
/**
*@function
*calc
*@returns {object} compare function (see decription above)
**/

test41.prototype.calc = function () {
 //an object  been returned
    var results = {
        numbers: [],
        matches: [],
        index: 0
    };
    //variables for searching
    var srchIndex = 0;
    var matchAcc = 0;
    var x = 0;
    var ethalon;
    //an array after sorting
    var Arr = this.readArray().sort(function (a, b) {
        if (a < b) {
            return -1;
        }
        if (a === b) {
            return 0;
        }
        if (a > b) {
            return 1;
        }
    });
    while (srchIndex < Arr.length) {
        x = 1;
        matchAcc = 1;
        ethalon = Arr[srchIndex];
        while (ethalon === Arr[srchIndex + x]) {
            matchAcc += 1;
            x += 1;
        }
        results.numbers[results.index] = ethalon;
        results.matches[results.index] = matchAcc;
        results.index += 1;
        srchIndex += x;
    }
    return results;
};
/**
*@construuctor strict42
*@param {number} a  number to an initialization
*@param {number} b  number to an initialization
*@param {number} c  number to an initialization
*@default '1,2,3'
*@description returns 'strict mode' if a<b<c
**/

function strict42(a = 1, b = 2, c = 3) {
    var _a = a;
    var _b = b;
    var _c = c;
    //public methods
    this.getA = function () {
        return _a;
    };
    this.getB = function () {
        return _b;
    };
    this.getC = function () {
        return _c;
    };
    this.setA = function (v) {
        _a = v;
    };
    this.setB = function (v) {
        _b = v;
    };
    this.setC = function (v) {
        _c = v;
    };
}
/**
*@function
*proc
*@returns{string}
**/
strict42.prototype.proc = function () {
    var inA = this.getA();
    var inB = this.getB();
    var inC = this.getC();
    if ((inA < inB) && (inB < inC)) {
        return "strict";
    }
    if ((inC > inA) && (inC > inB)) {
        return "soft";
    } else {
        return "-";
    }
};
/**
*@construuctor check43
*@param {number} a  number to an initialization
*@param {number} b  number to an initialization
*@param {number} c  number to an initialization
*@default '1,2,3'
*@description returns 'strict mode' if a<b<c
**/
 function check43(a = 11, b = 21, c = 31) {
    var _a = a;
    var _b = b;
    var _c = c;
    //public methods
    this.getA = function () {
        return _a;
    };
    this.getB = function () {
        return _b;
    };
    this.getC = function () {
        return _c;
    };
    this.setA = function (v) {
        _a = v;
    };
    this.setB = function (v) {
        _b = v;
    };
    this.setC = function (v) {
        _c = v;
    };
}
/**
*@function
*proc
*@description hat two or all of them have the same rightmost digit
**/
check43.prototype.proc = function () {
    var inA = this.getA().toString();
    var inB = this.getB().toString();
    var inC = this.getC().toString();
    if (inA.charAt(inA.length - 1) === inB.charAt(inB.length - 1)) {
        return true;
    } else if (inC.charAt(inC.length - 1) === inB.charAt(inB.length - 1)) {
        return true;
    } else if (inA.charAt(inA.length - 1) === inC.charAt(inC.length - 1)) {
        return true;
    } else {
        return false;
    }
};

/**
*@construuctor check44
*@param {number} a  number to an initialization
*@param {number} b  number to an initialization
*@param {number} c  number to an initialization
*@default '1,2,3'
*@description that whether a number is greater than or equal to 20 and less than one of the others
**/
function check44(a = 11, b = 21, c = 31) {
    var _a = a;
    var _b = b;
    var _c = c;
    //public methods
    this.getA = function () {
        return _a;
    };
    this.getB = function () {
        return _b;
    };
    this.getC = function () {
        return _c;
    };
    this.setA = function (v) {
        _a = v;
    };
    this.setB = function (v) {
        _b = v;
    };
    this.setC = function (v) {
        _c = v;
    };
}

check44.prototype.proc = function () {
    var a = this.getA();
    var b = this.getB();
    var c = this.getC();
    if (a >= 20) {
        if ((b < a) && (c < a)) {
            return a;
        }
    }
    if (b >= 20) {
        if ((a < b) && (c < b)) {
            return b;
        }
    }
    if (c >= 20) {
        if ((a < c) && (b < c)) {
            return c;
        }
    }
    return -1;
};
/**
*@construuctor check45
*@param {number} a  number to an initialization
*@param {number} b  number to an initialization
*@default '1,2,3'
**/
 function Check45(a = 11, b = 21) {
    var _a = a;
    var _b = b;
    //public methods
    this.getA = function () {
        return _a;
    };
    this.getB = function () {
        return _b;
    };
    this.setA = function (v) {
        _a = v;
    };
    this.setB = function (v) {
        _b = v;
    };
}
/**
*@function
*proc
*@description true if one of the number is 15 or if their sum or
 difference is 15
**/
Check45.prototype.proc = function () {
    var inA = this.getA();
    var inB = this.getB();
    if ((inA === 15) || (inB === 15) || (inB - inA === 15)) {
        return true;
    } else if ((inA + inB === 15) || (inA - inB === 15)) {
        return true;
    } else {
        return false;
    }
};

/**
*@constructor
*Super46
*@param {number} a 
*@param {number} b
**/


var Super46 = function (a = 14, b = 16) {
    var _a = a;
    var _b = b;
    //public methods
    this.getA = function () {
        return _a;
    };
    this.getB = function () {
        return _b;
    };
    this.setA = function (a) {
        _a = a;
    };
    this.setB = function (b) {
        _b = b;
    };
};
//dewfine prototype`s method
Super46.prototype.getDataA = function () {
    return this.getA();
};
Super46.prototype.getDataB = function () {
    return this.getB();
};

/**
*@constructor
*Sub46
*@param {string} id
*@param {number} a
*@param {number} b
**/
var Sub46 = function (id = "myId", a = 9, b = 15) {
    Super46.call(this, a, b);
    var _id = id;
    //public methods
    this.getId = function () {
        return _id;
    };
};

//set inheritance
Sub46.prototype = Object.create(Super46.prototype);
Sub46.prototype.constructor = Sub46;

/**
*@function
*proc
*@description check  that whether one of the number (not both)
 is multiple of 7 or 11
**/
Sub46.prototype.proc = function () {
    var myA = Super46.prototype.getDataA.call(this);
    var myB = this.getB();
    if (((myB % 7 === 0) || (myB % 11 === 0)) && ((myA % 7 === 0) || (myA % 11 === 0))) {
        return 0;
    }
    if ((myA % 11 === 0) || (myA % 7 === 0)) {
        return myA;
    }
    if ((myB % 11 === 0) || (myB % 7 === 0)) {
        return myB;
    }
    return 0;
};

                         
/**
*@constructor 
*Super47
*@param  {number} n for initializaton
**/
var Super47 = function (n) {
    var _n = n;
  //public methos
    this.getN = function () {
        return _n;
    };
    this.setN = function (inp) {
        if (typeof inp === "number") {
            _n = inp;
        }
    };
};

Super47.prototype.getInfo = function () {
    return this.getN();
};
/**
*@constructor
*Sub47
*@param  {number} n for initializaton
*@param  {string} id for initializaton
*@default 'my'
**/
var Sub47 = function (num, id = "my") {
    Super47.call(this, num);
    var _id = id;
   //public methods
    this.getID = function () {
        return _id;
    };
};

//inheritance setting
Sub47.prototype = Object.create(Super47.prototype);
//constructor setting
Sub47.prototype.constructor = Sub47;

Sub47.prototype.proc = function () {
    var myVar = Super47.prototype.getInfo.call(this);
    if ((myVar >= 40) && (myVar <= 10000)) {
        return true;
    } else {
        return false;
    }
};

/**
*@constructor 
*Super48
*@param  {string} str for initializaton
*@default 'kolobok'
**/

var Super48 = function (str = "") {
    var _inner = str;
    //public
    this.getValue = function () {
        return _inner;
    };
    this.setValue = function (v) {
        _inner = v;
    };
    //getter
    Object.defineProperty(this,"j",{get: function () {return _inner;}});
    Object.defineProperty(this,"jI",{set: function (a) {_inner = a;}});
};
Super48.prototype.readArray = function () {
    return this.getValue();
};

Super48.prototype.writeArray = function (v) {
    this.setValue(v);
};

var Sub48 = function (x = "id", st = "kolobok") {
    Super48.call(this, st);
    var _id = x;
    this.readId = function () {
        return _id;
    };
};

Sub48.prototype = Object.create(Super48.prototype);
Sub48.prototype.constructor = Sub48;
/**
*@function
*Sub48
*@description  reverse a given string
*@returns {string}
**/
Sub48.prototype.proc = function () {
    //reading a strng ftom a parent class
    var innerStr = this.j.split("");
    return innerStr.reverse().join("");
};

/**
*@constructor 
*Sort49
*@param  {string} str for initializaton
*@default 'kolobok'
**/
var Sort49 = function (str = "kolobook") {
    var _privStr = str;
    Object.defineProperty(this, "getPriv", {
        get: function () {
            return _privStr;
        }
    });
    Object.defineProperty(this, "setPriv", {
        set: function (z) {
            _privStr = z;
        }
    });
};
/**
*@constructor
*Sub49
*@description subclass
*@param {string} id identifier
*@param {string} s string for sort
**/
var Sub49 = function (id = "222", s = "book") {
    Sort49.call(this, s);
    var _id = id;
    Object.defineProperty(this, "identifier", {
        get: function () {
            return _id;
        }
    });
};

Sub49.prototype = Object.create(Sort49.prototype);
Sub49.prototype.constructor = Sub49;
/**
*@function
*@proc
*@description sort letters in an string in order of alphabet
*@returns {string}
**/
Sub49.prototype.proc = function () {
    var tmp = this.getPriv.split("");
    tmp.sort();
    return tmp.join("");
};
/**
*@constructor 
*Sort50
*@param  {string} str for initializaton
*@default 'marry had a little lamb'
**/

var Sort50 = function (str = "marry had a little lamb") {
    var _str = str;
    //public mehtods
    Object.defineProperty(this, "innerStrGeter", {
        get: function () {
            return _str;
        }
    });
    Object.defineProperty(this, "innerStrSetter", {
        set: function (a) {
            _str = a;
        }
    });
};

/**
*@constructor
*Sub50
*@description subclass
*@param {string} id identifier
*@param {string} s string for sort
**/

var Sub50 = function (str, id = "ua") {
    var _id = id;
    Sort50.call(this, str);
    Object.defineProperty(this, "getID", {
        get: function () {
            return _id;
        }
    });
};
Sub50.prototype = Object.create(Sort50.prototype);
Sub50.prototype.constructor = Sub50;
/**
*@function
*proc
*@description replace  fist letters of words to Capital letters
**/
Sub50.prototype.proc = function () {
    var temp = this.innerStrGeter;
    var regEx = /\b\w(?=\w+)/g;
    return temp.replace(regEx, function (match) {
        return match.toUpperCase();
    });
};

/**
*@constructor 
*Super51
*@param  {number} num for initializaton
*@default '450'
**/

/*jshint bitwise: false*/
var Super51 = function (num = 51) {
    var _num = num;
    Object.defineProperty(this, "getterNum", {
        get: function () {
            return _num;
        }
    });
    Object.defineProperty(this, "setterNum", {
        set: function (a) {
            _num = a;
        }
    });
};

/**
*@constructor
*Sub51
*@description subclass
*@param {number} n for process
*@param {string} id identifier
**/
var Sub51 = function (n, id = "ua") {
    var _id = id;
    Super51.call(this, n);
    Object.defineProperty(this, "getID", {
        get: function () {
            return _id;
        }
    });
};

Sub51.prototype = Object.create(Super51.prototype);
Sub51.constructor = Sub51;

Sub51.prototype.proc = function () {
    var tmp = this.getterNum;
    var hour = ((tmp / 60) | 0);
    var min = ((tmp % 60) | 0);
    return hour + "hours " + min + "minutes";
};

/**
*@constructor 
*Super52
*@param  {string} str for initializaton
*@default 'dcba'
**/
/*jshint bitwise: false*/
var Super52 = function (str) {
    var _str = str;
    Object.defineProperty(this, "getterString", {
        get: function () {
            return _str;
        }
    });
    Object.defineProperty(this, "setterString", {
        set: function (a) {
            _str = a;
        }
    });
};
/**
*@constructor
*Sub52
*@param  {string} str for initializaton
*@param {string} id it`s an identifier
*@default 'id'
@description sort letters in alphabetic order
**/

var Sub52 = function (str, id = "id") {
    var _id = id;
    Super52.call(this, str);
    Object.defineProperty(this, "getterID", {
        get: function () {
            return _id;
        }
    });
};
Sub52.prototype = Object.create(Super52.prototype);
Sub52.prototype.constructor = Sub52;

Sub52.prototype.proc = function () {
    var tmp = this.getterString.split("");
    tmp.sort();
    return tmp.join("");
};
/**
*@constructor 
*Super53
*@param  {string} str for initializaton
*@default 'ayyybcd'
**/
var Super53 = function (str = "acccb") {
    var _str = str;
    //create getter and setter
    Object.defineProperty(this, "setterStr", {
        set: function (a) {
            _str = a;
        }
    });
    Object.defineProperty(this, "getterStr", {
        get: function () {
            return _str;
        }
    });
};
var Sub53 = function (st, num = "5") {
    var _id = num;
    Super53.call(this, st);
    Object.defineProperty(this, "getterID", {
        get: function () {
            return _id;
        }
    });
};
Sub53.prototype = Object.create(Super53.prototype);
Sub53.prototype = Sub53;

Sub53.prototype.proc = function () {
    return /a\w{3}b/g.test(this.getterStr);
};
/**
*@constructor 
*Super54
*@param  {string} str for initializaton
*@default 'ayyybcd'
**/
var Super54 = function (str = "abba") {
    var _str = str;
    Object.defineProperty(this, "getterStr", {
        get: function () {
            return _str;
        }
    });
    Object.defineProperty(this, "setterStr", {
        set: function (a) {
            _str = a;
        }
    });
};
var Sub54 = function (str, num = "id") {
    var _id = num;
    Super54.call(this, str);
    Object.defineProperty(this, "getterID", {
        get: function () {
            return _id;
        }
    });
};
Sub54.prototype = Object.create(Super54.prototype);
Sub54.prototype.constructor = Sub54;
Sub54.prototype.proc = function () {
    var tmp = this.getterStr;
    var counter = 0;
    var reg = /[aoiue]/g;
    while (reg.exec(tmp) !== null) {
        counter += 1;
    }
    return counter;
};
/**
*@constructor 
*Super55
*@param  {string} str for initializaton
*@default 'ptptpt'
**/

var Super55 = function (str = "ptptpt") {
    var _str = str;
    Object.defineProperty(this, "getterStr", {
        get: function () {
            return _str;
        }
    });
    Object.defineProperty(this, "setterStr", {
        set: function (a) {
            _str = a;
        }
    });
};
///subclass
var Sub55 = function (str, id = "id") {
    var _id = id;
    Super55.call(this, str);
    Object.defineProperty(this, "getterID", {
        get: function () {
            return _id;
        }
    });
};
//inheritance
Sub55.prototype = Object.create(Super55.prototype);
Sub55.prototype.constructor = Sub55;
Sub55.prototype.proc = function () {
    var tmp = this.getterStr;
    var regP = /p/g;
    var regT = /t/g;
    var counterP = 0;
    var counterT = 0;
    while (regP.exec(tmp) !== null) {
        counterP += 1;
    }
    while (regT.exec(tmp) !== null) {
        counterT += 1;
    }
    return counterP === counterT;
};

/**
*@constructor 
*Super56
*@param  {number} A for initializaton
*@param  {number} B for initializaton
*@default '5;2'
**/

var Super56 = function (A = 5, B = 2) {
    var _A = A;
    var _B = B;
    //getters & setters
    Object.defineProperty(this, "getterA", {
        get: function () {
            return _A;
        }
    });
    Object.defineProperty(this, "setterA", {
        set: function (x) {
            if (typeof x === "number") {
                _A = x;
            }
        }
    });
    Object.defineProperty(this, "getterB", {
        get: function () {
            return _B;
        }
    });
    Object.defineProperty(this, "setterB", {
        set: function (x) {
            if (typeof x === "number") {
                _B = x;
            }
        }
    });
};
/**
*@constructor
*Sub56
*@param {number} A
*@param {number} B
*@param {number/string} id
**/
var Sub56 = function (A, B, id = "q") {
    var _id = id;
    Super56.call(this, A, B);
    Object.defineProperty(this, "getterID", {
        get: function () {
            return _id;
        }
    });
};

Sub56.prototype = Object.create(Super56.prototype);
Sub56.prototype.constructor = Sub56;
Sub56.prototype.proc = function () {
    var tmp = this.getterA / this.getterB;
    tmp = Math.round(tmp);
    return tmp.toString().split("");
};

/*@constructor
*Super57
*@param {string} str 
@default 'str'
*/
var Super57 = function (str = "abc") {
    var _str = str;
    Object.defineProperty(this, "valueGetter", {
        get: function () {
            return _str;
        }
    });
    Object.defineProperty(this, "valueSetter", {
        set: function (a) {
            if (typeof a === "string") {
                _str = a;
            }
        }
    });
};

var Sub57 = function (str, id = "z") {
    var _id = id;
    Super57.call(this, str);
    Object.defineProperty(this, "getterID", {
        get: function () {
            return _id;
        }
    });
};

Sub57.prototype = Object.create(Super57.prototype);
Sub57.prototype.constructor = Sub57;
Sub57.prototype.proc = function (n) {
    var stringToProc = this.valueGetter;
    var tmp = [];
    if (n < 20) {
        while (n > 0) {
            tmp.push(stringToProc);
            n -= 1;
        }
    }
    return tmp;
};

/**
*@constructor
*Super58
**/
var Super58 = function (str) {
    var _str = str;
    Object.defineProperty(this, "getterStr", {
        get: function () {
            return _str;
        },
        set: function (a) {
            _str = a;
        }
    });
};
var Sub58 = function (str, id = "id") {
    var _id = id;
    Super58.call(this, str);
    Object.defineProperty(this, "getterID", {
        get: function () {
            return _id;
        }
    });
};
//create inheritance
Sub58.prototype = Object.create(Super58.prototype);
Sub58.prototype.constructor = Sub58;
Sub58.prototype.proc = function () {
    var q;
    var out = [];
    var tmp = this.getterStr;
    if (tmp.length >= 3) {
        tmp = tmp.slice(tmp.length - 3);
        for (q = 0;q < 4;q += 1) {
            out.push(tmp);
        }
    }
    return out;
};

/**
*@constructor 
*Super59
*@param {string} str
*@defaulat 'abcd'
*/
var Super59 = function (str = "abcd") {
    var _str = str;
    Object.defineProperty(this, "getterStr", {
        get: function () {
            return _str;
        },
        set: function (a) {
            if (typeof a === "string") {
                _str = a;
            }
        }
    });
};
/**
*@constructor
*Sub59
*@description  subclass
*@param {string} str
*@param {string} id an identifier
**/
var Sub59 = function (str, id) {
    var _id = id;
    Super59.call(this, str);
    Object.defineProperty(this, "getterID", {
        get: function () {
            return _id;
        }
    });
};
Sub59.prototype = Object.create(Super59.prototype);
Sub59.prototype.constructor = Sub59;

/**
*@function
*Sub59
*@description  to extract the first half of a string of even length
**/
Sub59.prototype.proc = function () {
    var tmp = this.getterStr;
    if ((tmp.length % 2) === 0) {
        return tmp.slice(0, (tmp.length >> 1));
    }
};
/**
*@constructor 
*Super60
*/

var Super60 = (function () {
    var buffer = "moOwnPrivateIndex";
    function Super60 () {
        this[buffer] = [];
    }
    Super60.prototype = {
        constructor: Super60,
        add: function (str) {
            this[buffer] = str;
        },
        toString: function () {
            return this[buffer];
        }
        
    };
    return Super60;
}()); 
        
/**
*@constructor
*Sub60
*@param {string} str
*@param {string} id
**/
var Sub60 = function (str, id) {
    var idKey = "key1";
    this[idKey] = id;
    Object.defineProperty(this, "getterID", {
        get: function () {
            return _id;
        }
    });
    Super60.call(this);
    this.add(str);
};
//make inheritance
Sub60.prototype = Object.create(Super60.prototype);
Sub60.prototype.constructor = Sub60;
Sub60.prototype.proc = function () {
    var tmp = this.toString();
    console.log(this.prototype);
    return tmp.slice(1,tmp.length-1);
};
/**
*@constructor 
*Super61
*@param {string} str1
*@param {string} str2
**/
var Super61 =(function () {
    var bufKey1 = "string1";
    var bufKey = "string2";
    
    function Sup61 (str1 = "ab", str2 = "cd") {
        this[bufKey1] = str1;
        this[bufKey2] = str2;
    }
    
    Sup61.prototype{
        constructor: Sup61,
        setStrings: function (a, b) {
            if ((typeof a === "string") && (typeof a === "string")) {
                this[bufKey1] = a;
                this[bufKey] = b;
            }
        },
        concat: function () {
            return this[bufKey1].slice(1) + this[bufKey2];
        }
    }
    return Sup61;
})();

 /***IIFE start practics - a singleton **/
/**
*@constructor 
*Singl63
*@param {string} str1
*@param {string} str2
**/
var Singl62 = ( function (a) {
    //private member
    var _priv  = a;
    return {
        setInner: function (z) {
            if(typeof z === "string"){
                _priv = z;
            }
        },
        slice : function () {
            if(_priv.length >= 3) {
                var tmp = _priv.slice(_priv.length-3, _priv.length) + _priv; 
            }
        }
    }
 }("123"));
/**
singleton 
*Singl63
*@param {string} str1
*@param {string} str2
**/
var Singl63 = (function (a) {
//private number
    var _inner = a;
    return {
        setInner: function (z) {
            if ((typeof z === "string") && (z.length >= 3)) {
                _inner = z;
            }
        },
        proc: function () {
            if (_inner.length % 2 !== 0) {
                var mid = Math.round(_inner.length / 2);
                return _inner.slice(mid - 2, mid + 1);
            }
            return "";
        }
    };
}("abc"));

/**
singleton 
*Singl64
*@param {string} str1
*@param {string} str2
**/
var Singl64 = (function (a, b) {
    var _priv1 = a;
    var _priv2 = b;
    return {
        setPriv: function (z1, z2) {
            if ((typeof z1 === "string") && (typeof z2 === "string")) {
                _priv1 = z1;
                _priv2 = z2;
            }
        },
        proc: function () {
            var cmp = _priv1.length - _priv2.length;
            if (_priv1.length === _priv2.length) {
                return _priv1 + _priv2;
            }
            if (cmp > 0) {
                return _priv2;
            } else {
                return _priv1;
            }
        }
    };
}(""));
/**
singleton 
*Singl65
**/

var Singl65 = (function (a) {
    var _priv = a;
    return {
        setPriv: function (z) {
            _priv = z;
        },
        proc: function () {
            if (_priv.length >= 6) {
                return /Script$/g.test(_priv);
            }
        }
    };
}("javaScript"));
/**
singleton 
*Singl66
**/
var Singl66 = (function (a) {
    var _priv = a;
    return {
        setPriv: function (z) {
            _priv = z;
        },
        proc: function () {
            if (/(?:Los(\w|-)+)|(?:New(\w|-)+)/g.test(_priv)) {
                return true;
            }
            return _priv;
        }
    };
}("Los-Angeles"));
/**singleton
*Singl67
**/
var Singl67 = (function (a) {
    var _priv = a;
    return {
        setPriv: function (z) {
            _priv = z;
        },
        proc: function () {
            if (/(^P\w+)|(\w+P$)/gm.test(_priv)) {
                return _priv.slice(1, _priv.length - 1);
            } else {
                return _priv;
            }
        }
    };
}("Popoff"));
/**singleton
*Singl67
**/
var Singl68 = (function (a) {
    var _priv = a;
    return {
        setPriv: function (z) {
            _priv = z;
        },
        proc: function (c) {
            //check a conditon
            if (c <= _priv.length) {
                var reg = new RegExp("(?:^\\w{" + c + "})|(?:\\w{" + c + "}$)", "gm");
                var out = [];
                out.push(reg.exec(_priv)[0]);
                var tmp = reg.exec(_priv);
                if (tmp !== null) {
                    out.push(tmp[0]);
                }
                return out.join("");
            }
            return "";
        }
    };
}("Wi"));

/**singleton
*Singl69
**/
var Singl69 = (function (z) {
    var _priv = z.slice();
    return {
        setPriv: function (k) {
            if (Array.isArray(k)) {
                _priv = k.slice();
            }
        },
        proc: function () {
            var sum = 0;
            _priv.forEach(function (val) {
                sum += val;
            });
            return sum;
        }
    };
}([1, 2, 3]));
/**singleton
*Singl70
**/
var Singl70 = (function (z) {
    var _priv = z.slice();
    /**defune an object for return**/
    var w = {
        setPriv: function (a) {
            if (Array.isArray(a)) {
                _priv = a.slice();
            }
        },
        proc: function () {
            var tmp = [];
            tmp.push(_priv[1]);
            tmp.push(_priv[2]);
            tmp.push(_priv[0]);
            return tmp;
        }
    };
    /****define G e t t e r and s e t t e r********/
    Object.defineProperty(w, "bridge", {
        get: function () {
            return _priv;
        },
        set: function (z) {
            _priv = z.slice();
        }
    });
    return w;
}([1, 2, 3]));
/**
*@function 
*clos71
*@param {[integer]} an array of integers
*@description check whether 1 appears in first or last position of a given array of integers
**/
var clos71 = function (a) {
  var _inner = [];
  if (Array.isArray(a)) {
    _inner = a.slice();
  }
  var myObj = {
    proc: function () {
      if (_inner.length >= 1) {
        return !!(((_inner[0] === 1) && (_inner[_inner.length - 1] === 1)))
      }
      return false;
    }
  }
  // define setter & getter
  Object.defineProperty(myObj, 'bridge', {
    get: function () {
      return _inner
    },
    set: function (x) {
      if (Array.isArray(x)) {
        _inner = x.slice();
      }
    }
  });
  return myObj;
};
/**
*@function
*clos72
*@param {[integer]} an array of integers
*@description check whether the first or the last position of a given array are the same
**/
var clos72 = function (z) {
  var _priv = (Array.isArray(z)) ? z.slice() : [];
  var innerObj = {
    proc: function () {
      return (_priv[0] === _priv[_priv.length - 1])
    }
  };
  Object.defineProperty(innerObj, 'bridge', {
    get: function () {
      return _priv;
    },
    set: function (x) {
      if (Array.isArray(x)) {
        _priv = x.slice();
      }
    }
  });
  return innerObj;
}
/**
*@function
*clos73
*@param {[integer]} an array of integers
*@description reverse the elements of a given array of integers length 3
**/
 var clos73 = function (x) {
  var _priv = (Array.isArray(x))
    ? x.slice()
    : [];
  var myObj = {
    proc: function () {
      return _priv.reverse()
    }
  };
  Object.defineProperty(myObj, 'bridge', {
    get: function () {
      return _priv;
    },
    set: function (z) {
      if (Array.isArray(z)) {
        _priv = z.slice();
      }
    }

  });
     return myObj;
};
/**
*@function
*clos74
*@param {[integer]} an array of integers
*@description  find the larger value between the first or last
and set all the other elements with that value.
**/
var clos74 = function (x) {
  var _inner = (Array.isArray(x))
    ? x.slice()
    : [];

  var myObj = {
    proc: function () {
      var tmp = (_inner[0] > _inner[_inner.length - 1])
        ? _inner[0]
        : _inner[_inner.length - 1];
      return _inner.map(function (value, index) {
        // if it is not a first or a last elemrnt
        if ((index > 0) && (index < _inner.length - 1)) {
          return tmp;
        } else {
          return value;
        }
      });
    }
  }
  Object.defineProperty(myObj, 'bridge', {
    get: function () {
      return _inner;
    },
    set: function (z) {
      if (Array.isArray(z)) {
        _inner = z.slice();
      }
    }
  });
  return myObj;
}
/**
*@function
*clos75
*@param {[integer]} an array of integers
*@description  find the larger value between the first or last
and set all the other elements with that value.
**/
var clos75 = function(a ,b ) {
    var _inA = [];
    var _inB = [];
    if((Array.isArray(a) === true) && (Array.isArray(b) === true) ) {
        _inA = a.slice();
        _inB = b.slice();
    }
    var myObj = {
        proc: function () {
            var tmp = [];
            tmp.push(_inA[Math.round(_inA.length / 2) - 1]);
            tmp.push(_inB[Math.round(_inB.length / 2) - 1]);
            return tmp;
       }   
    };
    Object.defineProperty (myObj, "bridge", {
        get: function () {
            return [_inA, _inB];
        },
        set: function (a) {
            if((Array.isArray(a[0]) === true) && (Array.isArray(a[1]) === true)) {
                _inA = a[0].slice();
                _inB = a[1].slice();
            }
        }
    });
    return myObj;
}
/**
*@function
*clos76
*@param {[integer]} an array of integers
*@description create a new array taking the first and last elements from a given array of integers and 
length >= 1.
**/
var clos76 = function (x) {
  var _inner = (Array.isArray(x))
    ? x.slice()
    : [];
  var myObj = {
    proc: function () {
      if (_inner.length > 1) {
        return [_inner[0], _inner[_inner.length - 1]];
      } else if (_inner.length === 1) {
        var tmp = [];
        return tmp.concat(_inner[0]);
      }
    }
  }
    
  Object.defineProperty(myObj, 'bridge', {
    set: function (x) {
      _inner = x.slice();
    },
    get: function () {
      return _inner;
    }
  });
  return myObj;
};
/**
*@function
*clos77
*@param {[integer]} an array of integers
*@description Are the array contain 1 or 3?
**/
var clos77 = function (x) {
  var _inner = [];
  if (Array.isArray(x)) {
    _inner = x.slice();
  }
  var myObj = {
    proc: function () {
      return ((_inner[0] === 1) || (_inner[0] === 3))
        ? true
        : !!(((_inner[1] === 1) || (_inner[1] === 3)));
    }
  }
  Object.defineProperty(myObj, 'bridge', {
    set: function (z) {
      _inner = z.slice();
    },
    get: function () {
      return _inner;
    }
  });
  return myObj;
}
/**
*@function
*clos79
*@param {[integer]} an array of integers
*@description  test whether a given array of integers contains 30 or 40 twice.Length 0...2
**/
var clos79 = function (x) {
  var _inner = x.slice();
  var myObj = {
    proc: function () {
      if ((_inner[0] === 40) || (_inner[0] === 30)) {
        return (_inner[0] === _inner[1]);
      }
    }
  }
  Object.defineProperty(myObj, 'bridge', {
    get: function () {
      return _inner;
    },
    set: function (x) {
      _inner = x.slice();
    }
  });
  return myObj;
};
/**
*@function
*clos80
*@param {[integer]} an array of integers
*@description  swap the first and last elements of a given array of integers
**/
 var clos80 = function (z) {
  var _inner = [1, 2];
  if (z.length >= 2) {
    _inner = z.slice();
  }
  var myObj = {
    proc: function () {
      var tmp = _inner[_inner.length - 1];
      _inner[_inner.length - 1] = _inner[0];
      _inner[0] = tmp;
    }
  }
  Object.defineProperty(myObj, 'bridge', {
    set: function (z) {
      _inner = z.slice();
    },
    get: function () {
      return _inner;
    }
  })
  return myObj;
}
/**
 *@function
*clos81 
*@param {[integer]} an array of integers
*@description   add two digits of a given positive integer of length two
**/
 var clos81 = function (z) {
  var _inner = z;
  var myObj = {
    proc: function () {
      var tmp = _inner.toString().split('');
      return parseInt(tmp[0]) + parseInt(tmp[1]);
    }
  };
  Object.defineProperty(myObj, 'bridge', {
    set: function (q) {
      _inner = q;
    },
    get: function () {
      return _inner;
    }
  });
  return myObj;
}
/**
 *@function
*clos83
*@param {[integer]} an array of integers
*@description   to find the longest string from a given array of strings
**/
var clos83 = function (a) {
  var _inner = a.slice();
  var myObj = {
    proc: function () {
      var tmp = _inner.sort(function (a, b) {
        return (a.length > b.length) ? 1 : (a.length < b.length) ? -1 : 0;
      })
      return tmp[tmp.length-1];
    }
  };
  Object.defineProperty(myObj, 'bridge', {
    set: function (z) {
      _inner = z.slice();
    },
    get: function () {
      return _inner;
    }
  });
  return myObj;
}; 
/**
*@function
*clos84
*@param {string}
**/
var clos84 = function (z) {
  var _inner = z.slice();
  var myObj = {
    proc: function () {
      var a1 = _inner.split('');
      var tmp = a1.map(function (val, index) {
        var code = val.codePointAt(0);
          if(code >= 122) {
              return String.fromCodePoint(97 | 0);
          }
        return String.fromCodePoint(code + 1);
      });
      return tmp;
    }
  }
  Object.defineProperty(myObj, 'bridge', {
    get: function () {
      return _inner
    },
    set: function (z) {
      _inner = z.slice()
    }
  })
  return myObj
}
/**
*@function
*clos85
*@param {string}
**/
var clos85 = function (z) {
  var _inner = [];
  if (Array.isArray(z)) {
    _inner = z.slice();
  }
  var myObj = {
    proc: function () {
      var tmp1 = 0;
      var tmp2 = 0;
      _inner.map(function (val, index) {
        // for even elements (0,2,4,6)
        if ((index % 2 === 0) || (index === 0)) {
          tmp1 += val;
        } else {
          tmp2 += val;
        }
      })
      return [tmp1, tmp2];
    }
  }
  Object.defineProperty(myObj, 'bridge', {
    set: function (z) {
      if (Array.isArray(z)) {
        _inner = z.slice();
      }
    },
    get: function () {
      return _inner;
    }
  })
  return myObj;
}

/**
 *@function
*clos86
*@param {[integer]} an array of integers
*@description  find the types of a given angle
**/
var clos86 = function (z) {
  var _inner = 1;
  if ((z <= 180) && (z > 0)) {
    _inner = z;
  }
  var myObj = {
    proc: function () {
      return (_inner < 90)
        ? 'acute'
        : (_inner === 90)
          ? 'right'
          : ((_inner > 90) && (_inner < 180))
            ? 'obtuse' : 'straight';
    }
  };
  Object.defineProperty(myObj, 'bridge', {
    get: function () {
      return _inner;
    },
    set: function (x) {
      // if the condition is right
      if ((x <= 180) && (x > 0)) {
        _inner = x;
      }
    }
  });
  return myObj;
};
/**
***Constructor Pattern LearnPractice
*https://addyosmani.com/resources/essentialjsdesignpatterns/book/
 *@constructor
*Exerc87
*@param {[integer]} an array of integers
*@description  find the types of a given angle
**/
function Exerc87 (one, two) {
  this.arOne = one.slice();
  this.arTwo = two.slice();
  this.proc = function () {
    if(this.arOne.length !== this.arTwo.length) {
        return false;
    }
    var tmp = 0;
    while (tmp < this.arOne.length - 1) {
      if (this.arOne[tmp] !== this.arTwo[tmp]) {
        return false;
      }
      tmp++;
    }
    return true;
  };
}

/**
***Constructors With Prototypes
*https://addyosmani.com/resources/essentialjsdesignpatterns/book/
 *@constructor
*Exerc88
*@param {number} x 
*@param {number} y 
*@param {number} divider 
*@description   to check whether two given integers are similar or not, if a given divisor divides both integers and it does not divide either.  
**/
function Exerc88 (x = 10, y = 20, divider = 5) {
  this.x = x | 0;
  this.y = y | 0;
  this.divider = divider | 0;
}

Exerc88.prototype.proc = function () {
  return ((this.x % this.divider === 0) && (this.y % this.divider === 0));
};

/*** Module pattern *****/
var Mod1 = (function (x) {
  var counter = x;
  return {
    getCounter: function () {
      return counter;
    },
    incCounter: function () {
      counter += 1;
    }

  };
})(1);
/**
*@function
*exerc89
**/

var exerc89 = (function (a = 1, b = 1, res = 2) {
  var _a = a | 0;
  var _b = b | 0;
  var _res = res | 0;
  var privTest = function () {
    return ((_a / _b === _res) || (_a + _b === _res) || (_a - _b === _res) || (_a * _b === _res));
  };
  var setPrivValue = function (a, b, res) {
    _a = a | 0;
    _b = b | 0;
    _res = res |0;
  };
  // public methods
  return {
    proc: function () {
      return privTest();
    },
    setV: function (a, b, c) {
      setPrivValue(a, b, c);
    }
  };
})();

/**
*@function
*exerc90
**/
var exerc90 = (function (a = [1, 8, 7, 6, 5], b = 2) {
  var _ar, _index;
  _ar = a.slice();
  _index = b;
  var getValue = function (k) {
    if (typeof k === 'number') {
      return _ar[_index];
    }
    return NaN;
  };
  var setArrayAndIndex = function (ar, ind) {
    if (Array.isArray(ar)) {
      _ar = ar.slice();
      _index = ind;
    }
  };
  // public methods
  return {
    setValues: function (a, b) {
      setArrayAndIndex(a, b);
    },
    getIndex: function (s) {
      return getValue(s);
    }
  };
})();
/**
*@function
*exerc91
**/
  var exerc91 = (function (z = [1, 2, 3, 4, 5, 6], par = 2) {
  var _arr = z.slice();
  var _ind = par;

  var privFunc = function (Arr1, ser) {
    var index = 0;
    var tmpArray = [];
    var tmp1 = 0;
    var tmp2 = 0;

    while (index <= Arr1.length - ser) {
      tmp2 = 0;
      tmp1 = 0;
      while (tmp1 < ser) {
        tmp2 += Arr1[index + tmp1];
        tmp1++;
      }
      index += 1;
      tmpArray.push(tmp2);
    }
    tmpArray.sort(function (a, b) {
      if (a > b) {
        return 1;
      } if (a < b) {
        return -1;
      }
      return 0;
    });
    return tmpArray[tmpArray.length - 1];
  };
  // public
  return {
    setParameters: function (ar, ind) {
      if (Array.isArray(ar) && (ind <= (ar.length >> 1))) {
        _arr = ar.slice();
        _ind = ind;
      }
    },
    calcMaxSum: function () {
      return privFunc(_arr, _ind);
    }
  };
})();
/** pattern basket**/
var myBasket = (function () {
  var _basket = [];
  /* Value-added tax */
  var calcVAT = function (x) {
    return x * 0.2;
  };

  var removeItem = function (z, psw) {
    if (psw === 'abc') {
      _basket.splice(z, 1);
    }
  };

  var changeCountOfItem = function (index, z, psw) {
    if (psw === 'abc') {
      _basket[index].count = z;
    }
  };
  // public
  return {
    addItem: function (item) {
      _basket.push(item);
    },
    getItemCount: function () {
      return _basket.length;
    },
    getTotal: function () {
      var sum = 0;
      _basket.forEach(function (purchase) {
        sum += purchase.price * purchase.count;
      });
      return sum + calcVAT(sum);
    },
    getAllTheGoods: function () {
      return _basket.slice();
    },
    throwAway: function (i, passw) {
      removeItem(i, passw);
    },
    changeCount: function (index, z, psw) {
      if (z >= 50) {
        console.log('please call to Linguee section of the Shop!The price will be more nice!');
      }
      if ((z > 0) && (z < 50)) {
        changeCountOfItem(index, z, psw);
      }
    }
  };
})();
/***************************************************/
myBasket.addItem({ name: 'bread', price: 1.0, count: 1, units: 'pcs' });
myBasket.addItem({ name: 'milk', price: 1.0, count: 1, units: 'botles' });
myBasket.addItem({ name: 'potato', price: 1.0, count: 1, units: 'Kg' });
console.log(myBasket.getTotal());
console.log(myBasket.getAllTheGoods());
myBasket.throwAway(1, 'abc');
console.log(myBasket.getTotal());
console.log(myBasket.getAllTheGoods());
myBasket.changeCount(1, 5, 'abc');
console.log(myBasket.getTotal());
console.log(myBasket.getAllTheGoods());
/***basket 2**/
/** pattern basket**/
var basket1 = (function () {
  var _basket = [];
  var _calcPDW = function (x) {
    return x * 0.15;
  };
  var _delItem = function (index, psw) {
    if (psw === 'abc') {
      _basket.splice(index, 1);
    }
  };
  return {
    addItem: function (c) {
      _basket.push(c);
    },
    delItem: function (index, psw) {
      if (psw === 'abc') {
        _delItem(index, psw);
      }
    },
    changeCoumtOfItem: function (index, count) {
      if ((count > 0) && (count < 50)) {
        _basket[index].count = count;
      }
      if (count >= 50) {
        console.log('Plese visit or call to our wholesale shop.The price there is more nice!');
      }
    },
    getFullSum: function () {
      var sum = 0;
      _basket.forEach(function (x) {
        sum += x.price * x.count;
      });
      return sum + _calcPDW(sum);
    },
    getAllTheGoods: function () {
      var res = [];
      _basket.forEach(function (x, index) {
        res.push(`${index}-${x.name}-${x.count}-${x.units}-${x.price * x.count + _calcPDW(x.price * x.count)} \n`);
      });
      return res.join('');
    }
  };
})();
/***************************************************/
basket1.addItem({ name: 'bread', price: 1.0, count: 1, units: 'pcs' });
basket1.addItem({ name: 'milk', price: 1.0, count: 1, units: 'botles' });
basket1.addItem({ name: 'potato', price: 1.0, count: 1, units: 'Kg' });
console.log(basket1.getFullSum());
console.log(basket1.getAllTheGoods());
basket1.delItem(1, 'abc');
console.log(basket1.getFullSum());
console.log(basket1.getAllTheGoods());
basket1.changeCoumtOfItem(1, 5);
console.log(basket1.getFullSum());
console.log(basket1.getAllTheGoods());
/***basket 3***/
/*var Goods = function(na="", pr=1.0, co=0, un="pcs", id=1) {
    name: na,
    price: pr,
    count: co,
    units: un,
    id: id,
    type: "goods"
};*/

var Goods = function (nam = '', pri = 1.0, cou = 1, uni = 'Pcs', id = 'id') {
  Object.defineProperties(this, {
    name: {
      value: nam,
      enumerable: true,
      writable: true,
      configurable: false
    },
    price: {
      value: pri,
      enumerable: true,
      writable: true,
      configurable: false
    },
    count: {
      value: cou | 0,
      enumerable: true,
      writable: true,
      configurable: false
    },
    units: {
      value: uni,
      enumerable: true,
      writable: true,
      configurable: false
    },
    id: {
      value: id,
      enumerable: true,
      writable: false,
      configurable: false
    }
  });
};
var Milk = new Goods('milk', 1.5, 1, 'Botle', 'mlk001');
var Bread = new Goods('bread', 1.0, 1, 'Pcs', 'brd124');
var Potato = new Goods('Potato', 0.5, 1, 'Kg', 'pot354');

var novusBasket = function () {
  var _basket = [];
  var _calcVAT = function (x) {
    return x * 0.15;
  };
  /* public methods */
  return {
    addGoods: function (v) {
      /* chek if the object an instance of Goods**/
      if (v instanceof Goods) {
        _basket.push(v);
      }
    },
    removeGoods: function (index) {
      _basket.splice(index, 1);
    },
    calcSum: function () {
      var sum = 0;
      _basket.forEach(function (item) {
        sum += item.price + item.count;
      });
      return sum + _calcVAT(sum);
    },
    changeCount: function (index, count) {
      _basket[index].count = count;
    },
    getBasketInDetais: function () {
      var out = [];
      _basket.forEach(function (item, index) {
        var sum = item.price + item.count;
        out.push(`Num:${index + 1}-${item.name}-${item.count}-${item.units}-price with VAT${sum + _calcVAT(sum)} \n`);
      });
    }
  };
};
/****the thrid basket***/
var Goods = function (nam = '', pri = 1.0, cou = 1, uni = 'Pcs', id = 'id') {
  Object.defineProperties(this, {
    name: {
      value: nam,
      enumerable: true,
      writable: true,
      configurable: false
    },
    price: {
      value: pri,
      enumerable: true,
      writable: true,
      configurable: false
    },
    count: {
      value: cou | 0,
      enumerable: true,
      writable: true,
      configurable: false
    },
    units: {
      value: uni,
      enumerable: true,
      writable: true,
      configurable: false
    },
    id: {
      value: id,
      enumerable: true,
      writable: false,
      configurable: false
    }
  });
};
var Milk = new Goods('milk', 1.5, 1, 'Botle', 'mlk001');
var Bread = new Goods('bread', 1.0, 1, 'Pcs', 'brd124');
var Potato = new Goods('Potato', 0.5, 1, 'Kg', 'pot354');

var novusBasket = (function () {
  var _basket = [];
  var _calcVAT = function (x) {
    return x * 0.15;
  };
  /* public methods */
  return {
    addGoods: function (v) {
      /* chek if the object an instance of Goods**/
      if (v instanceof Goods) {
        _basket.push(v);
      }
    },
    removeGoods: function (index) {
      _basket.splice(index, 1);
    },
    calcSum: function () {
      var sum = 0;
      _basket.forEach(function (item) {
        sum += item.price + item.count;
      });
      return sum + _calcVAT(sum);
    },
    changeCount: function (index, count) {
      _basket[index].count = count;
    },
    getBasketInDetais: function () {
      var out = [];
      _basket.forEach(function (item, index) {
        var sum = item.price + item.count;
        out.push(`Num:${index + 1}-${item.name}-${item.count}-${item.units}-price with VAT${sum + _calcVAT(sum)} \n`);
      });
        return out.join("");
    }
  };
})();

        novusBasket.addGoods(Bread);
        novusBasket.addGoods(Milk);
        novusBasket.addGoods(Potato);
        console.log(novusBasket.calcSum());
        console.log(novusBasket.getBasketInDetais());
        novusBasket.removeGoods(1);
        novusBasket.changeCount(1,5);
        console.log(novusBasket.calcSum());
        console.log(novusBasket.getBasketInDetais());
var cntr = (function () {
  var _cnt = 0;
  return {
    increment: function () {
      _cnt < 10 ? _cnt++ : _cnt = 0;
    },
    getCounter: function () {
      return _cnt;
    }
  };
})();
/*the pattern demonstrates how globals (e.g jQuery, Underscore) can be passed in as arguments to our module's anonymous function*/
var myModule = (function (x) {
  function priv1 () {
    console.log(cntr.getCounter());
  }
  function priv2 () {
    x.increment();
  }
  return {
    adding: function () {
      priv2();
    },
    printing: function () {
      priv1();
    }

  };
})(cntr);

myModule.adding();
myModule.printing();
/**exerc 92 ***/
/** exerc92
*@function
*exerc92
*@param {[number]} arr
**/
var exerc92 = (function (arr) {
  var _arr = arr.slice();
  var myModule = {};
  var privMethod = function () {
    var acc = [];
    var x = 0;
    while (x < _arr.length - 1) {
      acc.push(_arr[x] + _arr[x + 1]);
      x++;
    }
    acc.sort(function (x, y) {
      return (x > y)
        ? 1
        : (x < y)
          ? -1 : 0;
    });
    return acc[acc.length - 1];
  };
  myModule.publicMethod = function () {
    return privMethod();
  };
  myModule.setArray = function (s) {
    if (Array.isArray(s)) {
      _arr = s.slice();
    }
  };
  return myModule;
})([1, 2, 3, 4, 5, 6]);

var exerc92import = (function (z) {
  var privM = function () {
    console.log(z.publicMethod());
  };
  return {
    expExec: function () {
      privM();
    },
    expSet: function (k) {
      z.setArray(k);
    }
  };
})(exerc92);
/** *exercise 94**/
var exerc94 = (function (z) {
  var z1 = 0;
  var index = z1;
  var buf1 = [];
  var _arr = z.slice();
  var findMoreRep = function () {
    var arr1 = _arr.slice();
    arr1.sort(function (x, y) {
      return (x > y)
        ? 1
        : (x < y)
          ? -1 : 0;
    });
    while (index < arr1.length - 1) {
      z1 = 0;
      while ((arr1[index] === arr1[z1 + index]) && (typeof arr1[z1 + index] === 'number')) {
        z1++;
      }
      buf1.push({
        val: arr1[index],
        count: z1
      });
      index += z1;
    }
    buf1.sort(function (x, y) {
      return (x.count > y.count)
        ? 1
        : (x.count < y.count)
          ? -1 : 0;
    });
    return buf1[buf1.length - 1];
  };
  return {
    setArray: function (x) {
      if (Array.isArray(x) && typeof x[0] === 'number') {
        _arr = x.slice();
      }
    },
    getMaximumOf: function () {
      return findMoreRep();
    }
  };
})([1, 2, 3, 4, 5]);

var exerc94exp = (function (ex) {
  var privMethod = function () {
    return ex.getMaximumOf();
  };
  var privSet = function (w) {
    ex.setArray(w);
  };
  var myObj = {};
  myObj.setAr = function (w) {
    privSet(w);
  };
  myObj.calc = function () {
    return privMethod();
  };
  return myObj;
})(exerc94);

exerc94exp.setAr([2, 2, 4, 5, 6, 8, 8, 2, 1, 1, 8, 7, 7, 7, 7, 7]);
console.log(exerc94exp.calc());

/***exerc95***/
/***
*@function
*revealingModule95
**exerc94***/
var revealingModule95 = (function () {
  var _arr = [1, 2, 3];
  var publicInfo = '';

  function privRepalce (older, newer) {
    var myArr = _arr.map(function (value) {
      return (value === older) ? newer : value;
    });
    return myArr.slice();
  }

  function publicSetArray (z) {
    if ((Array.isArray(z)) && (typeof z[0] === 'number')) {
      _arr = z.slice();
    }
  }

  function publicReplace (older, newer) {
    return privRepalce(older, newer);
  }

  /** *return real public pointers to private function and properties */
  return {
    setArray: publicSetArray,
    info: publicInfo,
    replace: publicReplace
  };
})();
revealingModule95.setArray([1, 2, 3, 1, 2, 3]);
console.log(revealingModule95.replace(1, 77));
/** *exerc96*********/
var exerc96RevealingModule = (function () {
  var _arr = [1, 2, 3];
  function privConsecutive () {
    var sum = 0;
    _arr.forEach(function (value, index) {
      if (index < _arr.length - 1) {
        sum += Math.abs(value - _arr[index + 1]);
      }
    });
    return sum;
  }

  function publicCalc () {
    return privConsecutive();
  }

  function publicSetArray (z) {
    /* check is a given array an array of numbers */
    if (Array.isArray(z) && (typeof z[0] === 'number')) {
      _arr = z.slice();
    }
  }

  return {
    proc: publicCalc,
    loading: publicSetArray
  };
})();
exerc96RevealingModule.loading([1, 2, 3, 2, -5]);
console.log(exerc96RevealingModule.proc());

/** *exerc98*
*@function
*revealingModule98
***/
var revealingModule98 = (function () {
  var _str = [];
  var result;
  function privTestAndProcess () {
    var upper = 0; var lower = 0;
    _str.forEach(function (value) {
      if (/[A-Z]/g.test(value)) {
        upper++;
      } else if (/[a-z]/g.test(value)) {
        lower++;
      }
    });
    result = _str.join('');
    return (upper < lower)
      ? result.toLowerCase()
      : (upper > lower)
        ? result.toUpperCase() : result;
  }

  function publSetValue (z) {
    if (typeof z === "string") {
      _str = z.split('');
    }
  }

  function pubProcess () {
    return privTestAndProcess();
  }
  /** **return an public object***/
  return {
    fillArray: publSetValue,
    proc: pubProcess
  };
})();
revealingModule98.fillArray("KOlobook");
console.log(revealingModule98.proc());
/** *exerc99*
*@function
*revealingModule99
***/
var revealingModule99 = (function () {
  var _firstString = '';
  var _secondString = '';
  var tmp = 0;
  function compare (a, b) {
    return (a > b)
      ? 1
      : (a < b)
        ? -1 : 0;
  }
  function testLetter (etalon, val) {
    var len = 0;
    var index = 0;
    var match = 0;
    while(index < etalon.length){
        innerIndex = 0;
        while ( innerIndex < val.length ) {
            if (etalon[index] === val[innerIndex]) {
                 match++;
                 val.splice(innerIndex, 1);
                 break;
            }
            innerIndex++;
        }
        index++;
    }
      return etalon.length === match;
  }
    
  function privAreTheEqualLetter () {
    var arr1 = _firstString.toLocaleLowerCase();
    var arr1 = arr1.split('');
    var arr2 = _secondString.toLocaleLowerCase();
    var arr2 = arr2.split('');
   // arr1.sort(compare);
   // arr2.sort(compare);
    if (arr1.length < arr2.length) {
      return testLetter(arr1, arr2);
    } else if (arr1.length > arr2.length) {
      return testLetter(arr2, arr1);
    } else if (arr1.length === arr2.length) {
      return testLetter(arr2, arr1);
    }
  }
  function publicSetArray (x, y) {
    if ((typeof x === 'string') && (typeof y === 'string')) {
      _firstString = x;
      _secondString = y;
    }
  }
  function publicAreTheEqual () {
    return privAreTheEqualLetter();
  }
  return {
    setArrays: publicSetArray,
    proc: publicAreTheEqual
  };
})();
revealingModule99.setArrays('lock', 'overlocked');
console.log(revealingModule99.proc());    

/** *exerc100*
*@function
*revealingModule100
***/
var revealingModule100 = (function () {
  var _myArray1 = [];
  var _myArray2 = [];
  function sorting (a, b) {
    return (a > b)
      ? 1
      : (a < b)
        ? -1 : 0;
  }
  function isEqualOne () {
    var index = 0;
    while (index < _myArray1.length) {
      if (_myArray2.indexOf(_myArray1[index]) !== -1) {
        return true;
      }
      index++;
    }
    return false;
  }

  function pubSetArrays (a, b) {
    _myArray1 = a.slice();
    _myArray2 = b.slice();
  }

  function pubCmp () {
    return isEqualOne();
  }

  return {
    fillarrays: pubSetArrays,
    proc: pubCmp
  };
})();
revealingModule100.fillarrays([1, 2, 3], [6, 8, 3]);
console.log(revealingModule100.proc()); 
/****EXERCISE 101*****/
var mySingleton101 = (function () {
  var instance;
  var _arr = "";

  function init () {
    function tst () {
      var tmp1 = true;
      /* ceck if there any other symbols excluding Latin symbols */
      if (/[^A-Za-z]/g.test(_arr)) {
        return false;
      }
     var tmpArray = _arr.split("");
      tmpArray.forEach(function (value, index) {
        if (index < tmpArray.length - 1) {
          if ((/[a-z]/g.test(value) && /[a-z]/g.test(tmpArray[index + 1])) || (/[A-Z]/g.test(value) && /[Z-Z]/g.test(tmpArray[index + 1]))) {
            tmp1 = false;
          }
        }
      });
      return tmp1;
    }

    function init (k) {
      if (typeof k === 'string') {
        _arr = k;
      }
    }

    return {
      pubInit: function (z) {
        init(z);
      },
      pubTest: function () {
        return tst();
      }
    };
  }

  return {
    getInstance: function () {
      if (!instance) {
        instance = init();
      }
      return instance;
    }
  };
})();
var myQ = mySingleton101.getInstance();
myQ.pubInit("MaRrY");
console.log(myQ.pubTest());

/****Exercise 102***/
 var mySingleton102 =  (function () {
    var instance;
    function init() {
        var _arraay = [];
        var count = 0;
          function iteration(value, index) {
            count = 0;
              if(index < _arraay.length - 1){
                if(value > _arraay[index+1]) {
                  count++;
                 } 
              }
          }
        function findHowManyInversions () {
          _arraay.forEach(iteration);
        return count;
        }
        
        return {
            fillArray: function (z) {
                if (Array.isArray(z)) {
                    _arraay = z.slice();
                }
            },
            proc: function () {
                return findHowManyInversions();
            },
            getLastResult: function () {
                return count;
            }  
        };    
    };
    return {
        if ( !instance ) {
         instance = init();
        }   
        return instance;
    }
    })();
/** **Exercise 102***/
var mySingleton102 = (function () {
  var instance;
  function init () {
    var _arraay = [];
    var count = 0;
    function iteration (value, index) {
  
      if (index < _arraay.length - 1) {
        if (value > _arraay[index + 1]) {
          count++;
        }
      }
    }
    function findHowManyInversions () {
      count = 0;
      _arraay.forEach(iteration);
      return count;
    }

    return {
      fillArray: function (z) {
        if (Array.isArray(z)) {
          _arraay = z.slice();
        }
      },
      proc: function () {
        return findHowManyInversions();
      },
      getLastResult: function () {
        return count;
      }
    };
  }
  return {
    getInstance: function () {
      if (!instance) {
        instance = init();
      }
      return instance;
    }
  };
})();
var z77 = mySingleton102.getInstance();
z77.fillArray([1,2,3,4,5,1]);
z77.proc();
/****exerc 103*****/
var mySingleton103 = (function () {
  var instance;
  function init (q) {
    var _x = 1;
    if (typeof q === 'number') {
      _x = q;
    }

    function sorting (x, y) {
      return (x > y)
        ? 1
        : (x < y)
          ? -1 : 0;
    }

    function findMaxNum () {
      var _z = [];
      var result = [];
      var intermediate = [];
      _z = _x.toString();
      _z = _z.split('');
      _z.forEach(function (value, index) {
        intermediate = _z.slice();
        intermediate.splice(index, 1);
        result.push(parseInt(intermediate.join('')));
      });
      result.sort(sorting);
      return result[result.length - 1];
    }

    return {
      setValue: function (z) {
        if (typeof z === 'number') {
          _x = z;
        }
      },
      proc: function () {
        return findMaxNum();
      }
    };
  }

    return {
      initInstance: function (q) {
        if (!instance) {
          instance = init(q);
        }
        return instance;
      }
    };
  
})();
var z77 = mySingleton103.initInstance(351);
z77.proc();
/** **exerc 103*****/
var mySingleton104 = (function () {
  var instance;
  function init (x, zd) {
    var _Arr = [];
    var _zd = 2;
    if ((Array.isArray(x)) && (typeof x[0] === 'number')) {
      _Arr = x.slice();
    }
    if (typeof zd === 'number') {
      _zd = zd;
    }
    /* calc function**/
    function findGreaterDiff () {
      var tmpArr = [];
      var z = 0;
      _Arr.forEach(function (value, index) {
        if (index < _Arr.length - 1) {
          z = value - _Arr[index + 1];
          z = Math.abs(z);
          if (z < _zd) {
            tmpArr.push(z);
          }
        }
      });
      tmpArr.sort(function (x, y) {
        return (x > y)
          ? 1
          : (x < y)
            ? -1 : 0;
      });
      return tmpArr[tmpArr.length - 1];
    }
    /** *return public **/
    return {
      init: function (c) {
        if (Array.isArray(c)) {
          if (typeof c[0] === 'number') {
            _Arr = c.slice();
          }
        }
      },
      proc: function () {
        return findGreaterDiff();
      },
      defComparator: function (q) {
        if (typeof q === 'number') {
          _zd = q;
        }
      }
    };
  }
  /** **get an instance or create the one (if it doesn`t exist)**/
  return {
    initInstance: function (x = [1, 2, 3, 4], zd = 2) {
      if (!instance) {
        instance = init(x, zd);
      }
      return instance;
    }
  };
})();
var z77 = mySingleton104.initInstance([1,2,4,7,14,28,7,8,9], 10);
z77.proc();
/** **exercise 105 about a REcursion**/
var mySingleton105 = (function () {
  var instance;
  function init (z1) {
    var _num = 1;
    if (typeof z1 === 'number') {
      _num = z1;
    }
    function checkSum (value) {
      var q = 0;
      /* преобразуем целое число в массив символов например 256 = [2,5,6] */
      var str = value.toString().split('');
      /* если длинна равна 1 */
      if (str.length === 1) {
        return value;
      } else {
        /* итерация всего массива */
        str.forEach(function (x) {
          /* х - значение ячейки массива */
          q += parseInt(x);
        });
        /* а вот и рекурсия */
        return checkSum(q);
      }
    }

    function writeValue (q) {
      _num = (typeof q === 'number') ? q : _num;
    }

    return {
      setVal: function (z) {
        writeValue(z);
      },
      checkSumProc: function () {
        return checkSum();
      }
    };
  }

  return {
    initInstance: function (q) {
      if (!instance) {
        instance = init(q);
      }
      return instance;
    }
  };
})();
/** **exercise 106 about a REcursion**/
var mySingleton106 = (function () {
  var instance;
  function init (val, div) {
    var _val = 4;
    var _div = 2;
    var result = 0;
    if ((typeof val === 'number') && (typeof div === 'number') && (div >= 2)) {
      _val = val;
      _div = div;
    }

    function divUntil (value, divider) {
        var tmp = value / divider;
      if (Math.round(tmp) === (tmp)) {
        divUntil(value / divider, divider);
          return tmp;
      } else {
        result = value;
        return value;
      }
    }

    return {
      setValues: function (x, div) {
        if ((typeof x === 'number') && (typeof div === 'number') && (div >= 2)) {
          _val = x;
          _div = div;
        }
      },
      proc: function () {
     console.log(divUntil(_val, _div));
          return result;
      }
    };
  }

  return {
    initInstance: function (val, div) {
      if (!instance) {
        instance = init(val, div);
      }
      return instance;
    }
  };
})();
var z77 =  mySingleton106.initInstance(28,2);
    console.log(z77.proc());
/** *OBSERVER dessign pattern****/
/* The first thing we are going to do is to begin creating the subject that will hold an interface for managing its observers */

function ObserverList () {
  this.observers = [];
}
/** add an observer in list for notifying**/
ObserverList.prototype.add = function (obj) {
  this.observers.push(obj);
};

ObserverList.prototype.removeAt = function (i) {
  this.observers.splice(i, 1);
};
/** get a specific observer by index */
ObserverList.prototype.get = function (i) {
  if (typeof i !== 'number') {
    console.log('The index of an array is NaN');
  } else {
    return this.observers[i];
  }
};
/** length of observer`s list */
ObserverList.prototype.count = function () {
  return this.observers.length;
};
/** seach index of a specific observer */
ObserverList.prototype.indexOf = function (observer, startIndex = 0) {
  var currentIndex = startIndex;

  while (this.observers.length > currentIndex) {
    if (this.observers[currentIndex] === observer) {
      return currentIndex;
    }
    currentIndex++;
  }
  return -1;
};

ObserverList.prototype.notifyAll = function (data) {
  const totalObservers = this.observers.length;
  for (let ind = 0; ind < totalObservers; ind++) {
    this.observers[ind].update(data);
  }
};
/* creating Subject - and attach the interface directly on a property */
function Subject () {
  this.observers = new ObserverList();
}
/* Now we will go ahead and define the Observer: */
function Observer () {
  var _priv = '';
  this.update = function (data) {
    /* ...do something */
    _priv = data;
    console.log(_priv);
  };
}

/** *observer design pattern using DOM - change text ***/
ObserverList = function () {
  this.list = [];
};

ObserverList.prototype.add = function (obj) {
  this.list.push(obj);
};

ObserverList.prototype.removeAt = function (index) {
  if (typeof index === 'number') {
    this.list.splice(index, 1);
  }
};

ObserverList.prototype.indexOf = function (obj, index = 0) {
  var tmp = 0;
  while (tmp < this.list.length) {
    if (obj === this.list[tmp]) {
      return tmp;
    }
  }
  return -1;
};

ObserverList.prototype.getAt = function (index) {
  if (typeof index !== 'number') {
    console.error('The index of array is NaN');
    return -1;
  }
  return this.list[index];
};

ObserverList.prototype.notifyAll = function (data) {
  this.list.forEach(function (obj) {
    obj.update(data);
  });
};

function Subject () {
  this.list = new ObserverList();
}

function Observer (id) {
  var _nodeHandle = document.getElementById(id);
  this.update = function (data) {
    _nodeHandle.firstChild.nodeValue = data;
  };
}
/** *the thrid pattern***/
function ListOfObserver () {
  this.observers = [];
}

ListOfObserver.prototype.add = function (obj) {
  this.observers.push(obj);
};

ListOfObserver.prototype.removeAt = function (k) {
  if (typeof k !== 'number') {
    console.error('index of an array isn`t a number');
  } else {
    this.observers.splice(k, 1);
  }
};

ListOfObserver.prototype.indexOf = function (obj, index = 0) {
  var tmp = index;
  while (this.observers.length > tmp) {
    if (this.observers[tmp] === obj) {
      return tmp;
    }
    tmp++;
  }
  /* if object isn`t in list */
  return -1;
};

ListOfObserver.prototype.get = function (index) {
  if (typeof index !== 'number') {
    console.error('the index of an array is NaN');
    return -1;
  } else {
    return this.observers[index];
  }
};

ListOfObserver.prototype.notifyAll = function (msg) {
  this.observers.forEach(function (value) {
    value.update(msg);
  });
};

/** *deine Subject (transmitter of events to all the observers) ***/
function Subject () {
  this.list = new ListOfObserver();
}

/** observer definition**/
function Observer (id) {
  var _nodeHandler = document.getElementById(id);
  this.update = function (dat) {
    /** set text of node in DOM */
    _nodeHandler.firstChild.nodeValue = dat;
  };
}

var obs1 = new Observer("A");
var obs2 = new Observer("B");
var obs3 = new Observer("C");
var Subj = new Subject();
Subj.list.add(obs1);
Subj.list.add(obs2);
Subj.list.add(obs3);
/*******----1  0  7----****/ 
/** *107 exercise**/
function ListOfObserver () {
  this._array = [];
}

ListOfObserver.prototype.add = function (obj) {
  this._array.push(obj);
};

ListOfObserver.prototype.removeAt = function (x) {
  if (typeof x === 'number') {
    this._array.splice(x, 1);
  }
};

ListOfObserver.prototype.indexOf = function (obj) {
  var tmp = -1;
  this._array.some(function (value, index) {
    if (value === obj) {
      tmp = index;
      return true;
    }
    return false;
  });
  return tmp;
};

ListOfObserver.prototype.valueOf = function (index) {
  if (typeof index === 'number') {
    return this._array[index];
  }
};

ListOfObserver.prototype.notifyAll = function (msg) {
  this._array.forEach(function (value) {
    value.update(msg);
  });
};

        
        
function Subject (val) {
  this.observers = new ListOfObserver();
  var _dataForProc = [];
  if (Array.isArray(val)) {
    _dataForProc = val.slice();
  }

  function sort (x, y) {
    return (x > y)
      ? 1
      : (x < y)
        ? -1 : 0;
  }
this.calcPairs = function() {
    var sortedArr = _dataForProc.sort(sort);
    var result = [];
    var index = sortedArr.length - 1;
    var innertmp = 0;
    
    while (index > 0) {
      innertmp = index - 1;
      while (innertmp >= 0) {
        if (sortedArr[index] % sortedArr[innertmp] === 0) {
          result.push([sortedArr[index], sortedArr[innertmp]]);
        }
        innertmp--;
      }
      index--;
    }
   var str = [];
    if(result.length > 0){
        result.forEach(function(val){
            str.push("<"+val.toString()+">");
        });
        this.observers.notifyAll(str.toString());
    } else {
        this.observers.notifyAll("It_has_found_0");
    }
  }
}
function Observer (id) {
  var handle = document.getElementById(id);
  this.update = function (data) {
      handle.firstChild.nodeValue = data;
    }
}

var obs1 = new Observer("A");
var obs2 = new Observer("B");
var obs3 = new Observer("C");

var Subj = new Subject([2,4,8,6]);
Subj.observers.add(obs1);
Subj.observers.add(obs2);
Subj.observers.add(obs3);
Subj.calcPairs();
/***-Exerc--1  0  8---Modue & Observer patterns together**/
/**When I joined this two patterns - it wasn`t work properly.
The aim of union hasn`t been achived******/
var ObserverList108 = function () {
    this.list = [];
}
ObserverList108.prototype.add = function (obj) {
    this.list.push(obj);
}
ObserverList108.prototype.removeAt = function (num) {
    this.list.splice(num, 1);
}
ObserverList108.prototype.valueOf = function (num) {
    if(typeof num === "number") {
        return this.list[num];
    } else {
        return null;
    }
}
ObserverList108.prototype.indexOf = function (obj, i = -1) {
    this.list.some( function(value, index) {
       if(value === obj) {
           i = index;
           return true;
       } else {
           return false;
       } 
    });
    return i;
}

ObserverList108.prototype.notifyAll = function (msg) {
    this.list.forEach(function (value) {
        value.update(msg);
    });
}
/**subject constructor**/
var Subject108 = function (q1,q2) {
    this.lst = new ObserverList108();
    var that = this;
    var _arr1WithData1 = [];
    var _arr1WithData2 = [];
    if(Array.isArray(q1) && Array.isArray(q2)){
        _arr1WithData1 = q1.slice();
        _arr1WithData2 = q2.slice();
    }
    function dotProduct () {
        var tmp = 0;
        _arr1WithData1.forEach(function (value, index) {
            tmp += value * _arr1WithData2[index];
        });
        that.lst.notifyAll(tmp.toString());
    }
        this.fillArrays = function(q1,q2) {
            if(Array.isArray(q1) && Array.isArray(q2)){
               _arr1WithData1 = q1.slice();
               _arr1WithData2 = q2.slice();
             }
            console.log(that.lst.add);
        }
        this.proc = function (){
            dotProduct();
        }
};
/***obsserver constructor*/
var Observer108 = function (id){
    var _handle =document.getElementById(id);
    this.update = function(msg)  {
        _handle.lastChild.nodeValue = msg;
    }
};
var Subj = new Subject108([2,5,3],[1,2,4]);
var Obs1 = new Observer108("A");
var Obs2 = new Observer108("B");
var Obs3 = new Observer108("C");
Subj.fillArrays([1,2,3],[4,5,6]);
Subj.lst.add(Obs1);
Subj.lst.add(Obs2);
Subj.lst.add(Obs3);
Subj.proc();
/** ***pattern Publish/Subscribe*****/

function pubSub1 () {
  var subscribers = {};

  function publish (eventName, data) {
    if (!Array.isArray(subscribers[eventName])) {
      return;
    }
    subscribers[eventName].forEach(function (callback) {
      callback(data);
    });
  }

  function subscribe (eventName, callback) {
    if (!Array.isArray(subscribers[eventName])) {
      subscribers[eventName] = [];
    }
    subscribers[eventName].push(callback);
    const index = subscribers[eventName].length - 1;
    return {
      unsubscribe () {
        subscribers[eventName].splice(index, 1);
      }
    };
  }

  return {
    publish,
    subscribe
  };
}
/*****another implementation ***/
/* author: Ramesh Fadatare  "JavaScript Publish/Subscribe Pattern Example"
https://www.javaguides.net/2019/06/javascript-publishsubscribe-pattern-example.html*/
function PubSub () {
    /*приватный обьект - для харнения имени оповещения(имя массива) и
     колбэк функций (содержимое массива). Массивов столько - сколько типов оповещений*/ 
  var events = {};
/*возвращается обьект с членами-функциональными выражениями*/
  return {
      /*подписать на событие eventName функцию callback*/
    subscribe: function (eventName, callback) {
      events[eventName] = events[eventName] || [];
      events[eventName].push(callback);
    },
      
    unsubscribe: function (eventName, callback) {
      if (events[eventName]) {
        for (var i = 0; i < events[eventName].length; i++) {
          if (events[eventName][i] === callback) {
            events[eventName].splice(i, 1);
            break;
          }
        }
      }
    },
      /*оповестить всех которые прописаны в массиве с именем eventName*/
    publish: function (eventName, data) {
      if (events[eventName]) {
        events[eventName].forEach(function (fn) {
          fn(data);
        });
      }
    },
      /*удалить массив-держатель eventName функций обратных вызовов*/  
    removeEvent: function (eventName) {
      if (events[eventName]) {
        delete events[eventName];
      }
    }

  };
}

var pbs1 = new PubSub();
function hello(data){
    console.info("hello:"+data);
}
function word(data) {
    console.info("world"+data);
}

function anotherF(data) {
    console.log("..."+data);
}
/*подписываем на событие one функцию hello*/
pbs1.subscribe("one",hello);

pbs1.subscribe("one",word);
pbs1.subscribe("two",anotherF);
/*оповещаем всех подписанных на событие one  и предаем им данные 777*/
pbs1.publish("one",777);
pbs1.publish("two",(Math.random()*10) | 0);
/*отписываем функцию hello от события one*/
pbs1.unsubscribe("one",hello);
/**удаляем событие вообще*/
pbs1.removeEvent("two");
pbs1.publish("one",777);

/****** one more time - version 1  pub/sub  i.e. Event Agreggator*****************/
var PubSub2 = function() {
    /***this variable is in a closure*/
    var subscribers = {};
    /****return object**/
    return {
        ///**subscribe for event -add a callback function
        subscribe: function (eventName, callback) {
            if (!subscribers[eventName]) {
                subscribers[eventName] = [];
            } 
            subscribers[eventName].push(callback);
        },
        /***unsubscribe**/
        unsubscribe: function (eventName, callback) {
            var res = -1;
            if(subscribers[eventName]){
               subscribers[eventName].every(function(val, index){
                   if (val === callback) {
                       res = index;
                       return false;
                   }
                   return true;
               });
            }
            if(res >= 0){
                subscribers[eventName].splice(res, 1);
            }
            return res;
        },
        /***send value**/
        publish: function(eventName, value) {
            if(subscribers[eventName]) {
                subscribers[eventName].forEach(function (callback){
                    callback(value);
                });
                return 0;
            }
            return -1;
        },
        /***delet event ***/
        removeEvent: function(eventName) {
            if (subscribers[eventName]){
                delete subscribers[eventName];
                return 0;
            }
            return -1;
        }
            
        };
    }

/***for working in DOM***/
var setText = function(id){
    var _handle = document.getElementById(id);
    return {
        /**set text in node*/
        proc: function(data) {
            if(_handle) {
                _handle.firstChild.nodeValue = data.toString();
            } else {
                console.error("wrong DOM node ID!");
            }
        }
        
    }
}

var n1 =new setText("A");
var n2 =new setText("B");      
var n3 =new setText("C");
var pub = new PubSub2;
pub.subscribe("time",n1.proc);
/************************************/
var subpub3 = function () {
  var subscribers = {};
  var _array = [];
  return {
    subscribe: function (eventName, callback) {
      subscribers[eventName] = subscribers[eventName] || [];
      subscribers[eventName].push(callback);
    },
    unsubscribe: function (eventName, callback) {
      if (subscribers[eventName]) {
        var res = -1;
        subscribers[eventName].every(function (fn, index) {
          if (fn === callback) {
            res = index;
            return false;
          }
          return true;
        });
        if (res >= 0) {
          subscribers[eventName].splice(res, 1);
        }
        return res;
      }
    },
    publish: function (eventName, data) {
      if (subscribers[eventName]) {
        subscribers[eventName].forEach(function (callback) {
          callback(data);
        });
        return 0;
      }
      return -1;
    },
    removeEvent: function (eventName) {
      if (subscribers[eventName]) {
        delete subscribers[eventName];
        return 0;
      }
      return -1;
    },
    setArray: function (x) {
      if (typeof x === 'number') {
        var tmp = [];
        var q = x | 0;
        while (q > 0) {
          tmp.push(q);
          q--;
        }
        _array = tmp.slice();
        return 0;
      }
      return -1;
    },
    calcNumberOfEven: function () {
      var tmp = 0;
      _array.forEach(function (val) {
        if (val % 2 === 0) {
          tmp++;
        }
      });
      return tmp;
    }
  };
};
/**********exercise 111 Publisher/subscriber i.e. Event Agreggator***/
var ExercPub111 = function () {
  var events = {};
  var _x = 0;
  var _y = 0;
  var _z = 0;
  return {
    setNumbers: function (x, y, z) {
      _x = x;
      _y = y;
      _z = z;
    },
    isEqual: function () {
      return (_x === _y)
        ? _z
        : (_z === _y)
          ? _x
          : (_x === _z)
            ? _y : 0;
    },
    subscribe: function (eventName, callback) {
      events[eventName] = events[eventName] || [];
      events[eventName].push(callback);
    },
    unsubscribe: function (eventName, callback) {
      var index = -1;
      if (events[eventName]) {
        events[eventName].every(function (fn, ind) {
          if (callback === fn) {
            index = ind;
            return false;
          }
          return true;
        });
        if (index >= 0) {
          events[eventName].splice(index, 1);
        }
      }
      return index;
    },
    publish: function (eventName, data) {
      if (events[eventName]) {
        events[eventName].forEach(function (callback) {
          callback(data);
        });
        return 0;
      }
      return -1;
    },
    removeEvent: function (eventName) {
      if (events[eventName]) {
        delete events[eventName];
        return 0;
      }
      return -1;
    }
  };
};
/***for working in DOM***/
var setText = function(id){
    var _handle = document.getElementById(id);
    return {
        /**set text in node*/
        proc: function(data) {
            if(_handle) {
                _handle.firstChild.nodeValue = data.toString();
            } else {
                console.error("wrong DOM node ID!");
            }
        }
        
    }
}

/****109exerc***/
var Exerc109 = function () {
  var subscribers = {};
  var _array = [];
  return {
    subscribe: function (eventName, callback) {
      subscribers[eventName] = subscribers[eventName] || [];
      subscribers[eventName].push(callback);
    },
    unsubscribe: function (eventName, callback) {
      var tmp = -1;
      if (subscribers[eventName]) {
        subscribers[eventName].every(function (val, ind) {
          if (val === callback) {
            tmp = ind;
            return false;
          }
          return true;
        });
        if (tmp >= 0) {
          subscribers[eventName].splice(tmp, 1);
        }
      }
      return tmp;
    },
    publish: function (eventName, data) {
      if (subscribers[eventName]) {
        subscribers[eventName].forEach(function (fn) {
          fn(data);
        });
        return 0;
      }
      return -1;
    },
    removeEvent: function (eventName) {
      if (subscribers[eventName]) {
        delete subscribers[eventName];
        return 0;
      }
      return -1;
    },
    simple: function () {
      var _Arr = _array;
      var tmpArray = [];
      var divider = 2;
      var index = _Arr.length;
      while (divider < index) {
        tmpArray = _Arr.filter(function (val) {
          if ((val % divider !== 0) || (val === divider)) {
            return val;
          }
        });
        _Arr = tmpArray.slice();
        divider++;
      }
      return _Arr.slice(1);
    },
    setArray: function (x) {
      if (Array.isArray(x)) {
        _array = x.slice();
        return 0;
      }
      return -1;
    }
  };
};
/*****************exercise112********************/
var Exerc112 = function () {
  var _x = 0;
  var subscribers = {};
  return {
    subscribe: function (eventName, callback) {
      if (typeof callback === "function") {
        subscribers[eventName] = subscribers[eventName] || [];
        subscribers[eventName].push(callback);
        return 0;
      }
      return -1;
    },
    unsubscribe: function (eventName, callback) {
      var tmp = -1;
      if (subscribers[eventName]) {
        subscribers[eventName].every(function (val, ind) {
          if (callback === val) {
            tmp = ind;
            return false;
          }
          return true;
        });
        if (tmp >= 0) {
          subscribers[eventName].splice(tmp, 1);
        }
      }
      return tmp;
    },
    publish: function (eventName, data) {
      if (subscribers[eventName]) {
        subscribers[eventName].forEach(function (fn) {
          fn(data);
        });
        return 0;
      }
      return -1;
    },
    removeEvent: function (eventName) {
      if (subscribers[eventName]) {
        delete subscribers[eventName];
        return 0;
      }
      return -1;
    },
    setX: function (x) {
      if ((typeof x === 'number') && (x < Infinity)) {
        _x = x | 0;
        return 0;
      }
      return -1;
    },
    calc: function () {
      var q = 0;
      var tmp = 1;
      var str = '';
      while (q < _x) {
        tmp += tmp * q;
        q++;
      }
      str = tmp.toString();
        tmp = str.match(/0+\b/g);
        return tmp ? tmp[0].length : 0;
    }
  };
};
/********exercise 113********/
var Exerc113 = function (z) {
  var _z = 1;
  /* checking if z is a number */
  if (typeof z === 'number') {
    _z = z;
  }
  var eventlist = {};

  return {
    setValue: function (q) {
      if (typeof q === 'number') {
        _z = q;
        return 0;
      } else {
        return -1;
      }
    },
    subscribe: function (eventName, callback) {
      eventlist[eventName] = eventlist[eventName] || [];
      if (typeof callback === 'function') {
        eventlist[eventName].push(callback);
        return 0;
      } else {
        return -1;
      }
    },
    unsubscribe: function (eventName, callback) {
      /* checking if exist our property of the object "eventlist" */
      if (eventlist[eventName]) {
        var tmp = -1;
        eventlist[eventName].every(function (fn, index) {
          if (fn === callback) {
            tmp = index;
            return false;
          }
          return true;
        });
        if (tmp >= 0) {
          /* remove */
          eventlist[eventName].splice(tmp, 1);
        }
      }
      return tmp;
    },
    publish: function (eventName, value) {
      eventlist[eventName].forEach(function (callback) {
        callback(value);
      });
    },
    removeEvent: function (eventName) {
      if (eventlist[eventName]) {
        delete eventlist[eventName];
        return 0;
      }
      return -1;
    },
    calc: function () {
      var acc = 0;
      var divider = 1;
      while (divider <= _z) {
        acc += _z / divider;
        divider <<= 1;
      }
      return acc;
    }
  };
};
/*****recursion exercise**/
/***summa of numbers from 1 to n*/
 function SUM (n){
    return (n === 0) ? n : (n + SUM(n-1));
}
/**result of multiplication numbers from 1 to n*/
function multiply (n) {
    return (n === 1) ? n : (n* multiply(n-1));
}
/**number x in power n***/
function rec_001 (x, n) {
    return (n === 1) ? x : (x * rec_001(x, n-1));
}
 /**перебор всех массивов включая вложенные - сумма всех элементов**/
var someNumbers = {
  one: {
    oneOne: [1, 2, 3],
    oneTwo: [4, 5, 6]
  },
  two: [7, 8, 9],
  three: {
    threeOne: [1, 2, 3],
    threeTwo: [4, 5, 6]
  }
};

function summAll (obj) {
  if (Array.isArray(obj)) {
    return obj.reduce(function (a, b) { return a + b; }, 0);
  } else {
    var sum = 0;
    for (var innerObj in obj) {
      sum += summAll(obj[innerObj]);
    }
    return sum;
  }
}
//************one more example recursion**/var someDataStructure = {
  milk: {
    burjenka: {
      rjazenka: [10, 'bootles'],
      kefir: [12, 'bootles'],
      milk: [9, 'bootles']
    },
    prostokwashino: {
      rjazenka: [15, 'bootles'],
      kefir: [18, 'bootles'],
      milk: [12, 'bootles']
    }

  },
  bread: {
    kulinychi: {
      baton: [9, 'pcs'],
      ukrainsky: [15, 'pcs']
    },
    kiyivhlib: {
      baton: [10, 'pcs'],
      ulrainsky: [10, 'pcs']
    }
  }
};

function findAndAdd (obj) {
  if (Array.isArray(obj)) {
    return obj[0];
  } else {
    var sum = 0;
    for (var innerObj in obj) {
      sum += findAndAdd(obj[innerObj]);
    }
    return sum;
  }
}
/****Algorithm Interview Questions and Answers (JS)***/
/**
https://medium.com/@shinjukudev/algorithm-interview-questions-and-answers-js-c44f0872b9b2
**/

/**Find the missing number in a given integer array of 1 to 100 ([1,2,3,5,6,7,9,10] 4,8 -missing numbers)***/
function findMissing1 (inpArray,missedNumbers = []) {
  
  /***checking is it an array or not***/
    if (typeof inpArray[0] === "number"){
          ;
        /*if number missed*/
        if(inpArray[0]+1 !== inpArray[1]){
           missedNumbers.push(inpArray[0]+1);
        }
        return findMissing1(inpArray.slice(1),missedNumbers.slice());
     }
    return missedNumbers;
}
console.log(findMissing1([1,2,3,5,6,7,9,10,11]));
/***************/
function findMissing1 (inpArray) {
  /** *checking is it an array or not***/
  if (typeof inpArray[0] === 'number') {
    /* if number missed */
    if (inpArray[0] + 1 !== inpArray[1]) {
      console.log(inpArray[0] + 1);
    }
    findMissing1(inpArray.slice(1));
  }
}
/**reversing string (very slowly solution - don`t use it)**/
function reverseString (str) {
  if (str === '') {
    return '';
  }
  return reverseString(str.slice(1)) + str[0];
}
/**it ISN`T WORKING FUNCTION ! *************/
var filesys = {
    tmp:{
        ie:["temp.tmp","google.tmp","user.tmp"],
        autocad:["roof.bak","garrage.tmp","house.tmp","bridge.tmp"]
    },
    applications: {
        work: {
                 autocad: ["acad.exe","display.sys","drv.sys","printers.dll"]
              },
        games: {
                  tetris: ["tetris.exe","game.bin","playeg.cfg"]
               }
    },
    dos: {
        system: {
          keyrus: ["keyrus.com","init.bat"],
          mouse: ["mouse.com","mikki.ini"]
        }
    }
};

function findAllTheFiles(obj, names = []) {
    if(Array.isArray(obj)){
        obj.forEach(function(val){
            name.push(val);
        });
    }
    
    for(var inner in obj){
        return findAllTheFiles(obj[inner],names);
    }
    
}
/*the second implementation*/
function findAllTheFiles(obj){
    if(Array.isArray(obj)){
        var q = "";
        obj.forEach( function(val){
            q += val + ",";
        });
        return q;
    } else {
        var result = "";
        for (var branch in obj) {
            result += "|" + findAllTheFiles(obj[branch]);
        }
        return result;
    }
}
/*****************/
function findDuplicated(ar){
    var o1 = {};
    
    for(var loop = 0; loop < ar.length-1;loop++){
        if(o1[ar[loop]] === ar[loop]){
            return ar[loop];
        } else {
            o1[ar[loop]] = ar[loop];
        }
    }
    return false;
}
        
        function findDuplicated_rec (ar, o1={}) {
          if(ar.length==0){
              return o1;
          } else {
              o1[ar[0]] = ar[0];
              return findDuplicated_rec (ar.splice(1),o1);
          }
    }
/***find maximal and minimal value in the array***/
function findMaxMin (arr) {
  var max = arr[0];
  var min = arr[0];
  for (var q = 0; q < arr.length; q++) {
    if (arr[q] < min) min = arr[q];
    if (arr[q] > max) max = arr[q];
  }
  return { lo: min, hi: max };
}

function findMaxMin_rec (arr, minMax = [arr[0], arr[0]]) {
  if (arr.length === 0) {
    return minMax;
  } else {
    // set minimal
    if (arr[0] < minMax[0]) minMax[0] = arr[0];
    // set maximal
    if (arr[0] > minMax[1]) minMax[1] = arr[0];
    return findMaxMin_rec(arr.slice(1), minMax);
  }
}

console.log(findMaxMin_rec([7, 5, 98, 15, 2]));
/***find cumulative sum**/
function findCumulativeSum (arr, result = [0]) {
  if (arr.length === 0) {
    return result.slice(1);
  } else {
    result.push(result[result.length - 1] + arr[0]);
    return findCumulativeSum(arr.slice(1), result);
  }
}
/**************7. Find all pairs in an array of integers
whose sum is equal to a given number***/
function removeDuplicate (arr, num) {
  var mySet = new Set();
  var result = [];
  arr.forEach(function (value) {
    if (mySet.has(value)) {
      result.push(value);
    } else {
      mySet.add(value);
    }
  });
  var last = [];
  result.forEach(function (val) {
    if (val * 2 === num) last.push(val);
  });
  return last;
}
console.info(removeDuplicate([1, 2, 3, 4, 1, 2, 5], 4));
/***MEDIATOR pattern example***/
// each participant is just a module that wants to talk to other modules(other participants)
var Participant = function (name) {
  this.name = name;
  this.chatroom = null;
};
// each participant has method for talking, and also listening to other participants
Participant.prototype = {
  send: function (message, to) {
    this.chatroom.send(message, this, to);
  },
  recieve: function (message, from) {
    log.add(from.name + ' to ' + this.name + ': ' + message);
  }
};
/* chatroom is the Mediator: it is the hub where participants send messages to,
 and receive messages from */
var Chatroom = function () {
  var participants = {};
  return {
    register: function (participant) {
      participants[participant.name] = participant;
      participant.chatroom = this;
    },
    send: function (message, from) {
      for (var key in participants) {
        if (participants[key] !== from) { // you cant message yourself !
          participants[key].recieve(message, from);
        }
      }
    }
  };
};
// log helper

var log = (function () {
  var log = '';

  return {
    add: function (msg) { log += msg + '\n'; },
    show: function () { console.log(log); log = ''; }
  };
})();

var yoko = new Participant('Yoko');
var john = new Participant('John');
var paul = new Participant('Paul');
var ringo = new Participant('Ringo');

var chatroom = new Chatroom();
chatroom.register(yoko);
chatroom.register(john);
chatroom.register(paul);
chatroom.register(ringo);

yoko.send('All you need is love.');
yoko.send('I love you John.');
paul.send('Ha, I heard that!');

log.show();
/** *********some another MEDIATOR example */
var Host0206 = function (hostName) {
  this.hostName = hostName;
  this.hub = null;
};

Host0206.prototype = {
  send: function (message, to) {
    this.hub.send(message, this.hostName);
  },
  recieve: function (message, from) {
    console.log('Host @' + this.hostName + ' had recieved: ' + message + ' from@' + from);
  }
};

var Hub0206 = function () {
  var hosts = {};
  return {
    register: function (host) {
      if (!hosts[host.hostName]) {
        hosts[host.hostName] = host;
        hosts[host.hostName].hub = this;
      }
    },
    send: function (msg, from) {
      for (var key in hosts) {
        /* prevention to send himself */
        if (key !== from) {
          hosts[key].recieve(msg, from);
        }
      }
    }
  };
};
var host1 = new Host0206('IBM');
var host2 = new Host0206('Yandex');
var host3 = new Host0206('Google');
var myHub = new Hub0206();
myHub.register(host1);
myHub.register(host2);
myHub.register(host3);
host1.send('I`m the best company in the world!');
host3.send('You aren`t.I`m!');
host2.send('Putin will win!Slawa cheburNETu!');
/** *an another module Mediator**/
var ModuleLnk0206 = function (name) {
  this.name = name;
  this.router = null;
};

ModuleLnk0206.prototype = {
  receive: function (msg, from) {
    console.info('@' + this.name + 'has recived: ' + msg + 'from @' + from);
  },
  send: function (msg, to) {
    this.router.sendTo(msg, this.name, to);
  }
};

var RouterMediator0206 = function () {
  var modules = {};
  return {

    register: function (module) {
      if (!modules[module.name]) {
        modules[module.name] = module;
        modules[module.name].router = this;
        return true;
      }
      return false;
    },
    sendTo: function (message, from, to) {
      /* if broadcasting */
      if (to === 'BROADCAST') {
        var q = [];
        q = Object.keys(modules);
        q.forEach(function (val, index) {
          if (val !== from) { /* exclude sender */
            modules[val].receive(message, from);
          }
        });
        return true;
      } else {
        /* if the reciever exist */
        if (modules[to]) {
          modules[to].receive(message, from);
          return true;
        }
      }
      return false;
    }
  };
};
var host1 = new ModuleLnk0206('IBM');
var host2 = new ModuleLnk0206('Yandex');
var host3 = new ModuleLnk0206('Google');
var myHub = new RouterMediator0206();
myHub.register(host1);
myHub.register(host2);
myHub.register(host3);
host1.send('I`m the best company in the world!', 'Yandex');
host3.send('You aren`t.I`m!', 'IBM');
host2.send('Putin will win!Slawa cheburNETu!', 'Google');
host3.send('We are the best anyway!', 'BROADCAST');
/** **an another module Mediator - translate message to HTML**/
var point0206 = function (name) {
  this.name = name;
  this.mediator = null;
};
point0206.prototype = {
  send: function (msg, to) {
    this.mediator.sendTo(msg, this.name, to);
  },
  receive: function (msg, from) {
    console.info('@' + this.name + ' had recieved ' + msg + ' from @' + from);
  }
};

var translateToHTML0206 = function () {
  var points = {};

  return {
    registerPoint: function (myPoint) {
      /* if the point isn`t exist */
      if (!points[myPoint.name]) {
        /* then add the one */
        points[myPoint.name] = myPoint;
        points[myPoint.name].mediator = this;
        return true;
      } else {
        return false;
      }
    },
    sendTo: function (msg, from, to = '') {
      /* if broadcasting */
      if (to === '') {
        for (var q in points) {
          /* you cannot sent from you to you */
          if (q !== from) {
            points[q].receive('<p>' + msg + '</p>', from);
          }
        }
        return true;
      } else {
        /* if an adresat exists */
        if (points[to]) {
          points[to].receive('<p>' + msg + '</p>', from);
          return true;
        }
        /* if the adressat hasn`t been found */
        return false;
      }
    }
  };
};
        
/** wrapper a message in a table */
var myNode0306 = function (name) {
  this.name = name;
  this.mediator = null;
};

myNode0306.prototype = {
  receive: function (msg, from) {
    for (var q = 0; q < msg.length; q++) {
      console.log(msg[q]);
    }
  },
  send: function (msg, to) {
    this.mediator.sendTo(msg, this.name, to);
  }
};

var wrapperMediator0306 = function () {
  var nodes = {};
  return {
    register: function (myNode) {
      if (!nodes[myNode.name]) {
        nodes[myNode.name] = myNode;
        nodes[myNode.name].mediator = this;
        return true;
      } else {
        return false;
      }
    },
    sendTo: function (msg, from, to) {
      if (nodes[to]) {
        var str = [];
        str.push('--------------------------------------------');
        str.push('|from       msg           to|');
        str.push(from + '  ' + msg + '  ' + to);
        str.push('--------------------------------------------');
        nodes[to].receive(str.slice(), from);
        return true;
      } else {
        /* if aderessat hadn`t been found */
        return false;
      }
    }
  };
};
/** ***one more mediator */
var itemPoint0306 = function (name) {
  this.name = name;
  this.mediator = null;
};

itemPoint0306.prototype = {
  send: function (msg, to) {
    this.mediator.sendTo(msg, this.name, to);
  },
  receive: function (msg, from) {
    console.log('#' + this.name + '>' + msg + ' from@' + from);
  }

};

var Hub0306 = function () {
  var items = {};
  return {
    register: function (item) {
      /** if doesn`t exist.. */
      if (!items[item.name]) {
        // create it
        items[item.name] = item;
        items[item.name].mediator = this;
        return true;
      } else {
        return false;
      }
    },
    sendTo: function (msg, from, to) {
      // if an adressat exist*/
      if (items[to]) {
        items[to].receive(msg, from);
        return true;
      } else {
        /* if the adressat didn`t exist */
        return false;
      }
    }
  };
};

/**** pattern C O M M A N D *********/
function Calculator () {
  this._currentValue = 0;
  this.commands = [];
}

Calculator.prototype = {
  execute: function (command) {
    this._currentValue = command.execute(this._currentValue);
    this.commands.push(command);
  },
  undo: function () {
          var cmd = this.commands.pop();
          this._currentValue = cmd.undo(this._currentValue);
  },
  getCurrentValue: function () {
    return this._currentValue;
  }

};

function add (value) {
    return value + this.value;
}

function sub (value) {
    return value - this.value;
}
        
        
function Command (fn, undo, value) {
  this.execute = fn;
  this.value = value;
  this.undo = undo;
}

function AddCommand (value) {
  Command.call(this, add, sub, value);
}

 function SubCommand (value) {
  Command.call(this, sub, add, value);
}
        
var myCalc = new Calculator();
myCalc.execute(new AddCommand(19));
console.info(myCalc.getCurrentValue());
myCalc.execute(new SubCommand(1));
console.info(myCalc.getCurrentValue());
myCalc.undo();
console.info(myCalc.getCurrentValue());
/***one more function ***/
var Calculator1106 = function () {
  this._currentValue = 0;
  this.stack = [];
};

Calculator1106.prototype = {
  command: function (cmd) {
    this._currentValue = cmd.command(this._currentValue);
    this.stack.push(cmd);
  },
  undo: function () {
    var u = this.stack.pop();
    this._currentValue = u.undo(this._currentValue);
  },
  getCurrentValue: function () {
    return this._currentValue;
  }
};

function add (val) {
  return this.value + val;
}

function sub (val) {
  return val - this.value;
}

function addCommand (val) {
  this.value = val;
  this.command = add;
  this.undo = sub;
}

function subCommand (val) {
  this.value = val;
  this.command = sub;
  this.undo = add;
}

/*17 06*/
function Calculator () {
  this.currentValue = 0;
  this.commands = [];
}

Calculator.prototype = {
  execute: function (cmd) {
    this.currentValue = cmd.operation(this.currentValue);
    /* save an coomand into a stack */
    this.commands.push(cmd);
  },
  undo: function () {
    var previous = this.commands.pop();
    this.currentValue = previous.undo(this.currentValue);
  },
  getCurrentValue: function () {
    return this.currentValue;
  }
};

function sum (q) {
  return this.value + q;
}

function difference (q) {
  return q - this.value;
}

function division (q) {
  return  q / this.value;
}

function multiplication (q) {
  return this.value * q;
}

function addCommand (value) {
  this.value = value;
  this.operation = sum;
  this.undo = difference;
}

function subCommand (value) {
  this.operation = difference;
  this.undo = sum;
  this.value = value;
}

function multCommand (value) {
  this.value = value;
  this.operation = multiplication;
  this.undo = division;
}

function divCommand (value) {
  this.value = value;
  this.operation = division;
  this.undo = multiplication;
}
/*******************************************/
function Calc1806 () {
  this.currentValue = 0;
  this.stack = [];
}

Calc1806.prototype = {
  execute: function (inpCommandObj) {
    this.currentValue = inpCommandObj.action(this.currentValue);
    this.stack.push(inpCommandObj);
  },
  undo: function () {
    var prevCommandObj = this.stack.pop();
    this.currentValue = prevCommandObj.undo(this.currentValue);
  },
  getValue: function () {
    console.info(this.currentValue);
  }
};

var add = function (val) { return this.value + val; };
var sub = function (val) { return val - this.value; };
function AddCommand (value) {
  this.value = value;
  this.action = add;
  this.undo = sub;
}

function SubCommand (value) {
  this.value = value;
  this.action = sub;
  this.undo = add;
}
/**************************function and classes definition**/

function add (val) {
    return this.value + val;
}

function sub (val) {
    return val - this.value;
}

function AddCommand (value) {
    this.value = value;
    this.command = add;
    this.undo = sub;
}

function SubCommand (value) {
    this.value = value;
    this.undo = add;
    this.command = sub;
}

function Calc2206 () {
    var initialValue = 0;
    var stack = [];
    
    return {
        execute: function (inpCommand) {
            initialValue = inpCommand.command(initialValue);
            stack.push(inpCommand);
        },
        undo: function () {
            var previous = stack.pop();
            initialValue = previous.undo(initialValue);
        },
        getResult: function () {
            console.log(initialValue);
        }
    }
}
/******SHOP**/
function Shop2206 (cash = 0, storehouse = 10, price = 1) {
  var _balance = {
    _cash: cash,
    _storehouse: storehouse
  };
  var _price = price;
  var _purchasesHistory = {};
  return {
    execute: function (purchase) {
      _balance = purchase.buy(_balance, price);
      var id = purchase.id;
      delete purchase.id;
      _purchasesHistory[id] = purchase;
    },
    undo: function (id) {
      if (_purchasesHistory[id]) {
        _balance = _purchasesHistory[id].undo(_balance, price);
        delete _purchasesHistory[id];
      } else {
        console.error('ID isn`t exist!');
      }
    },
    getHistory: function () {
      return _purchasesHistory;
    },
    getBalance: function () {
      return _balance;
    }
  };
}

function buy (balanceOfShop, priceOfOne) {
  balanceOfShop._cash = balanceOfShop._cash + (this.discount * priceOfOne * this.goods);
  balanceOfShop._storehouse = balanceOfShop._storehouse - this.goods;
  return balanceOfShop;
}

function buck (balanceOfShop, priceOfOne) {
  balanceOfShop._cash = balanceOfShop._cash - (this.discount * priceOfOne * this.goods);
  balanceOfShop._storehouse = balanceOfShop._storehouse + this.goods;
  return balanceOfShop;
}

function Purchase (count, id) {
  this.goods = count;
  this.id = id;
  this.buy = buy;
  this.undo = buck;
  this.discount = 1;
  if (this.goods >= 10) {
    this.discount = 0.8;
  } if (this.goods >= 100) {
    this.discount = 0.6;
  }
}
var myShop = new Shop2206(10, 500, 2);
console.log(myShop.getBalance());
myShop.execute(new Purchase(5, 'buy1'));
console.log(myShop.getBalance());
/**with prototype***/
function Shop2206 (cash = 0, storehouse = 10, price = 1) {
  var _balance = {
    _cash: cash,
    _storehouse: storehouse
  };
  var _price = price;
  var _purchasesHistory = {};
  return {
    execute: function (purchase) {
      _balance = purchase.buy(_balance, price);
      var id = purchase.id;
      delete purchase.id;
      _purchasesHistory[id] = purchase;
    },
    undo: function (id) {
      if (_purchasesHistory[id]) {
        var prev = _purchasesHistory[id];  
        _balance = prev.buck( _balance, price);
        delete _purchasesHistory[id];
      } else {
        console.error('ID isn`t exist!');
      }
    },
    getHistory: function () {
      return _purchasesHistory;
    },
    getBalance: function () {
      return _balance;
    }
  };
}



function Purchase (count, id) {
  this.goods = count;
  this.id = id;
  //this.buy = buy;
  //this.undo = buck;
  this.discount = 1;
  if (this.goods >= 10) {
    this.discount = 0.8;
  } if (this.goods >= 100) {
    this.discount = 0.6;
  }
}

Purchase.prototype = {
   buy: function  (balanceOfShop, priceOfOne) {
          balanceOfShop._cash = balanceOfShop._cash + (this.discount * priceOfOne * this.goods);
          balanceOfShop._storehouse = balanceOfShop._storehouse - this.goods;
          return balanceOfShop;
        },

  buck: function (balanceOfShop, priceOfOne) {
        balanceOfShop._cash = balanceOfShop._cash - (this.discount * priceOfOne * this.goods);
        balanceOfShop._storehouse = balanceOfShop._storehouse + this.goods;
        return balanceOfShop;
       }
}
/****************************************************/
function Stock (balance = 1) {
  var countOfProduction = balance;
  var history = {};
  return {
    execute: function (com) {
      countOfProduction = com.command(countOfProduction);
      var identifier = com.id;
      delete com.id;
      history[identifier] = com;
    },
    undo: function (id) {
      if (history[id]) {
        countOfProduction = history[id].rollback(id, countOfProduction);
        delete history[id];
      }
    },
    getBalance: function () {
        return countOfProduction;
    }
  };
}

function Operation (countOfGoods, type, id) {
  this.id = id;
  this.type = type;
  this.transactionCount = countOfGoods;
}

Operation.prototype = {
  command: function (stock) {
    /* from the stock */
    if (this.type === 'from') {
      if (this.transactionCount > stock) {
        console.error('Too many goods!');
        return stock;
      }
      return stock - this.transactionCount;
      /* to the stock */
    } if (this.type === 'to') {
      return stock + this.transactionCount;
    }
  },

  rollback: function (id, stock) {
    /* return from a client to the stock */
    if (this.type === 'from') {
      return stock + this.transactionCount;
      /* return from the stock to a client */
    } if (this.type === 'to') {
      return stock - this.transactionCount;
    }
  }
};
var myStock = new Stock(10);
myStock.execute(new Operation(2,"from","num1"));
console.info(myStock.getBalance());
myStock.execute(new Operation(10,"to","num2"));
console.info(myStock.getBalance());
myStock.execute(new Operation(5,"from","num3"));
console.info(myStock.getBalance());       
myStock.execute(new Operation(3,"to","num4"));
        console.info(myStock.getBalance());
myStock.undo("num1");
console.info(myStock.getBalance()); 
myStock.undo("num2");
console.info(myStock.getBalance()); 
myStock.undo("num3");
console.info(myStock.getBalance()); 
myStock.undo("num4");
console.info(myStock.getBalance()); 
/**************************function and classes definition**/
function Stock (balance = 1) {
  var countOfProduction = balance;
  var history = {};
  return {
    execute: function (com) {
        if (com.transactionCount > countOfProduction && com.type === "from") {
        console.error('Too many goods!');
        return;
      } if (history[com.id]) {
          console.error("ERROR: ID exist!");
          return;
      }
      countOfProduction = com.command(countOfProduction);
      var identifier = com.id;
      delete com.id;
      history[identifier] = com;
    },
    undo: function (id) {
      if (!history[id]) {
         console.error("ERROR:ID has been deleted or wrong!");
          return;
      }
        countOfProduction = history[id].rollback(id, countOfProduction);
        delete history[id];     
    },
    getBalance: function () {
        return countOfProduction;
    }
  };
}

function Operation (countOfGoods, type, id) {
  this.id = id;
  this.type = type;
  this.transactionCount = countOfGoods;
}

Operation.prototype = {
  command: function (stock) {
    /* from the stock */
    if (this.type === 'from') {
      
      return stock - this.transactionCount;
      /* to the stock */
    } if (this.type === 'to') {
      return stock + this.transactionCount;
    }
  },

  rollback: function (id, stock) {
    /* return from a client to the stock */
    if (this.type === 'from') {
      return stock + this.transactionCount;
      /* return from the stock to a client */
    } if (this.type === 'to') {
      return stock - this.transactionCount;
    }
  }
};
/**************************function and classes definition**/
function Command (count, productId, purchaseId) {
  this.count = count;
  this.productId = productId;
  this.purchaseId = purchaseId;
}

Command.prototype = {
  buy: function (stockInfo) {
    var result = {
      productAfterBuyig: stockInfo,
      summa: 0
    }
    result.summa = stockInfo.price * this.count;
    result.productAfterBuyig.count = result.productAfterBuyig.count - this.count;
    return result;
  },
  undo: function (stockInfo) {
    var result = {
      productBeforeBuying: stockInfo,
      summa: 0
    };
    result.summa = stockInfo.price * this.count;
    result.productBeforeBuying.count += this.count;
    return result;
  }
};

function IntoStock (productId, count, transactionId, price, wholesalePrice, unit) {
  this.productId = productId;
  this.count = count;
  this.transactionId = transactionId;
  this.price = price;
  this.wholesalePrice = wholesalePrice;
  this.unit = unit;
}

IntoStock.prototype = {
  toStock: function (stockInfo) {
    var result = {
      price: this.price,
      wholesalePrice: this.wholesalePrice,
      count: this.count,
      unit: this.unit
    };
    if (stockInfo) {
      result.count += stockInfo.count;
    }
    return result;
  }
};

function RetailShop () {
  var stock = {};
  var cash = 0;
  var purchases = {};
  var stockHistory = {};

  return {
    execute: function (cmd) {
      var result = cmd.buy(stock[cmd.productId]);
      if (!result) {
        console.error('ERROR in buying!');
        return;
      } if (purchases[cmd.purchaseId]) {
        console.error('Wrong purchase`s Id!');
        return;
      } 
      cash += result.summa;
        delete result.summa;
       stock[cmd.productId] = result.productAfterBuyig;
      var id = cmd.purchaseId;
      delete cmd.purchaseId;
      purchases[id] = cmd;
    },
    addToStock: function (cmd) {
        if( stockHistory[cmd.transactionId] ){
            console.error("Wrong transaction`s ID!");
            return;
        }
      var newBalance = cmd.toStock(stock[cmd.productId]);
      var prodId = cmd.productId;
        
      stockHistory[cmd.transactionId] = cmd;
      delete cmd.productId;
      stock[prodId] = newBalance;
    },
    rollback: function (purchaseId) {
      if (!purchases[purchaseId]) {
        console.error('Wrong purchase ID!');
        return;
      }
      var back = purchases[purchaseId];
      var result = back.undo(stock[back.productId]);
      stock[back.productId] = result.productBeforeBuying;
      cash -= result.summa;
      delete purchases[purchaseId];
    },
    getProductBalance: function (productId) {
      if (!stock[productId]) {
        console.error('The product isn`t exist!');
        return null;
      }
      return stock[productId];
    },
    getCash: function () {
      return cash;
    }
  };
}
var myShop = new RetailShop();
myShop.addToStock(new IntoStock("milk001",10,"stockOp01",10,5,"bottle"));
myShop.addToStock(new IntoStock("milk001",5,"stockOp02",10,5,"bottle"));
myShop.addToStock(new IntoStock("bread001",10,"stockOp03",2,1,"pcs"));
console.log(myShop.getProductBalance("milk001"));
console.log(myShop.getProductBalance("bread001")); 
myShop.execute(new Command(1,"milk001","buyNum001"));
myShop.execute(new Command(2,"milk001","buyNum002"));
myShop.execute(new Command(1,"bread001","buyNum003"));
console.log(myShop.getCash());
console.log(myShop.getProductBalance("milk001"));
myShop.rollback("buyNum002");
console.log(myShop.getCash());
console.log(myShop.getProductBalance("milk001"));
/***any object can nas access from a reference***/
/**i.e. you can pass an object  to another function as parameter and change it*/
function Shop () {
  var stock = {};
  var cash = 0;
  var purchasesList = {};
  var stockList = {};
  return {
    execute: function (cmd) {
      if (!stock[cmd.productID]) {
        console.error('Wrong product ID!');
        return;
      } if (purchasesList[cmd.purchaseID]) {
        console.error('purchase ID exists!');
        return;
      }
      var summa = cmd.buy(stock[cmd.productID]);
      cash += summa;
      var id = cmd.purchaseID;
      delete cmd.purchaseID;
      purchasesList[id] = cmd;
    },

    undo: function (purchaseID) {
      if (!purchasesList[purchaseID]) {
        console.error('purchase ID isn`t exists!');
        return;
      }
      var rollback = purchasesList[purchaseID];
      var summa = rollback.buck(stock[rollback.productID]);
      cash -= summa;
      //result.count += prevStockInfo.count;
      delete purchasesList[purchaseID];
    },
    addToStock(cmd) {
        if (stockList[cmd.trancactonID]) {
            console.error("Transacton ID wrong!");
            return;
        }
      cmd.toStock(stock);
        var id = cmd.trancactonID;
        delete cmd.trancactonID;
        stockList[id] = cmd;
    }

  };
}

function Command (ProductID, count, purchaseID) {
  this.productID = ProductID;
  this.purchaseID = purchaseID;
  this.countOfPurchase = count;
  this.timeOfBuy = null;
}

Command.prototype = {
  buy: function (fromStock) {
    var summa = fromStock.price * this.countOfPurchase;
    fromStock.count -= this.countOfPurchase;
    this.timeOfBuy = new Date().toString();
    return summa;
  },
  buck: function (fromStock) {
    var summa = fromStock.price * this.countOfPurchase;
    fromStock.count += this.countOfPurchase;
    return summa;
  }
};

function InStock (productID, transactionID, count, price, wholesalePrice, units) {
  this.productID = productID;
  this.count = count;
  this.price = price;
  this.wholesalePrice = wholesalePrice;
  this.units = units;
  this.trancactonID = transactionID;
}

InStock.prototype.toStock = function (stock) {
 // var toStock;
  if (!stock[this.productID]) {
    stock[this.productID] = {
      count: this.count,
      price: this.price,
      wholesalePrice: this.wholesalePrice,
      units: this.units
    };
    return ;///toStock;
  }
  stock[this.productID].count += this.count;
  ///return toStock;
};
var myShop = new Shop();
myShop.addToStock(new InStock("milk001","stockOp01",10,10,5,"bottle"));
myShop.addToStock(new InStock("milk001","stockOp02",10,10,5,"bottle"));
myShop.addToStock(new InStock("bread001","stockOp03",10,2,1,"pcs"));
myShop.execute(new Command("milk001",1,"buyNum001"));
myShop.execute(new Command("milk001",2,"buyNum002"));
myShop.execute(new Command("bread001",1,"buyNum003"));
myShop.undo("buyNum002");
myShop.undo("buyNum003");
/*27_06*******************************************************************/
/* A cart for purchases constructor */
function Basket () {
  var goods = {};
  return {
    addOneUnit: function (productID) {
      if (goods[productID]) {
        goods[productID].count++;
      } else {
        goods[productID] = { count: 1 | 0 };
      }
    },
    removeGoods: function (productID) {
      if (goods[productID]) {
        delete goods[productID];
      } else {
        console.error('It isn`t these kind of goods in the cart!');
      }
    },
    removeOneUnit: function (productID) {
      if (goods[productID]) {
        if (goods[productID].count > 0) {
          goods[productID].count--;
        }
      } else {
        console.error('It isn`t these kind of goods in the cart!');
      }
    },
    getBasket: function () {
      return Object.assign({}, goods);
    }
  };
}

/* command - a command pattern for the order processing in future */
function Command (basket, purchaseID) {
  this.purchaseID = purchaseID;
  this.basket = basket;
  this.time = null;
}

Command.prototype = {
  buy: function (stock) {
    var summa = 0;
    var wrongGoods = null;
    for (var q in this.basket) {
      if (stock[q] && (stock[q].count >= this.basket[q].count)) {
        stock[q].count -= this.basket[q].count;
        summa += stock[q].price * this.basket[q].count;
      } else if (!stock[q]) {
        console.error('Wrong goodsID!');
        wrongGoods = q;
      } else if (stock[q].count > this.basket[q].count) {
        console.error('It`s too little goods  on the stock');
      }
    }
    this.time = new Date().toString();
    if (wrongGoods) {
      delete this.basket[wrongGoods];
    }
    return summa;
  },
  undo: function (stock) {
    var summa = 0;
    for (var q in this.basket) {
      stock[q].count += this.basket[q].count;
      summa += stock[q].price * this.basket[q].count;
    }
    return summa;
  }
};

function ToStock (productID, count, transactionID, wholesalePrice, price, unit) {
  this.productID = productID;
  this.count = count;
  this.transactionID = transactionID;
  this.wholesalePrice = wholesalePrice;
  this.price = price;
  this.unit = unit;
}

ToStock.prototype.inStock = function (stock) {
  if (stock[this.productID]) {
    stock[this.productID].count += this.count;
  } else {
    stock[this.productID] = {
      productID: this.productID,
      count: this.count,
      wholesalePrice: this.wholesalePrice,
      price: this.price,
      unit: this.unit
    };
  }
};

function Shop () {
  var stock = {};
  var cash = 0;
  var purchasesList = {};
  var stockList = {};
  return {
    execute: function (cmd) {
      cash += cmd.buy(stock);
      var id = cmd.purchaseID;
      delete cmd.purchaseID;
      purchasesList[id] = cmd;
    },
    undo: function (purchaseID) {
      if (purchasesList[purchaseID]) {
        var buck = purchasesList[purchaseID];
        cash -= buck.undo(stock);
        delete purchasesList[purchaseID];
      } else {
        console.error('PurchaseID hasn`t found!');
      }
    },
    addToStock (cmd) {
      if (stockList[cmd.transactionID]) {
        console.error('Wrong transactionID!');
        return;
      }
      cmd.inStock(stock);
      var id = cmd.transactionID;
      delete cmd.transactionID;
      stockList[id] = cmd;
    }
  };
}

var myShop = new Shop();
myShop.addToStock(new ToStock('milk001', 5, 'sklad0001', 2, 4, 'bottle'));
myShop.addToStock(new ToStock('milk001', 5, 'sklad0002', 2, 4, 'bottle'));
myShop.addToStock(new ToStock('milk001', 5, 'sklad0002', 2, 4, 'bottle'));
myShop.addToStock(new ToStock('bread001', 2, 'sklad0003', 0.5, 1, 'pcs'));
var basket = new Basket();
basket.addOneUnit('milk001');
basket.addOneUnit('vodka');
basket.addOneUnit('milk001');
basket.removeOneUnit('milk001');
basket.addOneUnit('milk001');
basket.removeGoods('milk001');
basket.addOneUnit('milk001');
basket.addOneUnit('milk001');
basket.addOneUnit('milk001');
basket.addOneUnit('bread001');
basket.addOneUnit('bread001');
myShop.execute(new Command(basket.getBasket(), 'purchase001'));
myShop.undo('purchase001');
/***********************************************/
function Basket() {
    var goods = {};
    return {
        addOneUnit: function (productID) {
            if(!goods[productID]) {
                goods[productID] = {count: 1};
            } else {
                goods[productID].count++;
            }
            
        },
        removeOneUnit: function (productID) {
            if (goods[productID] && (goods[productID].count > 0)) {
                 goods[productID].count--;
                if(goods[productID].count === 0) {
                    delete goods[productID];
                }
            }
        },
        getBasket: function () {
            return Object.assign({},goods);
        }
    }
}

function Command (basket, purchaseID) {
  this.basket = basket;
  this.purchaseID = purchaseID;
  this.timeOfPurchase = null;
}

Command.prototype = {
    buy: function(stock) {
        var sum = 0;
        this.timeOfPurchase = new Date().toString();
        for (var item in this.basket) {
            /*if the function isn`t exist - delete the one*/
            if (!stock[item]) {
                delete this.basket[item];
                console.error("Wrong productID!: "+item);
            } else if (stock[item].count === 0) {
                delete this.basket[item];
                console.error("Product went out!: "+item);
            } else if (stock[item].count < this.basket[item].count) {
                console.error("Too many count of product!");
                delete this.basket[item];
            } else if (stock[item]) {
                    stock[item].count -= this.basket[item].count;
                    sum += stock[item].price * this.basket[item].count;
            }
        }
        return sum;
    },
    undo: function(stock) {
        var sum = 0;
        for (var item in this.basket) {
            /*if the function isn`t exist - delete the one*/
            if (!stock[item]) {
                delete this.basket[item];
            } else if (stock[item]) {
                    stock[item].count += this.basket[item].count;
                    sum += stock[item].price * this.basket[item].count;
            }
        }
        return sum;
    },
    isEmpty: function() {
    for(var key in this.basket) {
        if(this.basket.hasOwnProperty(key))
            return false;
    }
    return true;
 }
}

function ToStock (productID, count, transactionID, wholesalePrice, price, unit){
    this.productID = productID;
    this.count = count;
    this.transactionID = transactionID;
    this.wholesalePrice = wholesalePrice;
    this.price = price;
    this.unit = unit;
    this.time = null;
}

ToStock.prototype.inStock = function (stock) {
    this.time = new Date().toString();
    if(stock[this.productID]) {
        stock[this.productID].count += this.count;
        return;
    } else {
        stock[this.productID] = {
            productID: this.productID,
            count: this.count,
            transactionID: this.transactionID, 
            wholesalePrice: this.wholesalePrice,
            price: this.price,
            unit: this.unit
        }
    }
}

function Shop() {
    var stock ={};
    var purchasesList = {};
    var cash = 0;
    var stockList = {};
    return {
        execute: function (cmd) {
            cash += cmd.buy(stock);
            var id = cmd.purchaseID;
            delete cmd.purchaseID;
            if(!cmd.isEmpty()){
            purchasesList[id] = cmd;
            }
        },
        undo: function (purchaseID) {
            if(!purchasesList[purchaseID]) {
                console.error("Wrong purchaseID!");
                return;
            }
            var buck = purchasesList[purchaseID];
            cash -= buck.undo(stock);
            delete purchasesList[purchaseID];
        },
        addToStock: function (cmd) {
            if(stockList[cmd.transactionID]) {
                console.error("transactionID exists in a history list!");
                return;
            }
            cmd.inStock(stock);
            var id = cmd.transactionID;
            delete cmd.transactionID;
            stockList[id] = cmd;
        }
    }
}

var myShop = new Shop();
var basket = new Basket();
basket.addOneUnit("milk1");
basket.addOneUnit("milk1");
basket.addOneUnit("bread1");
myShop.addToStock(new ToStock("milk1",2,"stock01",5,10,"bootle"));
myShop.addToStock(new ToStock("bread1",2,"stock02",2.5,5,"bootle"));
myShop.execute(new Command(basket.getBasket(), "purchase1"));
myShop.undo("purchase1");
/***********************************************/
function Calculator() {
var history = [];
    var result = 0;
  return {
    execute: function (cmd) {
        result = cmd.compute(result);
        history.push(cmd);
    },
    undo: function () {
     var last = history.pop();
        if(last) {
            result = last.undo(result);
            return;
        } else {
            console.error("It hasn`t been done any operations!");
        }
    },
    getResult() {
        console.log(result);
        return result;
    }
 }
}

function add (val) {
    this.value = val;
}

add.prototype.compute = function (x) {
      return x + this.value;
}

add.prototype.undo = function (x) {
      return  x - this.value;
} 

var calc = new Calculator();
calc.execute(new add(5));
calc.getResult();
calc.execute(new add(5));
calc.getResult();
calc.undo();
/*******************************************************/
/**F A C A D E design  p a t t e r n -----------------*/
/*****************************************************/

function TravelFacade (typeOfBooking) {
  this.typeOfBooking = typeOfBooking;
  this.train = new TrainTravel();
  this.flight = new FlightTravel();
  this.hotel = new HotelBooking();
}

TravelFacade.prototype.book = function (bookingInfo) {
  switch (this.typeOfBooking) {
    case 'Train':
      this.train.book(bookingInfo);
      break;
    case 'Flight':
      this.flight.book(bookingInfo);
      break;
    case 'Hotel':
      this.hotel.book(bookingInfo);
      break;
    case 'Train_And_Hotel':
      this.hotel.book(bookingInfo);
      this.train.book(bookingInfo);
      break;
    case 'Flight_And_Hotel':
      this.flight.book(bookingInfo);
      this.hotel.book(bookingInfo);
      break;
    default:
      console.error('Type Of Booking didn`t support!');
  }
};

function TrainTravel () {
  function book (bookingInfo) {
    /* обработка заказа */
    if (!bookingInfo.train) {
      console.error('wrong booking info!');
      return;
    }
    console.info(bookingInfo.train);
  }
  return { book: book };
}

function FlightTravel () {
  function book (bookingInfo) {
    /* обработка заказа */
    if (!bookingInfo.flight) {
      console.error('wrong booking info!');
      return;
    }
    console.info(bookingInfo.flight);
  }
  return { book: book };
}

function HotelBooking () {
  function book (bookingInfo) {
    /* обработка заказа */
    if (!bookingInfo.hotel) {
      console.error('wrong booking info!');
      return;
    }
    console.info(bookingInfo.hotel);
  }
  return { book: book };
}

var hotel1 = {
  hotel: {
    nameOfHOtel: 'hostel1',
    numberOfNights: 2
  },
  clientName: 'Ivanoff Ivan'
};

var trip1 = {
  hotel: {
    nameOfHOtel: 'hostel1',
    numberOfNights: 2
  },
  flight: {
    numberOfReiss: 'MAU112',
    airCompany: 'MAU'
  },
  clientName: 'Ivanoff Ivan'
};
var facade1 = new TravelFacade('Hotel');
facade1.book(hotel1);
var facade2 = new TravelFacade('Flight_And_Hotel');
facade2.book(trip1);
var facade3 = new TravelFacade('Elektryschka');
/**************************/
function FacadeTrip (typeOfService){

this.typeOfService = typeOfService;
this.train = new TrainTrip();
this.plain = new PlainTrip();
this.hotel = new HotelBooking();
}

FacadeTrip.prototype.order = function (dataForOrder) {
    switch(this.typeOfService) {
        case "Train":
            this.train.process(dataForOrder);
            break;
        case "Plain":
            this.plain.process(dataForOrder);
            break;
        case "Hotel":
            this.hotel.process(dataForOrder);
        case "Hotel_And_Train":
            this.train.process(dataForOrder);
            this.hotel.process(dataForOrder);
            break;
        case "Hotel_And_Plain":
            this.plain.process(dataForOrder);
            this.hotel.process(dataForOrder);
            break;
        default:
            console.error("The Service doesn`t support");
    }
}

function TrainTrip() {
    function process (dataForOrder) {
        /*Array.prototype.fill()*/
      
        
        console.log("╔═══════════════╦══════════════════════════════════════╗");
        console.log("║   name:       ║ "+TrainTrip.prototype.toLength(dataForOrder.name) + "║");  
        console.log("║train from:    ║ "+TrainTrip.prototype.toLength(dataForOrder.train.from) + "║");
        console.log("║ train to:     ║ "+TrainTrip.prototype.toLength(dataForOrder.train.to) + "║");
        console.log("║   reiss:      ║ "+TrainTrip.prototype.toLength(dataForOrder.train.reiss) + "║");
        console.log("╚═══════════════╩══════════════════════════════════════╝");
    }
    return {process: process}
}
TrainTrip.prototype.toLength = function (obj) {
           if(typeof obj === "number") {
               obj = obj.toString();
           }
           var tmp = [];
           tmp = obj.split('');
           for(var z = tmp.length; z < 37; z++) {
             tmp.push('_');
           }
            return tmp.join('');
        }

function PlainTrip() {
    function process (dataForOrder) {
        /*Array.prototype.fill()*/
      
        
        console.log("╔═══════════════╦══════════════════════════════════════╗");
        console.log("║   name:       ║ "+TrainTrip.prototype.toLength(dataForOrder.name) + "║");  
        console.log("║plain from:    ║ "+TrainTrip.prototype.toLength(dataForOrder.plain.from) + "║");
        console.log("║ plain to:     ║ "+TrainTrip.prototype.toLength(dataForOrder.plain.to) + "║");
        console.log("║   reiss:      ║ "+TrainTrip.prototype.toLength(dataForOrder.plain.reiss) + "║");
        console.log("╚═══════════════╩══════════════════════════════════════╝");
    }
    return {process: process}
}

        function HotelBooking() {
    function process (dataForOrder) {
        /*Array.prototype.fill()*/
      
        
        console.log("╔═══════════════╦══════════════════════════════════════╗");
        console.log("║   name:       ║ "+TrainTrip.prototype.toLength(dataForOrder.name) + "║");  
        console.log("║Hotel name:    ║ "+TrainTrip.prototype.toLength(dataForOrder.hotel.name) + "║");
        console.log("║num. of days:  ║ "+TrainTrip.prototype.toLength(dataForOrder.hotel.days) + "║");
        console.log("╚═══════════════╩══════════════════════════════════════╝");
    }
    return {process: process}
}


var f1  = new FacadeTrip("Train");
var f2  = new FacadeTrip("Hotel_And_Plain");
var trainInfo = {
    name: "Ivanoff Ivan",
    train: {
             from:"Kiev",
             to:"Paris",
             reiss:"JHH1515"
           }
}

var tripInfo = {
    name: "Ivanoff Ivan",
    plain: {
        from:"Kiev",
        to:"Paris",
        reiss:"MAU15445"
    },
    hotel: {
        name: "Continental",
        days:2
    }
}
f1.order(trainInfo);
f2.order(tripInfo);
/********************************************************/
function CreditFacade (clientID) {
    this.clientID = clientID;
    this.history = new CreditHistoryReputation(clientID);
    this.job = new HasJob(clientID);
    this.limit = new GetCurrentBankLimit(clientID);
}

CreditFacade.prototype.creditAbility = function(sum) {
  return this.limit.execute(sum) && this.job.execute() && this.history.execute();  
}

function CreditHistoryReputation (clientID) {
  this.clientID = clientID;
}

CreditHistoryReputation.prototype.execute = function() {
    return true;
}

function HasJob (clientID) {
  this.clientID = clientID;
}

HasJob.prototype.execute = function() {
    return true;
}


function GetCurrentBankLimit (clientID) {
  this.clientID = clientID;
}

GetCurrentBankLimit.prototype.execute = function (sum) {
    return sum < 50000 ? true : false;
}

var facade = new CreditFacade("Ivanoff Ivan");
console.info(facade.creditAbility(100));
console.info(facade.creditAbility(1000000));
/********************/
function FacadeTrip (typeOfBooking) {
  var train = new Train();
  var plain = new Plain();
  var hotel = new Hotel();
  return {
    makeReservation: function (reservationInfo) {
      if (!reservationInfo) {
        console.error('Wrong reservationInfo!');
        return;
      }
      switch (typeOfBooking) {
        case 'Train':
          train.booking(reservationInfo);
          break;
        case 'Plain':
          plain.booking(reservationInfo);
          break;
        case 'Hotel':
          hotel.booking(reservationInfo);
          break;
        case 'Train_And_Hotel':
          train.booking(reservationInfo);
          plain.booking(reservationInfo);
          break;
        case 'Plain_And_Hotel':
          plain.booking(reservationInfo);
          hotel.booking(reservationInfo);
          break;
        default:
          console.error('Type of Booking doesn`t support!');
      }
    }
  };
}

function Train () {
  function exec (info) {
    console.info('╔═══════════════╦════════════════════════════════════╗');
    console.info('║ Name:         ║' + Train.prototype.makeString(info.name) + '║');
    console.info('║ From:         ║' + Train.prototype.makeString(info.train.from) + '║');
    console.info('║ To:           ║' + Train.prototype.makeString(info.train.to) + '║');
    console.info('║ Reiss:        ║' + Train.prototype.makeString(info.train.reiss) + '║');
    console.info('╚═══════════════╩════════════════════════════════════╝');
  }
  return { exec: exec };
}

Train.prototype.makeString = function (str) {
  if (!str) {
    console.error('Wrong data!');
    return;
  }
  if (typeof str === 'number') {
    str = str.toString();
  }
  var res = str.split(' ');
  for (var q = res.length; q < 37; q++) {
    res.push(' ');
  }
  return res.join('').slice();
};

function Plain () {
  function exec (info) {
    console.info('╔═══════════════╦════════════════════════════════════╗');
    console.info('║ Name:         ║' + Train.prototype.makeString(info.name) + '║');
    console.info('║ From:         ║' + Train.prototype.makeString(info.plain.from) + '║');
    console.info('║ To:           ║' + Train.prototype.makeString(info.plain.to) + '║');
    console.info('║ Reiss:        ║' + Train.prototype.makeString(info.plain.reiss) + '║');
    console.info('╚═══════════════╩════════════════════════════════════╝');
  }
  return { exec: exec };
}

function Hotel () {
  function exec (info) {
    console.info('╔═══════════════╦════════════════════════════════════╗');
    console.info('║ Name:         ║' + Train.prototype.makeString(info.name) + '║');
    console.info('║ Hotel:        ║' + Train.prototype.makeString(info.hotel.name) + '║');
    console.info('║ Term          ║' + Train.prototype.makeString(info.hotel.term) + '║');
    console.info('╚═══════════════╩════════════════════════════════════╝');
  }
  return { exec: exec };
}
var info1 = {
  name: 'Ivanoff Ivan',
  plain: {
    from: 'Berlin',
    to: 'Moscow',
    reiss: 'NAMOSKWU!'
  }
};
var info2 = {
  name: 'Petroff Petr',
  plain: {
    from: 'Nwe-York',
    to: 'Kiev',
    reiss: 'GHR5344'
  },
  hotel: {
    name: 'Continental',
    term: 2
  }
};
var f1 = new FacadeTrip('Plain');
f1.makeReservation(info1);
var f2 = new FacadeTrip('Plain_And_Hotel');
f2.makeReservation(info2);
/***Bank loan facade**/

function FacadeCredit (clientName,inentNum) {
   this.clientID =  GetClientID(clientName, inentNum);
   this.history = new CreditHistory();
   this.salary = new IncomeOfClient();
   this.sum = new MaxAvaliableSum();
}

FacadeCredit.prototype.ability = function (sum) {
    return this.history.check(this.clientID) &&
        this.salary.solvency(this.clientID,sum) &&
        this.sum.check(sum);
}

function GetClientID (clientName,inentNum) {
    /*search in a database here*/
  return "bv344566";
}

function CreditHistory(){
};
        
CreditHistory.prototype.check = function (client){
    /*checking here*/
    return true;
}

function IncomeOfClient() {

};

IncomeOfClient.prototype.solvency = function (client, sum) {
   /*checking solvency here*/
    return true;
};
function MaxAvaliableSum() {
 };

MaxAvaliableSum.prototype.check = function (s) {
    return s < 100000 ? true : false;
}

var v1 = new FacadeCredit("Ivanoff","6874618389");
console.info(v1.ability(100));
/*************************************/
function CommandCalc() {
    var result = 0;
    var history = [];
    return {
      execute: function (cmd) {
        result = cmd.calculate(result);
        history.push(cmd);
      },
      undo: function () {
          var previousOp = history.pop();
          if(previousOp) {
            result = previousOp.buck(result);
            return;
          } else {
             console.error("It isn`t any previous operations!");
          }
      },
      getResult: function() {
          console.info(result);
      }
    }
}

function Add (value) {
    this.value = value;
}
Add.prototype = {
    calculate: function (x) {
      return x + this.value;
    },
    buck: function (x) {
      return x - this.value;    
    }
};

function Substract (value) {
  this.value = value;
}

Substract.prototype = {
    calculate: function (x) {
        return x - this.value;
    },
    buck: function (x) {
        return x + this.value;
    }
};

function Multiply (value) {
    this.value = value;
}

Multiply.prototype = {
    calculate: function (x) {
      return x * this.value;
    },
    buck: function (x) {
      return x / this.value 
    }
};


function Division(value) {
    this.value = value;
}

Division.prototype = {
    calculate: function (x) {
      return x / this.value;
    },
    buck: function (x) {
      return x * this.value 
    }
};
var myCalc = new CommandCalc();
myCalc.getResult();
myCalc.execute(new Add(5));
myCalc.getResult();
/************/
function FacadeSalary() {
    this.common = new CommonSalary();
    this.premium = new Premium();
    this.vacation = new Vacation();
    this.effective = new LazyCoeficient();
}

FacadeSalary.prototype.calcSalary  = function (ID) {
    return (this.common.calc(ID) +
        this.premium.calc(ID) ) *
        this.vacation.calc(ID) *
        this.effective.calc(ID);
};

function CommonSalary () {
  function calc(ID) {
      /*calculate here*/
      return 100;
  }
  return {calc: calc}
};

function Premium () {
  function calc(ID) {
      /*calculate here*/
      return 10;
  }
  return {calc: calc}
};

function Vacation () {
  function calc(ID) {
      /*calculate here*/
      return 1;
  }
  return {calc: calc}
};

function LazyCoeficient () {
  function calc(ID) {
      /*calculate here*/
      return 0.97;
  }
  return {calc: calc}
};

var mySalary = new FacadeSalary();
console.log(mySalary.calcSalary("Ivanoff"));
/**************************function and classes definition**/
function Shop() {
var stock = {};
var balance = 0;
var historyOfPurchase = {};
var incomeOfStock = {};
    return {
     execStock: function (cmd) {
         if (incomeOfStock[cmd.transactionID]) {
             console.error("transactionID has already existed!");
             return;
         }
         /*puting to a stock*/
         cmd.putToStock(stock);
         /*saving for a history*/
         var tmp = cmd.transactionID;
         delete cmd.transactionID;
         incomeOfStock[tmp] = cmd;
     },
     undoStock: function (transactionID) {
         if (incomeOfStock[transactionID]) {
             var prev = incomeOfStock[transactionID];
             prev.returnFromStock(stock);
             delete incomeOfStock[transactionID];
         } else {
             console.error("Wrong transactionID!");
         }
     },
     execPurchase: function (cmd) {
         cmd.buy (stock);
         balance += cmd.sum;
         var tmp = cmd.purchaseID;
         delete cmd.purchaseID;
         historyOfPurchase[tmp] = cmd;
     },
     undoPurchase: function (purchaseID) {
         if (historyOfPurchase[purchaseID]) {
             var tmp = historyOfPurchase[purchaseID];
             tmp.undo(stock);
             balance += tmp.sum;
             delete historyOfPurchase[purchaseID];
         } else {
             console.error("wrong purchaseID:"+purchaseID);
         }
     }
    
    };
}

function StockIncome (transactionID, goodsID, price, count, unit) {
    this.transactionID = transactionID;
    this.count = count;
    this.price = price;
    this.goodsID = goodsID;
    this.unit = unit;
}

StockIncome.prototype.putToStock = function (stock) {
    /*if goods are exists*/
    if (stock[this.goodsID]) {
        stock[this.goodsID].count += this.count;
    } else {
        stock[this.goodsID] = {
           price: this.price,
           goodsID: this.goodsID,
           unit: this.unit,
           count: this.count
        }
    }
}

StockIncome.prototype.returnFromStock = function (stock) {
    if (stock[this.goodsID]) {
        stock[this.goodsID].count -= this.count;
        if(stock[this.goodsID].count === 0){
            delete stock[this.goodsID];
        }
    } else {
        console.error("Missing goodsID!");
    }
}

function Purchase (purchaseID,basket) {
    /*#goodsID{count}*/
    this.basket = basket;
    this.purchaseID = purchaseID;
    this.time = null;
    this.sum = 0;
} 

Purchase.prototype.buy = function (stock) {
    for (var ID in this.basket) {
        /*checking if goods avaliable in a stock*/
        if ((stock[ID].count >= this.basket[ID].count) && stock[ID]) {
            stock[ID].count -= this.basket[ID].count;
            this.sum += stock[ID].price * this.basket[ID].count;
        } else {
            /*if goods isn`t exists*/
            console.error(`It isn't exists:"` +ID +`"on the stock`);
            delete this.basket[ID];
        }
    }
    this.time = new Date().toString();
}

Purchase.prototype.undo = function (stock) {
    for (var ID in this.basket) {
            stock[ID].count += this.basket[ID].count;
        }
    this.sum = this.sum * (-1);
}

var myShop = new Shop();
myShop.execStock(new StockIncome("stk01","bread",2.0,5,"pcs"));
myShop.undoStock("stk01");
myShop.execStock(new StockIncome("stk01","bread",2.0,5,"pcs"));
myShop.execStock(new StockIncome("stk01","bread",2.0,5,"pcs"));
myShop.execStock(new StockIncome("stk02","milk",2.0,2,"pcs"));
myShop.execPurchase(new Purchase("buy001",{"bread":{count:2},"milk":{count:3}}));
myShop.undoPurchase("buy001");
/*--------------------F A C T O R Y -----------------------------*/
function SamsungFactory(){}
//default phone
SamsungFactory.prototype.phone = null;
SamsungFactory.prototype.createPhone = function (phoneType) {
    switch(phoneType.modell) {
        case "Galaxy1":
            this.phone = Galaxy1;
            break;
        case "Galaxy2":
            this.phone = Galaxy2;
            break;
        case "C110":
            this.phone = C110;
            break;
        default:
            console.error("Type of phone doesn`t support");
            return null;
    }
    return new this.phone(phoneType);
}

function C110 (par){
    this.phoneName = par.phoneName;
    this.partNum = par.partNum;
    this.mp3 = null;
    this.video = null;
    this.camera = null;
}

function Galaxy1 (par) {
    this.phoneName = par.phoneName;
    this.partNum = par.partNum;
    this.mp3 = true;
    this.video = true;
    this.camera = "2MPix";
}

function Galaxy2 (par) {
    this.phoneName = par.phoneName;
    this.partNum = par.partNum;
    this.mp3 = true;
    this.video = true;
    this.camera = "8MPix";
}

var factory = new SamsungFactory();
var ph1 = factory.createPhone({modell:"C110",partNum:120504,phoneName:"Samsung C110"});
/********************/
function MivinaFactory(flavour = 10){
    this.flavour = flavour;
}

MivinaFactory.prototype.kindOfVermishell = MivinaChicken;

MivinaFactory.prototype.createVermishell = function(type) {
    switch(type.name) {
        case "Mushroom":
            this.kindOfVermishell = MivinaMushroom;
            break;
        case "Chicken":
            this.kindOfVermishell  = MivinaChicken;
            break;
        case "Meat":
            this.kindOfVermishell = MivinaMeat;
    }
    
    if(this.flavour <= 1){
        console.error("Out of flavour!");
        return null;
    }
    
    this.flavour -= type.weight;
    return new this.kindOfVermishell(type);
}

function MivinaMushroom(type) {
    this.name = "Mushroom";
    this.weight = type.weight;
}

function MivinaChicken(type) {
    this.name = "Chicken";
    this.weight = type.weight;
}

function MivinaMeat(type) {
    this.name = "Meat";
    this.weight = type.weight;
}

var mivina = new MivinaFactory(3);
var v1 = mivina.createVermishell({weight:1,name:"Mushroom"});
var v2 = mivina.createVermishell({weight:1,name:"Meat"});
var v3 = mivina.createVermishell({weight:1,name:"Chicken"});
/**************************************************************/
function CarFactory() {
    this.making = null;
}

CarFactory.prototype.make = function (parameter) {
    switch (parameter.vehicle) {
            case "bike":
            this.making = CreateMoto;
            break;
            case "car":
            this.making = CreateCar;
            break;
            case "bus":
            this.making = CreateBus;
            break;
    }
    
    if(this.making === null) {
        console.error("The vehicle doesn`t support!");
        return null;
    } else {
        return new this.vehicle(parameter);
    }
}

function CreateMoto (x = {volume:50,radius:10,modell:"YAVA"}) {
    this.volume = x.volume;
    this.radius = x.radius;
    this.modell = x.modell;
}

function CreateCar (x = {modell:"homemade",radius:10,volume:1500}) {
    this.modell = x.modell;
    this.radius = x.radius;
    this.volume = x.volume; 
}

function CreateBus (x = {modell:"ikarus",radius:10,volume:6000}) {
    this.modell = x.modell;
    this.radius = x.radius;
    this.volume = x.volume; 
    
}

var factory = new CarFactory();
var car1 = factory.make({modell:"VAZ2101",radius:10,volume:1200,vehicle:"car"}); 
var car2 = factory.make({modell:"YAVA",radius:10,volume:500,vehicle:"bike"}); 
var car3 =  factory.make({modell:"BOGDAN1010",radius:10,volume:3500,vehicle:"bus"}); 
/**********************************/
function RoshenFactory () {
    this.candy_creator = null;
}

RoshenFactory.prototype.createCandy = function (infoAboutSweet) {
    switch(infoAboutSweet.kindOf){
        case 'Romashka':
            this.candy_creator = Romashka;
            break;
        case 'Korowka':
            this.candy_creator = Korowka;
            break;
        case 'SchalenaBdzhilka':
            this.candy_creator = SchalenaBdzhilka;
            break;
        default:
            console.error('Unknow type!');
            return null;
            break;
    }
    return new this.candy_creator (infoAboutSweet);
}

function Romashka (x) {
    this.partNo = x.partNo;
    this.sweetID = "rs5150";
    this.weight = 10;
};

function Korowka (x) {
    this.partNo = x.partNo;
    this.sweetID = "rs2549";
    this.weight = 25;
}

function SchalenaBdzhilka (x) {
    this.partNo = x.partNo;
    this.sweetID = "rs7854";
    this.weight = 5;
}

var factory = new RoshenFactory();
var candy1 = factory.createCandy({partNo: 12, kindOf:'Romashka'});
var candy2 = factory.createCandy({partNo: 12, kindOf:'Korowka'});
var candy3 = factory.createCandy({partNo: 12, kindOf:'Roshetto'});

/*********M I X I N**********pattern***********/ 
/**our mixin*/
var mix = {
    swim: function() {
            console.info(`It swims to  ${this.direction}  speed ${this.speed}`);
          }
}

function  Duck (dir,sp) {
    this.direction = dir;
    this.speed = sp;
}

/*create an instance of Duck*/
var myDuck = new Duck('West','2mph');

/*append property swim to the instance*/
myDuck = Object.assign(myDuck, mix);

/*test asiigned property*/
console.info(myDuck.swim());
/*********M I X I N - 2**********pattern***********/ 
/**our mixin*/
var showSpeed = {
    show: function (x) {
        console.log(`The car is running ${this.speed} mpH`);
    }
}

var path = {
    calcPath: function() {
        console.info(`The car has been driven ${(this.onRoad / 60) * this.speed} miles`);
    }
}

function Car (speed = 0, time_on_road = 90 ) {
    this.speed = speed;
    this.onRoad = time_on_road;
}

/*create an instane with a mixin*/
var myCar = new Car(40);
myCar = Object.assign(myCar, showSpeed, path);
myCar.show();
myCar.calcPath();
/*********M I X I N - 3**********pattern***********/ 
/**our mixin*/
var credit =  {
    getCredit: function (summa) {
      this.credit = true;
      this.sumOfCredit = summa;
    },
    payBuck: function (summa) {
      if (this.sumOfCredit >= 0) {
         var difference  = summa - this.sumOfCredit;
         if (difference < 0) {
         this.sumOfCredit -= summa;
             if (this.sumOfCredit == 0) {
                 this.credit = false;
             }
         } else {
             this.sumOfCredit = 0;
             this.bankAccount += difference;
             this.credit = false;
         }
      
      } else {
        console.error("THe loan has been repaid");
     }
    }
}
function BankAcc () {
    this.bankAccount = 10;
    this.credit = false;
    this.sumOfCredit = 0;
}

var myAcc = new BankAcc();
myAcc = Object.assign(myAcc,credit);
myAcc.payBuck(1);
myAcc.getCredit(55);
myAcc.payBuck(15);
/*******************/
/*mixin pattern 4 *****/
var plain = {
    init: function (mark = "AN26") {
    this.wings = 2;
    this.propeller = 2;
    this.mark = mark;
    },
    run: function () {
        if(this.mark) {
          console.info(`Lets fly on ${this.mark} !`);
        }
    }
}

var helicopter = {
    init: function (mark = "Mi6") {
        this.wings = 0;
        this.propeller = 1;
        this.mark= mark;
    },
    
        run: function () {
            if(this.mark) {
              console.info(`Let's fly on ${this.mark}`);
            }
        }
}
function Fly(id = 1) {
    this.id = id;
}
var f1 = new Fly(10);
var f2  = new Fly(30);
f1 = Object.assign(f1,plain);
f2  = Object.assign(f2,helicopter);
f1.init();
f2.init();
f1.run();

/****mixin6 ****************************/
var divMul = {
    division: function (a = 1, b = 1) {
        this.result = a / b;
    },
    multiplication: function (a = 1 , b = 2) {
       this.result = a * b;
    }
}

var addSub = {
    substraction: function (a = 1, b = 1) {
        this.result = a - b;
    },
    addition: function (a =1 , b = 2) {
        this.result = a + b;
    }
}

function emptyCalc () {
    this.result = 0;
}

emptyCalc.prototype.toConsole = function() {
    console.info(this.result);
}

var myCalc = new emptyCalc();
myCalc = Object.assign(myCalc, addSub, divMul);
myCalc.addition(2,2);
myCalc.toConsole();
/****mixin6 **/
var process1 = {
    proc1: function () {
        this.result =  (this.data * 3) >> 2;
    } 
}

function SomeObject (q = 9) {
    this.data  = q;
    this.result = null;
}

SomeObject.prototype.toConsole  = function () {
    console.log(this.result);
}

var myO = new SomeObject ();
myO = Object.assign(myO, process1);
myO.proc1();
myO.toConsole();
 /*****D E C O R A T O R*******************/
function Vehicle (vehicleType) {
    this.type = vehicleType || "car";
    this.model = "undefined";
    this.license = "0000-000";
}

var testInstance = new Vehicle("Crossover");
console.info(testInstance);
/*create an instance to be decorated*/
var truck = new Vehicle("truck");
/*decorating new fuctionality*/
truck.setModel = function (model) {
    this.model = model;
}

truck.setColor = function (color) {
    this.color = color;
}

console.info(truck);
truck.setColor("green");
truck.setModel("MAN");
var anotherVehicle = new Vehicle("car");
console.info(anotherVehicle);
  
/*****decorator 2**/
//the constructor
function MacBook() {
    this.cost = function() {
        return 800;
    }
}

///create an instance to decorate it
var mb = new MacBook();

///decorator 1
function addMemory (macbook) {
    var tmp = macbook.cost();
    macbook.cost= function () {
       return tmp + 300;
    }
}
///decorator 2
function addVideocard (macbook) {
   var tmp = macbook.cost();
    macbook.cost= function () {
       return tmp + 200;
    }
    
} 
    addMemory(mb);
    addVideocard(mb);
    console.log(mb.cost());
    var anotherMb  = new MacBook();
    console.log(anotherMb.cost());
/*****decorator******/
function Car(mark = "undefined") {
    this.mark = mark;
    this.countOfRepairs = 0;
    this.kilometers = 0;
}
var myCar = new Car();

function makeRepair (car) {
    car.countOfRepairs += 1;   
}

function trip (car, length=0) {
    car.kilometers += length;
} 

makeRepair(myCar);
trip(myCar,100);
/*************************************************************/        
function Basket() {
    this.goods = {};
}
var myBasket = new Basket();
function addToCart (basket, goodID, count=1) {
    if(!basket.goods[goodID]) {
        basket.goods[goodID] = count;
    } else {
        basket.goods[goodID] += count;
    }
}

addToCart(myBasket, "002241",5);
addToCart(myBasket, "002241",9);
/********F L Y W E I G H T *******************/
function Flyweight (cpu,mfg,modell) {
    this.modell = modell;
    this.cpu= cpu;
    this.mfg = mfg;
}

var FlyweightFactory = (function(){
    var flyweights = {};
    return {
        get: function (modell,cpu,mfg) {
            if (!flyweights[cpu + mfg]) {
                flyweights[cpu + mfg] = new Flyweight (cpu, mfg, modell);
                return flyweights[modell + mfg];
            } else {
                return flyweights[modell + mfg];
            }
        }
    }
})();

function Computer (modell,cpu,mfg,memory,id) {
    this.modell = modell;
    this.memory = memory;
    this.mfg = mfg;
    this.cpu = cpu;
    this.flyweight = FlyweightFactory.get(modell,cpu,mfg);
}

var ComputerCollection = function() {
    var computers = {};
    var count = 0;
    return {
        add: function (modell,cpu,mfg,memory,id) {
            computers[id] = new Computer(modell,cpu,mfg,memory,id);
        },
        get: function (id) {
            if (computers[id]) {
                return computers[id];
            } else {
                console.error("Bad ID!");
                return null;
            }
        }
    }
}
////modell,cpu,mfg,memory,id
var myCompCollection = new ComputerCollection();
myCompCollection.add('Compass1',"I386","MSI",1,"gfh4521");
myCompCollection.add('Compass1',"I386","MSI",3,"gyj4829");
myCompCollection.add('Compass2',"I486","MSI",5,"gas1125");
myCompCollection.add('Compass2',"I486","MSI",10,"hjh8542");
/**********************************/
     /*********************************************************/
function Flyweight (mfg, cpu, modell) {
    this.cpu = cpu;
    this.mfg = mfg;
    this.modell = modell;
}

var flyweghtFactory = ( function () {
    var flyweights = {};
    return {
        get: function ( mfg, cpu, modell) {
            if (flyweights[mfg+modell]) {
                return flyweights[mfg+modell];
            } else {
                flyweights[mfg+modell] = new Flyweight(mfg, cpu, modell);
                return flyweights[mfg+modell];
            }
            
        }
    }
})();

function Computer (mfg, cpu, modell, memory, id) {
    this.memory = memory;
    this.id = id;
    this.flyweight = flyweghtFactory.get(mfg, cpu, modell); 
}

function ComputerCollection(){
  var collection = {};
    return{
        addComp: function (mfg, cpu, modell, memory, id) {
            var tmp = new Computer(mfg, cpu, modell, memory, id);
            delete tmp.id;
            collection[id] = tmp;
        },
        getComp: function (id) {
            if (collection[id]) {
                return collection[id];
            } else {
                console.error("bad id!");
            }
        }
    }
}

var myCompCollection = new ComputerCollection();
myCompCollection.addComp("MSI","I486","modell001",2,"ywr111");
myCompCollection.addComp("IBM","I486","m002",2,"ywr112");
myCompCollection.addComp("MSI","I486","modell001",1,"ywr113");
myCompCollection.addComp("MSI","I486","modell001",4,"ywr114");
myCompCollection.addComp("MSI","I486","modell001",8,"ywr115");
 /****cars*******/
function Flyweight (engMod, vol, power) {
    this.engineMod = eng.mod;
    this.engVolume = vol;
    this.power = power;
}

var engFabric = (function(){
    var engines = {};
    return: {
        getEngine: function (engMod, vol, power) {
            if(!engines[engMod+vol]) {
                engines[engMod+vol] = new Flyweight(engMod, vol, power);
                return engines[engMod+vol];
            } else {
                return engines[engMod+vol];
            }
        }
    }
})();

function Car (engMod, vol, power, id, type, modell){
  this.type = type;
  this.modell = modell;
  this.id = id;
  this.flyweight = engFabric.getEngine(engMod, vol, power);
}


var CarCollection() {
    var cars = {};
    return {
        addCar : function(engMod, vol, power, id, type, modell) {
            var tmp = new Car(engMod, vol, power, id, type, modell);
            delete tmp.id;
            cars[id] = tmp;
        }
    }
}

var myStock = new CarCollection();
myStock.addCar("0517",1500,75,"no0001","sedan","2101");
myStock.addCar("0517",1500,75,"no0002","sedan","2102");
myStock.addCar("0517",1500,75,"no0003","sedan","2103");
myStock.addCar("0517",1500,75,"no0004","sedan","2104");
myStock.addCar("0517",1600,80,"no0005","sedan","2105");
myStock.addCar("M15234",1500,95,"mrs0001","sedan","Mersedes124");
/***/
 /****cars*******/
function Flyweight (engMod, vol, power) {
    this.engineMod = engMod;
    this.engVolume = vol;
    this.power = power;
}

var engFabric = (function(){
    var engines = {};
    return {
        getEngine: function (engMod, vol, power) {
            if(!engines[engMod+vol]) {
                engines[engMod+vol] = new Flyweight(engMod, vol, power);
                return engines[engMod+vol];
            } else {
                return engines[engMod+vol];
            }
        }
    }
})();

function Car (engMod, vol, power, id, type, modell){
  this.type = type;
  this.modell = modell;
  this.id = id;
  this.flyweight = engFabric.getEngine(engMod, vol, power);
}


var CarCollection = function() {
    var cars = {};
    return {
        addCar : function(engMod, vol, power, id, type, modell) {
            var tmp = new Car(engMod, vol, power, id, type, modell);
            delete tmp.id;
            cars[id] = tmp;
        }
    }
}

var myStock = new CarCollection();
myStock.addCar("0517",1500,75,"no0001","sedan","2101");
myStock.addCar("0517",1500,75,"no0002","sedan","2102");
myStock.addCar("0517",1500,75,"no0003","sedan","2103");
myStock.addCar("0517",1500,75,"no0004","sedan","2104");
myStock.addCar("0517",1600,80,"no0005","sedan","2105");
myStock.addCar("M15234",1500,95,"mrs0001","sedan","Mersedes124");
/*****database of clients and loans in flyweight style****/
function FlyweightClient(name,surname,id){
    this.id = id;
    this.clientName = name;
    this.clientSurname = surname;
}


var clientFactory = ( function(){
    var clients = {};
    return {
        getClient: function (id,name=null,surname=null) {
            if (!clients[id]) {
                if(!name | !surname | !id){
                    console.error("Wrong client info!");
                    return null;
                }
                clients[id] = new FlyweightClient(name,surname,id);
                return clients[id];
            } else {
               return clients[id];
            }
        }
    }
})();

function Loan (id,name,surname,sum) {
    this.sum = sum;
    this.flyweight = clientFactory.getClient(id,name,surname);
}

function LoanBase () {
    var loans = {};
    return {
        addCredit: function (id,name,surname,sum,loanId){
            loans[loanId] = new Loan(id,name,surname,sum);
        },
        getCredit: function(loanId) {
            if (!loans[loanId]) {
                console.error("wrong ID!");
                return null;
            } else {
                return  loans[loanId];
            }
        },
        removeCredit: function(loanId){
            if(!loans[loanId]) {
                console.error("Wrong ID!");
                return null;
            }
            if(loans[loanId].sum  < 0.01) {
                delete loans[loanId];
                return true;
            } else {
                console.error("the loan was not repaid!");
                return null;
            }
        },
        repaid: function(loanId,money){
             if(!loans[loanId]) {
                console.error("Wrong ID!");
                return null;
            } else{
                if (money > loans[loanId].sum) {
                    var tmp = money - loans[loanId].sum;
                    loans[loanId].sum = 0;
                    return tmp;
                } else {
                    loans[loanId].sum -=money;
                    return 0;
                }
            }
        }
    }
}

var bank = new LoanBase();
bank.addCredit("usr001","Mikki","Mouse",100,"L001-for_phone");
bank.addCredit("usr001","Mikki","Mouse",300,"L002-for_PC");
bank.addCredit("usr001","Mikki","Mouse",2000,"L002-for_house");
bank.addCredit("usr002","Donald","Duck",1000,"L001-for_busyness");
bank.repaid("L001-for_phone",99);
bank.removeCredit("L001-for_phone");
console.log(bank.repaid("L001-for_phone",2));
bank.removeCredit("L001-for_phone");

/*****database  in flyweight style****/
//flyweight
function ClientData(name, surname, salary, adress) {
    this.adress = adress;
    this.salary = salary;
    this.name = name,
    this.surname = surname;
}

//flyweights factory
var flyweightFactory = (function(){
    var clients = {};
    return {
        getClient: function (id, name, surname, salary, adress) {
            //if client isn`t exist
            if(!clients[id]){
                clients[id] = new ClientData(name, surname, salary, adress);
                return clients[id];
            } else {
                return clients[id];
            }
        },
        isClientExist: function (id) {
            if (clients[id] ) {
                return true;
            } else {
                return false;
            }
        }
    }
})();

function Bank () {
    var loans = {};
    return {
        createLoan: function (loanId,clientId,sum) {
            if(loans[loanId]) {
                console.error("Loan with the ID exists!");
                return null;
            } else if(flyweightFactory.isClientExist(clientId)){
                loans[loanId] = {
                       sum: sum,
                       client: flyweightFactory.getClient(clientId)
                      }
                    return 0;
                } else {
                   console.error("The client isn`t exist");
                   return null;    
                } 
                
            },
        
        getLoan: function (loanId) {
            if(loans[loanId]) {
                return loans[loanId];
            } else {
                console.error("Bad loadId!");
                return null;
            }
        },
        deleteLoan: function (loanId) {
          if(loans[loanId] && (loans[loanId].sum <= 0.00) ){
              delete loans[loanId];
              return 0;
          }  else {
              console.error("bad ID or non zero summa");
              return null;
          }
        },
        payLoan: function (loanId, sum){
            if (loans[loanId]){
                if (loans[loanId].sum < sum){
                    var balance = sum - loans[loanId].sum;  
                    loans[loanId].sum = 0;
                    return balance;
                }
                loans[loanId].sum -= sum;
                return 0;
                
            } else {
                console.error("Bad loadId!");
                return null;
            }
        }
    }
}

    var myBank = new Bank();
    flyweightFactory.getClient("client001","Mikki","Mouse",100,"40stAve");
    flyweightFactory.getClient("client002","Donald","Duck",1000,"42stAve");
    myBank.createLoan("Lno001","client001",100);
    myBank.createLoan("Lno002","client001",500);
    myBank.createLoan("Lno003","client002",1000);
    myBank.createLoan("Lno004","client001",600);
    myBank.payLoan("Lno001",99);
    myBank.deleteLoan("Lno001");
    myBank.payLoan("Lno001",5);
    myBank.deleteLoan("Lno001");

/********* F L Y W E I G H T and D O M*******************/
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <header content-type: text/javascript></header>
        <link href="https://fonts.googleapis.com/css2?family=Red+Rose&display=swap" rel="stylesheet">
        <style>
            .container{
                display: flex;
                flex-direction: row;
                justify-content: stretch;
                align-items: stretch;
                margin: 0;
                padding: 0;
                border: 1px solid gray;
                cursor: pointer;
               
            }
            .usual, .unusual{
                margin:inherit;
                padding: 10px;
                border: 2px solid black;
                color:black;
                background: white;
                display:flex;
                justify-content: center;
                align-items: center;
                -webkit-user-select: none;  
                -moz-user-select: none;    
                -ms-user-select: none;      
                user-select: none;
                width:25%;
            }
            .usual>div, .unusual>div{
                display: block;
                justify-content: center;
                font-family: 'Red Rose', cursive;
            }
            @media (max-width: 480px){
                .container{
                  flex-direction: column;
                }
                .usual, .unusual{
                  width: inherit;
                }
            }
        </style>
    </head>
<body>
    
<div class="container">
    <div class="usual">
        <div>one</div>
    </div>
    <div class="unusual">
        <div>two</div>
    </div>
    <div class="usual">
        <div>three</div>
    </div>
    <div class="unusual">
        <div>four</div>
    </div>
</div>
</body>
<script>
 var flyweight = (function () {
     var colorIndex = 0;
     var colors = ["yellow","aqua","chartreuse","white"];
     /*select elements with class `unusual`*/
     var list = document.getElementsByClassName("unusual");
    return{
        updateColors: function () {
            /*change color in live DOM: change color randomly all the items with the class 'unusual' */
           for (var z = 0; z < list.length; z++) {
               list[z].style.backgroundColor = colors[(Math.random() * 3)|0];
               list[z].innerText = new Date().toLocaleTimeString();
           }
        }
    }
 })();      
/*It`s difficult to create listeners for each element 'usual' (or 'unusual').
Let`s create a listener for container to listen click evet.After click logic change state inner items of container*/ 
    document.querySelector(".container").addEventListener("click", flyweight.updateColors, false);
</script>
/*--MM----MM--V---V---CCCC----------
----M-M--M-M--V---V---C------------
----M--MM--M--V---V---C-------------
----M------M---V-V----C-------------
----M------M----V-----CCCC----------*/
function View(controller){
    this.controller = controller;
    this.heading = document.getElementById("heading");
     this.heading.innerText = controller.getModelHeading();
}

function Modell(){
    this.heading = "hello;
}

function Controller (model) {
    this.model = model;
    var that = this;
    this.handleEvent = function(e.type){
        e.stopPropagation();
        switch(e){
            case 'onclick':
                that.clickHandler(e.target);
            break;
            default:
                console.log(e.type);
        }
    }
    
    this.getModelHeading = function(){
        return that.model.heading;
    }
    
    this.clickHandler = function(target){
        that.model.heading = "world";
        target.innerText = that.getModelHeading();
    }
}
/**************************/
<!DOCTYPE html>
<html lang="en">
<meta name="viewport" content="width=device-width, initial-scale=1">
<head>

   <style type="text/css">
      canvas { border: 1px solid black;
             }
       .common{
           display:flex;
           flex-flow:column, wrap;
           justify-content:space-around;
           align-items: center;
           margin-top:25px;
       }
       
       .container{
           display: flex;
           justify-content: center;
           align-items: center;
       }
     
       .btn{
           border:5px solid green;
           margin:0;
           padding:20px;
           font-family: "Arial", cursive;
           font-size: 25px;
           background-color: aqua;
           color: black;
           border-radius: 16px;
       }
       .btn:hover{
           background-color: yellow;
       }
   </style>
</head>
<body>
 <div class="container">     
    <canvas id="tutorial" width="320" height="200">  
    </canvas>
 </div>   
    <article class="common">
       <button  id = "start" class="btn">start clock</button>
       <button id  = "stop" class="btn">stop clock</button>
    </article>
 

</body>
<script>
   function Model () {
        this.time = new Date();
        this.sec = this.time.getSeconds();
        this.min = this.time.getMinutes();
        this.hour = this.time.getHours();
    }
    /***the view*/
    function View () {
         this.context = document.getElementById('tutorial').getContext('2d');
         this.startButton = document.getElementById('start');
         this.stopButton = document.getElementById('stop');
         this.context.font = "25px serif";
         this.context.shadowOffsetX = 4;
         this.contextshadowOffsetY = 4;
         this.context.shadowBlur = 2;
         this.context.shadowColor = "rgba(0, 0, 0, 0.5)";
         this.context.fillText("12", 150, 30);
         this.context.fillText("1", 190, 40);
         this.context.fillText("2", 220, 70);
         this.context.fillText("3", 230, 108);
         this.context.fillText("4", 220, 148);
         this.context.fillText("5", 190, 175);
         this.context.fillText("6", 150, 185);
         this.context.fillText("7", 110, 175);
         this.context.fillText("8", 85, 148);
         this.context.fillText("9", 75, 108);
         this.context.fillText("10", 75, 70);
         this.context.fillText("11", 110, 40);
         this.context.lineWidth = 3;
    }
    /***the controller*/
    function Controller(mod,view){
        var that = this;
        this.intervalHandle = null;
        this.model = mod;
        this.view = view;
        
        this.toRad = function (deg) {
            return (deg * Math.PI) / 180;
        }
        
        this.drawArow = function (context, angle, size, width=1){
                context.beginPath();
               /*go to the center*/
               context.moveTo(160,100);
               context.lineWidth = width;
             /*angles less that 90deg*/
             if(angle <= 90){
                 context.lineTo(160+(Math.sin(that.toRad(angle))*size),
                  100-(Math.cos(that.toRad(angle))*size));
              } else if((angle > 90)&&(angle <= 180)){
            /**90>degrees>180**/
                angle = 180 - angle;
                context.lineTo(160+(Math.sin(that.toRad(angle))*size),
                100+(Math.cos(that.toRad(angle))*size));            
             } else if((angle > 180)&&(angle <= 270)) {
            /**180>degrees>270**/
                angle = angle - 180;
                context.lineTo(160-(Math.sin(that.toRad(angle))*size),100+(Math.cos(that.toRad(angle))*size));            
            } else if((angle > 270)&&(angle < 360)){
            /***270>deg<360*/
                angle = 360 - angle;
                context.lineTo(160-(Math.sin(that.toRad(angle))*size),
                100-(Math.cos(that.toRad(angle))*size)); 
            }
          context.stroke();
       }
       
        
        this.onTimeout = function() {
            /*update time on event in the modell*/
            var offsetX = that.view.context.shadowOffsetX;
            var offsetY = that.view.context.shadowOffsetY;
            var blur = that.view.context.shadowBlur;
            that.view.context.shadowOffsetX = 0
            that.view.context.shadowOffsetY = 0;
            that.view.context.shadowBlur = 0;
            that.model.time = new Date();
            that.model.sec = that.model.time.getSeconds();
            that.model.min = that.model.time.getMinutes();
            that.model.hour = that.model.time.getHours();
            /*update view - clean*/
            
            that.view.context.fillStyle="#fff";
            that.view.context.moveTo(160,100);
            that.view.context.beginPath();
            that.view.context.arc(160,100,60,0,Math.PI * 2);
            
            that.view.context.fill();
            that.view.context.clip();
           
            /*restore shadows*/
            that.view.context.shadowOffsetX = offsetX;
            that.view.context.shadowOffsetY = offsetY;
            that.view.context.shadowBlur = blur;
            //that.view.context.shadowInset = true;
            /*show arrows*/
            if(that.model.hour >= 12){
                that.model.hour -= 12;
            }
            /*hours*/
            that.drawArow(that.view.context,(that.model.hour*30)+(that.model.min*0.5),25,3);
            /*minutes*/
            that.drawArow(that.view.context,(that.model.min*6)+(that.model.sec*0.1),40,3);
            /*seconds*/
            that.drawArow(that.view.context,that.model.sec*6,63,1);
         }
         this.onStart = function(ev){
            ev.stopPropagation();
            that.intervalHandle = window.setInterval(that.onTimeout,1000);
         }
    
        this.onStop = function(ev){
            ev.stopPropagation();
            if(that.intervalHandle){
                window.clearInterval(that.intervalHandle);
             }
         }
        
        this.view.startButton.addEventListener('click',this.onStart,false);
        this.view.stopButton.addEventListener('click',this.onStop,false);
        
         for(var q = 0; q<360; q+=30){
             this.drawArow(this.view.context,q,65,2);
         }
        this.view.context.shadowOffsetX = 0;
        this.view.context.shadowOffsetY = 0;
        this.view.context.fillStyle="#fff";
        this.view.context.moveTo(160,100);
        this.view.context.arc(160,100,55,0,6.28);
      
        this.view.context.fill();
    }
    
   
  var v = new View();
  var m = new Model();
  var c = new Controller(m,v);
    
    //document.addEventListener('load',onLoad,'false');
</script>
</html>
<!DOCTYPE html>
<html lang="en">
   <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0"> 
        
        <title>JS-practic</title>
        <style>
            .container{
                display: block;
                margin: 1em;
                padding: 0.5em;
                
            }
            
            .wrapper{
                margin: 0.5px;
                display: flex;
                flex-flow: row wrap;
                align-items: center;
                justify-content:space-around;
                border: 1px solid #eee;
                
            }
            
            .wrapper>p{
                display: inline-block;
                text-align: center;
                padding: 1em 1em;
                margin: 0;
                border: 1px solid magenta;
                border-radius:12px;
                background-color: aqua;
                color:black;
                 font: 1.2em "Arial", serif;
            }
            .A001{    
                height: 100px;
                width: 100px;
                overflow: auto;
            }
            
            .A001>p{
                height: 1000px;
                width: 1000px;
                color: red;
            }
            
           .btn {
	           box-shadow:inset 0px 1px 0px 0px #bee2f9;
               background:linear-gradient(to bottom, #63b8ee 5%, #468ccf 100%);
	           background-color:#63b8ee;
           	   border-radius:6px;
	           border:1px solid #3866a3;
	           display:inline-block;
	           cursor:pointer;
	           color:#14396a;
	           font-family:Arial;
	           font-size:15px;
	           font-weight:bold;
	           padding:6px 24px;
	           text-decoration:none;
	           text-shadow:0px 1px 0px #7cacde;
               margin:30px;
          }
          .btn:hover {
	           background:linear-gradient(to bottom, #468ccf 5%, #63b8ee 100%);
	           background-color:#468ccf;
           }
            
          .btn:active {
	          position:relative;
	          top:1px;
           }
       </style>
    </head>
            
<body>

<article class="wrapper">
    <p id="hour">Hour:</p>
    <p id = "min">Min:</p>
    <p id = "sec" >Sec:</p>
    </article>
    <button class="btn" id="upd">update</button>
</body>
    
<script>
    function View(){
        var hour = document.querySelector("#hour");
        var min = document.querySelector("#min");
        var sec = document.querySelector("#sec");
        var btn = document.querySelector("#upd");
        return {
            setHour:function (i) {
                hour.innerText = "Hour:"+i;
            },
            setMin: function (i) {
                min.innerText = "Min:"+i;
            },
            setSec: function (i) {
                sec.innerText = "Sec:"+i;
            },
            getBtn: function () {
                return btn;
            }
            
        }
    }
    
    function Model(){
        var time = new Date();
        return {
                setTime: function (t) {
                   time = t;
                 },
                 getTime: function () {
                   return time;
                 }
               }
     }
    
    function Controler (model,view) {
        this.view = view;
        this.model = model;
        var that = this;
        this.onClick = function (e) {
            /*update time*/
            that.model.setTime(new Date);
            /*set values to view*/
            that.view.setHour(that.model.getTime().getHours());
            that.view.setMin(that.model.getTime().getMinutes());
            that.view.setSec(that.model.getTime().getSeconds());
        }
        that.view.getBtn().addEventListener('click', that.onClick, false);
    }
    
    var m = new Model();
    var v = new View();
    var c = new Controler(m,v);
</script>
</html>
