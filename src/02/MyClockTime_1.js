import { useState } from "react";

const MyClockTime_1 = () => {
    let T = new Date().toLocaleTimeString();
    const [myTime , setmyTime] = useState(T);

    // setTimeout(console.log(++cnt), 1000);

    return (
        <footer>
            <h1>{setmyTime}</h1>
        </footer>
    );


}


export default MyClockTime_1;