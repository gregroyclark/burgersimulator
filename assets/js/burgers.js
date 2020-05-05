$(function() {
  $(".change-eat").on("click", function(event) {
    var id = $(this).data("id");
    var newEat = $(this).data("newEat");

    var newEatState = {
      eaten: newEat
    };

    $.ajax("/api/burgers/" + id, {
      type: "PUT",
      data: newEatState  
    }).then(
      function() {
        console.log("changed eaten to", newEat);
        location.reload();
      }
    );
  });

  $(".create-form").on("submit", function(event) {
    event.preventDefault();

    var newBurger = {
      name: $("#bu").val().trim(),
      eaten: $("[name=eaten]:checked").val().trim()
    };

    $.ajax("/api/burgers", {
      type: "POST",
      data: newBurger
    }).then(
      function() {
        console.log("you made a burger");
        location.reload();
      }
    );
  });

  $(".delete-burger").on("click", function(event) {
     var id = $(this).data("id");
     
     $.ajax("/api/burgers/" + id, {
       type: "DELETE"
    }).then(
      function() {
        console.log("deleted burger", id);

        location.reload();
      }
    );
  });
});