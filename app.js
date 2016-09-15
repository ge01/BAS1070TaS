function truncateString(str, num) {
  //console.log(str.length);
  //console.log(num);
  if (str.length > num) {

    strHold = str.substring(0,num-3);
    //console.log(strHold + "...");
    return strHold + "...";
  }
  else{
    return str;
  }


}

console.log(truncateString("A-tisket a-tasket A green and yellow basket", 11));
console.log(truncateString("Peter Piper picked a peck of pickled peppers", 14));
console.log(truncateString("A-", 1));
console.log(truncateString("Absolutely Longer", 2));



//console.log("A-tisket a-tasket".length);
//console.log("A-tisket a-tasket".slice(3));
