(function() {
  var embed = document.currentScript,
      embedContent = document.createElement("div"),
      cdnPath = "http://cdn.everything.io/vegankit/embed/",
      vegankit_activist_username = window.vegankit_activist_username || "anonymous",
      body = document.body,
      local = local || false;

  var css = document.createElement("link");
      css.rel = "stylesheet";
      css.href = (local ? "" : cdnPath) + "embed.css";

  var vegankit_link = function(page) {
    return "<a class='vegankit-link-"
      + page
      + "' href='http://vegankit.com/"
      + page + "/?activist_username="
      + vegankit_activist_username
      + "'></a>";
  }

  embedContent.innerHTML = "<img class='vegankit-embed-logo' src='" + cdnPath + "logo.png' />\
                           <div class='vegankit-embed-links'>"
                             + vegankit_link("why")
                             + vegankit_link("be")
                             + vegankit_link("eat")
                             + vegankit_link("wear")
                             + vegankit_link("use")
                             + vegankit_link("learn")
                           + "</div>"

  body.appendChild(css);
  embed.parentNode.insertBefore(embedContent, embed.nextSibling);
})();
