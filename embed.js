(function() {
  var embed = document.getElementById("vegankit-embed"),
      embedContent = document.createElement("div"),
      cdnPath = "http://cdn.everything.io/vegankit/embed/",
      body = document.body;

  var css = document.createElement("link");
      css.rel = "text/css";
      css.href = "embed.css";

  embedContent.innerHTML = "<img class='vegankit-embed-logo' src='" + cdnPath + "logo.png' />\
                           <div class='vegankit-embed-links'>\
                             <a class='vegankit-link-why' href='http://vegankit.com/why'></a>\
                             <a class='vegankit-link-be' href='http://vegankit.com/be'></a>\
                             <a class='vegankit-link-eat' href='http://vegankit.com/eat'></a>\
                             <a class='vegankit-link-wear' href='http://vegankit.com/wear'></a>\
                             <a class='vegankit-link-use' href='http://vegankit.com/use'></a>\
                             <a class='vegankit-link-learn' href='http://vegankit.com/learn'></a>\
                           </div>"

  body.appendChild(css);
  embed.appendChild(embedContent);
})();
