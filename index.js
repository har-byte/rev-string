function reverse(string){

if(!string || string.length<2 || typeof string != 'string' ){
   console.log("hmmm something went wrong!!!!!!")
}

  var splitstring = string.split("");
  var revstring = splitstring.reverse();
  console.log(revstring);
}
reverse('onkar');