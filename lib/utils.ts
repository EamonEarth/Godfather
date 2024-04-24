import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
import { toast } from "sonner";


export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function debounce<T extends (...args: any[]) => void>(func: T, wait: number): (...args: Parameters<T>) => void {
  let timeout: ReturnType<typeof setTimeout> | null = null;
  return function(...args: Parameters<T>): void {
    const later = () => {
      timeout = null;
      func(...args);
    };
    if (timeout !== null) {
      clearTimeout(timeout);
    }
    timeout = setTimeout(later, wait);
  };
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



interface EmailData {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

export function sendEmail(data: EmailData) {
  const apiEndpoint = '/api/email';

  fetch(apiEndpoint, {
    method: 'POST',
    body: JSON.stringify(data),
  })
    .then((res) => res.json())
    .then((response) => {
      toast.success(response.message);
    })
    .catch((err) => {
      toast.error(err);
    });
}

