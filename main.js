  
  
// Shop should only be open Monday - Friday from 7am - 3pm
  
  //convert time to PST
  var LocalDateTime = new Date();
  var pstDateTime = LocalDateTime.toLocaleString('en-US', {
      timeZone: 'America/Los_Angeles'
  });
  var splitDateTime = pstDateTime.split(',');
  var pstDate = splitDateTime[0];
  var pstTime = splitDateTime[1];

  var convertedPstDate = new Date(pstDate);

  var day = convertedPstDate.getDay();

  var time = pstTime.slice(0, 3);
  var amPM = pstTime.slice(pstTime.length - 2);

  //convert to military time - start
  if (time === '12') {
      time = '00';
  }

  if (amPM === 'PM') {
      time = parseInt(time, 10) + 12;
  } else {
      time = parseInt(time, 10);
  }
  //convert to military time - End

  //Monday - Friday 7am - 3pm
  if (day > 0 && day < 6 && time >= 7 && time < 15) {
      console.log('valid open')
  } else {
      console.log('valid close')
  }