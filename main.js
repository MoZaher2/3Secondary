daysP = document.querySelector("div.Days > p.num");
hoursP = document.querySelector("div.Hours > p.num");
minutesP = document.querySelector("div.Minutes > p.num");
secondsP = document.querySelector("div.Seconds > p.num");

let dateTarget = new Date("13 July 2024 12:00:00");
setInterval(() => {
  let dateNow = new Date().getTime();
  let dateDiff = dateTarget - dateNow;
  let DaysT = Math.floor(dateDiff / (1000 * 60 * 60 * 24));
  let HoursT = Math.floor(
    (dateDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  let MinutesT = Math.floor((dateDiff % (1000 * 60 * 60)) / (1000 * 60));
  let SecondsT = Math.floor((dateDiff % (1000 * 60)) / 1000);
  daysP.innerHTML = DaysT;
  hoursP.innerHTML = HoursT;
  minutesP.innerHTML = MinutesT;
  secondsP.innerHTML = SecondsT;
}, 1000);
