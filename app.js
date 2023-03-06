const months=document.getElementById("month");
const weeks=document.getElementById("week");
const days=document.getElementById("day");
const years=document.getElementById("year");

const date= new Date();
const m=new Date().getMonth();
// month
months.innerText=date.toLocaleString("en",{
    month:"long"

})
// week
weeks.innerText=date.toLocaleString("en",{
    weekday:"long"
})

// days
days.innerText=date.getDate();
 
// year
years.innerText=date.getFullYear();