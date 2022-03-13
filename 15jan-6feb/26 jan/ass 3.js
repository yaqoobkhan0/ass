//take three numbers from the user as input and alert minimum of those three;like(10,-20,50->-20),(15,20,45->15).

var a= prompt("enter number");
var b= prompt("enter number");
var c= prompt("enter number");

if (a<b && a<c)
{
alert(a);
}
else if (b<a && b<c)
{
alert (b);
}
else 
{
alert (c);
}