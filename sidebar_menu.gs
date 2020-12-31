
function onOpen(event) {
  SlidesApp.getUi().createAddonMenu()
      .addItem('My Menu', 'showSidebar')
      .addToUi();
}

function onInstall(event) {
  onOpen(event);
}

function showSidebar() {
  var ui = HtmlService
      .createHtmlOutputFromFile('sidebar')
      .setTitle('Murf');
  SlidesApp.getUi().showSidebar(ui);
}