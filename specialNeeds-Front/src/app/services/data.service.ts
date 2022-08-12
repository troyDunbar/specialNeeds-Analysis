import { Injectable } from '@angular/core';
import {
  createClient,
  updateClient,
  addClientBeneficiary,
  updateClientBeneficiary,
  createUserModel,
  updateUserModel,
  updateBeneficiaryModel,
  addBeneficiaryModel,
  conditionStatus,
  expenses,
  loginClient,
  calculateBeneficiary,
  beneficiaryOutputData
} from '../models/user';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor() {}

  globalSessionToken = {
    sessionToken: ''
  };

  user: createUserModel = {
    firstName: '',
    lastName: '',
    email: '',
    primaryPhoneNumber: '',
    IsOwnBeneficiary: false,
    TaxFilingStatus: 0,
  };

  login: loginClient = {
    email: '',
    password: '',
  };

  updateUser: updateUserModel = {
    firstName: '',
    lastName: '',
    email: '',
    primaryPhoneNumber: '',
    secondaryPhoneNumber: '',
    isAccountActive: false,
    isOwnBeneficiary: false,
    taxFilingStatus: 0,
  };

  updateClient: updateClient = {
    sessionToken: this.globalSessionToken.sessionToken,
    userModel: this.updateUser,
  };

  createClient: createClient = {
    userModel: this.user,
    password: '',
  };

  //OTHER DATA
  expenses: expenses = {
    housing: 150,
    food: 500,
    utilities: 0,
    transportation: 600,
    medicalCoPay: 50,
    entertainment: 300,
    conditionCare: 980,
    other: 0,
  };

  conditionStatus: conditionStatus = {
    isConditionPermanent: true,
    isLegallyBlind: true,
    isAbleGroceryShop: true,
    isAbleDrive: false,
  };

  //BENEFICIARY DATA
  updateBeneficiary: updateBeneficiaryModel = {
    firstName: 'John',
    lastName: 'Smith',
    stateOfResidence: 'AL',
    isStudent: false,
    isEmployed: false,
    id: '',
    age: 23,
    expectedLifeSpan: 0,
    yearlyIncome: 0,
    conditionStatus: this.conditionStatus,
    expenses: this.expenses,
    supplementalSecurityIncomeMonthly: 0,
    socialSecurityDisabilityInsuranceMonthly: 0,
    ABLEMaxHoldings: 0,
    annualAbleContributions: 0,
    ABLEFundRate: 0,
  };

  addBeneficiary: addBeneficiaryModel = {
    firstName: 'John',
    lastName: 'Smith',
    stateOfResidence: 'AL',
    isStudent: true,
    isEmployed: true,
    age: 23,
    expectedLifeSpan: 75,
    yearlyIncome: 30000,
    conditionStatus: this.conditionStatus,
    expenses: this.expenses,
    supplementalSecurityIncomeMonthly: 841,
    socialSecurityDisabilityInsuranceMonthly: 1300,
    ABLEMaxHoldings: 235000,
    annualAbleContributions: 20000,
    ABLEFundRate: 0.1 //cant be > 1
  };

  addClientBeneficiary: addClientBeneficiary = {
    sessionToken: this.globalSessionToken.sessionToken,
    beneficiaryModel: this.addBeneficiary,
  };

  updateClientBeneficiary: updateClientBeneficiary = {
    sessionToken: this.globalSessionToken.sessionToken,
    beneficiaryModel: this.updateBeneficiary,
  };

  calculateClientBeneficiary: calculateBeneficiary = {
    sessionToken: this.globalSessionToken.sessionToken,
  };

//OUTPUT
  beneficiaryOutput: beneficiaryOutputData ={
    remainingDependency: 0,
    costMonthly: 0,
    overallMonetaryCost: 0,
    extraMonthlyCostSpecialNeedsDependent: 0,
    isUnder65: false,
    specialNeedsTrustEligible: false,
    supplementalSecurityIncomeEligible: false,
    netSupplementalSecurityIncome: 0,
    socialSecurityDisabilityInsuranceEligible: false,
    netSocialSecurityDisabilityInsurance: 0,
    maxABLEContribution: 0,
    recommendedABLEContribution: 0,
    ableLifetimeValue: 0,
    ableAccountValues: [],
    savingsAccountValues: [],
    postTaxCapitalValues: [],
    medicaidEligible: false
  }

  outputArray: Array<beneficiaryOutputData> = [];
}
