const newYears = '1 Jan 2021';

function countDown() {
    const newYearsDate = new Date(newYears);
    const currentDate = new Date();

    const totalMiliseconds = (newYearsDate - currentDate) / 1000
    const days = Math.floor(totalMiliseconds / 3600 / 24);
    const hours = Math.floor(totalMiliseconds / 3600 % 24);
    const minutes = Math.floor(totalMiliseconds / 60) % 60;
    const seconds = Math.floor(totalMiliseconds) % 60; 

    console.log(days, hours, minutes, seconds)
    document.getElementById("days").innerHTML = days;
    document.getElementById("hours").innerHTML = hours;
    document.getElementById("minutes").innerHTML = formatTime(minutes);
    document.getElementById("seconds").innerHTML = formatTime(seconds);
}

function formatTime(time) {
    return time < 10 ? `0${time}` : time;
}

//setInterval(countDown, 1000)

function callbackTest() {
    console.log('i am a normal function')
}

let president = 'biden';
let p = new Promise((resolve, reject) => {
    if (president === 'biden') {
        // 这里的resolve 已经代表了一个function，而不是一个
        // we don't get to pass it as a callback direacty
        // to do so, we'll need to wrap it in a call back function 
        // 
        // no, actually we do get to pass it inside a function
        // 在func里也一样，param只是名字的话就是value，带了（）就是return value
        let resolved = () => { 
            resolve("Biden Wins, and i am from a call back function")
        }  
    //这里是一个要在pass as callback 的时候要指定param，但是指定了就不是callback了
    //所以solution是把它抱在一个callback里面 
    // 总结一下就是 u can't pass a function as callback while giving it a param. 
        setTimeout(resolved, 2000)
    } else {
        reject("trump wins")
    }
})

p.then((response) => {
    console.log(response)
}).catch((message) => {
    console.log(message)
})

console.log("waiting for the result")


function innerCallback() {
    console.log("yummy")
}

function outerFunction(callback) {
    console.log(callback);
}

outerFunction(innerCallback)



 


