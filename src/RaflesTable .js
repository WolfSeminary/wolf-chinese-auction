import React, { useState } from "react";
import Winner from "./Winner";
export default () => {
    const [curentRaffle, setcurentRaffle] = useState({
        userName: '',
        prizeName: '----'
    });

    const onMakeRaffleClick = () => {
        const listUsers = [];
        listUsers = localStorage.getItem("listUsers");
        var rand = Math.floor(Math.random() * listUsers.length()) + 1;
        setcurentRaffle({
            prizeName: localStorage.getItem("prizeName"),
            userName: listUsers[rand]
        })
    }
    return (
        <>
            <Winner winnerDetails={curentRaffle} />
            <button onClick={onMakeRaffleClick}>eeeeeeeeeeeeeeeeeeeeee</button>
        </>
    )
}
