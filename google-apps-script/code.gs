function doPost(e) {
  try {
    const sheetName = e.parameter.sheet;
    const payload = JSON.parse(e.parameter.payload);
    
    const doc = SpreadsheetApp.getActiveSpreadsheet();
    let sheet = doc.getSheetByName(sheetName);
    
    // Auto-create sheet if it doesn't exist
    if (!sheet) {
      sheet = doc.insertSheet(sheetName);
    }
    
    // Get headers or auto-create them based on the payload keys
    const headersRange = sheet.getRange(1, 1, 1, sheet.getLastColumn() || 1);
    let headers = headersRange.getValues()[0];
    
    if (!headers || headers.length === 0 || headers[0] === "") {
      headers = Object.keys(payload);
      sheet.getRange(1, 1, 1, headers.length).setValues([headers]);
      sheet.getRange(1, 1, 1, headers.length).setFontWeight("bold");
    }
    
    // Add missing headers dynamically
    const newHeaders = Object.keys(payload).filter(key => !headers.includes(key));
    if (newHeaders.length > 0) {
      headers = headers.concat(newHeaders);
      sheet.getRange(1, 1, 1, headers.length).setValues([headers]);
      sheet.getRange(1, 1, 1, headers.length).setFontWeight("bold");
    }
    
    // Build row data mapping keys to columns
    const rowData = headers.map(header => {
      const value = payload[header];
      return value !== undefined ? value : "";
    });
    
    // Append the row
    sheet.appendRow(rowData);
    
    return ContentService.createTextOutput(JSON.stringify({ status: "success" }))
      .setMimeType(ContentService.MimeType.JSON);
      
  } catch (error) {
    return ContentService.createTextOutput(JSON.stringify({ status: "error", message: error.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

function doGet(e) {
  return ContentService.createTextOutput("Wedding RSVP Web App is running successfully! Use POST to submit data.");
}
