import { PropsWithChildren, useState } from "react";
import PhoneContext from "./PhoneNumberContext";
import { PhoneNumberContextStructure } from "./types";

const PhoneContextProvider = ({ children }: PropsWithChildren): JSX.Element => {
  const [phoneNumber, setPhoneNumber] = useState<string[]>([]);

  const [isCalling, setIsCalling] = useState<boolean>(false);

  const emptyPhoneNumber = () => {
    setPhoneNumber([]);
  };

  const addDigit = (number: string) => {
    if (phoneNumber.length >= 9) {
      return;
    }

    setPhoneNumber((phoneNumber) => {
      return [...phoneNumber, number];
    });
  };

  const call = () => {
    setIsCalling(true);
  };

  const hangUp = () => {
    setIsCalling(false);
  };

  const phoneStore: PhoneNumberContextStructure = {
    phoneNumber,
    isCalling,
    emptyPhoneNumber,
    addDigit,
    call,
    hangUp,
  };

  return (
    <PhoneContext.Provider value={phoneStore}>{children}</PhoneContext.Provider>
  );
};

export default PhoneContextProvider;
