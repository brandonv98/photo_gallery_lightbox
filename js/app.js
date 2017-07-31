lightbox.option({
    'resizeDuration': 300,
    'wrapAround': true,
    'showImageNumberLabel' : true,
    'alwaysShowNavOnTouchDevices' : true
  });

// search gallery while typeing
$("input[name='search']").on("keyup", function() {
   var searchInput = this.value.toLowerCase();

   $("#imageGallery li").each(function(i) {
      var attrData = $(this).children().attr("data-title");
      var caption = $(attrData).text().toLowerCase();

      if (caption.indexOf(searchInput) > -1) {
         $(this).css('display', 'inlin-block');
      } else {
         $(this).css('display', 'none');
      }
   });
});
