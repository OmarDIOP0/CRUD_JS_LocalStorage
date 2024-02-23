function validateData(){
    const name=document.getElementById('name').value;
    const age=document.getElementById('age').value;
    const address=document.getElementById('address').value;
    const email=document.getElementById('email').value;

    if(!name){
        alert('Name is required');
        return false;
    }

    if(!age){
        alert('Age is required');
        return false;
    }
    else if(age<1){
        alert('Age must be granted than 0');
        return false;
    }

    if(!address){
        alert("Address is required");
        return false;
    }
    if(!email){
        alert("Email is required");
        return false;
    }
    else if(!email.includes('@')){
        alert("Email invalid");
        return false;
    }
    return true; 
}
// Methode to show Data

function showData(){
    var peopleList;
    // If list is empty we initialise peopleList to empty table
    if(localStorage.getItem('peopleList')==null){
        peopleList=[]
    }
    //Else we converte in json
    else{
        peopleList=JSON.parse(localStorage.getItem('peopleList'))
    }
    
    var html="";
    peopleList.forEach((element,index)=>{
        html+="<tr>";
        html+="<td>"+ element.name +"</td>";
        html+="<td>"+ element.age +"</td>";
        html+="<td>"+ element.address +"</td>";
        html+="<td>"+ element.email +"</td>";
        html+='<button onclick="deleteData('+ index +')"class="btn btn-danger">Delete</button><button onclick="UpdateData('+index+')" class="btn btn-warning m-2">Edit</button>';
        html+="</tr>";
    });
    document.querySelector('#crudTable tbody').innerHTML=html;
}
//Charge data when document is loading

document.onload=showData();

//Method to add Data
function addData(){
  validateData();
}