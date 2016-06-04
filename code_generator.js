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

  k$.$(".modal textarea").innerHTML = "<div style=\"width: 255px\" id=\"vegankit-embed\"><script>window.vegankit_activist_username=\"" + username + "\";</script><script src=\""
   + "http://cdn.everything.io/vegankit/embed/embed.js\"></script></div>";
});

k$.$(".modal #back").addEventListener("click", function() {
  Array.prototype.slice.call(k$.$$(".modal .step1")).forEach(function(step) { step.classList.remove("inactive"); });
  Array.prototype.slice.call(k$.$$(".modal .step2")).forEach(function(step) { step.classList.remove("active"); });
});

k$.$(".modal #done").addEventListener("click", function() {
  $modal.style.display = "none";
});

var createActivistTable = function(data) {
  var row = k$.$("template#scoreboard"),
      renderArea = k$.$("[data-render='scoreboard']"),
      activist = row.content.querySelector('.activist'),
      tableContents = [],
      tbody = document.createElement('tbody'),
      score = row.content.querySelector('.score');

  for (key in data) {
    var record = {}
    record.activist = key
    record.score = Object.keys(data[key]['referrals']).length;
    tableContents.push(record);
  }
  // Sort by score
  tableContents = tableContents.sort(function(a, b) {
    return b.score - a.score;
  });

  // Create HTML
  tableContents.forEach(function(record) {
    activist.textContent = record.activist;
    score.textContent = record.score;
    var clone = document.importNode(row.content, true);
    tbody.appendChild(clone);
  })

  // Done, let's put it in the table
  renderArea.innerHTML = tbody.innerHTML;
}
