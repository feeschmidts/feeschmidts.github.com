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
    var activebuttons = $('#tag-buttons button.active');
    var activetags = [];
    if (activebuttons.length) {
      // $('div.project').hide();
      activebuttons.each(function() {
        var tagname = $(this).data('tag');
        activetags.push(tagname);
      });
      // console.log(activetags);
      $('div.project').each(function() {
        var $this = $(this);
        var matched = $.grep($this.data('tag'), function(tagname) {
          return $.inArray(tagname, activetags) !== -1;
        });

        if (matched.length) {
            $this.addClass("active").show("fast");
        }
        else {
            $this.hide().removeClass("active");
        }
        // $(taglist[tagname]).first().show("fast", function showNext() {
        //   $(this).next().show("fast", showNext);
        // });
      });
    }
    else {
      $('div.project').addClass("active").show();
    }
    var active = $('.project.active').length;
    $('span.active').text(active);
  });
  $('#tag-buttons button').first().click();
});

!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0];if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src="//platform.twitter.com/widgets.js";fjs.parentNode.insertBefore(js,fjs);}}(document,"script","twitter-wjs");

// var divs = $("div.project").get().sort(function(){
//             return Math.round(Math.random())-0.5; //so we get the right +/- combo
//            }).slice(0,4);
// $(divs).appendTo(divs[0].parentNode).show();

