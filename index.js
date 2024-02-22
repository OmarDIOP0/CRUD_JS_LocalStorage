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