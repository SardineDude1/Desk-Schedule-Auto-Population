function Start() {

  // Enter the Calendar IDs you wish to use to generate the desk schedule.
  // Make sure they are inside parathenses and seperated by commas.
  // Example: var calendar_ids = ['your-calendar-id', 'your-calendar-id'];

  var calendar_ids = ['your-calendar-id'];

  // Enter the Folder ID you wish to save the desk schdeule to.

  var folder = DriveApp.getFolderById('folder-id');

  // Enter the Sheet ID of a desk schedule template.

  var format_sheet = 'format-sheet-id';

  // Enter in the email address you want to send the desk schdeule to automatically.
  // If you do not want to recieve and email, leave it blank.

  var emailAddress = 'your-email-address@gmail.com';

  // If you would like you can change the subject line for the automatic email here.
  
  var emailSubject = 'Desk Schedule';

  // END OF USER ENTRY // DO NOT CHANGE ANYTHING ELSE UNLESS YOU KNOW WHAT YOUR ARE DOING. //

  //Get the current day of the week
  var MILLIS_PER_DAY = (1000 * 60 * 60 * 24);
  var date = new Date();

  //Get the next monday
  var next_monday = new Date(date.getTime() + (MILLIS_PER_DAY * daysUntilNextMonday(date)));
  
  //Generate a title string
  var title = ("Desk Schedule " + Utilities.formatDate(next_monday, "GMT", 'MM-dd-yy') + ' To ' + Utilities.formatDate((new Date(next_monday.getTime() + (MILLIS_PER_DAY*5))), "GMT", 'MM-dd-yy'));

  //Search the drive to see if a desk schedule with that name already exists
  if(searchFiles(title, folder))
  {
    //Get Event Data for the week.
    var all_events = getEventsForWeek(calendar_ids, next_monday);

    //create and move the spreadsheet to the desired folder
    var desk_schedule = makeDeskSchedule(title, folder, format_sheet, all_events);

    if (emailAddress != null){
      MailApp.sendEmail(emailAddress, emailSubject, desk_schedule.getUrl());
    }else{
      console.log("No email address found.");
    }

  }else{
    console.log(title + " already exists.");
  }
   
}
