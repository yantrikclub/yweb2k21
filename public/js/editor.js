$(function() {
    $( "#thumbls" ).sortable({
    update: function(event, ui) {
        getIdsOfImages();
    }//end update         
    });
});
  
function getIdsOfImages() {
    var values = [];
    $('.thumbbx').each(function (index) {
        values.push($(this).attr("id")
                .replace("img", ""));
    });
      
    // console.log(values);
}
