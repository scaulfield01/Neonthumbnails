$( document ).ready(function() {
var arryLocal = 0
var thumbApiUrl="http://jsonplaceholder.typicode.com/photos";

//load ajax call when the page is loaded
AjaxThumbNails();
unHideBatch();

//click event ajax call
  $('.results-button').click(function(){
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
   // var wheretostop = arryLocal;
    for (var i = 0; i < resp.length ; i++) {
     var thumbnailUrl = resp[i].thumbnailUrl;
     var thumbnailId = resp[i].id;
      addThumbnail(thumbnailUrl,thumbnailId)
      // arryLocal += 1
    };
    unHideBatch()
  };

  function addThumbnail(thumbUrl,thumbId){
    $(".thumbnails-container").append(
      $("<div/>")
      .addClass("thumb-well").attr("id", thumbId)
      .append($("<img/>").attr('src',thumbUrl))
      .append($("<p/>").text(scoreGenerate()))
      )
  };

  function scoreGenerate(){
    var score = Math.floor((Math.random()*100)+ 1);
    return score
  };

  function unHideBatch(){
    var wheretostop = arryLocal;
    for (var i = arryLocal; i <= wheretostop + 6; i++) {
      element = document.getElementById(i);
      $(element).show()
    };

  }

});