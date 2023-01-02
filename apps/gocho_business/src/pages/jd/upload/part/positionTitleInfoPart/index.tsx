import { FunctionComponent, useState } from "react";
import { FiChevronDown, FiChevronUp, FiMinus } from "react-icons/fi";
import { useFieldArray } from "react-hook-form";
import { CheckBox } from "shared-ui/common/atom/checkbox";
import { PositionTitleInfoPartProps } from "./type";
import { taskArr } from "./constant";
import { cssObj } from "./style";

export const PositionTitleInfoPart: FunctionComponent<PositionTitleInfoPartProps> = ({
  id,
  positionIndex,
  jobForm,
  appendPosition,
  removePosition,
  control,
}) => {
  const [isCardOpen, setIsCardOpen] = useState<boolean>(false);
  const [isMainTaskOpen, setIsMainTaskOpen] = useState<boolean>(false);
  const [isSubTaskOpen, setIsSubTaskOpen] = useState<boolean>(false);

  const taskDetailArr = useFieldArray({
    control,
    name: `position_arr.${positionIndex}.task_detail_arr`,
  });

  const selectedSubTaskObj = taskArr.find(
    (task) => jobForm.watch("position_arr")[positionIndex].task_main === task.mainTask
  );

  const mainTaskClickHandler = (task: string) => {
    jobForm.setValue(`position_arr.${positionIndex}.task_main`, task);
    jobForm.setValue(`position_arr.${positionIndex}.task_sub_arr`, []);
    setIsMainTaskOpen(false);
  };

  const subTaskClickHandler = (subTask: string) => {
    const isInList = jobForm.watch("position_arr")[positionIndex].task_sub_arr.includes(subTask);
    if (isInList) {
      jobForm.setValue(`position_arr.${positionIndex}.task_sub_arr`, [
        ...jobForm.watch("position_arr")[positionIndex].task_sub_arr.filter((element) => element !== subTask),
      ]);
    } else {
      jobForm.setValue(`position_arr.${positionIndex}.task_sub_arr`, [
        ...jobForm.watch("position_arr")[positionIndex].task_sub_arr,
        subTask,
      ]);
    }
  };

  return (
    <>
      <div css={cssObj.titleContainer}>
        <strong css={cssObj.positionTitle}>직무 카드</strong>
        <div css={cssObj.positionButtonContainer}>
          <button
            css={cssObj.openCardButton}
            type="button"
            onClick={() => {
              setIsCardOpen((prev) => !prev);
            }}
          >
            {isCardOpen ? (
              <>
                <FiChevronUp />
                카드접기
              </>
            ) : (
              <>
                <FiChevronDown />
                카드열기
              </>
            )}
          </button>
          <button
            type="button"
            css={cssObj.copyPositionButton}
            onClick={() => appendPosition({ ...jobForm.watch("position_arr")[positionIndex] })}
          >
            직무 카드 복사
          </button>
          <button type="button" css={cssObj.deletePositionButton} onClick={() => removePosition(positionIndex)}>
            직무 삭제
          </button>
        </div>
      </div>
      <div css={cssObj.container}>
        <p>채용 직무</p>
        <div css={cssObj.taskInputContainer}>
          <div>
            <div css={cssObj.taskContainer}>
              <button
                css={cssObj.input(20)}
                type="button"
                onClick={() => {
                  setIsMainTaskOpen((prev) => !prev);
                }}
              >
                {selectedSubTaskObj ? `${selectedSubTaskObj.mainTask}` : "1차직무 선택"}
                <FiChevronUp />
              </button>
              <div css={cssObj.taskList(isMainTaskOpen)}>
                {taskArr.map((task) => (
                  <button
                    type="button"
                    css={cssObj.option}
                    key={`${id}${task.mainTask}`}
                    value={task.mainTask}
                    onClick={() => {
                      mainTaskClickHandler(task.mainTask);
                    }}
                  >
                    {task.mainTask}
                  </button>
                ))}
              </div>
            </div>
            <p css={cssObj.desc}>1차 직무 선택 후 2차 직무가 표시됩니다</p>
          </div>
          <div>
            <div css={cssObj.taskContainer}>
              <button
                css={cssObj.input(20)}
                type="button"
                onClick={() => {
                  setIsSubTaskOpen((prev) => !prev);
                }}
              >
                2차직무 선택
                <FiChevronUp />
              </button>
              <div css={cssObj.taskList(isSubTaskOpen)}>
                {selectedSubTaskObj?.subTaskArr.map((subTask) => (
                  <button
                    type="button"
                    css={cssObj.option}
                    key={`${id}${subTask}`}
                    value={subTask}
                    onClick={() => {
                      subTaskClickHandler(subTask);
                    }}
                  >
                    <CheckBox isChecked={jobForm.watch("position_arr")[positionIndex].task_sub_arr.includes(subTask)} />
                    {subTask}
                  </button>
                ))}
              </div>
            </div>
            <p css={cssObj.desc}>2차 직무는 중복 선택 가능합니다</p>
          </div>
        </div>
      </div>
      <div css={cssObj.container}>
        <p>세부 직무 내용</p>
        <div css={cssObj.inputContainer}>
          {taskDetailArr.fields.map((item, index) => (
            <label css={cssObj.inputLabel(47)} key={`taskDetailArr${item.id}`} htmlFor={`taskDetailArr${item.id}`}>
              <input
                id={`taskDetailArr${item.id}`}
                css={cssObj.inputWithButton}
                placeholder="합격시 구체적으로 어떤 일을 하게 되는지 명시해주세요"
                {...jobForm.register(`position_arr.${positionIndex}.task_detail_arr.${index}.value`)}
              />
              <button
                type="button"
                css={cssObj.deleteInputButton}
                onClick={() => {
                  taskDetailArr.remove(positionIndex);
                }}
              >
                <FiMinus />
              </button>
            </label>
          ))}
          <button
            type="button"
            onClick={() => {
              taskDetailArr.append({ value: "" });
            }}
          >
            + 입력칸 추가
          </button>
        </div>
      </div>
      <div css={cssObj.container}>
        <p>채용 인원</p>
        <div css={cssObj.hireNumberContainer}>
          <button
            type="button"
            css={cssObj.hireNumberButton}
            onClick={() => {
              jobForm.setValue(`position_arr.${positionIndex}.hire_number`, -1);
            }}
          >
            0명
          </button>
          <button
            type="button"
            css={cssObj.hireNumberButton}
            onClick={() => {
              jobForm.setValue(`position_arr.${positionIndex}.hire_number`, -2);
            }}
          >
            00명
          </button>
          <button
            type="button"
            css={cssObj.hireNumberButton}
            onClick={() => {
              jobForm.setValue(`position_arr.${positionIndex}.hire_number`, -3);
            }}
          >
            000명
          </button>
          <div css={cssObj.hireNumberInputContainer}>
            <input
              type="number"
              css={cssObj.input(6)}
              placeholder="0"
              {...jobForm.register(`position_arr.${positionIndex}.hire_number`, {
                valueAsNumber: true,
                required: true,
              })}
            />
            명
          </div>
        </div>
      </div>
    </>
  );
};
