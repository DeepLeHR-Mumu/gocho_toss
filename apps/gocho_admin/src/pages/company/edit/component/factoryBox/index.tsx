import { FunctionComponent } from "react";

import { CheckBox } from "shared-ui/common/atom/checkbox";

import {
  booleanInputBox,
  checkboxText,
  deleteFactoryButton,
  factoryContainer,
  factoryTitle,
  inputBox,
  inputContainer,
  inputLabel,
  inputTitle,
  welfareBox,
} from "./style";
import { FactoryBoxProps } from "./type";

export const FactoryBox: FunctionComponent<FactoryBoxProps> = ({ index, companyForm, remove }) => {
  return (
    <li css={factoryContainer}>
      <h3 css={factoryTitle}>공장 정보</h3>
      <div css={inputContainer}>
        <strong css={inputTitle}>공장 이름 *</strong>
        <input css={inputBox} {...companyForm.register(`factories.${index}.factory_name`, { required: true })} />
      </div>
      <div css={inputContainer}>
        <strong css={inputTitle}>공장 주소 *</strong>
        <input css={inputBox} {...companyForm.register(`factories.${index}.address`, { required: true })} />
      </div>
      <div css={inputContainer}>
        <div css={welfareBox}>
          <strong css={inputTitle}>남자 임직원 *</strong>
          <input
            type="number"
            css={inputBox}
            {...companyForm.register(`factories.${index}.male_number`, { required: true })}
          />
        </div>
        <div css={welfareBox}>
          <strong css={inputTitle}>여자 임직원 *</strong>
          <input
            type="number"
            css={inputBox}
            {...companyForm.register(`factories.${index}.female_number`, { required: true })}
          />
        </div>
      </div>
      <div css={inputContainer}>
        <strong css={inputTitle}>생산품 *</strong>
        <input css={inputBox} {...companyForm.register(`factories.${index}.product`, { required: true })} />
      </div>
      <div css={inputContainer}>
        <strong css={inputTitle}>통근버스 *</strong>
        <label css={inputLabel} htmlFor={`버스유무${index}`}>
          <input type="checkbox" id={`버스유무${index}`} {...companyForm.register(`factories.${index}.bus_bool`, {})} />
          <CheckBox isChecked={companyForm.watch("factories")[index].bus_bool} /> <p css={checkboxText}>있음</p>
          <CheckBox isChecked={!companyForm.watch("factories")[index].bus_bool} /> <p css={checkboxText}>없음</p>
        </label>
        <input
          css={booleanInputBox(!companyForm.watch("factories")[index].bus_bool)}
          disabled={!companyForm.watch("factories")[index].bus_bool}
          {...companyForm.register(`factories.${index}.bus_etc`, {})}
        />
      </div>
      <div css={inputContainer}>
        <strong css={inputTitle}>기숙사 *</strong>
        <label css={inputLabel} htmlFor={`기숙사유무${index}`}>
          <input
            type="checkbox"
            id={`기숙사유무${index}`}
            {...companyForm.register(`factories.${index}.dormitory_bool`, {})}
          />
          <CheckBox isChecked={companyForm.watch("factories")[index].dormitory_bool} /> <p css={checkboxText}>있음</p>
          <CheckBox isChecked={!companyForm.watch("factories")[index].dormitory_bool} /> <p css={checkboxText}>없음</p>
        </label>
        <input
          css={booleanInputBox(!companyForm.watch("factories")[index].dormitory_bool)}
          disabled={!companyForm.watch("factories")[index].dormitory_bool}
          {...companyForm.register(`factories.${index}.dormitory_etc`, {})}
        />
      </div>
      <button
        css={deleteFactoryButton}
        type="button"
        onClick={() => {
          return remove(index);
        }}
      >
        공장 삭제
      </button>
    </li>
  );
};
