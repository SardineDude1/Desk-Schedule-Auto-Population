function daysUntilNextMonday(date) {
  
  // get the weekday number from the current date
  var dayOfWeek = date.getDay();
  
  // use a 'switch' statement to calculate the number of days until the next Monday
  switch (dayOfWeek) {
  case 0:
    num_of_day = 1;
    break;
  case 1:
    num_of_day = 7;
    break;
  case 2:
     num_of_day = 6;
    break;
  case 3:
    num_of_day = 5;
    break;
  case 4:
    num_of_day = 4;
    break;
  case 5:
    num_of_day = 3;
    break;
  case 6:
    num_of_day = 2;
  }
  
  //return the number of days until next Monday.
  return num_of_day;
  
}
