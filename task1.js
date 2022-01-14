import React  from 'react';
const TaskOne =()=>{
 
 const saveData = ()=>{
         
  let date1,date2,data5;
     date1 = new Date(document.getElementById("date").value);
     date2 =new Date(document.getElementById("date1").value);
     data5 = String(document.getElementById("price").value);

   let diff = date1.getTime() - date2.getTime();
   let msInday = 1000 * 3600 * 24;
  
   let done = diff/msInday;
   //------------------------------------------------------

   if(data5>5000 & done<365){
    let data = data5/100*2
    let data1 = data/30;
    let data2 = data1 *done;
    let num = data2.toFixed(3);
    let sum =parseInt(data5) +parseInt(num);
    document.getElementById("result").innerHTML="The Interest Is : " + num;
    document.getElementById("veri").innerHTML= "Grand Total = Rs."+sum;
    document.getElementById("days").innerHTML= "Tatal Days : "+done;
   }

   
   else if(data5<=5000 & done<365){
    let data = data5/100*3
    let data1 = data/30;
    let data2 = data1 *done;
    let sum =parseInt(data5) +parseInt(data2);
    document.getElementById("result").innerHTML="The Interest Is : " + data2;
    document.getElementById("veri").innerHTML= "Grand Total = Rs."+sum;
    document.getElementById("days").innerHTML= "Tatal Days : " +done;

   }

   else if (done==365){
    let data = data5/100*3
   let data1 = data/30;
   let data2 = data1 *done;

   let sum =parseInt(data5) +parseInt(data2);
   document.getElementById("result").innerHTML="The Interest Is : " + data2;
   document.getElementById("veri").innerHTML= "Grand Total = Rs."+sum;
   document.getElementById("days").innerHTML= "Total Days :" +done;

  }

  else if(done>365){
    let c = parseInt(done) - 365;
    let data = data5/100*3;
    let data1 = data/30;
    let data2 = data1*365;
    let sum2 =parseInt(data5) + parseInt(data2);
  
    //-----------------------------------------

    let data3 = sum2/100*3;
    let data4 = data3/30;
    let data6 = data4*c;
    let sum =parseInt(sum2)+parseInt(data6);
    let sum1 =parseInt(data2)+parseInt(data6);

   document.getElementById("result").innerHTML="The Interest Is : " + sum1;
   document.getElementById("veri").innerHTML= "Grand Total = Rs."+sum;
   document.getElementById("days").innerHTML= "total days : " +done;
  }
}
    return(
       
        <div className="row mt-5">
         <div className="col-lg-4">
           <small id="header">net<small id="header1">zary</small></small>
           <p id="pro">Projects</p>
         </div>
         <div className="col-lg-4 mt-4">
          <h1 className="mb-4 text-white">Interest Calculation</h1>

             <label>Release Date</label>
             <input type="date" id="date" className="form-control mb-4"/>

             <label>Loan Date</label>
             <input type="date" id="date1" className="form-control mb-4"/>

             
             <label>Principal</label>
             <input type="Text" id="price" placeholder="Enter Principle" className="form-control mb-4"/>

             <button onClick={saveData} className="btn btn-outline-danger">Check Here</button>
   
             <h6 id="result" className="mt-3"></h6>
             <h4 id="days"></h4>
             <h4 id="veri"></h4> 
            
         </div>
         <div className="col-lg-3"></div>          
   </div>                
    )
}
export default TaskOne;