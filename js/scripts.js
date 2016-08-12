$(document).ready(function(){
  $("form#suggester").submit(function(event){
    var nameInput = $("#person").val();
    var creativeInput = $("#creative").val();
    var companyInput = $("input:radio[name=company]:checked").val();
    var startupInput = $("input:radio[name=startup]:checked").val();
    var skillInput = $("input:radio[name=skill]:checked").val();
    var macorpcInput = $("input:radio[name=macorpc]:checked").val();

    alert(macorpcInput)




    event.preventDefault();
  });
});
