import moment from "moment";

export const dateGetDay = (date) => {
  let newDate = new Date(date);
  const day = ["Minggu", "Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu"];
  return day[newDate.getDay()];
};
export const dateGetDate = (date) => {
  let newDate = new Date(date);
  return newDate.getDate().toString();
};

export const dateGetMonth = (date) => {
  let newDate = new Date(date);
  const month = [
    "Januari",
    "Februari",
    "Maret",
    "April",
    "Mei",
    "Juni",
    "Juli",
    "Agustus",
    "September",
    "Oktober",
    "November",
    "Desember",
  ];
  return month[newDate.getMonth()];
};

export const dateGetYear = (date) => {
  let newDate = new Date(date);
  return newDate.getFullYear().toString();
};

export const getTargetDate = (date) => {
  const now = moment(); // Get the current date and time as a Moment.js object
  const NOW_IN_MS = now.valueOf(); // Get the current date and time in milliseconds since epoch (Unix timestamp)

  const target_date = moment(date, "YYYY-MM-DD HH:mm:ss"); // Create a Moment.js object for the target date passed as input in "YYYY-MM-DD HH:mm:ss" format

  const diffMs = target_date.diff(now); // Calculate the difference in milliseconds between current date and time and target date and time
  return NOW_IN_MS + diffMs; // Return the target date and time in milliseconds since epoch
};