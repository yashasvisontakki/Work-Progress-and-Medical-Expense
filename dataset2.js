window.WCB_DATASET_2 = {
  workerName: "Yashavsi n Sontakki",
  claimNo: "20115893",
  workerAppId: "745210",
  submitted: "July 14, 2026 09:12",

  prescriptionDrugs: [
    {
      drugName: "dolo",
      prescriptionDate: "July 2, 2026",
      datePurchased: "July 3, 2026",
      providerName: "Dr. Reyes",
      paidAmount: "$32.50",
    },
    {
      drugName: "Cyclobenzaprine",
      prescriptionDate: "July 5, 2026",
      datePurchased: "July 5, 2026",
      providerName: "Dr. Reyes",
      paidAmount: "$14.75",
    },
  ],

  otcDrugs: [
    {
      drugName: "Tylenol",
      datePurchased: "July 6, 2026",
      paidAmount: "$11.20",
      sellerName: "Rexall Pharmacy",
      reason: "Headache",
    },
    {
      drugName: "Polysporin",
      datePurchased: "July 9, 2026",
      paidAmount: "$9.99",
      sellerName: "Shoppers Drug Mart",
      reason: "Wound care",
    },
  ],

  // Empty on purpose — exercises the mixin's "no records" branch.
  medicalSupplies: [],

  parking: [
    {
      providerAddress: "409 Tache Ave, Winnipeg MB R2H 2A6, Canada",
      date: "July 6, 2026",
      paidAmount: "$14.00",
      meterUsed: "No",
      meterNumber: "",
    },
  ],

  mileage: [
    {
      appointmentDate: "July 6, 2026",
      providerAddress: "St. Boniface Hospital, 409 Tache Ave, Winnipeg MB R2H 2A6, Canada",
      workplaceAddress: "Devesh's Workplace, 100 Main St, Winnipeg MB R3C 1A1, Canada",
      km: "14 km",
    },
    {
      appointmentDate: "July 9, 2026",
      providerAddress: "St. Boniface Hospital, 409 Tache Ave, Winnipeg MB R2H 2A6, Canada",
      workplaceAddress: "Devesh's Workplace, 100 Main St, Winnipeg MB R3C 1A1, Canada",
      km: "14 km",
    },
  ],

  busTaxi: [
    {
      appointmentDate: "July 9, 2026",
      startAddress: "18 Elgin Ave, Winnipeg MB R3B 0V5, Canada",
      providerAddress: "St. Boniface Hospital, 409 Tache Ave, Winnipeg MB R2H 2A6, Canada",
      fareType: "Taxi",
      totalFare: "$18.50",
    },
  ],

  privacyAcknowledged: true,
};
