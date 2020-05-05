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

  
});