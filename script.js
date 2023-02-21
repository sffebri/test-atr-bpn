$(document).ready(function(){
    $("#tombol").click(function(){
      if ($("#tombol").attr('value')=='Hide') {
        $(this).val('Show');
        $(this).html('Show');
        $(this).removeClass("btn btn-danger").addClass("btn btn-info");
        $("#target").animate({width: 'toggle'},"slow");
      } else {
        $(this).val('Hide');
        $(this).html('Hide');
        $(this).removeClass("btn btn-info").addClass("btn btn-danger");
        $("#target").animate({width: 'toggle'}, "slow");
        // $("#target").show();
      }
    });
    $(".kode").click(function(){
        alert($(this).html());
      })
  });