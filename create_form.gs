// Run this script in Google Apps Script (script.google.com) to create the registration form.
// Steps: New project → paste this → Run createRegistrationForm → authorize when prompted.
// After running, check the Logs (View → Logs) for the form URL to paste into registration.html.

function createRegistrationForm() {
  var form = FormApp.create('AAG Bootcamp 2026 — Application');

  form.setDescription(
    'Application for the Arithmetic and Algebraic Geometry Bootcamp\n' +
    'August 17–21, 2026 · Northwestern University, Evanston, Illinois\n\n' +
    'The bootcamp is aimed at graduate students in mathematics with an interest in ' +
    'arithmetic or algebraic geometry. Applications are reviewed by the organizers ' +
    '(Philip Engel, Yuchen Liu, Ananth Shankar). Decisions will be communicated by email.'
  );

  form.setConfirmationMessage(
    'Thank you for applying to the AAG Bootcamp 2026! ' +
    'We will be in touch by email after the application deadline.'
  );

  form.setCollectEmail(true);

  form.addTextItem()
    .setTitle('Full Name')
    .setRequired(true);

  form.addTextItem()
    .setTitle('Institution')
    .setRequired(true);

  form.addMultipleChoiceItem()
    .setTitle('Year in Graduate School')
    .setChoiceValues(['1st year', '2nd year', '3rd year', '4th year', '5th year', '6th year or beyond'])
    .setRequired(true);

  form.addTextItem()
    .setTitle('Advisor Name')
    .setRequired(true);

  form.addParagraphTextItem()
    .setTitle('Mathematical Background')
    .setHelpText('Briefly describe your background and any relevant coursework or prior research.')
    .setRequired(true);

  form.addParagraphTextItem()
    .setTitle('Research Interests')
    .setHelpText('Describe your research interests and how they relate to arithmetic and/or algebraic geometry.')
    .setRequired(true);

  form.addParagraphTextItem()
    .setTitle('Why would you like to attend?')
    .setHelpText('A few sentences is fine.')
    .setRequired(true);

  form.addMultipleChoiceItem()
    .setTitle('Are you requesting financial support?')
    .setChoiceValues([
      'Yes — I need support for travel and/or accommodation',
      'Partial — I can cover some but not all costs',
      'No — I have my own funding'
    ])
    .setRequired(true);

  form.addParagraphTextItem()
    .setTitle('Additional Comments')
    .setHelpText('Anything else you would like us to know? (Optional)')
    .setRequired(false);

  // Link responses to a new Google Sheet
  var spreadsheet = SpreadsheetApp.create('AAG Bootcamp 2026 — Applications');
  form.setDestination(FormApp.DestinationType.SPREADSHEET, spreadsheet.getId());

  Logger.log('=== DONE ===');
  Logger.log('Form URL (for applicants): ' + form.getPublishedUrl());
  Logger.log('Form edit URL (for organizers): ' + form.getEditUrl());
  Logger.log('Responses spreadsheet: ' + spreadsheet.getUrl());
}
