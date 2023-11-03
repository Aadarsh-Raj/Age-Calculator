let newYear = document.getElementById("years");
let newMonth = document.getElementById("months");
let newDay = document.getElementById("days");
function calculateAge() {
    const birthdate = new Date(document.getElementById("birthdate").value);
    const currentDate = new Date();
    if (birthdate > currentDate || birthdate == "Invalid Date") {
      alert("Please enter a valid Date of Birth");
  return;
    }
    let years = currentDate.getFullYear() - birthdate.getFullYear();
    let months = currentDate.getMonth() - birthdate.getMonth();
    let days = currentDate.getDate() - birthdate.getDate();
  
    if (months < 0 || (months === 0 && days < 0)) {
      years--;
    }
  
    if (months < 0) {
      months += 12;
    }
  
    if (days < 0) {
      const lastDayOfMonth = new Date(
        currentDate.getFullYear(),
        currentDate.getMonth(),
        0
      ).getDate();
      days += lastDayOfMonth;
      months--;
    }

  // const age = `${years} years, ${months} months, and ${days} days`;


  newYear.innerText = years;
  newMonth.innerText = months;
  newDay.innerText = days;
  if (years <= 16) {
    document.getElementById("teen").style.display = "block";
    document.getElementById("adult").style.display = "none";
    document.getElementById("old").style.display = "none";
  } else if (years > 16 && years <= 26) {
    document.getElementById("adult").style.display = "block";
    document.getElementById("teen").style.display = "none";
    document.getElementById("old").style.display = "none";
  } else if (years > 26) {
    document.getElementById("old").style.display = "block";
    document.getElementById("adult").style.display = "none";
    document.getElementById("teen").style.display = "none";
  }
}
const reset = document.getElementById("reset-button");

reset.addEventListener("click", ()=>{
 newYear.innerText = 0;
 newMonth.innerText = 0;
 newDay.innerText = 0;
});
