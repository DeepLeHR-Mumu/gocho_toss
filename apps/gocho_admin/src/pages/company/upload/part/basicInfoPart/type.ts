import { Dispatch, SetStateAction } from "react";
import { UseFormRegister, UseFormSetValue, UseFormWatch } from "react-hook-form";
import { CompanyFormValues } from "../../type";

export interface BasicInfoPartProps {
  register: UseFormRegister<CompanyFormValues>;
  watch: UseFormWatch<CompanyFormValues>;
  setValue: UseFormSetValue<CompanyFormValues>;
  setLogoPicture: Dispatch<SetStateAction<File | undefined>>;
}
