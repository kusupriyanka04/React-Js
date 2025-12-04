
function createData(){
   fetch("https://firstproject-5bf79-default-rtdb.asia-southeast1.firebasedatabase.app/Firstproject.json",
   {method:"POST", body:JSON.stringify({
      name: "reena",
      rollno: 1,
   })
})
.then((res)=> res.json())
.then((data)=>console.log("Data is add", data))
}

function getData(){
    fetch("https://firstproject-5bf79-default-rtdb.asia-southeast1.firebasedatabase.app/Firstproject.json",
        {method:"GET"})
        .then((res) => res.json())
        .then((data)=>console.log("GEt the data", data))
}

function updateData(){
    fetch("https://firstproject-5bf79-default-rtdb.asia-southeast1.firebasedatabase.app/-OfUUST4ThGyCh_0Rcys.json",
    {method:"PUT",
        body:JSON.stringify({
            name:"priyanka"
        }),
     })
     .then((res)=>res.json())
     .then((data)=> console.log("update using PUT", data));
}

function deleteData(){
    fetch("https://firstproject-5bf79-default-rtdb.asia-southeast1.firebasedatabase.app/--OfUZWwHO-k_yAuwhbGd.json",
        {method: "DELETE"})
        .then((res)=>res.json())
        .then((data)=> console.log("Deleted record", data))
}