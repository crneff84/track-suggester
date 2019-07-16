$(document).ready(function(){
  //alert("Alerted!")
  $("form#suggester").submit(function(event){
    var nameInput = $("input#user").val();
    var creativeInput = $("#creative").val();
    var companyInput = $("input:radio[name=company]:checked").val();
    var startupInput = $("input:radio[name=startup]:checked").val();
    var skillInput = $("input:radio[name=skill]:checked").val();
    var macorpcInput = $("input:radio[name=macorpc]:checked").val();

    if (nameInput === ""){
      alert("Please Enter Your Name")
    } else if (creativeInput === 'No' && companyInput === 'newrelic' && skillInput === 'web' ||creativeInput === 'No' && skillInput === 'web' && startupInput === 'yes'){
      $('#ruby').show();
      $('#php').hide();
      $('#java').hide();
      $('#css').hide();
      $('#c').hide();
      $(".user").text(nameInput);
      $('#outro').hide();
      $('#outro').fadeIn();
    } else if (creativeInput === 'No' && companyInput === 'intel' || startupInput === 'no' && skillInput === 'data'){
      $('#php').show();
      $('#ruby').hide();
      $('#java').hide();
      $('#css').hide();
      $('#c').hide();
      $(".user").text(nameInput);
      $('#outro').hide();
      $('#outro').fadeIn();
    } else if (creativeInput === 'No' && startupInput === 'yes' && skillInput === 'mobile' || companyInput === 'nike' && macorpcInput === 'both' && skillInput === 'mobile'){
      $('#java').show();
      $('#php').hide();
      $('#ruby').hide();
      $('#css').hide();
      $('#c').hide();
      $(".user").text(nameInput);
      $('#outro').hide();
      $('#outro').fadeIn();
    } else if (creativeInput === 'Yes' && startupInput === 'yes' && skillInput === 'web' || creativeInput === 'Yes' && startupInput === 'no' && skillInput === 'web'){
      $('#css').show();
      $('#php').hide();
      $('#java').hide();
      $('#ruby').hide();
      $('#c').hide();
      $(".user").text(nameInput);
      $('#outro').hide();
      $('#outro').fadeIn();
    } else if (creativeInput === 'No' && startupInput === 'no' && skillInput === 'game' || skillInput === 'game' && macorpcInput === 'pc' || companyInput === 'microsoft' && macorpcInput === 'pc'){
      $('#c').show();
      $('#php').hide();
      $('#java').hide();
      $('#css').hide();
      $('#ruby').hide();
      $(".user").text(nameInput);
      $('#outro').hide();
      $('#outro').fadeIn();
    } else {
      $('#java').show();
      $('#php').hide();
      $('#ruby').hide();
      $('#css').hide();
      $('#c').hide();
      $(".user").text(nameInput);
      $('#outro').hide();
      $('#outro').fadeIn();
    }

    event.preventDefault();
  });
});
