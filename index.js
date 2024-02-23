function validateData(){
    var name=document.getElementById('name').value;
    var age=document.getElementById('age').value;
    var address=document.getElementById('address').value;
    var email=document.getElementById('email').value;
    // const save=document.getElementById('save');
    // save.addEventListener('click',addData)

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
        html+='<td><button onclick="deleteData('+index+')"class="btn btn-danger">Delete</button>  <button onclick="UpdateData('+index+')" class="btn btn-warning m-2">Edit</button> </td>';
        html+="</tr>";
    });
    document.querySelector('#crudTable tbody').innerHTML=html;
}
//Charge data when document is loading

document.onload=showData();

//Method to add Data
function addData(){
  if(validateData()==true){
    var name=document.getElementById('name').value;
    var age=document.getElementById('age').value;
    var address=document.getElementById('address').value;
    var email=document.getElementById('email').value;

    var peopleList;
    // If list is empty we initialise peopleList to empty table
    if(localStorage.getItem('peopleList')==null){
        peopleList=[]
    }
    //Else we converte in json
    else{
        peopleList=JSON.parse(localStorage.getItem('peopleList'))
    }
    peopleList.push({
        name:name,
        age:age,
        address:address,
        email:email
    });
    localStorage.setItem('peopleList',JSON.stringify(peopleList));
    showData();
    document.getElementById("name").value="";
    document.getElementById("age").value="";
    document.getElementById("address").value="";
    document.getElementById("email").value="";
  }

}

// Fonction to delete data
function deleteData(index){
    const confirmation=confirm('Voulez vous supprimer?')
    if(confirmation){
        var peopleList;
        // If list is empty we initialise peopleList to empty table
        if(localStorage.getItem('peopleList')==null){
            peopleList=[]
        }
        //Else we converte in json
        else{
            peopleList=JSON.parse(localStorage.getItem('peopleList'))
        }
    
        peopleList.splice(index,1);
        localStorage.setItem('peopleList',JSON.stringify(peopleList));
        showData();
    }
}