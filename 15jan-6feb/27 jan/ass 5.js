var size= prompt("enter the size of array");
size=parseInt(size);
var array=[];
for (var i=0;i<size;i++)
{
array [i]=prompt("enter the array");
}
console.log(array);
 var max=array[0];
for(var i=0;i<size;i++)
{
if (array[i]>max)
{
max=array[i];
}
}
console.log(max);