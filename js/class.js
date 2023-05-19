const array = [
  {
    date1: "6:00 - 7:30",
    date2: "Jiu-jitsu",
    date3: "Karate",
    date4: "Judo",
    date5: "Jiu-jitsu",
    date6: "Jiu-jitsu",
    date7: "Private Tution",
    date8: "Private Tution",
  },
  {
    date1: "8:00 - 10:00",
    date2: "Muay Thai",
    date3: "Private Tution",
    date4: "Private Tution",
    date5: "Private Tution",
    date6: "Jiu-jitsu",
    date7: "Private Tution",
    date8: "Private Tution",
  },
  {
    date1: "10:30 - 12:00",
    date2: "Private Tution",
    date3: "Private Tution",
    date4: "Private Tution",
    date5: "Private Tution",
    date6: "Private Tutiony",
    date7: "Judo",
    date8: "Karate",
  },
  {
    date1: "13:00 - 14:30",
    date2: "Open mat/personal practice",
    date3: "Open mat/personal practice",
    date4: "Open mat/personal practice",
    date5: "Open mat/personal practice",
    date6: "Open mat/personal practice",
    date7: "Karate",
    date8: "Judo",
  },
  {
    date1: "15:00 - 17:00",
    date2: "Kids Jiu-jitsu",
    date3: "Kids Judo",
    date4: "Kids Karate",
    date5: "Kids Jiu-jitsu",
    date6: "Kids Judo",
    date7: "Muay Thai",
    date8: "Jiu-jitsu",
  },
  {
    date1: "17:30-19:00",
    date2: "Karate",
    date3: "Muay Thai",
    date4: "Judo",
    date5: "Jiu-jitsu",
    date6: "Muay Thai",
    date7: "",
    date8: "",
  },
  {
    date1: "19:00 - 21:00",
    date2: "Jiu-jitsu",
    date3: "Judo",
    date4: "Jiu-jitsu",
    date5: "Karate",
    date6: "Private Tution",
    date7: "",
    date8: "",
  },
];
$(document).ready(function () {
  const scheduleBody = $("#scheduleBody");

  // Generate the table rows
  $.each(array, function (index, rowData) {
    const row = $("<tr></tr>");

    // Create table cells for each row
    $.each(rowData, function (cellIndex, cellData) {
      const cell = $("<td></td>").text(cellData);
      row.append(cell);
    });

    scheduleBody.append(row);
  });
});
