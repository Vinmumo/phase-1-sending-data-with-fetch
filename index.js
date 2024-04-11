const body = document.querySelector('body')
function submitData(name, email){
    const newData = {
        name:"Steve",
        email:"steve@steve.com",
    }
return fetch("http://localhost:3000/users",{
    method:"POST",
    headers:{
        "Content-Type": "application/json",
        "Accept": "application/json",
    },
    body: JSON.stringify(newData)
})
.then(res => res.json())
.then (data =>{
    document.body.innerHTML= data["id"]
})
.catch(error =>{
    const err = document.createElement('div')
    err.innerHTML ="Unauthorized Access"
    body.append(err)
})
}

// Add your code here
