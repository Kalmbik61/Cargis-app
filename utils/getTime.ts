import moment from "moment";

export const getTime = (date: string, format = "DD.MM.YYYY") => {
  return moment(date).format(format);
};
