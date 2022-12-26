import { ResponseObjDef } from "./type";

export const companySelector = ({ data }: ResponseObjDef) =>
  data.map((factory) => ({
    id: factory.id,
    status: factory.status,
    uploader: factory.uploader,
    name: factory.name,
    employeeNumber: factory.employee_number,
    address: factory.address,
    maleNumber: factory.male_number,
    femaleNumber: factory.female_number,
    product: factory.product,
    bus: {
      exists: factory.bus.exists,
      desc: factory.bus.desc,
    },
    dormitory: {
      exists: factory.dormitory.exists,
      desc: factory.dormitory.desc,
    },
    createdTime: factory.created_time,
    updatedTime: factory.updated_time,
  }));
