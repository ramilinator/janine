
var headerTemplate = require("./headerSection.hbs");
var footerLinksTemplate = require("./footerLinks.hbs");

function createHTML() {
  var headerContainer = document.getElementById("header");
  var footerLinks = document.getElementById("footer-links");
  headerContainer.innerHTML = headerTemplate();
  footerLinks.innerHTML = footerLinksTemplate();

}

createHTML();