//1.Exam portal simulator:
//When a student submits an exam:
//Immediately show: “Exam submitted successfully”
//After 2 seconds → show: “Evaluating answers…”
//After 4 seconds → show: “Result: Pass”


//creating a promise that resolves after given milliseconds
function wait(ms)
{
    return new Promise((resolve)=>{
        setTimeout(resolve,ms) //resolves the promise after ms time
    })
}


//showing exam submission message immediately
console.log("Exam submitted successfully") 



//using promise with .then() to create delays
wait(2000)
.then(()=>{

    //this runs after 2 seconds
    console.log("Evaluating answers...")

    return wait(2000) //waiting another 2 seconds
})
.then(()=>{

    //this runs after total 4 seconds
    console.log("Result: Pass")

})


//second 
//2.OTP Countdown Simulator (Console App)
//Simulate OTP sending flow in Node.js
//Show “OTP Sent Successfully”
//Start 10-second countdown
//Allow resend only after countdown ends


//creating a promise that resolves after given milliseconds
function delay(ms)
{
    return new Promise((resolve)=>{
        setTimeout(resolve,ms) //resolves promise after given time
    })
}


//showing OTP sent message
console.log("OTP Sent Successfully")


//starting countdown from 10 seconds
let count = 10



//function to print countdown using promise chain
function startCountdown()
{
    if(count == 0)
    {
        console.log("You can resend OTP now") //allow resend after countdown
        return
    }

    console.log("Resend OTP in:",count,"seconds")

    delay(1000)
    .then(()=>{
        count--   //decreasing count every second
        startCountdown()  //calling function again for next second
    })
}


//starting the countdown
startCountdown()