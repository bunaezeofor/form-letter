$(document).ready(function() {
  $("#formOne").submit(function(event) {
    var person1Input = $("input#person1").val();
    var person2Input = $("input#person2").val();
    $(".person1").append(person1Input);
    $(".person2").append(person2Input);


    $("#story").show();

    event.preventDefault();
  });
});
