import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';

dayjs.extend(utc);

export function convertToArray(date: string): number[] {
  return date.split('/').map((part) => Number(part));
}

export function convertToDateObject(date: any) {
  const [day, month, year] = date;
  return new Date(year, month - 1, day);
}

export function dateNow(): Date {
  return dayjs().toDate();
}

export function convertToUtc(date: Date): string {
  const dateObj = new Date(date);
  return dayjs(dateObj).utc().local().format();
}

export function compareInDays(startDate: string, endDate: string): number {
  const startDateObj = convertToDateObject(convertToArray(startDate));
  const endDateObj = convertToDateObject(convertToArray(endDate));

  const startDateUtc = convertToUtc(startDateObj);
  const endDateUtc = convertToUtc(endDateObj);

  return dayjs(endDateUtc).diff(startDateUtc, 'days');
}
