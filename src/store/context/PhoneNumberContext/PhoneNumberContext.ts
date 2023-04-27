import { createContext } from "react";
import { PhoneNumberContextStructure } from "./types";

const PhoneNumberContext = createContext<PhoneNumberContextStructure>(
  {} as PhoneNumberContextStructure
);

export default PhoneNumberContext;
