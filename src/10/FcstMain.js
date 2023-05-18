import { Link } from "react-router-dom";
import { useRef } from "react";
import xy from './getxy.json' ;

const FcstMain = () => {
    const ops = xy.map((item) => 
        <option value={item["행정구역코드"]} key={item["행정구역코드"]}>{item["1단계"]}</option>
    );
    console.log(xy);

    let pageNo;
    let basedate;

    let nx;
    let ny;

    return (
        <article>
            <header><h1>단기예보 선택</h1></header>
            <div className="grid">
                <div>
                    <input type="date" name="date1" id="date1" />
                </div>
                <div>
                    <select id="sel" required>
                        <option value="" selected>선택</option>
                        {ops}
                        
                    </select>
                </div>
            </div>
            <footer>
                <div className="grid">
                    <Link to='/ultra' role="button" >초단기예보</Link>
                    <Link to='/vilage' role="button" >단기예보</Link>
                </div>
            </footer>
        </article>

    );

}

export default FcstMain;