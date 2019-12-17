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
    if (newBurger.burger_name) {
      $.ajax("/api/burger", {
        type: "POST",
        data: newBurger
      }).then(function() {
        // Reload the page to get the updated list
        location.reload();
      });
    } else {
      $("#info").text("Burger name is required.");
      $("#info").attr("style", "color: red;");
      return;
    }
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
      // Reload the page to get the updated list
      location.reload();
    });
  });

  $(".delete-btn").on("click", function(event) {
    var id = $(this).data("id");

    // Send the DELETE request.
    $.ajax("/api/burger/" + id, {
      type: "DELETE"
    }).then(function() {
      // Reload the page to get the updated list
      location.reload();
    });
  });
});
