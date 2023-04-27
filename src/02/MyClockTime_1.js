import { useState } from "react";

const MyClockTime_1 = () => {
    let T = new Date().toLocaleTimeString();
    const [myTime , setmyTime] = useState(T);

    // console.log(setInterval(() => setmyTime(new Date().toLocaleTimeString()), 1000)); // 1초에 한 번씩 재렌더링
    setInterval(() => setmyTime(new Date().toLocaleTimeString()),1000);


    return (
        <footer>
            <h1>{myTime}</h1>
        </footer>
    );


}


export default MyClockTime_1;