// const Func = ()=>{
//     let x = "YOYOYO"
//     console.log(x)
// }

// Func()
// console.log("EHHh")

// console.log("EHHh")
// console.log("222")


const myPromise = new Promise((res,rej)=>{
    setTimeout(()=>{
        console.log("Yooo bitchhh")
        res("resolved!!!")
    },2000)
})

const Func = async()=>{
    const response = await myPromise
    console.log("hiii"+" "+response)
}

Func()
.then(()=>{console.log("I'll not run first. Since there IS an actual promise down the line somewhere, the Func has also returned a promise. Therefore the .then function works")})


const Func2 = async()=>{
    setTimeout(()=>{
        console.log('Useless, as there is no actual promise somewhere down the line')
    },0)
}

Func2().then(()=>{
    console.log('Even though I used .then, this will be executed first because there is no actual promise down the line')
})