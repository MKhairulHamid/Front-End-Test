// all field validation 

if(fullname && email && phone && gender && agreement){
    // submit function
} else{
    alert("All fields must be filled or ticked")
}


// Email address format validation

function ValidateEmail(mail) 
{
 if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail))
  {
    console.log("Email Valid")
    return (true)
  }
    console.log("Email Invalid")
    return (false)
}

console.log(ValidateEmail("hamid@gmail.com"))


// Phone Number Validation 

function ValidatePhone (number){
    if(typeof(number) === 'number'){
        console.log('Phone Number Valid')
        return (true)
    }else{
        console.log("Phone Number Invalid")
        return (false)
    }
}
console.log(ValidatePhone(12))