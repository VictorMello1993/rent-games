import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';

export function convertToArray(date: Date): number[] {
  return date
    .toString()
    .split('/')
    .map((part) => Number(part));
}

export function convertToDateObject(date: any) {
  const [day, month, year] = date;
  return new Date(year, month - 1, day);
}

export function dateNow() {
  return new Date().toLocaleDateString();
}

export function convertToUtc(date: string): string {
  const dateObj = new Date(date);
  return dateObj.toUTCString();
}

export function compareInDays(startDate: string, endDate: string): number {
  const startDateUtc = this.convertToUtc(startDate);
  const endDateUtc = this.convertToUtc(endDate);

  return dayjs(endDateUtc).diff(startDateUtc, 'days');
}
