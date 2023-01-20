// console.log("Hello World!");

const DAYS_IN_MONTH = [28, 31, 30]
const TOTAL_TIME = 89;

const MONTHS = [2, 3, 4]
// const FEBRUARY = 0;

const DAYS_NAMES = ["pondělí", "úterý", "středa", "čtvrtek", "pátek", "sobota", "neděle"];
// const DAYS_NAMES = ["Středa", "Čtvrtek", "Pátek", "Sobota", "Neděle", "Pondělí", "Úterý"];

const AllDays = [
    // {id: 0, day: 1, dateDay: 1, dateMonth: FEBRUARY, name: "Středa"}
];

// let id = 0;
let day = 1;
let dateDay = 1;
let dateMonth = 0;
let dayName = 2;

// console.log(DAYS_NAMES[dayName % 7]);
// return;

for (let i = 0; i < TOTAL_TIME; i++) {
    AllDays.push({
        "id" : i,
        "day": {
            "num": day++,
            "date": dateDay,
            "month": MONTHS[dateMonth],
            "name": DAYS_NAMES[dayName++ % 7],
        },
        "alcohol": 0,
        "meditation": 0,
        "sport": 0,
        "habit1": 0,
        "habit2": 0,
        "habit3": 0,
    });

    if(dateDay < DAYS_IN_MONTH[dateMonth]) ++dateDay;
    else {
        dateDay = 1;
        dateMonth++;
    }
}

// console.log(WEEKDAYS);
console.log(AllDays[1])
