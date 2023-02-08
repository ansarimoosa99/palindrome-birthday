function reverseString(stDate) {
  var charList = stDate.split("");
  var reversedList = charList.reverse();
  var abs = reversedList.join("");
  return abs;
}

function isPalindome(stDob) {
  var reversedDob = reverseString(stDob);
  return reversedDob === stDob;
}

function dateToString(inDate) {
  var stDob = { day: "", month: "", year: "" };

  if (inDate.day < 10) {
    stDob.day = "0" + inDate.day;
  } else {
    stDob.day = inDate.day.toString();
  }

  if (inDate.month < 10) {
    stDob.month = "0" + inDate.month;
  } else {
    stDob.month = inDate.month.toString();
  }

  stDob.year = inDate.year.toString();

  return stDob;
}

function convertDateToAllFormat(stDate) {
  // console.log(stDate.day, stDate.month, stDate.year);
  var ddmmyyyy = stDate.day + stDate.month + stDate.year;
  var mmddyyyy = stDate.month + stDate.day + stDate.year;
  var yyyymmdd = stDate.year + stDate.month + stDate.day;
  var yyyyddmm = stDate.year + stDate.day + stDate.month;

  var ddmmyy = stDate.day + stDate.month + stDate.year.slice(-2);
  var mmddyy = stDate.month + stDate.day + stDate.year.slice(-2);
  var yyddmm = stDate.year.slice(-2) + stDate.day + stDate.month;
  var yymmdd = stDate.year.slice(-2) + stDate.month + stDate.day;
  return [
    ddmmyyyy,
    mmddyyyy,
    yyyymmdd,
    yyyyddmm,
    ddmmyy,
    mmddyy,
    yyddmm,
    yymmdd
  ];
}

function isLeapYear(year) {
  if (year % 400 === 0) {
    return true;
  }
  if (year % 100 === 0) {
    return false;
  }
  if (year % 4 === 0) {
    return true;
  }
  return false;
}

function getNextDate(inDate) {
  var day = inDate.day + 1;
  var month = inDate.month;
  var year = inDate.year;
  // console.log("year", +year);

  var daysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  if (month === 2) {
    // console.log(isLeapYear(year));
    if (isLeapYear(year)) {
      // console.log("day", +day);
      if (day > 29) {
        day = 1;
        month = 3;
      }
    } else {
      if (day > 28) {
        day = 1;
        month = 3;
      }
    }
  } else {
    if (day > daysInMonth[month - 1]) {
      day = 1;
      month = month + 1;
    }
  }
  if (month > 12) {
    month = 1;
    year = year + 1;
  }
  return { day: day, month: month, year: year };
}

function nextPalindromeDate(inDate) {
  var nextDate = getNextDate(inDate);
  var ctr = 0;
  while (1) {
    ctr++;
    var dob = dateToString(nextDate);
    //console.log(dob);
    var allDateFormats = convertDateToAllFormat(dob);

    for (let i = 0; i < allDateFormats.length; i++) {
      if (isPalindome(allDateFormats[i])) {
        return [ctr, nextDate];
        break;
      }
    }
    nextDate = getNextDate(nextDate);
  }
}

function getPrevDate(inDate) {
  var day = inDate.day - 1;
  var month = inDate.month;
  var year = inDate.year;

  var daysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  if (month === 3) {
    if (isLeapYear(year)) {
      if (day === 0) {
        day = 29;
        month = 2;
      }
    } else {
      if (day === 0) {
        day = 28;
        month = 2;
      }
    } // 1 1 2000   = 0 3 2000
  } else {
    if (day === 0) {
      if (month === 1) {
        month = 12;
        year = year - 1;
        day = daysInMonth[month - 1];
      } else {
        month = month - 1;
        day = daysInMonth[month - 1];
      }
    }
  }
  return {
    day: day,
    month: month,
    year: year
  };
}

function prevPalindromeDate(inDate) {
  var prevDate = getPrevDate(inDate);

  var ctr = 0;
  while (1) {
    ctr++;
    var dob = dateToString(prevDate);
    //console.log(dob);
    var allDateFormats = convertDateToAllFormat(dob);

    for (let i = 0; i < allDateFormats.length; i++) {
      if (isPalindome(allDateFormats[i])) {
        return [ctr, prevDate];
        break;
      }
    }
    prevDate = getPrevDate(prevDate);
  }
}

function checkIfDateIsPalindrome(inDate) {
  var dob = dateToString(inDate);
  console.log(dob);
  var allDateFormats = convertDateToAllFormat(dob);
  var flag = false;
  for (let i = 0; i < allDateFormats.length; i++) {
    if (isPalindome(allDateFormats[i])) {
      flag = true;
      break;
    }
  }
  return flag;
}

// var inDate = {
//   day: 3,  //021120
//   month: 11,
//   year: 2020
// };

// console.log(prevPalindromeDate(inDate));

// console.log(isLeapYear(2021));

const dob = document.querySelector("#date-of-birth");
const showBtnRef = document.querySelector("#show-btn");
const resultArea = document.querySelector("#result");

function clickHandler() {
  var stDob = dob.value;
  if (stDob !== "") {
    var dobList = stDob.split("-");
    var inDate = {
      day: Number(dobList[2]),
      month: Number(dobList[1]),
      year: Number(dobList[0])
    };

    if (checkIfDateIsPalindrome(inDate)) {
      resultArea.innerText = "Yay, Your bday is palindrome";
    } else {
      //alt method below
      var [ctr1, nextDate] = nextPalindromeDate(inDate);
      var [ctr2, prevDate] = prevPalindromeDate(inDate);
      // console.log(nextDate);
      // console.log(prevDate);

      if (ctr1 < ctr2) {
        //next palindrome near
        if (ctr1 === 1) {
          // 1  day away so print Day
          resultArea.innerText =
            "The nearest palindrome date is " +
            nextDate.day +
            "-" +
            nextDate.month +
            "-" +
            nextDate.year +
            ", you missed by " +
            ctr1 +
            " day";
        } else {
          //many days away. many DAYS
          resultArea.innerText =
            "The nearest palindrome date is " +
            nextDate.day +
            "-" +
            nextDate.month +
            "-" +
            nextDate.year +
            ", you missed by " +
            ctr1 +
            " days";
        }
      } else {
        //prevpalindrome near
        if (ctr2 === 1) {
          resultArea.innerText =
            "The nearest palindrome date is " +
            prevDate.day +
            "-" +
            prevDate.month +
            "-" +
            prevDate.year +
            ", you missed by " +
            ctr2 +
            " day";
        } else {
          resultArea.innerText =
            "The nearest palindrome date is " +
            prevDate.day +
            "-" +
            prevDate.month +
            "-" +
            prevDate.year +
            ", you missed by " +
            ctr2 +
            " days";
        }

        // console.log("Not palindrome");
      }
      console.log(inDate);
    }
  }
}

showBtnRef.addEventListener("click", clickHandler);

// if (!isPalindrome) {
//   const [ctr1, nextDate] = getNextPalindromeDate(date);
//   const [ctr2, prevDate] = getPreviousPalindromeDate(date);

//   if (ctr1 > ctr2) {
//     resultDiv.innerText = `The nearest palindrome date is ${prevDate.day}-${prevDate.month}-${prevDate.year}, you missed by ${ctr2} days.`;
//   } else {
//     resultDiv.innerText = `The nearest palindrome date is ${nextDate.day}-${nextDate.month}-${nextDate.year}, you missed by ${ctr1} days.`;
//   }
// } else {
//   resultDiv.innerText = 'Yay! Your birthday is palindrome!';
//
