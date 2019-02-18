
export const counselorCredentials = [
  {
    name: 'Company',
    label: 'Company',
    type: 'string',
  },
  {
    name: 'licensingAccreditation',
    label: 'Licensing Accreditation',
    type: 'string',
  },
  {
    name: 'membershipNumber',
    label: 'Membership Number',
    type: 'string',
  },
  {
    name: 'licensingExpiryDate',
    label: 'Licensing Expiry Date',
    type: 'string',
  },
  {
    name: 'education',
    label: 'Education',
    type: 'string',
  },
  {
    name: 'insurance',
    label: 'Insurance',
    type: 'string',
  },
  {
    name: 'yearsOfCounsellingExperience',
    label: 'Years of counselling experience',
    type: 'select',
    select: [
      '0-1 years',
      '1-5 years',
      '5-10 years',
      '10+'
    ]
  },
  {
    name: 'yearsOfOnlineCounselling',
    label: 'Years of online counselling',
    type: 'select',
    select: [
      '0-1 years',
      '1-5 years',
      '5-10 years',
      '10+'
    ]
  },
  {
    name: 'totalHoursOfCounselling',
    label: 'Total hours of counselling',
    type: 'select',
    select: [
      '1-500 hours',
      '500-1000 hours',
      '1000-2000 hours',
      '2000+'
    ]

  },
];
const counselorPersonal = [
  {
    name: 'username',
    label: 'Username',
    type: 'string',
  },
  {
    name: 'phoneNumber',
    label: 'Phone Number',
    type: 'string',
  },
  {
    name: 'workAddress',
    label: 'Work Address',
    type: 'string',
  },

]

export default counselorPersonal;

export const counselorVerification = [
  {
    name: 'requireSupervision',
    label: 'Are you currently required to have supervision in order to provide counselling services?',
    type: 'string',
  },
  {
    name: 'subjectToInvestigation',
    label: 'Have you ever been subject to an investigation or review by your licensing board?',
    type: 'boolean',
    provideDetails: true,
  },
  {
    name: 'subjectToDispelIceActions',
    label: 'Have you ever been subject to dispel ice actions by your licensing board?',
    type: 'boolean',
    provideDetails: true,
  },
  {
    name: 'OtherLanguages',
    label: 'Can you provide your services in any other languages?',
    type: 'select',
  },
  {
    name: 'uploadPhotoIdentity',
    label: 'Please upload photos identity ( either drivers licence or passport )',
    type: 'file',
  },
];
