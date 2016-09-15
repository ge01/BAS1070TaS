/*******************************************************************************
*                            Truncate a String                                 *
*  Truncate a string (first argument) if it is longer than the given maximum   *
*  string length (second argument). Return the truncated string with a         *
*  ... ending.                                                                 *
*******************************************************************************/
function truncateString(str, num)
{
  // Test first and second argument
  if (str.length > num && num > 3)
  {
    // Substring starting at character 0 and ending at num -3
    strHold = str.substring(0,num-3);

    return strHold + "...";
  }
  else if (str.length > num && num <= 3)
  {
    // Substring starting at character 0 and ending at num
    strHold = str.substring(0,num);

    return strHold + "...";
  }
  else
  {
    return str;
  }
}

// Input Data
console.log(truncateString("A-tisket a-tasket A green and yellow basket", 11));
console.log(truncateString("Peter Piper picked a peck of pickled peppers", 14));
console.log(truncateString("A-", 1));
console.log(truncateString("Absolutely Longer", 2));

//Output Data
//A-tisket...
//Peter Piper...
//A...
//Ab...
