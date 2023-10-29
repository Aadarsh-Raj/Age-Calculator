// document.getElementById("calculateAgeButton").addEventListener("click", calculateAge);
function calculateAge() {
    const birthdate = new Date(document.getElementById("birthdate").value);
    const currentDate = new Date();

    const years = currentDate.getFullYear() - birthdate.getFullYear();
    const months = currentDate.getMonth() - birthdate.getMonth();
    const days = currentDate.getDate() - birthdate.getDate();

    if (months < 0 || (months === 0 && days < 0)) {
        years--;
    }

    if (months < 0) {
        months += 12;
    }

    if (days < 0) {
        const lastDayOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 0).getDate();
        days += lastDayOfMonth;
        months--;
    }

    const age = `${years} years, ${months} months, and ${days} days`;
    document.getElementById("output").textContent = age;
   if(years <= 16){
        document.getElementById("teen").style.display ="block";
        document.getElementById("adult").style.display= "none";
        document.getElementById("old").style.display= "none";
   }else if(years > 16 && years <=26){
        document.getElementById("adult").style.display= "block";
        document.getElementById("teen").style.display= "none";
        document.getElementById("old").style.display= "none";
   } else if(years > 26){
    document.getElementById("old").style.display = "block";
    document.getElementById("adult").style.display= "none";
    document.getElementById("teen").style.display= "none";
   }
}