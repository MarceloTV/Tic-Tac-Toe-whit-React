function Start(){}

const sel = (id) => document.querySelector(`#${id}`)

//Set X/O
Start.prototype.set = function(e,me,setMe,setX,setY){
    if(e.currentTarget.innerHTML.includes('<h1>')){
        console.log(me)
        return false
    }
    console.log(e.currentTarget)
    if(me === "x"){
        setX("primary")
        setY("secondary")
        setMe("o")
    }else{
        setMe("x")
        setX("secondary")
        setY("primary")
    }
    
    e.currentTarget.innerHTML = `<h1>${me}</h1>`
    e.currentTarget.classList.add(me)
}

//reset values
Start.prototype.reset = function(){
    console.log(document.getElementsByClassName('byte'))
    Array.prototype.forEach.call(document.getElementsByClassName('byte'),v => {
        v.innerHTML = ''
        v.classList.remove("x","y")
    })
}

//if X is win
Start.prototype.endX = function(cb){
    if(sel('A1').innerHTML.includes("x") &&
       sel('A2').innerHTML.includes("x") &&
       sel('A3').innerHTML.includes("x") 
    ){
        alert('X is win')
        this.reset()
        cb()
    }

    if(sel('B1').innerHTML.includes("x") &&
       sel('B2').innerHTML.includes("x") &&
       sel('B3').innerHTML.includes("x") 
    ){
        alert('X is win')
        this.reset()
        cb()
    }

    if(sel('C1').innerHTML.includes("x") &&
       sel('C2').innerHTML.includes("x") &&
       sel('C3').innerHTML.includes("x") 
    ){
        alert('X is win')
        this.reset()
        cb()
    }

    
    if(sel('A1').innerHTML.includes("x") &&
       sel('B1').innerHTML.includes("x") &&
       sel('C1').innerHTML.includes("x") 
    ){
        alert('X is win')
        this.reset()
        cb()
    }

    if(sel('A2').innerHTML.includes("x") &&
       sel('B2').innerHTML.includes("x") &&
       sel('C2').innerHTML.includes("x") 
    ){
        alert('X is win')
        this.reset()
        cb()
    }

    if(sel('A3').innerHTML.includes("x") &&
       sel('B3').innerHTML.includes("x") &&
       sel('C3').innerHTML.includes("x") 
    ){
        alert('X is win')
        this.reset()
        cb()
    }

    if(sel('A1').innerHTML.includes("x") &&
       sel('B2').innerHTML.includes("x") &&
       sel('C3').innerHTML.includes("x") 
    ){
        alert('X is win')
        this.reset()
        cb()
    }

    if(sel('A3').innerHTML.includes("x") &&
       sel('B2').innerHTML.includes("x") &&
       sel('C1').innerHTML.includes("x") 
    ){
        alert('X is win')
        this.reset()
        cb()
    }
}

//if O is win
Start.prototype.endO = function(cb){
    if(sel('A1').innerHTML.includes("o") &&
       sel('A2').innerHTML.includes("o") &&
       sel('A3').innerHTML.includes("o") 
    ){
        alert('o is win')
        this.reset()
        cb()
    }

    if(sel('B1').innerHTML.includes("o") &&
       sel('B2').innerHTML.includes("o") &&
       sel('B3').innerHTML.includes("o") 
    ){
        alert('o is win')
        this.reset()
        cb()
    }

    if(sel('C1').innerHTML.includes("o") &&
       sel('C2').innerHTML.includes("o") &&
       sel('C3').innerHTML.includes("o") 
    ){
        alert('o is win')
        this.reset()
        cb()
    }

    
    if(sel('A1').innerHTML.includes("o") &&
       sel('B1').innerHTML.includes("o") &&
       sel('C1').innerHTML.includes("o") 
    ){
        alert('o is win')
        this.reset()
        cb()
    }

    if(sel('A2').innerHTML.includes("o") &&
       sel('B2').innerHTML.includes("o") &&
       sel('C2').innerHTML.includes("o") 
    ){
        alert('o is win')
        this.reset()
        cb()
    }

    if(sel('A3').innerHTML.includes("o") &&
       sel('B3').innerHTML.includes("o") &&
       sel('C3').innerHTML.includes("o") 
    ){
        alert('o is win')
        this.reset()
        cb()
    }

    if(sel('A1').innerHTML.includes("o") &&
       sel('B2').innerHTML.includes("o") &&
       sel('C3').innerHTML.includes("o") 
    ){
        alert('o is win')
        this.reset()
        cb()
    }

    if(sel('A3').innerHTML.includes("o") &&
       sel('B2').innerHTML.includes("o") &&
       sel('C1').innerHTML.includes("o") 
    ){
        alert('o is win')
        this.reset()
        cb()
    }
}

export default new Start()