function getEventsForWeek(calendar_ids, monday) {
  var all_events = [];
  var m_events = [];
  var t_events = [];
  var w_events = [];
  var th_events = [];
  var f_events = [];
  var s_events = [];
  var MILLIS_PER_DAY = (1000 * 60 * 60 * 24);

  for (var i=0; i<calendar_ids.length; i++){
    m_events = m_events.concat(CalendarApp.getCalendarById(calendar_ids[i]).getEventsForDay(new Date(monday.getTime())));
    t_events = t_events.concat(CalendarApp.getCalendarById(calendar_ids[i]).getEventsForDay(new Date(monday.getTime()+ MILLIS_PER_DAY)));
    w_events = w_events.concat(CalendarApp.getCalendarById(calendar_ids[i]).getEventsForDay(new Date(monday.getTime()+ MILLIS_PER_DAY * 2)));
    th_events = th_events.concat(CalendarApp.getCalendarById(calendar_ids[i]).getEventsForDay(new Date(monday.getTime()+ MILLIS_PER_DAY * 3)));
    f_events = f_events.concat(CalendarApp.getCalendarById(calendar_ids[i]).getEventsForDay(new Date(monday.getTime() + MILLIS_PER_DAY * 4)));
    s_events =s_events.concat(CalendarApp.getCalendarById(calendar_ids[i]).getEventsForDay(new Date(monday.getTime()+ MILLIS_PER_DAY * 5)));
    
  }
  all_events.push(m_events, t_events, w_events, th_events, f_events, s_events);

  return all_events;
}
