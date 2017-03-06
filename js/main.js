(function() {
  var hotel = {
    name: 'Triumph Hotel',
    roomRate: 280,
    discount: 20,
    offerPrice: function() {
      var offerRate = this.roomRate * ((100 - this.discount) / 100);
      return offerRate;
    }
  };

  var hotelName, roomRate, specialRate;

  hotelName = document.getElementById('hotelName').textContent = hotel.name;
  roomRate = document.getElementById('roomRate').textContent =  '$' + hotel.roomRate.toFixed(2);
  specialRate = document.getElementById('specialRate').textContent = '$' + hotel.offerPrice();

  var expiryMsg, today, elEnds;

  function offerExpires(today) {
    var weekFromToday, day, date, month, year, dayNames, monthNames;

    weekFromToday = new Date(today.getTime() + 7 * 24 * 60 * 60 * 1000);
    dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

    day = dayNames[weekFromToday.getDay()];
    date = weekFromToday.getDate();
    month = monthNames[weekFromToday.getMonth()];
    year = weekFromToday.getFullYear();

    expiryMsg = 'Offer expires next ';
    expiryMsg += day + ' <br />(' + date + ' ' + month + ' ' + year + ')';
    return expiryMsg;
  }

  today = new Date();
  elEnds = document.getElementById('offerEnds').innerHTML = offerExpires(today);
}());