

var str =prompt("enter any word");
var str1= str.split("");

 var count=0;
 for(var i=0;i<str1.length; i++)
{
switch(str1[i])
{

 case"a":
 case "A":
  count=count+1;
break;

case"e":
 case "E":
  count=count+1;
 break;

case"i":
 case "I":
 count=count+1;
break;

case"o":
 case "O":
  count=count+1;
break;

case"u":
 case "U":
 count=count+1;
  break;
}
}
console.log(count);
