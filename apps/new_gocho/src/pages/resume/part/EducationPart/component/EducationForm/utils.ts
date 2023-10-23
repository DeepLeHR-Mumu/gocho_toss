import { PostCollegeDef, PostExtraDef, PostHighSchoolDef, PostUniversityDef } from "@/apis/resume/education/type";

import { SelectorResumeEducation } from "@/apis/resume/education/useResumeEducationArr/type";
import { SelectorResumeHighSchool } from "@/apis/resume/education/useResumeHighschool/type";
import { SelectorResumeCollege } from "@/apis/resume/education/useResumeCollege/type";
import { SelectorResumeUniversity } from "@/apis/resume/education/useResumeUniversity/type";
import { SelectorResumeExtra } from "@/apis/resume/education/useResumeExtra/type";

import { collegeDefaultValue, highSchoolDefaultValue, universityDefaultValue, extraDefaultValue } from "./constants";
import { EducationSubmitDef } from "./type";

export const isPostCollegeDef = (data: EducationSubmitDef): data is PostCollegeDef => "major" in data;

export const isPostUniversityDef = (data: EducationSubmitDef): data is PostUniversityDef => "is_uturn" in data;

export const isPostExtraDef = (data: EducationSubmitDef): data is PostExtraDef => "start_date" in data;

export const isPostHighSchoolDef = (data: EducationSubmitDef): data is PostHighSchoolDef =>
  "is_alternative_test" in data;

export const typeOfDefaultValues = (educationType: string) => {
  switch (educationType) {
    case "고등학교":
      return highSchoolDefaultValue;
    case "대학교(2,3년제)":
      return collegeDefaultValue;
    case "대학교(4년제)":
      return universityDefaultValue;
    case "기타":
      return extraDefaultValue;
    default:
      break;
  }

  return {};
};

export const educationOfDefaultValues = (education: SelectorResumeEducation) => {
  if (education.educationType === "고등학교") {
    const {
      name,
      graduateType,
      isAlternativeTest,
      startDate,
      endDate,
      firstAttendance,
      secondAttendance,
      thirdAttendence,
      major,
      grade,
      etc,
    } = education as SelectorResumeHighSchool;

    return {
      name,
      graduate_type: graduateType,
      is_alternative_test: isAlternativeTest,
      start_date: startDate,
      end_date: endDate,
      first_attendance: {
        disease_school_absent: firstAttendance.diseaseSchoolAbsent,
        disease_tardy: firstAttendance.diseaseTardy,
        disease_leave: firstAttendance.diseaseLeave,
        disease_subject_absent: firstAttendance.diseaseSubjectAbsent,
        unauthorized_school_absent: firstAttendance.unauthorizedSchoolAbsent,
        unauthorized_tardy: firstAttendance.unauthorizedTardy,
        unauthorized_leave: firstAttendance.unauthorizedLeave,
        unauthorized_subject_absent: firstAttendance.unauthorizedSubjectAbsent,
        extra_school_absent: firstAttendance.extraSchoolAbsent,
        extra_tardy: firstAttendance.extraTardy,
        extra_leave: firstAttendance.extraLeave,
        extra_subject_absent: firstAttendance.extraSubjectAbsent,
        total_class_days: firstAttendance.totalClassDays,
        is_perfect: firstAttendance.isPerfect,
        description: firstAttendance.description,
      },
      second_attendance: {
        disease_school_absent: secondAttendance.diseaseSchoolAbsent,
        disease_tardy: secondAttendance.diseaseTardy,
        disease_leave: secondAttendance.diseaseLeave,
        disease_subject_absent: secondAttendance.diseaseSubjectAbsent,
        unauthorized_school_absent: secondAttendance.unauthorizedSchoolAbsent,
        unauthorized_tardy: secondAttendance.unauthorizedTardy,
        unauthorized_leave: secondAttendance.unauthorizedLeave,
        unauthorized_subject_absent: secondAttendance.unauthorizedSubjectAbsent,
        extra_school_absent: secondAttendance.extraSchoolAbsent,
        extra_tardy: secondAttendance.extraTardy,
        extra_leave: secondAttendance.extraLeave,
        extra_subject_absent: secondAttendance.extraSubjectAbsent,
        total_class_days: secondAttendance.totalClassDays,
        is_perfect: secondAttendance.isPerfect,
        description: secondAttendance.description,
      },
      third_attendance: {
        disease_school_absent: thirdAttendence.diseaseSchoolAbsent,
        disease_tardy: thirdAttendence.diseaseTardy,
        disease_leave: thirdAttendence.diseaseLeave,
        disease_subject_absent: thirdAttendence.diseaseSubjectAbsent,
        unauthorized_school_absent: thirdAttendence.unauthorizedSchoolAbsent,
        unauthorized_tardy: thirdAttendence.unauthorizedTardy,
        unauthorized_leave: thirdAttendence.unauthorizedLeave,
        unauthorized_subject_absent: thirdAttendence.unauthorizedSubjectAbsent,
        extra_school_absent: thirdAttendence.extraSchoolAbsent,
        extra_tardy: thirdAttendence.extraTardy,
        extra_leave: thirdAttendence.extraLeave,
        extra_subject_absent: thirdAttendence.extraSubjectAbsent,
        total_class_days: thirdAttendence.totalClassDays,
        is_perfect: thirdAttendence.isPerfect,
        description: thirdAttendence.description,
      },
      major,
      grade,
      etc,
    };
  }

  if (education.educationType === "대학교(2,3년제)") {
    const { name, graduateType, startDate, endDate, major, grade, maxGrade, etc } = education as SelectorResumeCollege;

    return {
      name,
      graduate_type: graduateType,
      start_date: startDate,
      end_date: endDate,
      major,
      grade,
      max_grade: maxGrade,
      etc,
    };
  }

  if (education.educationType === "대학교(4년제)") {
    const { name, graduateType, startDate, endDate, major, grade, maxGrade, etc, isUturn } =
      education as SelectorResumeUniversity;

    return {
      name,
      graduate_type: graduateType,
      start_date: startDate,
      end_date: endDate,
      major,
      is_uturn: isUturn,
      grade,
      max_grade: maxGrade,
      etc,
    };
  }

  if (education.educationType === "기타") {
    const { name, graduateType, startDate, endDate, major, grade, maxGrade, etc } = education as SelectorResumeExtra;

    return {
      name,
      graduate_type: graduateType,
      start_date: startDate,
      end_date: endDate,
      major,
      grade,
      max_grade: maxGrade,
      etc,
    };
  }

  return {};
};
