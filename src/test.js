  // Hours part from the timestamp
  const hours = date.getHours();

  const amPm = date.getHours() < 12 ? " AM" : " PM";

  // Minutes part from the timestamp
  const minutes = "0" + date.getMinutes();
  
  // Will display time in 10:30:23 format
  const formattedTime = hours + ':' + minutes.substr(-2) + amPm;