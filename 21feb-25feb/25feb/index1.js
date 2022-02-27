function isanagram(a,b)
{
    if(a.length!==b.length)
    {
        return false;
    }
    var str1 = a.split('').sort().join('');
    var str2 = b.split('').sort().join('');
    var result =(str1=== str2);
    return result;
}
var a= prompt("enter the first string");
var b= prompt("enter the second string");
document.write(isanagram(a,b));
