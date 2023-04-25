import MyClockTime_1 from "./MyClockTime_1";
import MyClockImage from "./MyClockImage";
import '../01/Hello' ;

const MyClock =() => {
    
    return (
        <main className="container">
            <article data-theme="dark">
                <MyClockImage />
                <MyClockTime_1 />
            </article>
        </main>
    );

}

export default MyClock;