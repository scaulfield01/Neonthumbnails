$( document ).ready(function() {

var thumbApiUrl="http://jsonplaceholder.typicode.com/photos";

AjaxThumbNails()

  // ajaxcall(loopappened(append(scoreGenerate)))

  function AjaxThumbNails(){
    $.ajax({
      url:thumbApiUrl,
      dataType:"JSON",
      type: "Get",
      success: function(resp){loopAddThumbnail(resp)},
      error: function(err){alert('Error: '+ err)}
    });
  }

  function loopAddThumbnail(resp){
    resp = resp;
    for (var i = 0; i < 6; i++) {
      thumbnailUrl = resp[i].thumbnailUrl
      addThumbnail(thumbnailUrl)
    };
  };

  function addThumbnail(thumbUrl){
    $(".thumbnails-container").append(
      $("<div/>")
      .addClass("thumb-well")
      .append($("<img/>").attr('src',thumbUrl))
      )
  };
  function scoreGenerate(){};



});