/*
   your PPTASK:
   
   Test drive each bit of code in this file,
    and insert comments galore, indicating anything
     you discover,
    	have questions about,
    		or otherwise deem notable.
    		
    		Write with your future self or teammates in mind.
    		
    		If you find yourself falling out of flow mode, consult 
    		other teams
    		MDN

   A few comments have been pre-filled for you...
   
   (delete this block comment once you are done)
*/

// BSGE :: Kevin Cao, Eliza Knapp
// SoftDev pd0
// K29 -- DOMfoolery++
// 2022-02-10t
// --------------------------------------------------

//send diagnostic output to console
//(Ctrl-Shift-K in Firefox to reveal console)
console.log("AYO"); // upon rendering the page, this message prints

var i = "hello";
var j = 20;



//assign an anonymous fxn to a var
var f = function(x) { // if you go in the console and type f(number) it will return 30 + val
  var j=30;
  return j+x; // if it's a string, it just appends 30 to the front, if you put giberish without quotes, you get an "uncaught reference error"
};


//instantiate an object
// if you just type in o to the console, then you get this info below
var o = { 'name' : 'Thluffy',
age : 15,
items : [10, 20, 30, 40],
morestuff : {a : 1, b : 'ayo'},
func : function(x) {
  return x+30;
}
};


// type in addItem("text") and it does
var addItem = function(text) {
  var list = document.getElementById("thelist"); // this gets the current list by it's id in the html file
  var newitem = document.createElement("li"); // this creates a list item (li)
  newitem.innerHTML = text; // this adds the text to the html of the list item you just created
  list.appendChild(newitem); // this appends the item to the list
  // this seems like a lot of new syntax... i thought react was interesting because you can just insert html into the js
};

// if it is an integer in the range of 0-length-1, then it works
// however, type anything in and you cannot read properties of the listitems bc they're not there
var removeItem = function(n) {
  var listitems = document.getElementsByTagName('li');
  listitems[n].remove();
};

// turns the items that already weren't colored red
var red = function() {
  var items = document.getElementsByTagName("li");
  for(var i = 0; i < items.length; i++) {
    // edit- remove the other colors first so it actually works
    items[i].classList.remove('green');
    items[i].classList.remove('blue');
    items[i].classList.add('red'); // although it adds red to all of them it only notices the first color when it tries to put in color
  }
};

// technically stripes the items, but they all have colors
// i have changed it so that it works as stripes...
var stripe = function() {
  var items = document.getElementsByTagName("li");
  for(var i = 0; i < items.length; i++) {
    if (i%2==0){
      items[i].classList.remove('blue'); // removes a class [in this case, the other colors]
      items[i].classList.remove("green");
      items[i].classList.add('red'); // adds a class to the css 
    } else {
      items[i].classList.remove("green");
      items[i].classList.add('red');
      items[i].classList.add('blue');
    }
  }
};

//insert your implementations here for...

/*_____________________________ */
// the actual function
var fib = function(n){
  if(n < 0){
    return "Invalid Input";
  } else if(n == 0){
    return 0;
  } else if(n == 1){
    return 1;
  } else{
    return fib(n-1) + fib(n-2);
  }
}

// the html-ing of the function
var fib_html = function(n){
  var ret = fib(n);
  var fib_text = document.getElementById("fib");
  fib_text.innerHTML = `Fib (testing fib 4): ${ret}`;
  
}

// now actually render on load
fib_html(4)

/*_____________________________ */

var fac = function(n) {
  if(n < 0){
    return "Invalid Input";
  } else if(n == 0){
    return 1;
  } else{
    return n * fac(n-1);
  }
}

var fac_html = function(n) {
  var ret = fac(n);
  var fac_text = document.getElementById("fac");
  fac_text.innerHTML = `Fac (testing fac 5): ${ret}`;
}

fac_html(5);

/*_____________________________ */
var gcd = function(a, b) {
  r = a % b;
  if(r == 0) return b;
  return gcd(b, a % b);
}

var gcd_html = function(a, b) {
  var ret = gcd(a, b);
  var gcd_text = document.getElementById("gcd");
  gcd_text.innerHTML = `GCD (testing 18, 12): ${ret}`;
}

gcd_html(18, 12);

/*_____________________________ */

// add text to end of list
var addItem = function (text) {
  var list = document.getElementById("thelist");
  var newitem = document.createElement("li");
  newitem.innerHTML = text;
  list.appendChild(newitem);
};
/*_____________________________ */

var data = document.getElementById("fib_button");
data.addEventListener("click", handle_fib_click);

function handle_fib_click() {
  var ret = fib(5);
  var info1 = document.getElementById("fib_5_text");
  info1.innerHTML = `Here is the 5th fib number: ${ret}`;
}

/*_____________________________ */

var data1 = document.getElementById("fac_button");
data1.addEventListener("click", handle_fac_click);

function handle_fac_click() {
  var num = document.getElementById("fac_button_input").value;
  var ret = fac(num);
  var info1 = document.getElementById("fac_text");
  info1.innerHTML = `${num}! is ${ret}`;
  document.getElementById("fac_button_input").value = null; // resets input lines
}

/*_____________________________ */

var data2 = document.getElementById("gcd_button");
data2.addEventListener("click", gcd_click);

function gcd_click() {
  let x = prompt("Enter the first number");
  let y = prompt("Enter the second number");
  var ret = gcd(x, y);
  addItem("The greatest common denominator of " + x + " and " + y + " is " + ret);
  var info1 = document.getElementById("gcd_text");
  info1.innerHTML = `The answer has been added to the list! It is: ${ret}`;
}






// notes!
/*
document.createElement(<html tag name></html>)
element.setAttribute(name, value)
element.getAttribute(name)
element.remove()
element.innerHTML
element.appendChild(<element>)
element.addEventListener("event", "function")
*/

