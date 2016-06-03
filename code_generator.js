var $modal;
k$.$("#get_code").addEventListener("click", function(e) {
  $modal = k$.modal("#code_generator");
  $modal.style.display = "block";
  e.stopPropagation();
});

k$.$(".modal #next").addEventListener("click", function() {
  var username = k$.$(".modal #username").value.replace(/\s+/g, " ").trim().toLowerCase().replace(/\W/g, '');
  if (username == "") {
    return k$.$(".modal #username").classList.add("error");
  }
  else {
    k$.$(".modal #username").classList.remove("error");
  }

  Array.prototype.slice.call(k$.$$(".modal .step1")).forEach(function(step) { step.classList.add("inactive"); });
  Array.prototype.slice.call(k$.$$(".modal .step2")).forEach(function(step) { step.classList.add("active"); });

  k$.$(".modal textarea").innerHTML = "<div id=\"vegankit-embed\"><script>var vegankit_activist_username=\"" + username + "\";</script><script async src=\"embed.js\"></script></div>";
});

k$.$(".modal #back").addEventListener("click", function() {
  Array.prototype.slice.call(k$.$$(".modal .step1")).forEach(function(step) { step.classList.remove("inactive"); });
  Array.prototype.slice.call(k$.$$(".modal .step2")).forEach(function(step) { step.classList.remove("active"); });
});

k$.$(".modal #done").addEventListener("click", function() {
  $modal.style.display = "none";
});
