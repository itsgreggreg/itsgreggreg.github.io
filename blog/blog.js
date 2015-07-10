$(document).on("ready", function(){
  var blogSource   = $("#blog-template").html();
  var blogTemplate = Handlebars.compile(blogSource);
  
  
  $.get("posts.json", function(data){
      for(var i = 0; i < data.length; i = i + 1){
          $('#posts').prepend(blogTemplate(data[i]));
      }
  });
  
  
  $("form").on("submit", function(event){
      event.preventDefault();
      
      var newPost = {
          title: $('input[name=title]').val(),
          body: $('textarea').val()
      }
      $('#posts').prepend(blogTemplate(newPost));
      $.post("posts", newPost);
  });
});
