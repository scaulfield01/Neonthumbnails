$( document ).ready(function() {
var arryLocal = 0
var thumbApiUrl="http://jsonplaceholder.typicode.com/photos";

//load ajax call when the page is loaded
AjaxThumbNails();

//click event ajax call
  $('.btn').click(function(){
    AjaxThumbNails()
  });

//methods structure
// ajaxcall(loopAddThumb(AddThumb(scoreGenerate)))

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
   var wheretostop = arryLocal;
    for (var i = arryLocal; i < wheretostop + 6 ; i++) {
     var thumbnailUrl = resp[i].thumbnailUrl;
      addThumbnail(thumbnailUrl)
      arryLocal += 1
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