//The client interfaces are what should be sent through the api requestst

export interface createClient {
  userModel: createUserModel;
  password: string;
} //check

export interface loginClient {
  email: string;
  password: string;
} //check

export interface updateClient {
  sessionToken: string;
  userModel: updateUserModel;
} //check

export interface addClientBeneficiary {
  sessionToken: string;
  beneficiaryModel: addBeneficiaryModel;
} //check

export interface updateClientBeneficiary {
  sessionToken: string;
  beneficiaryModel: updateBeneficiaryModel;
}

export interface calculateBeneficiary {
  sessionToken: string;
}

//Models start here.
export interface createUserModel {
  firstName: string;
  lastName: string;
  email: string;
  primaryPhoneNumber: string;
  IsOwnBeneficiary: boolean;
  TaxFilingStatus: number;
} //check

export interface updateUserModel {
  firstName: string;
  lastName: string;
  email: string;
  primaryPhoneNumber: string;
  secondaryPhoneNumber: string;
  isAccountActive: boolean;
  isOwnBeneficiary: boolean;
  taxFilingStatus: number;
} //check

export interface updateBeneficiaryModel {
  firstName: string;
  lastName: string;
  stateOfResidence: string;
  isStudent: boolean;
  isEmployed: boolean;
  id: string;
  age: number;
  expectedLifeSpan: number;
  yearlyIncome: number;
  conditionStatus: conditionStatus;
  expenses: expenses;
  supplementalSecurityIncomeMonthly: number; //monthly
  socialSecurityDisabilityInsuranceMonthly: number; //monthly
  ABLEMaxHoldings: number;
  annualAbleContributions: number;
  ABLEFundRate: number; //decimal has to be under one
} //check

export interface addBeneficiaryModel {
  firstName: string;
  lastName: string;
  stateOfResidence: string;
  isStudent: boolean;
  isEmployed: boolean;
  age: number;
  expectedLifeSpan: number;
  yearlyIncome: number;
  conditionStatus: conditionStatus;
  expenses: expenses;
  supplementalSecurityIncomeMonthly: number; //monthly
  socialSecurityDisabilityInsuranceMonthly: number; //monthly
  ABLEMaxHoldings: number;
  annualAbleContributions: number;
  ABLEFundRate: number; //decimal has to be under one
} //check

//All interfaces below this point are solely for the benficiary model.
export interface conditionStatus {
  isConditionPermanent: boolean;
  isLegallyBlind: boolean;
  isAbleGroceryShop: boolean;
  isAbleDrive: boolean;
} //check

export interface expenses {
  housing: number;
  food: number;
  utilities: number;
  transportation: number;
  medicalCoPay: number;
  entertainment: number;
  conditionCare: number;
  other: number;
} //check

//Storing data
export interface beneficiaryOutputData {
  remainingDependency: number;
  costMonthly: number;
  overallMonetaryCost: number;
  extraMonthlyCostSpecialNeedsDependent: number;
  isUnder65: boolean;
  specialNeedsTrustEligible: boolean;
  supplementalSecurityIncomeEligible: boolean;
  netSupplementalSecurityIncome: number;
  socialSecurityDisabilityInsuranceEligible: boolean;
  netSocialSecurityDisabilityInsurance: number;
  maxABLEContribution: number;
  recommendedABLEContribution: number;
  ableLifetimeValue: number;
  ableAccountValues: [];
  savingsAccountValues: [];
  postTaxCapitalValues: [];
  medicaidEligible: boolean
}

