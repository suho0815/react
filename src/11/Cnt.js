import { useState, useEffect, useRef } from "react";
import CntDisp from "./CntDisp";
import CntInput from "./CntInput";

const Cnt = () => {

    
    const [num, setnum] = useState(1);


    // useEffect(() => {
    //     //txtref.current.focus();
    //     txtref.current.value = 1;
    // }, [])

    return (
        <main className="container">
            <CntInput num = {num} setnum={setnum}/>
            <CntDisp num = {num}/>
        </main>

    );
}

export default Cnt;