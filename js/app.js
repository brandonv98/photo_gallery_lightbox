lightbox.option({
    'resizeDuration': 300,
    'wrapAround': true,
    'maxWidth' : 800,
    'showImageNumberLabel' : true,
    'alwaysShowNavOnTouchDevices' : true


  });

// search gallery
$("input[name='search']").on("keyup", function() {
   var searchInput = this.value.toLowerCase();

   $("#imageGallery li").each(function(i) {
      var caption = $(this).children().attr("data-title");
      var pureCaption = $(caption).text().toLowerCase();

      if (pureCaption.indexOf(searchInput) > -1) {
         $(this).css('display', 'inlin-block');
      } else {
         $(this).css('display', 'none');
      }
   });
});
