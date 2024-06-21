import dayjs from "dayjs";

/**
 * Convert dayJs date format to `DD/MM/YYYY` format
 *
 * @param {*} date `Dayjs format`
 * @returns
 */
export const formatDOB = (date) => {
  let year = date["$y"];
  let month = date["$M"] + 1;
  let day = date["$D"];

  if (month < 10) month = "0" + month;
  if (day < 10) day = "0" + day;

  return year + "-" + month + "-" + day;
};
export const formatDateOfBirth = (dob) => {
  const dateString = dob;
  const formattedDate = dayjs(dateString).format("YYYY-MM-DD");
  return formattedDate;
};
/**
 * Convert `DD/MM/YYYY` format to dayJs format
 *
 * @param {*} date `DD/MM/YYYY`
 * @returns
 */
export const formatToDayJsFormat = (date) => {
  const splittedDate = date?.split("/");

  if (splittedDate) {
    const year = splittedDate[2];
    const month = splittedDate[1];
    const day = splittedDate[0];
    return year + "-" + month + "-" + day;
  }
  return;
};

export const formatDate = (timestamp) => {
  const then = new Date(timestamp);
  const now = new Date();

  const daysDiff = Math.floor((now - then) / (1000 * 60 * 60 * 24));

  if (daysDiff === 0) {
    const hour = then.getHours() % 12 || 12; // Handle 0 hour as 12 AM
    const meridian = then.getHours() >= 12 ? "PM" : "AM";
    return `today, ${hour}:${then
      .getMinutes()
      .toString()
      .padStart(2, "0")} ${meridian}`;
  } else if (daysDiff === 1) {
    const hour = then.getHours() % 12 || 12; // Handle 0 hour as 12 AM
    const meridian = then.getHours() >= 12 ? "PM" : "AM";
    return `yesterday, ${hour}:${then
      .getMinutes()
      .toString()
      .padStart(2, "0")} ${meridian}`;
  } else if (daysDiff >= 2 && daysDiff <= 6) {
    return `${then.toLocaleDateString([], {
      weekday: "short",
      day: "numeric",
      month: "short",
    })}`;
  } else {
    return then.toLocaleDateString([], {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  }
};
