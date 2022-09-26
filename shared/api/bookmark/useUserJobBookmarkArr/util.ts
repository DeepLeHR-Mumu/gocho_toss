import { jobBookmarkObjDef } from "../type/bookmark";

export const selector = (data: jobBookmarkObjDef[]) => {
  return data.map((job) => {
    return {
      id: job.id,
      companyName: job.company.name,
      companyLogo: job.company.logo_url,
      startTime: job.start_time,
      endTime: job.end_time,
      title: job.title,
      high: job.high,
      college: job.college,
      placeArr: job.place_arr,
      rotationArr: job.rotation_arr,
      taskArr: job.task_arr,
      bookmark: job.bookmark,
      view: job.view,
      cut: job.cut,
    };
  });
};
