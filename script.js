$( document ).ready(function() {

var thumbApiUrl="http://jsonplaceholder.typicode.com/photos";

AjaxThumbNails()

  // ajaxcall(loopappened(append(scoreGenerate)))

  function AjaxThumbNails(){
    $.ajax({
      url:thumbApiUrl,
      dataType:"JSON",
      type: "Get",
      success: function(resp){loopAppend(resp)},
      error: function(err){alert('Error: '+ err)}
    });
  }

  function loopAppend(resp){
    resp = resp;
    for (var i = 0; i < 6; i++) {
      console.log(resp[i].thumbnailUrl);
    };
  };

  function append(){};
  function scoreGenerate(){};



});