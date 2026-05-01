// ============================================================
// SMART BUSINESS AUTOPSY FRAMEWORK — LEAD MAGNET APPS SCRIPT
// Paste kode ini di Google Apps Script, lalu deploy sebagai Web App
// ============================================================

// GANTI URL INI dengan URL Google Sheets milikmu setelah membuat sheet baru
var SPREADSHEET_ID = "GANTI_DENGAN_ID_GOOGLE_SHEETS_KAMU";
var SHEET_NAME = "Leads";

// Link download PDF gratis — upload ke Google Drive dulu lalu paste link-nya di sini
var PDF_DOWNLOAD_URL = "GANTI_DENGAN_LINK_GOOGLE_DRIVE_PDF_GRATIS";

function doPost(e) {
  try {
    var data = JSON.parse(e.postData.contents);
    var nama = data.nama || "";
    var whatsapp = data.whatsapp || "";
    var email = data.email || "";
    var timestamp = new Date().toLocaleString("id-ID", {timeZone: "Asia/Jakarta"});

    var ss = SpreadsheetApp.openById(SPREADSHEET_ID);
    var sheet = ss.getSheetByName(SHEET_NAME);

    // Buat header jika sheet masih kosong
    if (sheet.getLastRow() === 0) {
      sheet.appendRow(["Timestamp", "Nama", "WhatsApp", "Email", "Status"]);
    }

    sheet.appendRow([timestamp, nama, whatsapp, email, "Downloaded"]);

    return ContentService
      .createTextOutput(JSON.stringify({
        status: "success",
        readerUrl: "reader.html"
      }))
      .setMimeType(ContentService.MimeType.JSON)
      .setHeaders({"Access-Control-Allow-Origin": "*"});

  } catch(err) {
    return ContentService
      .createTextOutput(JSON.stringify({ status: "error", message: err.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

function doGet(e) {
  return ContentService
    .createTextOutput(JSON.stringify({ status: "ok", message: "Apps Script is running." }))
    .setMimeType(ContentService.MimeType.JSON);
}
