
function palindrome(string){
var len= string.length;
for(let i=0;i<len/2;i++){
if(string[i]!=string[len-1-i]){
    return 'false';
}
}
return 'true';
}
var input= prompt('enter a string');
var output= palindrome(input);
document.write(output);
 

