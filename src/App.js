import {Button,Card} from '@material-ui/core'
import { useState , useEffect } from 'react'
import Start from './Game'
import './css/app.css'

const App = (props) => {

    //color X
    const [x,setX] = useState("primary")

    //color O
    const [y,setY] = useState("primary")

    //Squares bg
    const [bg,setBg] = useState('#C4C4C4')

    //num if is 9 no winner
    const [num,setNum] = useState(0)

    //set put
    const [me,setMe] = useState("x")

    //Start game
    const [game,setGame] = useState({
        set: () => {
            //
        }
    })

    //Event Start
    const lets = () => { 
        setGame(Start)
        setX('secondary')
        alert('Game is start')
        setBg('#fff')
    }

    //Gmae logic
    const fun = () => {

        //if X win
        Start.endX(() => {
            setNum(n => n*0)
            setX("secondary")
            setY("primary")
            setMe("x")
        })

        //if Y win
        Start.endO(() => {
            setNum(n => n*0)
            setX("secondary")
            setY("primary")
            setMe("x")
        })

        //If no winner
        if(num == 9){
            alert('No Winner')
            Start.reset()
            setNum(0)
            setX("secondary")
            setY("primary")
            setMe("x")
        }else{
            setNum(n => n+1)
        }
    }

    //Eject game logic
    useEffect(() => {
        fun()
    },[me])

    return(
        <main className="main d-flex justify-content-center align-items-center">
            <Card className="w-50" variant="outlined">
                <h1 className="text-center">tic tac toe</h1>
                <Button onClick={lets} variant="contained" className="mx-auto d-block mb-3"><h2 className="mb-0">Start</h2></Button>
                <div className="p-1 w-100 d-flex evenly">
                    <Button variant="contained" color={x} className="w-25"><h2 className="mb-0">X</h2></Button>
                    <Button variant="contained" color={y} className="w-25"><h2 className="mb-0">o</h2></Button>
                </div>
                <div className="w-100 p-5">
                    <div className="w-100 box bg-primary">
                        <Card id="A1" onClick={(e) => game.set(e,me,setMe,setX,setY)} className="byte" style={{height: '150px',background: bg}}></Card>
                        <Card id="A2" onClick={(e) => game.set(e,me,setMe,setX,setY)} className="byte" style={{height: '150px',background: bg}}></Card>
                        <Card id="A3" onClick={(e) => game.set(e,me,setMe,setX,setY)} className="byte" style={{height: '150px',background: bg}}></Card>
                        <Card id="B1" onClick={(e) => game.set(e,me,setMe,setX,setY)} className="byte" style={{height: '150px',background: bg}}></Card>
                        <Card id="B2" onClick={(e) => game.set(e,me,setMe,setX,setY)} className="byte" style={{height: '150px',background: bg}}></Card>
                        <Card id="B3" onClick={(e) => game.set(e,me,setMe,setX,setY)} className="byte" style={{height: '150px',background: bg}}></Card>
                        <Card id="C1" onClick={(e) => game.set(e,me,setMe,setX,setY)} className="byte" style={{height: '150px',background: bg}}></Card>
                        <Card id="C2" onClick={(e) => game.set(e,me,setMe,setX,setY)} className="byte" style={{height: '150px',background: bg}}></Card>
                        <Card id="C3" onClick={(e) => game.set(e,me,setMe,setX,setY)} className="byte" style={{height: '150px',background: bg}}></Card>
                    </div>
                </div>
            </Card>
        </main>
    )
}

export default App