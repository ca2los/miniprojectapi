//time

function time() {
  var today = moment(); //moment is time.now

  $("#time-display").text(today.format("MMM Do, YYYY [at] h:mm:ss a "));
}
setInterval(time, 1000); //this keeps time running

var form = $(".form-group");
var submitFormBtn = $("#form-submit-btn"); //this is for form button
var whereProjectListNameGoes = $("#project-display");
//date-picker
var datePickerInputField = $("#due-date-input");

//make a project
function projectForm(event) {
  // $("#project-modal").validate();
  //$("#project-modal").validate();
  event.preventDefault();
  var projectNameInput = $('input[ id = "project-name-input"]').val();
  var projectTypeInput = $("option:selected").val();
  var projectHourlyRateInput = $('input[ id = "hourly-rate-input"]').val();
  var projectDueDateInput = $('input[ id = "due-date-input"]').val();

  //used if statments to calculate the potential Total Earnings
  if (projectTypeInput === "Web Application (Front End)") {
    var potentialTotalEarnings = projectHourlyRateInput * 10;
  } else if (projectTypeInput === "Web Application (Back End)") {
    potentialTotalEarnings = projectHourlyRateInput * 20;
  } else if (projectTypeInput === "Web Application (Full Stack)") {
    potentialTotalEarnings = projectHourlyRateInput * 30;
  } else if (projectTypeInput === "Print Campaign") {
    potentialTotalEarnings = projectHourlyRateInput * 40;
  } else if (projectTypeInput === "Digital Marketing Campaign") {
    potentialTotalEarnings = projectHourlyRateInput * 70;
  } else if (projectTypeInput === "Mobile Application") {
    potentialTotalEarnings = projectHourlyRateInput * 70;
  } else {
    potentialTotalEarnings = 0;
  }

  console.log(projectNameInput);
  console.log(projectTypeInput);
  console.log(projectHourlyRateInput);
  console.log(projectDueDateInput);
  console.log("function called");

  var projectListItemName = $("<th>"); //creating list item
  var projectListItemType = $("<th>"); //creating list item
  var projectListItemHourlyRate = $("<th>"); //creating list item
  var projectListItemDueDate = $("<th>"); //creating list item
  var projectListItemDaysUntilDue = $("<th>");
  var projectListItemPotentialTotalEarnings = $("<th>");
  var deleteListItem = $('<th class = "removeListItemBtn" >');

  var trEl = $('<tr class = "item">');

  //validate that there is text

  if (
    projectNameInput &&
    projectTypeInput &&
    projectHourlyRateInput &&
    projectDueDateInput
  ) {
    //if there is no item cant make project list item
    //console.log("no item");
    //return; //this is stopping the function and telling it to start over

    //add text
    projectListItemName.text(projectNameInput);
    projectListItemType.text(projectTypeInput);
    projectListItemHourlyRate.text(projectHourlyRateInput);
    projectListItemDueDate.text(projectDueDateInput);
    deleteListItem.text("X");
    //new ones
    projectListItemDaysUntilDue.text("nothing yet"); //not done
    projectListItemPotentialTotalEarnings.text(potentialTotalEarnings);
    //append them

    whereProjectListNameGoes.append(trEl);
    trEl.append(projectListItemName);
    trEl.append(projectListItemType);
    trEl.append(projectListItemHourlyRate);
    trEl.append(projectListItemDueDate);
    trEl.append(projectListItemDaysUntilDue);
    trEl.append(projectListItemPotentialTotalEarnings);
    trEl.append(deleteListItem);

    //clear

    projectNameInput = $('input[ id = "project-name-input"]').val(" ");
    projectTypeInput = $("option:disabled"); //this needs work
    projectHourlyRateInput = $('input[ id = "hourly-rate-input"]').val(" ");
    projectDueDateInput = $('input[ id = "due-date-input"]').val(" ");

    //close the modal

    $("#project-modal").modal("hide");

    //for when delete item
    deleteListItem.on("click", function (event) {
      console.log("button");

      $(event.target).parent().remove(); //the parent is the li we created button is a child
      //i think it is get the event.target
    });
  }
}

submitFormBtn.on("click", projectForm);

//datepicker

datePickerInputField.on("click", function () {
  console.log("clicked in date input field");
  $(function () {
    $("#due-date-input").datepicker();
  });
});

function daysLeft() {}
