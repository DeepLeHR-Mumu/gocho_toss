import { FunctionComponent } from "react";

import { NewSharedButton } from "shared-ui/common/newSharedButton";

import { ModalComponent } from "../modalBackground";
import { ConfirmModalProps } from "./type";
import { cssObj } from "./style";

export const ConfirmModal: FunctionComponent<ConfirmModalProps> = ({ title, description, cancel, confirm }) => (
  <ModalComponent>
    <div css={cssObj.modalContainer}>
      <div css={cssObj.titleWrapper}>
        <h3 css={cssObj.title}>{title}</h3>
      </div>
      <hr css={cssObj.divider} />
      {description}
      {(cancel || confirm) && (
        <div css={cssObj.buttonContainer}>
          {cancel && (
            <NewSharedButton buttonType="outLineGray" text={cancel.name} width={8.75} onClickHandler={cancel.onClick} />
          )}
          {confirm && (
            <NewSharedButton buttonType="fillBlue" text={confirm.name} width={8.75} onClickHandler={confirm.onClick} />
          )}
        </div>
      )}
    </div>
  </ModalComponent>
);
