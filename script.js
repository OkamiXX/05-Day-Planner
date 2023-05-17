// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
const dateEl = $("#currentDay"),
      day = new dayjs().format('dddd, MMMM D YYYY'),
      time = new dayjs().hour,
      secEl = $(".time-block");

$(function () {
  dateEl.text(day);

  // listener for the save button.
  $(".saveBtn").on("click", function () {

  // Gets the values of the text area and the id of its
  // parent(ID Name).
  var text = $(this).siblings('textarea').val();
  var time = $(this).parent().attr("id");

  // Saves all the information in local storage
  localStorage.setItem(time, text);
})

    // Get item from local storage once the browser loads the website.
    // In case there is no data stored then nothing will be displayed.
    $("#hour-8 .description").val(localStorage.getItem("hour-8"));
    $("#hour-9 .description").val(localStorage.getItem("hour-9"));
    $("#hour-10 .description").val(localStorage.getItem("hour-10"));
    $("#hour-11 .description").val(localStorage.getItem("hour-11"));
    $("#hour-12 .description").val(localStorage.getItem("hour-12"));
    $("#hour-13 .description").val(localStorage.getItem("hour-13"));
    $("#hour-14 .description").val(localStorage.getItem("hour-14"));
    $("#hour-15 .description").val(localStorage.getItem("hour-15"));
    $("#hour-16 .description").val(localStorage.getItem("hour-16"));
    $("#hour-17 .description").val(localStorage.getItem("hour-17"));


    // Loops over each of the time-block elements
    // and then executes the function each time.
    // (FEATURE to append the past, present || future clases.)

      function timeCheck() {

      $(secEl).each(function () {

        // gets the value of the time-block section and gets 
        // the number part of it in order to compare after to
        // assign the past, present feature attributes/classes.
        let sec2 = parseFloat(secEl.attr("id").split("-")[1]);

        if (sec2 < time){
          $(this).removeClass("present");
          $(this).removeClass("future");
          $(this).addClass("past");
        }
        else if (sec2 === time) {
          $(this).removeClass("past");
          $(this).removeClass("future");
          $(this).addClass("present");
        }
        else {
          $(this).removeClass("present");
          $(this).removeClass("past");
          $(this).addClass("future");
        }
      })
    }
    

      timeCheck();

});
