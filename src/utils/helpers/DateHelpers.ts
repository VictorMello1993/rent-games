export function convertToArray(date: Date): number[] {
  return date
    .toString()
    .split('/')
    .map((part) => Number(part));
}

export function convertToDateObject(data: any) {
  const [day, month, year] = data;
  return new Date(year, month - 1, day);
}
