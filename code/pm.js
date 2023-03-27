var units;
var amount=prompt("enter amount of unit(s) to be purchased");

if (amount >= 0){
units = amount/10.5;
alert("your unit(s) purchased is" + " " + units + "watts");
}

else if (amount >= 1000){
units = amount/12.5;
alert("your unit(s) purchased is" + " " + units + "watts");
}

else if (amount >= 3000){
units = amount/14.5;
alert("your unit(s) purchased is" + " " + units + "watts");
}
 