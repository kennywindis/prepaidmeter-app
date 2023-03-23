var units;
var amount=prompt("enter amount of unit(s) to be purchased");

if (amount >= 2000){
units = amount/10.5;
alert("your unit(s) purchased is" + " " + units + "watts");
}

else if (amount >= 4000){
units = amount/12.5;
alert("your unit(s) purchased is" + " " + units + "watts");
}

else if (amount >= 6000){
units = amount/14.5;
alert("your unit(s) purchased is" + " " + units + "watts");
}

