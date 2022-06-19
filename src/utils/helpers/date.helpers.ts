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
