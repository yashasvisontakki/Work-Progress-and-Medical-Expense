function pug_attr(t,e,n,r){if(!1===e||null==e||!e&&("class"===t||"style"===t))return"";if(!0===e)return" "+(r?t:t+'="'+t+'"');var f=typeof e;return"object"!==f&&"function"!==f||"function"!=typeof e.toJSON||(e=e.toJSON()),"string"==typeof e||(e=JSON.stringify(e),n||-1===e.indexOf('"'))?(n&&(e=pug_escape(e))," "+t+'="'+e+'"'):" "+t+"='"+e.replace(/'/g,"&#39;")+"'"}
function pug_classes(s,r){return Array.isArray(s)?pug_classes_array(s,r):s&&"object"==typeof s?pug_classes_object(s):s||""}
function pug_classes_array(r,a){for(var s,e="",u="",c=Array.isArray(a),g=0;g<r.length;g++)(s=pug_classes(r[g]))&&(c&&a[g]&&(s=pug_escape(s)),e=e+u+s,u=" ");return e}
function pug_classes_object(r){var a="",n="";for(var o in r)o&&r[o]&&pug_has_own_property.call(r,o)&&(a=a+n+o,n=" ");return a}
function pug_escape(e){var a=""+e,t=pug_match_html.exec(a);if(!t)return e;var r,c,n,s="";for(r=t.index,c=0;r<a.length;r++){switch(a.charCodeAt(r)){case 34:n="&quot;";break;case 38:n="&amp;";break;case 60:n="&lt;";break;case 62:n="&gt;";break;default:continue}c!==r&&(s+=a.substring(c,r)),c=r+1,s+=n}return c!==r?s+a.substring(c,r):s}
var pug_has_own_property=Object.prototype.hasOwnProperty;
var pug_match_html=/["&<>]/;function renderExpenseForm(locals) {var pug_html = "", pug_mixins = {}, pug_interp;;
    var locals_for_with = (locals || {});
    
    (function (activeDataset, claim) {
      pug_mixins["docHeader"] = pug_interp = function(orgAddressLines, docTitle, claimLabel, claimValue){
var block = (this && this.block), attributes = (this && this.attributes) || {};
pug_html = pug_html + "\u003Cheader class=\"doc-header\"\u003E\u003Cdiv class=\"header-logo\"\u003E\u003Cimg src=\".\u002Fimages\u002Flogo.jpeg\" alt=\"Workers Compensation Board of Manitoba logo\"\u002F\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"header-contact\"\u003E";
// iterate orgAddressLines
;(function(){
  var $$obj = orgAddressLines;
  if ('number' == typeof $$obj.length) {
      for (var pug_index0 = 0, $$l = $$obj.length; pug_index0 < $$l; pug_index0++) {
        var line = $$obj[pug_index0];
pug_html = pug_html + "\u003Cdiv\u003E" + (pug_escape(null == (pug_interp = line) ? "" : pug_interp)) + "\u003C\u002Fdiv\u003E";
      }
  } else {
    var $$l = 0;
    for (var pug_index0 in $$obj) {
      $$l++;
      var line = $$obj[pug_index0];
pug_html = pug_html + "\u003Cdiv\u003E" + (pug_escape(null == (pug_interp = line) ? "" : pug_interp)) + "\u003C\u002Fdiv\u003E";
    }
  }
}).call(this);

pug_html = pug_html + "\u003C\u002Fdiv\u003E\u003Cdiv class=\"header-title-block\"\u003E\u003Ch1 class=\"doc-title\"\u003E" + (pug_escape(null == (pug_interp = docTitle) ? "" : pug_interp)) + "\u003C\u002Fh1\u003E\u003Cdiv class=\"claim-box\"\u003E\u003Cspan class=\"claim-label\"\u003E" + (pug_escape(null == (pug_interp = claimLabel + " ") ? "" : pug_interp)) + "\u003C\u002Fspan\u003E\u003Cspan class=\"claim-value\"\u003E" + (pug_escape(null == (pug_interp = claimValue) ? "" : pug_interp)) + "\u003C\u002Fspan\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fheader\u003E";
};
pug_mixins["sectionTitle"] = pug_interp = function(title, marker){
var block = (this && this.block), attributes = (this && this.attributes) || {};
pug_html = pug_html + ("\u003Ch2 class=\"section-title\"\u003E" + (pug_escape(null == (pug_interp = title) ? "" : pug_interp)));
if (marker) {
pug_html = pug_html + "\u003Csup class=\"section-marker\"\u003E" + (pug_escape(null == (pug_interp = marker) ? "" : pug_interp)) + "\u003C\u002Fsup\u003E";
}
pug_html = pug_html + "\u003C\u002Fh2\u003E";
};
pug_mixins["dataTable"] = pug_interp = function(columns, rows){
var block = (this && this.block), attributes = (this && this.attributes) || {};
pug_html = pug_html + "\u003Ctable class=\"data-table\"\u003E\u003Cthead\u003E\u003Ctr\u003E";
// iterate columns
;(function(){
  var $$obj = columns;
  if ('number' == typeof $$obj.length) {
      for (var pug_index1 = 0, $$l = $$obj.length; pug_index1 < $$l; pug_index1++) {
        var col = $$obj[pug_index1];
pug_html = pug_html + "\u003Cth\u003E" + (pug_escape(null == (pug_interp = col.label) ? "" : pug_interp)) + "\u003C\u002Fth\u003E";
      }
  } else {
    var $$l = 0;
    for (var pug_index1 in $$obj) {
      $$l++;
      var col = $$obj[pug_index1];
pug_html = pug_html + "\u003Cth\u003E" + (pug_escape(null == (pug_interp = col.label) ? "" : pug_interp)) + "\u003C\u002Fth\u003E";
    }
  }
}).call(this);

pug_html = pug_html + "\u003C\u002Ftr\u003E\u003C\u002Fthead\u003E\u003Ctbody\u003E";
if (rows && rows.length) {
// iterate rows
;(function(){
  var $$obj = rows;
  if ('number' == typeof $$obj.length) {
      for (var pug_index2 = 0, $$l = $$obj.length; pug_index2 < $$l; pug_index2++) {
        var row = $$obj[pug_index2];
pug_html = pug_html + "\u003Ctr\u003E";
// iterate columns
;(function(){
  var $$obj = columns;
  if ('number' == typeof $$obj.length) {
      for (var pug_index3 = 0, $$l = $$obj.length; pug_index3 < $$l; pug_index3++) {
        var col = $$obj[pug_index3];
pug_html = pug_html + "\u003Ctd\u003E" + (pug_escape(null == (pug_interp = row[col.key] || "") ? "" : pug_interp)) + "\u003C\u002Ftd\u003E";
      }
  } else {
    var $$l = 0;
    for (var pug_index3 in $$obj) {
      $$l++;
      var col = $$obj[pug_index3];
pug_html = pug_html + "\u003Ctd\u003E" + (pug_escape(null == (pug_interp = row[col.key] || "") ? "" : pug_interp)) + "\u003C\u002Ftd\u003E";
    }
  }
}).call(this);

pug_html = pug_html + "\u003C\u002Ftr\u003E";
      }
  } else {
    var $$l = 0;
    for (var pug_index2 in $$obj) {
      $$l++;
      var row = $$obj[pug_index2];
pug_html = pug_html + "\u003Ctr\u003E";
// iterate columns
;(function(){
  var $$obj = columns;
  if ('number' == typeof $$obj.length) {
      for (var pug_index4 = 0, $$l = $$obj.length; pug_index4 < $$l; pug_index4++) {
        var col = $$obj[pug_index4];
pug_html = pug_html + "\u003Ctd\u003E" + (pug_escape(null == (pug_interp = row[col.key] || "") ? "" : pug_interp)) + "\u003C\u002Ftd\u003E";
      }
  } else {
    var $$l = 0;
    for (var pug_index4 in $$obj) {
      $$l++;
      var col = $$obj[pug_index4];
pug_html = pug_html + "\u003Ctd\u003E" + (pug_escape(null == (pug_interp = row[col.key] || "") ? "" : pug_interp)) + "\u003C\u002Ftd\u003E";
    }
  }
}).call(this);

pug_html = pug_html + "\u003C\u002Ftr\u003E";
    }
  }
}).call(this);

}
else {
pug_html = pug_html + "\u003Ctr\u003E\u003Ctd" + (" class=\"empty-row\""+pug_attr("colspan", columns.length, true, false)) + "\u003ENo records submitted for this section.\u003C\u002Ftd\u003E\u003C\u002Ftr\u003E";
}
pug_html = pug_html + "\u003C\u002Ftbody\u003E\u003C\u002Ftable\u003E";
};
pug_mixins["expenseSection"] = pug_interp = function(title, marker, introText, columns, rows){
var block = (this && this.block), attributes = (this && this.attributes) || {};
pug_html = pug_html + "\u003Csection class=\"form-section\"\u003E";
pug_mixins["sectionTitle"](title, marker);
if (introText) {
pug_html = pug_html + "\u003Cp class=\"section-intro\"\u003E" + (pug_escape(null == (pug_interp = introText) ? "" : pug_interp)) + "\u003C\u002Fp\u003E";
}
pug_mixins["dataTable"](columns, rows);
pug_html = pug_html + "\u003C\u002Fsection\u003E";
};
pug_mixins["pageFooter"] = pug_interp = function(workerAppId, submitted){
var block = (this && this.block), attributes = (this && this.attributes) || {};
pug_html = pug_html + "\u003Cfooter class=\"doc-footer\"\u003E\u003Cdiv class=\"footer-left\"\u003EWorker App ID: " + (pug_escape(null == (pug_interp = workerAppId) ? "" : pug_interp)) + "\u003C\u002Fdiv\u003E\u003Cdiv class=\"footer-right\"\u003ESubmitted: " + (pug_escape(null == (pug_interp = submitted) ? "" : pug_interp)) + "\u003C\u002Fdiv\u003E\u003C\u002Ffooter\u003E";
};
pug_html = pug_html + "\u003Cdiv class=\"dataset-switcher no-print\"\u003E\u003Cspan\u003ESimulated backend record:\u003C\u002Fspan\u003E\u003Ca" + (pug_attr("class", pug_classes([activeDataset === '1' ? 'active' : ''], [true]), false, false)+" href=\"javascript:void(0)\" onclick=\"renderDataset('1')\"") + "\u003EDataset 1 (Madeleine Willson)\u003C\u002Fa\u003E\u003Ca" + (pug_attr("class", pug_classes([activeDataset === '2' ? 'active' : ''], [true]), false, false)+" href=\"javascript:void(0)\" onclick=\"renderDataset('2')\"") + "\u003EDataset 2 (Devesh Kumar)\u003C\u002Fa\u003E\u003Cbutton id=\"print-btn\" type=\"button\" onclick=\"window.print()\"\u003EPrint \u002F Save as PDF\u003C\u002Fbutton\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"page-wrapper\"\u003E";
pug_mixins["docHeader"](
    ["333 Broadway", "Winnipeg, MB R3C 4W3", "Phone: (204) 954-4321", "Toll Free: 1-855-954-4321", "wcb.mb.ca"],
    "Medical & Travel Expense Request",
    "Claim No.",
    claim.claimNo
  );
pug_html = pug_html + "\u003Cp class=\"request-line\"\u003E\u003Cstrong\u003E" + (pug_escape(null == (pug_interp = claim.workerName) ? "" : pug_interp)) + "\u003C\u002Fstrong\u003E requested reimbursement for the following medical and\u002For travel expenses:\u003C\u002Fp\u003E";
pug_mixins["expenseSection"](
    "Prescription Drugs",
    null,
    null,
    [
      { label: "Drug Name", key: "drugName" },
      { label: "Prescription Date", key: "prescriptionDate" },
      { label: "Date Purchased", key: "datePurchased" },
      { label: "Healthcare Provider Name", key: "providerName" },
      { label: "Paid Amount", key: "paidAmount" }
    ],
    claim.prescriptionDrugs
  );
pug_mixins["expenseSection"](
    "Over-the-Counter Drugs",
    null,
    null,
    [
      { label: "Drug Name", key: "drugName" },
      { label: "Date Purchased", key: "datePurchased" },
      { label: "Paid Amount", key: "paidAmount" },
      { label: "Seller's Name", key: "sellerName" },
      { label: "Reason for Purchasing", key: "reason" }
    ],
    claim.otcDrugs
  );
pug_mixins["expenseSection"](
    "Bandages, Braces or Other Medical Supplies",
    null,
    null,
    [
      { label: "Item Purchased", key: "itemPurchased" },
      { label: "Date Purchased", key: "datePurchased" },
      { label: "Was this Prescribed?", key: "wasPrescribed" },
      { label: "Healthcare Provider Name", key: "providerName" },
      { label: "Paid Amount", key: "paidAmount" },
      { label: "Seller's Name", key: "sellerName" }
    ],
    claim.medicalSupplies
  );
pug_mixins["expenseSection"](
    "Parking for Medical Appointments",
    null,
    null,
    [
      { label: "Address of Healthcare Provider/Medical Facility", key: "providerAddress" },
      { label: "Date", key: "date" },
      { label: "Paid Amount", key: "paidAmount" },
      { label: "Meter Used?", key: "meterUsed" },
      { label: "Meter Number", key: "meterNumber" }
    ],
    claim.parking
  );
pug_mixins["expenseSection"](
    "Mileage to Medical Appointments",
    null,
    "The WCB will generally reimburse only those transportation costs which are in excess of costs that would be incurred by the worker while travelling to and from work.",
    [
      { label: "Appointment Date", key: "appointmentDate" },
      { label: "Address of Healthcare Provider/Medical Facility", key: "providerAddress" },
      { label: "Address of Workplace", key: "workplaceAddress" },
      { label: "Number of km (Round Trip)", key: "km" }
    ],
    claim.mileage
  );
pug_mixins["expenseSection"](
    "Bus or Taxi Fare for Medical Appointments",
    "*",
    "*Note: Pre-approval is required from your WCB representative to claim taxi fare(s).",
    [
      { label: "Appointment Date", key: "appointmentDate" },
      { label: "Address of Starting Point", key: "startAddress" },
      { label: "Address of Healthcare Provider/Medical Facility", key: "providerAddress" },
      { label: "Bus or Taxi (indicate one)", key: "fareType" },
      { label: "Total Fare Paid", key: "totalFare" }
    ],
    claim.busTaxi
  );
pug_html = pug_html + "\u003Chr class=\"section-divider\"\u002F\u003E\u003Cp class=\"privacy-line\"\u003E\u003Cinput" + (" type=\"checkbox\""+pug_attr("checked", claim.privacyAcknowledged, true, false)+pug_attr("disabled", true, true, false)) + "\u002F\u003E I understand that the\u003Ca href=\"#\"\u003E&nbsp;Privacy Notice&nbsp;\u003C\u002Fa\u003E applies to the personal information collected in this document.\u003C\u002Fp\u003E";
pug_mixins["pageFooter"](claim.workerAppId, claim.submitted);
pug_html = pug_html + "\u003C\u002Fdiv\u003E";
    }.call(this, "activeDataset" in locals_for_with ?
        locals_for_with.activeDataset :
        typeof activeDataset !== 'undefined' ? activeDataset : undefined, "claim" in locals_for_with ?
        locals_for_with.claim :
        typeof claim !== 'undefined' ? claim : undefined));
    ;;return pug_html;}

// Expose the compiled template as a plain browser global — no Node/Express needed to run it, just include this file with a <script> tag.
window.renderExpenseForm = renderExpenseForm;
