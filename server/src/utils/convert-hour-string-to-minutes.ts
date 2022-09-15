export function convertHourStringToMinutes(hourEnd: string) {
  const [hours, minutes] = hourEnd.split(":").map(Number);

  const minutesAmount = hours * 60 + minutes;

  return minutesAmount;
}
