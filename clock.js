window.onload = () => {
  function getSuffix(date) {
    var suffixes = ["th", "st", "nd", "rd"];
    var suffix;
    if (date >= 11 && date <= 13) {
      suffix = suffixes[0]; // Use "th" for 11th, 12th, and 13th
    } else {
      var digit = date % 10;
      suffix = suffixes[digit] || suffixes[0]; // Use the corresponding suffix or default to "th"
    }
    return suffix;
  }

  function updateTime() {
    var time = new Date();

    var hour = time.getHours();
    var minute = time.getMinutes();
    var second = time.getSeconds();
    var date = time.getDate();

    var monthIndex = time.getMonth();
    var year = time.getFullYear();

    var monthNames = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];

    var month = monthNames[monthIndex];
    var suffix = getSuffix(date);

    document.getElementById("hour").innerHTML = hour < 10 ? "0" + hour : hour;
    document.getElementById("min").innerHTML =
      minute < 10 ? "0" + minute : minute;
    document.getElementById("sec").innerHTML =
      second < 10 ? "0" + second : second;
    document.getElementById("dateBox").innerHTML =
      date + suffix + " " + month + " " + year;
  }

  setInterval(updateTime, 1000);
};
