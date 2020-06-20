                                            //ASSIGNMENT NO. 6

                                            //Chapter No. 21-25
                                            //Question No. 1
var firstName=prompt("Enter your first Name:");
var SecondName=prompt("Enter your last name:");
var FullName=firstName + " " + SecondName;
document.write("Hello" + FullName)
                                            //Question No. 2
var FavMob=prompt("Enter your favourite mobile:","NOKIA 3310")
document.write("My favourite mobile is :" + FavMob + "<br>" + "length of model is: " + FavMob.length + "<br>")
                                            //Question No. 3
var index="pakistan"
document.write(index.indexOf("n")+1 + "<br>")
                                            //Question No. 4
var var1="Hello World"
document.write(var1.lastIndexOf("l") + "<br>")
                                            //Question No. 5
document.write(index.charAt(3))
                                            //Question No. 6
FullName=firstName.concat(SecondName)
                                            //Question No. 7
var City1="Hyderabad"
document.write(City1.replace("Hyder","Islam"))
                                            //Question No. 8
var message = "Ali and Sami are best friends. They play cricket and football together.";
document.write(message.replace(/and/g,"&"))
                                            //Question No. 9
var value1="472"
var value2=parseInt(value1) 
document.write(type(value2))
                                            //Question No. 10
var userInput="peanut"
document.write(userInput.toUpperCase())
                                            //Question No. 11
var var2="JAVASCRIPT"
document.write(var2.toLowerCase())
                                            //Question No. 12
var var3=37.2
var var4=var3.toString()
document.write(type(var4))
                                            //Question No. 13
var var5=prompt("Enter your Name:")
for(i=0;i<var5.length ; i++){
    
}
                                            //Question No. 14
var A = ["cake", "apple pie", "cookie", "chips", "patties"]
var B = prompt("Enter the fruit of your choice")
var B = B.toLowerCase()
for (var i=0;i<B.length;i++){
    if (B == A.slice(i,i+1)){
        document.write("Your choice of fruit found in our list at " + i)
    }
    else{
        document.write("We are Sorry.Pastry is not available in our Bakery")
    }
}

                                            //Question No. 15
function CheckPassword(inputtxt) 
{ 
var passw=  /^[A-Za-z]\w{7,14}$/;
if(inputtxt.value.match(passw)) 
{ 
alert('Correct, try another...')
return true;
}
else
{ 
alert('Wrong...!')
return false;
}
}

                                            //question No 16
var university = "University of Karachi";
for(var i=0; i<university.length; i++){
    document.write(university.slice(i,i+1) + "<br>")
}

                                            //Question No. 17
var Country="Pakistan"
document.write(Country.slice(-1))


                                            //Chapter 26-30

                                            //Question No. 1
var positiveInteger = 3.142;
document.write("Number : " + positiveInteger + "<br>" + "ROund off value : " + Math.round(positiveInteger) + "<br>"  + "Floor value : " + Math.floor(positiveInteger) + "<br>" + "Ceil : " + Math.ceil(positiveInteger))                        

                                            //Question No. 2
var positiveInteger = 3.142;
document.write("Number : " + positiveInteger + "<br>" + "ROund off value : " + Math.round(positiveInteger) + "<br>"  + "Floor value : " + Math.floor(positiveInteger) + "<br>" + "Ceil : " + Math.ceil(positiveInteger))                        

                                            //Question No. 3
var var6=-5;
document.write("The Absolute Value of " + var6 + "is" + Math.abs(var6))

                                            //Question No. 4
var dice=Math.random()*6
document.write("Random Dice value is" + Math.ceil(dice))
                                            //Question No. 5
var toss=Math.random(2)
document.write("Random coin side is " + Math.ceil(toss))
                                            //Question no. 6
var rand= Math.random(100)
document.write("Random number between 1-100 is " + rand)
                                            //Question No. 7
var weight=prompt("Please enter your weight")
document.write("Your weight is " + parseFloat(weight))
                                            //Question No. 8
var secNo=math.random(10)
var yourNo=+prompt("Enter a number")
if(math.ceil(secNo)==yourNo){
    document.write("Congrates! You Won")
}
else{
    document.write("HardLuck! Wish you luck")
}

                                            //Chapter 31-34
                                            //Question No. 1
var currentDate= new Date();
document.write(currentDate)

                                            //Question No. 2
var arr0 = ["January","Feb","Mar","April","May","June","July","Aug","Sept","Oct","Nov","Dec"]
var currentMonth = currentDate.getMonth()
alert(arr0.slice(currentMonth,currentMonth+1))
                                            //Question no. 3
var dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
var now = new Date();
var theDay = now.getDay();
var nameOfToday = dayNames[theDay];
                                            //Question No. 4
if(nameOfToday == "Sat" | nameOfToday == "Sun"){
    document.write("It's a fun day")
}
else{
    document.write("SHIT")
}                                           
                                            //Question No. 5
var Date=currentDate.getDate
if(Date >= 16 ){
    document.write("First Fifteen Days of month")
}
else{
    document.write("Last Fifteen Days of month")
}
                                            //Question No. 6
var minutes= currentDate.getTime();
document.write("Elapsed millisecond sine january 1, 1970" + minutes + "<br>")
document.write("Elapsed millisecond sine january 1, 1970" + minutes/(1000 *60*60))
                                            //Question No. 7
var Hours=currentDate.getHours()
if(Hours <=11){
    document.write("its P.M")
}
                                            //Question No. 8
var laterMonth = new Date(2020, 11,31,0,0,0)
document.write(laterMonth)
                                            // Question no. 9
var ramadan=new Date(2020, 05, 18)
var currentDate = new Date()
document.write(math.floor((currentDate - ramadan)/(1000*60*60*24)))
                                            //Question No. 10
var ramadan=new Date(2020, 05, 18)
var currentDate = new Date()
document.write(currentDate - ramadan)
                                            //Question No. 11
var var7 = currentDate.getHours() 
var var8 = currentDate.setHours(var7+1)
document.write("Current Date : " + new Date(var8) + "<br>" + "1 hour Ago, it was " + new Date())
                                            //question no. 12
var var8 = currentDate.getFullYear()
var var9= currentDate.setFullYear(var8-100)
alert("Current Date is" + new Date() +"<br>" + "Hundred years back,it was " + currentDate)
                                            //question No. 13
var birthYear = 1997;
var currentYear = currentDate.getFullYear()
document.write(currentYear - birthYear)
                                            //question No. 14
var CustomerName = "Logan Paul";
var monthArray = ["January","Feb","Mar","April","May","June","July","Aug","Sept","Oct","Nov","Dec"];
var CurrentMonth = monthArray.slice(currentDate.getMonth(),currentDate.getMonth()+1);
var NumberOfUnits = 230;
var ChargesPerUnit = 10;
var NetAmountPayable = 230*10;
var LatePaymentSurcharge = 350;
var GrossAmountPayable = NetAmountPayable + LatePaymentSurcharge;
document.write("Customer Name:"  + CustomerName + "<br>" +"Month : " + CurrentMonth + "<br>" +"Number of units consumed" + NumberOfUnits + "<br>" +"Charges per unit" + ChargesPerUnit + "<br>" +  "Amount payable within due date: " + NetAmountPayable + "<br>" + "Gross Amount Payable" + GrossAmountPayable) 

                                            //Chapter 35-38
                                            //Question No. 1
function date(){
    document.write(new Date())
}
                                            //Question No. 2
function Greet(){
    firstName
    SecondName
    document.write("Hello " + FullName)
}
                                            //question No. 3
function add(a,b){
    document.write(a+b)
}
                                            //Question No. 4
function calculator(a,b,c,opr){
    if(opr === "+"){
        document.write(a+b+c)
    }
    else if( opr === "-"){
        document.write(a-b-c)
    }
    else if( opr === "*"){
        document.write(a*b*c)
    }
    else if( opr === "/"){
        document.write((a/b)/c)
    }
}
                                            //Question No. 5
function sqr(a){
     document.write(a**2)
}
sqr(3)
                                            //Question no. 6
function fact(a){
    document.write(math.fact(a))
}
                                            //Question No. 7
function counting(a,b){
    for(var i=a;i<=b;i++ ){
        document.write(i)
    }
}
                                            //Question No. 8
function hypt(base,perp){
    document.write("hypotenious" + (base**2 + perp**2)**0.5)
}
                                            //Question no. 9
var width = 4
var height =3
function area(a,b){
    document.write(a * b)
}
area(width,height)
area(3,4)
                                            //Question no. 10
function palindrome(){
    var var10 = prompt("Enter a word")
    if ( var10.slice(0,var10.length) === var10.slice(var10.length,0)){
        document.write("Wow! you've entered a palindrome word")
    }
    else{
        document.write("Your word is not palindrome")
    }
}
                                            //Question no. 11
function upper(a){
    document.write(a.slice(0,1).toUpperCase + a.slice(1,))
}
                                            //Question no. 12
function find_longest_word(str)
{
  var array1 = str.match(/\w[a-z]{0,}/gi);
  var result = array1[0];

  for(var x = 1 ; x < array1.length ; x++)
  {
    if(result.length < array1[x].length)
    {
    result = array1[x];
    } 
  }
  return result;
}
console.log(find_longest_word('Web Development Tutorial'));
                                            //Question No. 13
function char_count(str, letter) 
{
 var letter_Count = 0;
 for (var position = 0; position < str.length; position++) 
 {
    if (str.charAt(position) == letter) 
      {
      letter_Count += 1;
      }
  }
  return letter_Count;
}

console.log(char_count('JSRresources.com', 'o'));
                                            //Question No. 14
function circle(radius)
{
    this.radius = radius;
  // area method
    this.area = function () 
    {
        return Math.PI * this.radius * this.radius;
    };
  // perimeter method
    this.perimeter = function ()
    {
        return 2*Math.PI*this.radius;
    };
}
var c = new circle(3);
console.log('Area =', c.area().toFixed(2));
console.log('perimeter =', c.perimeter().toFixed(2));
  var var11 = "asma jahangir"