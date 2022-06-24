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
  return dayjs().toDate();
}

export function convertToUtc(date: Date) {
  return dayjs(date).utc().local().format();
}

export function compareInDays(startDate: Date, endDate: Date) {
  const startDateArray = this.convertToArray(startDate);
  const endDateArray = this.convertToArray(endDate);

  const startDateAux = this.convertToDateObject(startDateArray);
  const endDateAux = this.convertToDateObject(endDateArray);

  const startDateUtc = this.convertToUtc(startDateAux);
  const endDateUtc = this.convertToUtc(endDateAux);

  return dayjs(endDateUtc).diff(startDateUtc, 'days');
}
