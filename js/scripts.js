$(document).ready(function(){
  $("form#suggester").submit(function(event){
    var nameInput = $("#person").val();
    var creativeInput = $("#creative").val();
    var companyInput = $("input:radio[name=company]:checked").val();
    var startupInput = $("input:radio[name=startup]:checked").val();
    var skillInput = $("input:radio[name=skill]:checked").val();
    var macorpcInput = $("input:radio[name=macorpc]:checked").val();

    if (creativeInput === 'No' && companyInput === 'newrelic' && skillInput === 'web' || skillInput === 'web' && startupInput === 'yes'){
      $('#ruby').show();
    } else if (creativeInput === 'No' && companyInput === 'intel' || startupInput === 'no' && skillInput === 'data'){
      $('#php').show();
    } else if (creativeInput === 'No' && startupInput === 'yes' && skillInput === 'mobile' || companyInput === 'nike' && macorpcInput === 'both' && skillInput === 'mobile'){
      $('#java').show();


    } else if (creativeInput === 'Yes' && startupInput === 'yes' && skillInput === 'web' || creativeInput === 'Yes' && startupInput === 'no'){
      $('#css').show();
    } else if (creativeInput === 'No' && startupInput === 'yes' && skillInput === 'web'){
      $('#c').show();
    } else {
      $('#alternate').show();
    }

    $('#outro').show();
    event.preventDefault();
  });
});
