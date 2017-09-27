import { l } from './../i18n';

const TIME_STEP = 60;
const HOURS_IN_DAY = 24;
const DAYS_IN_WEEK = 7;
const DAYS_IN_MONTH = 30.42;
const ONE_SECOND = 1000;
const MONTHS_IN_YEAR = 12;
const ONE_MINUTE = ONE_SECOND * TIME_STEP;
const ONE_HOUR = ONE_MINUTE * TIME_STEP;
const ONE_DAY = ONE_HOUR * HOURS_IN_DAY;
const ONE_WEEK = ONE_DAY * DAYS_IN_WEEK;
const ONE_MONTH = ONE_DAY * DAYS_IN_MONTH;
const ONE_YEAR = ONE_MONTH * MONTHS_IN_YEAR;

export const getTimeAgoLabel = (timestamp) => {
  const diff = Date.now() - timestamp;

  if (diff > ONE_YEAR) {
    return (new Date(timestamp)).toLocaleDateString();
  }
  if (diff <= ONE_YEAR && diff > ONE_MONTH) {
    return `${Math.floor(diff / (DAYS_IN_MONTH * ONE_DAY))} ${l('months ago')}`;
  }
  if (diff <= ONE_MONTH && diff > ONE_WEEK) {
    return `${Math.floor(diff / (DAYS_IN_WEEK * ONE_DAY))} ${l('weeks ago')}`;
  }
  if (diff <= ONE_WEEK && diff > ONE_DAY) {
    return `${Math.floor(diff / (HOURS_IN_DAY * ONE_HOUR))} ${l('days ago')}`;
  }
  if (diff <= ONE_DAY && diff > ONE_HOUR) {
    return `${Math.floor(diff / (TIME_STEP * ONE_MINUTE))} ${l('hours ago')}`;
  }
  if (diff <= ONE_HOUR && diff > ONE_MINUTE) {
    return `${Math.floor(diff / (TIME_STEP * ONE_SECOND))} ${l('minutes ago')}`;
  }

  return l('just now');
};
