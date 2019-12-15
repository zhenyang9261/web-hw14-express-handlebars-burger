$(function() {
  $(".create-form").on("submit", function(event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();

    var newBurger = {
      burger_name: $("#new-burger")
        .val()
        .trim()
    };

    // Send the POST request.
    $.ajax("/api/burger", {
      type: "POST",
      data: newBurger
    }).then(function() {
      console.log("created new burger");
      // Reload the page to get the updated list
      location.reload();
    });
  });

  $(".devour-btn").on("click", function(event) {
    var id = $(this).data("id");

    var newDevourState = {
      devoured: true
    };

    // Send the PUT request.
    $.ajax("/api/burger/" + id, {
      type: "PUT",
      data: newDevourState
    }).then(function() {
      console.log("changed devour to true");
      // Reload the page to get the updated list
      location.reload();
    });
  });
});
