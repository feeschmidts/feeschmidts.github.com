$(function() {
  var total = $('.project').length;
  $('span.total').text(total);
  var taglist = {};
  $('div.project').each(function() {
    var elem = $(this);
    var tags = elem.data("tag");
    if (tags.length) {
      $.each(tags, function() {
        if (!taglist[this])
          taglist[this] = [];
        taglist[this].push(elem);
      });
    }
  });
  var tagbuttons = $("#tag-buttons");
  $.each(taglist, function(tagname) {
    var button = $('<button class="btn" data-toggle="button">'+tagname+'</button>');
    button.data('tag', tagname);
    tagbuttons.append(button);
  });
  $('body').on('click', '#tag-buttons button', function() {
    var $button = $(this);
    $('#tag-buttons button.active').removeClass('active')
    $button.toggleClass('active');
    var activetags = [$button.data('tag')];
    $('div.project').each(function() {
      var $project = $(this);
      var matched = $.grep($project.data('tag'), function(tagname) {
        return $.inArray(tagname, activetags) !== -1;
      });

      if (matched.length) {
          $project.addClass("active").show("fast");
      }
      else {
          $project.hide().removeClass("active");
      }
    });
    var active = $('.project.active').length;
    $('span.active').text(active);
  });
  $('#tag-buttons button').first().click();
});

!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0];if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src="//platform.twitter.com/widgets.js";fjs.parentNode.insertBefore(js,fjs);}}(document,"script","twitter-wjs");
