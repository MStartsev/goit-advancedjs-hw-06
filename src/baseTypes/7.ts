// /*
//   Створіть функцію (isWeekend), яка приймає день тижня (з вашого enum)
//   і повертає boolean значення, що вказує, чи це день робочий чи вихідний.
// */

enum Weekday {
  Monday,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturday,
  Sunday,
}

function isWeekend(day: Weekday): boolean {
  return day === Weekday.Saturday || day === Weekday.Sunday;
}

// Example of using the function
const today: Weekday = Weekday.Saturday;
const isTodayWeekend: boolean = isWeekend(today);

console.log(`Is today a weekend day? ${isTodayWeekend ? "Yes" : "No"}!`);

export {};
