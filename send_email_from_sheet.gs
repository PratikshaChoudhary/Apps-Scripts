function sendCountEmails() {
  const sheet = SpreadsheetApp.getActiveSheet();
  const dataRange = sheet.getRange("A2:C6");
  const data = dataRange.getValues();

  data.forEach(function (rowData) {
    const recipient = rowData[0];
    const emailAddress = rowData[1];
    const bananasCount = rowData[2];
    
    if (bananasCount < 20) {
      return
    }

    const greeting = 'Dear ' + recipient + ',\n'
    const bananasCountMessage = 'You now have ' + bananasCount + ' bananas accumulated.';
    const greatJobMessage = 'Great job! Come pick them up :)';

    const message = [greeting, bananasCountMessage, greatJobMessage].join('\n');
    const subject = 'Good news, you have some bananas waiting for you!';

    MailApp.sendEmail(emailAddress, subject, message);
  }) 
}