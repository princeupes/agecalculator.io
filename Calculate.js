function sendInfo()
{
  var rightNow=new Date();
//this Date from user
var itsDay=document.getElementById("day").value;    
var itsMonth=document.getElementById("month").value;
var itsYear=document.getElementById("year").value;
//this date rightnow
var theDay=rightNow.getDay();
var theMonth=rightNow.getMonth() + 1; //because month start from 0 in JS
var theYear=rightNow.getFullYear();
//this date for Calculate the age
var myYear=0;
var myMonth = 0;
var myDay = 0;

myYear=theYear - itsYear;

  if (itsMonth === theMonth)
  {
    if (itsDay == theDay) 
    {

    } 
    else if (itsDay > theDay) 
    {
      myYear--;
      myMonth=12;
      myDay=30 - (itsDay - theDay);
    }
    else if (itsDay < theDay)
    {
      myDay=theDay - itsDay; 
    }
  }
  else if (itsMonth > theMonth)
  {
    if (itsDay == theDay) 
    {
      myYear--;
      myMonth=12 - (itsMonth - theMonth);
    } 
    else if (itsDay > theDay) 
    {
      myYear--;
             myMonth = 12 - (itsMonth - theMonth);
            myDay = 30 - (itsDay - theDay);
    }
    else if (itsDay < theDay)
    {
      myYear--;
            myMonth = 12 - (itsMonth - theMonth);
            myDay = theDay - itsDay;
    }

  }
  else if (itsMonth < theMonth) 
  {
    if (itsDay == theDay)
        {
          myMonth = theMonth - itsMonth;
        }
        else if (itsDay > theDay)
        {
          myMonth = theMonth - itsMonth - 1;
           myDay = 30 - (itsDay - theDay);
        }
        else if (itsDay < theDay)
        {
            myMonth = theMonth - itsMonth;
            myDay = theDay - itsDay;
        }
  }

document.getElementById("showD").innerHTML=myDay.toString();
document.getElementById("showM").innerHTML=myMonth.toString();
document.getElementById("showY").innerHTML=myYear.toString();
}
