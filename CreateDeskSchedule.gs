function makeDeskSchedule(title, folder, format_sheet, all_events) {

  var desk_schedule = SpreadsheetApp.create(title);

  DriveApp.getFileById(desk_schedule.getId()).moveTo(folder);
  SpreadsheetApp.openById(format_sheet).getSheets()[0].copyTo(desk_schedule);
  desk_schedule.deleteSheet(desk_schedule.getSheetByName("Sheet1"));
  desk_schedule.getSheets()[0].getRange("A1").setValue(title);
  var all = desk_schedule.createTextFinder("fill").findAll();

  for(var i=0; i<all_events.length; i++){
    switch(i){
      case 0:
        var day = "Monday";
        for (var x=0; x<all_events[i].length; x++)
        {
          desk_schedule.getSheets()[0].getRange("A"+(x+4)).setValue(all_events[i][x].getTitle().split(' ')[1] + ' ' + all_events[i][x].getTitle().split(' ')[2]);
        }
        for (var x=0; x<all.length; x++){

          if (all[x].getA1Notation().indexOf("A")>=0)
          {
            all[x].setValue(all_events[i][randNum(0, (all_events[i].length - 1))].getTitle().split(' ')[1]);
          };
        }
        break;

      case 1:
        var day = "Teusday";
        for (var x=0; x<all_events[i].length; x++)
        {
          desk_schedule.getSheets()[0].getRange("B"+(x+4)).setValue(all_events[i][x].getTitle().split(' ')[1] + ' ' + all_events[i][x].getTitle().split(' ')[2]);
        }
        for (var x=0; x<all.length; x++){

          if (all[x].getA1Notation().indexOf("B")>=0)
          {
            all[x].setValue(all_events[i][randNum(0, (all_events[i].length - 1))].getTitle().split(' ')[1]);
          };
        }
        break;

      case 2:
        var day = "Wednesday";
        for (var x=0; x<all_events[i].length; x++)
        {
          desk_schedule.getSheets()[0].getRange("C"+(x+4)).setValue(all_events[i][x].getTitle().split(' ')[1] + ' ' + all_events[i][x].getTitle().split(' ')[2]);
        }
        for (var x=0; x<all.length; x++){

          if (all[x].getA1Notation().indexOf("C")>=0)
          {
            all[x].setValue(all_events[i][randNum(0, (all_events[i].length - 1))].getTitle().split(' ')[1]);
          };
        }
        break;

      case 3:
        var day = "Thursday";
        for (var x=0; x<all_events[i].length; x++)
        {
          desk_schedule.getSheets()[0].getRange("D"+(x+4)).setValue(all_events[i][x].getTitle().split(' ')[1] + ' ' + all_events[i][x].getTitle().split(' ')[2]);
        }
        for (var x=0; x<all.length; x++){

          if (all[x].getA1Notation().indexOf("D")>=0)
          {
            all[x].setValue(all_events[i][randNum(0, (all_events[i].length - 1))].getTitle().split(' ')[1]);
          };
        }
        break;

      case 4:
        var day = "Friday";
        for (var x=0; x<all_events[i].length; x++)
        {
          desk_schedule.getSheets()[0].getRange("E"+(x+4)).setValue(all_events[i][x].getTitle().split(' ')[1] + ' ' + all_events[i][x].getTitle().split(' ')[2]);
        }
        for (var x=0; x<all.length; x++){

          if (all[x].getA1Notation().indexOf("E")>=0)
          {
            all[x].setValue(all_events[i][randNum(0, (all_events[i].length - 1))].getTitle().split(' ')[1]);
          };
        }
        break;

      case 5:
        var day = "Saturday";
        for (var x=0; x<all_events[i].length; x++)
        {
          desk_schedule.getSheets()[0].getRange("F"+(x+4)).setValue(all_events[i][x].getTitle().split(' ')[1] + ' ' + all_events[i][x].getTitle().split(' ')[2]);
        }
        for (var x=0; x<all.length; x++){

          if (all[x].getA1Notation().indexOf("F")>=0)
          {
            all[x].setValue(all_events[i][randNum(0, (all_events[i].length - 1))].getTitle().split(' ')[1]);
          };
        }
        break;
    }
  }
  return desk_schedule;

}
