export interface PhoneNumberContextStructure {
  phoneNumber: string[];
  isCalling: boolean;
  emptyPhoneNumber: () => void;
  addDigit: (number: string) => void;
  call: () => void;
  hangUp: () => void;
}
