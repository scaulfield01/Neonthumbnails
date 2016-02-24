$( document ).ready(function() {
var stopper = 0
var thumbApiUrl="http://jsonplaceholder.typicode.com/photos";

//load ajax call
AjaxThumbNails();

//click event ajax call
  $('.btn').click(function(){
    AjaxThumbNails()
  });

//methods structure
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
   var resp = resp;
   var wheretostop = stopper;
    for (var i = stopper; i < wheretostop + 6 ; i++) {
     var thumbnailUrl = resp[i].thumbnailUrl;
      addThumbnail(thumbnailUrl)
      stopper += 1
    };
  };

  function addThumbnail(thumbUrl){
    $(".thumbnails-container").append(
      $("<div/>")
      .addClass("thumb-well")
      .append($("<img/>").attr('src',thumbUrl))
      .append($("<p/>").text(scoreGenerate()))
      )
  };

  function scoreGenerate(){
    var score = Math.floor((Math.random()*100)+ 1);
    return score
  };

});