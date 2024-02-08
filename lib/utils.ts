import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}



export const dayOfTheWeek = (date: Date) => {
  const dayAsNumber = date.getUTCDay();
  let dayAsDay;
  switch (dayAsNumber) {
    case 1:
      dayAsDay = "Monday";
      return dayAsDay;
    case 2:
      dayAsDay = "Tuesday";
      return dayAsDay;
    case 3:
      dayAsDay = "Wednesday";
      return dayAsDay;
    case 4:
      dayAsDay = "Thursday";
      return dayAsDay;
    case 5:
      dayAsDay = "Friday";
      return dayAsDay;
    case 6:
      dayAsDay = "Saturday";
      return dayAsDay;
    case 0:
      dayAsDay = "Sunday";
      return dayAsDay;
    default:
      dayAsDay = "Friday";
      return dayAsDay;
  }
};