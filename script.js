$( document ).ready(function() {
var arryLocal = 1
var thumbApiUrl="http://jsonplaceholder.typicode.com/photos";
var opts = {
  lines: 11, // The number of lines to draw
  length: 15, // The length of each line
  width: 10, // The line thickness
  radius: 30, // The radius of the inner circle
  corners: 1, // Corner roundness (0..1)
  rotate: 0, // The rotation offset
  direction: 1, // 1: clockwise, -1: counterclockwise
  color: '#000', // #rgb or #rrggbb
  speed: 0.6, // Rounds per second
  trail: 60, // Afterglow percentage
  shadow: false, // Whether to render a shadow
  hwaccel: false, // Whether to use hardware acceleration
  className: 'spinner', // The CSS class to assign to the spinner
  zIndex: 2e9, // The z-index (defaults to 2000000000)
  top: 'auto', // Top position relative to parent in px
  left: 'auto' // Left position relative to parent in px
};
var spinner = null;
var spinner_div = 0;


AjaxThumbNails();

//click event ajax call
  $('.results-button').click(function(){
    unHideBatch();
    scrollBottom()
  });

  function AjaxThumbNails(){
    loadSpinner();
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
    for (var i = 0; i < resp.length ; i++) {
     var thumbnailUrl = resp[i].thumbnailUrl;
     var thumbnailId = resp[i].id;
      addThumbnail(thumbnailUrl,thumbnailId)
    };
    spinner.stop(spinner_div);
    unHideBatch()
    scrollBottom()
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
    for (var i = arryLocal; i <= wheretostop + 5; i++) {
      element = document.getElementById(i);
      $(element).show()
      arryLocal += 1
    };
  }
  function loadSpinner(){
    spinner_div = $('#spinner').get(0);
    if(spinner == null) {
    spinner = new Spinner(opts).spin(spinner_div);
    } else {
    spinner.spin(spinner_div);
    }
  }
  function scrollBottom(){
    $(document).scrollTop($(document).height());
  }
});