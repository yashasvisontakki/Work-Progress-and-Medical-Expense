/**
 * datasets.js
 *
 * Stand-ins for data that would normally come from a backend API.
 * Nothing on screen is ever typed in by hand - the UI only ever
 * renders whichever object below is currently selected. Edit either
 * object (or add a new one to the DATASETS map) and reload the page
 * to see the change reflected immediately.
 *
 * The currently-selected dataset id is persisted to localStorage
 * (see app.js) so a page refresh keeps showing the same dataset
 * instead of resetting back to the first one.
 */

const DATASETS = {

  // Mirrors the sample "Madeleine Willson" claim from the source PDF.
  dataset1: {
    id: "dataset1",
    label: "Dataset 1 \u2013 yashasvi n sontakki (Claim 20042047)",
    workerName: "yashasvi ns",
    claimNo: "20042047",
    formCode: "WP",
    appId: "712041",
    submitted: "March 19, 2024 19:21",

    returnToWork: {
      status: "returned",          // notMissed | notReturned | returned
      returnDate: "March 15, 2024"
    },
    workingStatus: {
      type: "modifiedReduced",     // fullRegular | fullReduced | modifiedRegular | modifiedReduced | other
      otherText: ""
    },
    rtwGoingComment: "Terrible. Testing Testing",
    expectedReturnDate: "",
    concerns: "",
    lastContact: { name: "", date: "" },

    recovery: {
      status: "recovered",         // notRecovered | recovered
      comments: ""
    },

    painScale: 3,

    medicalTreatment: {
      status: "notContinuing",     // notContinuing | continuing
      providerType: "",
      lastTreatmentDate: "",
      lastProviderName: "",
      nextTreatmentDate: "",
      nextProviderName: "",
      chiroFrequency: ""
    },

    medication: {
      status: "notTaking",         // notTaking | taking
      name: ""
    },

    homeExercise: {
      status: "notDoing",          // notDoing | doing
      exercises: []
    },

    otherInfo: "No info Testing Testing"
  },

  // A second, fictional worker with a different shape of answers -
  // still recovering, actively treating, doing home exercises, and
  // with noticeably longer free-text answers so the print pagination
  // logic has to do real work rather than always landing on 3 pages.
  dataset2: {
    id: "dataset2",
    label: "Dataset 2 \u2013 David sha (Claim 20118893)",
    workerName: "David sha",
    claimNo: "20118893",
    formCode: "WP",
    appId: "845213",
    submitted: "July 22, 2026 09:47",

    returnToWork: {
      status: "notReturned",
      returnDate: ""
    },
    workingStatus: {
      type: "other",
      otherText: "Not working - awaiting clearance from physiotherapist"
    },
    rtwGoingComment: "",
    expectedReturnDate: "August 11, 2026",
    concerns:
      "My workstation requires repetitive overhead reaching and I am worried the shoulder " +
      "will re-aggravate if I go back to full duties too soon. I would like a graduated " +
      "return-to-work plan with modified duties for the first three weeks, and a check-in " +
      "with my supervisor before any lifting tasks are assigned.",
    lastContact: { name: "Priya Nathan (Site Supervisor)", date: "July 20, 2026" },

    recovery: {
      status: "notRecovered",
      comments:
        "Range of motion in the right shoulder has improved from 40% to roughly 75% since " +
        "starting physiotherapy. Still experiencing pain when reaching above shoulder height " +
        "and when carrying loads over 5kg with the right arm."
    },

    painScale: 6,

    medicalTreatment: {
      status: "continuing",
      providerType: "Physiotherapist",
      lastTreatmentDate: "July 21, 2026",
      lastProviderName: "Dr. L. Osei, Riverbend Physiotherapy",
      nextTreatmentDate: "July 28, 2026",
      nextProviderName: "Dr. L. Osei, Riverbend Physiotherapy",
      chiroFrequency: "2x per week"
    },

    medication: {
      status: "taking",
      name: "Ibuprofen 400mg (as needed, max 3x daily)"
    },

    homeExercise: {
      status: "doing",
      exercises: [
        "Pendulum swings, 2 sets of 15, twice daily",
        "Resistance band external rotation, 3 sets of 12",
        "Wall slides, 3 sets of 10",
        "Ice application, 15 minutes after each session"
      ]
    },

    otherInfo:
      "I have also let my employer know that I may need an adjusted chair and a sit-stand " +
      "desk once I return, since prolonged sitting has been aggravating a secondary lower " +
      "back complaint that started after I changed my posture to protect the shoulder. " +
      "Happy to provide further chart notes from Riverbend Physiotherapy if useful."
  }
};

const DEFAULT_DATASET_ID = "dataset1";
