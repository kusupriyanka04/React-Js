// SYNTAX:

// fetch(URL,option)
// .then(response => response.json())
// .then(data => console.log(data))
// .catch(err => console.error(err))


// const obj = {
//     name: "Masai",
//     email: "masai"
//     phone: 984956
// }

// function getSampleData (){
//     fetch("https://jsonplaceholder.typicode.com/posts/1/comments")
//     .then(response => {
//         console.log(" Raw response data", response)
//         return response.json()
//     })
//     .then(data => {
//         console.log("Final parsed data", data);
//     })
//     .catch(error => {
//         console.error("Api failed", error)
//     })
// }
//getSampleData()

async function getSampleData (){
    try{
        const response = await fetch("https://jsonplaceholder.typicode.com/posts/1/comments")

        console.log(" Raw response data", response)

        const data = await response.json();

        console.log("Final parsed data", data);

        return data

    }
    catch(error){
        console.log(error)
    }


};
getSampleData()