let fetchedArray; //This will be an array with fetched data
const table = document.querySelector("table");
const input = document.querySelector("input"); //searching input
let valueBig; //will be value of input with toUpperCase - in a searching function
const tableRows = table.getElementsByTagName("tr");
let td; //for searching fn
let txtValue; //for searching fn
/*below I have my selects*/
const identSelect = document.querySelector("#ident");
const titleSelect = document.querySelector("#tytuł");
const dateSelect = document.querySelector("#data");
const pagesSelect = document.querySelector("#strony");

/*Below is a function, where I create table row with data from each fetched object*/
const createTableRow = (obj) => {
  const tr = document.createElement("tr");
  const { ident, polishTitle, pages, publicationDate } = obj; //destructuring each object

  const tdIdent = document.createElement("td");
  tdIdent.textContent = ident;

  const tdTitle = document.createElement("td");
  tdTitle.textContent = polishTitle;

  const tdPages = document.createElement("td");
  tdPages.textContent = pages;

  const tdDate = document.createElement("td");
  tdDate.textContent = publicationDate;

  tr.append(tdIdent, tdTitle, tdDate, tdPages);
  table.append(tr);
};

//Fetching data
fetch("./data.json")
  .then((resp) => resp.json())
  .then((data) => {
    fetchedArray = data;
    fetchedArray.forEach((obj) => {
      createTableRow(obj);
    });
  });

/*Below function is for searching. This fn will hide every title which doesn't match. It will be trigger on input element (keydown listener)*/
const searching = (e) => {
  valueBig = e.target.value.toUpperCase();

  //I'm looping through all table rows
  for (i = 0; i < tableRows.length; i++) {
    td = tableRows[i].getElementsByTagName("td")[1]; //td with book title

    if (td) {
      textValue = td.textContent;
      if (textValue.toUpperCase().includes(valueBig)) {
        tableRows[i].style.display = "";
      } else {
        tableRows[i].style.display = "none";
      }
    }
  }
};

/* **************************************************************** */
/*All functions below are functions for sorting rows*/

function sortTableIdentsLowToHigh() {
  let rows, switching, i, x, y, shouldSwitch;

  switching = true;
  /* Make a loop that will continue until
      no switching has been done: */
  while (switching) {
    // Start by saying: no switching is done:
    switching = false;
    rows = table.getElementsByTagName("tr");
    /* Loop through all table rows (except the
        first, which contains table headers): */
    for (i = 1; i < rows.length - 1; i++) {
      // Start by saying there should be no switching:
      shouldSwitch = false;
      /* Get the two elements you want to compare,
          one from current row and one from the next: */
      x = rows[i].getElementsByTagName("td")[0];
      y = rows[i + 1].getElementsByTagName("td")[0];
      // Check if the two rows should switch place:
      if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
        // If so, mark as a switch and break the loop:
        shouldSwitch = true;
        break;
      }
    }
    if (shouldSwitch) {
      /* If a switch has been marked, make the switch
          and mark that a switch has been done: */
      rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
      switching = true;
    }
  }
}

function sortTableIdentsHighToLow() {
  let rows, switching, i, x, y, shouldSwitch;

  switching = true;
  /* Make a loop that will continue until
      no switching has been done: */
  while (switching) {
    // Start by saying: no switching is done:
    switching = false;
    rows = table.getElementsByTagName("tr");
    /* Loop through all table rows (except the
        first, which contains table headers): */
    for (i = 1; i < rows.length - 1; i++) {
      // Start by saying there should be no switching:
      shouldSwitch = false;
      /* Get the two elements you want to compare,
          one from current row and one from the next: */
      x = rows[i].getElementsByTagName("td")[0];
      y = rows[i + 1].getElementsByTagName("td")[0];
      // Check if the two rows should switch place:
      if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {
        // If so, mark as a switch and break the loop:
        shouldSwitch = true;
        break;
      }
    }
    if (shouldSwitch) {
      /* If a switch has been marked, make the switch
          and mark that a switch has been done: */
      rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
      switching = true;
    }
  }
}

function sortTableTitlesLowToHigh() {
  let rows, switching, i, x, y, shouldSwitch;

  switching = true;
  /* Make a loop that will continue until
    no switching has been done: */
  while (switching) {
    // Start by saying: no switching is done:
    switching = false;
    rows = table.getElementsByTagName("tr");
    /* Loop through all table rows (except the
      first, which contains table headers): */
    for (i = 1; i < rows.length - 1; i++) {
      // Start by saying there should be no switching:
      shouldSwitch = false;
      /* Get the two elements you want to compare,
        one from current row and one from the next: */
      x = rows[i].getElementsByTagName("td")[1];
      y = rows[i + 1].getElementsByTagName("td")[1];
      // Check if the two rows should switch place:
      if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
        // If so, mark as a switch and break the loop:
        shouldSwitch = true;
        break;
      }
    }
    if (shouldSwitch) {
      /* If a switch has been marked, make the switch
        and mark that a switch has been done: */
      rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
      switching = true;
    }
  }
}

function sortTableTitlesHighToLow() {
  let rows, switching, i, x, y, shouldSwitch;

  switching = true;
  /* Make a loop that will continue until
      no switching has been done: */
  while (switching) {
    // Start by saying: no switching is done:
    switching = false;
    rows = table.getElementsByTagName("tr");
    /* Loop through all table rows (except the
        first, which contains table headers): */
    for (i = 1; i < rows.length - 1; i++) {
      // Start by saying there should be no switching:
      shouldSwitch = false;
      /* Get the two elements you want to compare,
          one from current row and one from the next: */
      x = rows[i].getElementsByTagName("td")[1];
      y = rows[i + 1].getElementsByTagName("td")[1];
      // Check if the two rows should switch place:
      if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {
        // If so, mark as a switch and break the loop:
        shouldSwitch = true;
        break;
      }
    }
    if (shouldSwitch) {
      /* If a switch has been marked, make the switch
          and mark that a switch has been done: */
      rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
      switching = true;
    }
  }
}

function sortTableDatesLowToHigh() {
  let rows, switching, i, x, y, shouldSwitch;

  switching = true;
  /* Make a loop that will continue until
        no switching has been done: */
  while (switching) {
    // Start by saying: no switching is done:
    switching = false;
    rows = table.getElementsByTagName("tr");
    /* Loop through all table rows (except the
          first, which contains table headers): */
    for (i = 1; i < rows.length - 1; i++) {
      // Start by saying there should be no switching:
      shouldSwitch = false;
      /* Get the two elements you want to compare,
            one from current row and one from the next: */
      x = rows[i].getElementsByTagName("td")[2];
      y = rows[i + 1].getElementsByTagName("td")[2];
      // Check if the two rows should switch place:
      if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
        // If so, mark as a switch and break the loop:
        shouldSwitch = true;
        break;
      }
    }
    if (shouldSwitch) {
      /* If a switch has been marked, make the switch
            and mark that a switch has been done: */
      rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
      switching = true;
    }
  }
}

function sortTableDatesHighToLow() {
  let rows, switching, i, x, y, shouldSwitch;

  switching = true;
  /* Make a loop that will continue until
        no switching has been done: */
  while (switching) {
    // Start by saying: no switching is done:
    switching = false;
    rows = table.getElementsByTagName("tr");
    /* Loop through all table rows (except the
          first, which contains table headers): */
    for (i = 1; i < rows.length - 1; i++) {
      // Start by saying there should be no switching:
      shouldSwitch = false;
      /* Get the two elements you want to compare,
            one from current row and one from the next: */
      x = rows[i].getElementsByTagName("td")[2];
      y = rows[i + 1].getElementsByTagName("td")[2];
      // Check if the two rows should switch place:
      if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {
        // If so, mark as a switch and break the loop:
        shouldSwitch = true;
        break;
      }
    }
    if (shouldSwitch) {
      /* If a switch has been marked, make the switch
            and mark that a switch has been done: */
      rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
      switching = true;
    }
  }
}

function sortTablePagesLowToHigh() {
  let rows, switching, i, x, y, shouldSwitch;

  switching = true;
  /* Make a loop that will continue until
          no switching has been done: */
  while (switching) {
    // Start by saying: no switching is done:
    switching = false;
    rows = table.getElementsByTagName("tr");
    /* Loop through all table rows (except the
            first, which contains table headers): */
    for (i = 1; i < rows.length - 1; i++) {
      // Start by saying there should be no switching:
      shouldSwitch = false;
      /* Get the two elements you want to compare,
              one from current row and one from the next: */
      x = rows[i].getElementsByTagName("td")[3];
      y = rows[i + 1].getElementsByTagName("td")[3];
      // Check if the two rows should switch place:
      if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
        // If so, mark as a switch and break the loop:
        shouldSwitch = true;
        break;
      }
    }
    if (shouldSwitch) {
      /* If a switch has been marked, make the switch
              and mark that a switch has been done: */
      rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
      switching = true;
    }
  }
}

function sortTablePagesHighToLow() {
  let rows, switching, i, x, y, shouldSwitch;

  switching = true;
  /* Make a loop that will continue until
          no switching has been done: */
  while (switching) {
    // Start by saying: no switching is done:
    switching = false;
    rows = table.getElementsByTagName("tr");
    /* Loop through all table rows (except the
            first, which contains table headers): */
    for (i = 1; i < rows.length - 1; i++) {
      // Start by saying there should be no switching:
      shouldSwitch = false;
      /* Get the two elements you want to compare,
              one from current row and one from the next: */
      x = rows[i].getElementsByTagName("td")[3];
      y = rows[i + 1].getElementsByTagName("td")[3];
      // Check if the two rows should switch place:
      if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {
        // If so, mark as a switch and break the loop:
        shouldSwitch = true;
        break;
      }
    }
    if (shouldSwitch) {
      /* If a switch has been marked, make the switch
              and mark that a switch has been done: */
      rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
      switching = true;
    }
  }
}

/*Checking values and sorting*/
const sortingIdents = (e) => {
  if (e.target.value === "Rosnąco") {
    sortTableIdentsLowToHigh();
  } else if (e.target.value === "Malejąco") {
    sortTableIdentsHighToLow();
  }
};

const sortingTitles = (e) => {
  if (e.target.value === "Rosnąco") {
    sortTableTitlesLowToHigh();
  } else if (e.target.value === "Malejąco") {
    sortTableTitlesHighToLow();
  }
};

const sortingDates = (e) => {
  if (e.target.value === "Rosnąco") {
    sortTableDatesLowToHigh();
  } else if (e.target.value === "Malejąco") {
    sortTableDatesHighToLow();
  }
};

const sortingPages = (e) => {
  if (e.target.value === "Rosnąco") {
    sortTablePagesLowToHigh();
  } else if (e.target.value === "Malejąco") {
    sortTablePagesHighToLow();
  }
};

const prepareEvents = () => {
  input.addEventListener("keydown", searching);
  identSelect.addEventListener("change", sortingIdents);
  titleSelect.addEventListener("change", sortingTitles);
  dateSelect.addEventListener("change", sortingDates);
  pagesSelect.addEventListener("change", sortingPages);
};

document.addEventListener("DOMContentLoaded", prepareEvents);
