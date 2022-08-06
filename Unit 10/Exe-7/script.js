 // get selected row
 // display selected row data in text input
            
 var table = document.getElementById("table"),rIndex;
            
 for(var i = 1; i < table.rows.length; i++){
     table.rows[i].onclick = function(){
         rIndex = this.rowIndex;
         console.log(rIndex);
 
         document.getElementById("fname").value = this.cells[1].innerHTML;
         document.getElementById("lname").value = this.cells[2].innerHTML;
         document.getElementById("country").value = this.cells[3].innerHTML;
         document.getElementById("mNumber").value = this.cells[4].innerHTML;
     };
 }
             
             
 // edit the row
 function editRow(){
     table.rows[rIndex].cells[1].innerHTML = document.getElementById("fname").value;
     table.rows[rIndex].cells[2].innerHTML = document.getElementById("lname").value;
     table.rows[rIndex].cells[3].innerHTML = document.getElementById("country").value;
     table.rows[rIndex].cells[4].innerHTML = document.getElementById("mNumber").value;
 }
 
 // Data Update Table Here
 function editTableDisplay(){
     document.querySelector(".editTable").setAttribute('style', 'display: block;');
 }