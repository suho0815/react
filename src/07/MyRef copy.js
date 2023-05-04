import { useState, useRef } from "react";

const MyRef = () => {
    let cnt1 = 1;
    const [cnt2, setcnt2] = useState(1);
    let cnt3 = useRef(0);

    const showCnt = () => {
        console.log('cnt1 = ', cnt1);
    };

    const showCnt1 = () => {
        cnt1 = cnt1 + 1;
        showCnt();
    };
    
    const showCnt2 = () => {
        setcnt2(cnt2 + 1);
        showCnt();
    };

    const showCnt3 = () => {
        cnt3.current = cnt3.current + 1;
        showCnt();
    };

    return(
        <main className="container">
            <article>
                <header>
                    <div className="grid">
                        <div><h1>컴포넌트 변수 : {cnt1}</h1></div>
                        <div><h1>State 변수 : {cnt2}</h1></div>
                        <div><h1>Ref 변수 : {cnt3.current}</h1></div>
                    </div>
                </header>
                <div className="grid">
                        <button onClick={() => showCnt1()}>컴포넌트 변수</button>
                        <button onClick={() => showCnt2()}>State 변수</button>
                        <button onClick={() => showCnt3()}>Ref 변수</button>
                    </div>
            </article>
        </main>
    );

}

export default MyRef;