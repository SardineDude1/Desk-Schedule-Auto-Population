/*
WELCOME TO THE READ ME FILE!

This file will walk you through how to set up your Desk Schedule Auto Populate script which will generate a desk schedule
randomly populated with staff/events from your Google Calendar(s).

Set-up

  1. Adding a Google Calendar

      The first variable that needs to be filled in is the calendar_ids variable.
      This is a list of one or more google calendar ids.

      To find a google calendar id first navigate to your google calendar.
      Then, on the left side of the screen, select the "Options for" menu and click on "Settings and Sharing."
      Towards the bottom of the page there will be an entry for Calendar ID.
      Copy the whole ID and paste it into the calendar_ids variable in the google script.
      Be sure to include single quotes around the calendar ID and commas separating the calendar IDs if you have more than one.

      EXAMPLE: var calendar_ids = ['your-calendar-id', 'another-calendar-id'];


  2. Adding a Google Drive Folder ID

      The second variable in the script is the location the new desk schedule will be stored in your google drive.

      To find the google drive folder ID, navigate to the folder you wish to save the desk schedule to in your google drive.
      Then get the link to the folder by copying the url.
      Then find the ID by copying the string of letters and numbers that come after /folders/ but before ?usp.

      EXAMPLE
        Link: https://drive.google.com/drive/folders/1j-HH3B7Q9bPvSsWeArTUA2l1I6aMvfAlbjAakq9JV2E?usp=sharing
        Folder ID: 1j-HH3B7Q9bPvSsWeArTUA2l1I6aMvfAlbjAakq9JV2E
      
      Then paste the folder ID between the parentheses on line 12. Be sure to include single quotes around the id.

      EXAMPLE
        var folder = DriveApp.getFolderById('1d9T8QafEFlHbgKLblv6YySqVW4ZhfI5w');


  3. Adding a Format Sheet

      The third variable in the script is the format_sheet variable.
      The format_sheet is the ID of a Google Sheet which contains a blank desk schedule.
      One has been added to this repository.

      To find the google sheet ID, navigate to the sheet you wish to use as a template and open it in your browser.
      Then get the link to the sheet by copying the url.
      Then find the ID by copying the string of letters and numbers that come after /spreadsheets/d/ but before /edit?usp.

      EXAMPLE
        Link: https://docs.google.com/spreadsheets/d/1j-HH3B7Q9bPvSsWeArTUA2l1I6aMvfAlbjAakq9JV2E/edit?usp=sharing
        Sheet ID: 1j-HH3B7Q9bPvSsWeArTUA2l1I6aMvfAlbjAakq9JV2E

      You are more than welcome to create your own template but keep a few things in mind:
        1. The title of the sheet will always appear in cell A1.
        2. At the moment, staff names and scheduled time will appear in Columns A-F and Rows 4-8. This will be addressed in the next update.
        3. The case-sensitive keyword "fill" should be present in the cells you wish to populate with a staff member's name.
        4. The cell sizes will be the same in the final product as it is in the format sheet.
      

  4. Automatic Email Notification when a Desk Schedule is Created
      The fourth variable to fill in is the email address of the person you wish to send the newly generated desk schedule.
      This is most likely yourself.

      If you do not wish to send an automatic email leave this blank.

      EXAMPLE
        Auto Email : var emailAddress = 'email-address@mail.com';
        No Email: var emailAddress = '';


  5. Email Subject Line
      The final variable to fill in is the subject line of the email you wish to send.
      This can be any string of characters.

      EXAMPLE:
        var emailSubject = 'Desk Schedule';


  6.  Automatically Run the Script on a Certain Day
      If you would like the script to run without running it yourself, you can set up a trigger.
      
      To set up a trigger, click on the clock icon on menu located on the left side of your screen.
      Then click on Add Trigger on the bottom right of the screen.
      
      The function you wish to run is Start.
      The second option should be Head.
      The third option should be Time-Driven.
      The fourth opiton should be how often you want to run the script.
      The fifth option is dependant on the fourth.

      On the right side of the pop-up box you can choose how quickly or if you will be notified should the script fail.

END

*/
