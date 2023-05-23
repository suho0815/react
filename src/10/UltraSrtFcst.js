import FcstTable from "./FcstTable";
import { useParams } from "react-router-dom";
import { useRef, useState } from "react";

const UltraSrtFcst = () => {
    //초단기예보
    const { dt } = useParams();
    const { area } = useParams();
    const { x } = useParams();
    const { y } = useParams();

    const sel = useRef();
    const [sdata, setSdata] = useState();

    //20230523
    const date = dt.substring(0, 4) + "/" + dt.substring(4, 6) + "/" + dt.substring(6);

    const yeboitem = ['1시간강수량(RN1)', '하늘상태(SKY)', '동서바람성분(UUU)', '남북바람성분(VVV)', '습도(REH)', '강수형태(PTY)', '낙뢰(LGT)', '풍향(VEC)', '풍속(WSD)'];
    let yeboitemTag = [];
    yeboitemTag = yeboitem.map((item) =>
        <option value={item.slice(-4, -1)} key={item}>{item}</option>
    );

    //pageNo=1&numOfRows=1000&dataType=JSON&base_date=20230521&base_time=0630&nx=55&ny=127

    const getData = (item) => {
        const pageNo = 1;
        const numOfRows = 600;
        const base_date = dt;
        const base_time = "0630";
        const nx = x;
        const ny = y;
        let url = `https://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/getUltraSrtFcst?serviceKey=1CTxFE4ICqEXauo0PqpN1xZZ5LF7hHOeQ2pTjgNg%2F9Tyho8Cz2KItgTbJB%2Fee%2F4cxVfNcuajFNqiCUQGc2xx1Q%3D%3D&pageNo=${pageNo}&numOfRows=${numOfRows}&dataType=JSON&base_date=${base_date}&base_time=${base_time}&nx=${nx}&ny=${ny}`;

        fetch(url)
            .then((response) => response.json())
            .then((data) => {
                let temp = data.response.body.items.item;
                // console.log(temp);

                const temp1 = temp.filter((item) => item["category"] === sel.current.value);
                console.log(temp1);
                setSdata(temp1);

            });

    }

    //초단기예보	T1H	기온	℃	10
    // RN1	1시간 강수량	범주 (1 mm)	8
    // SKY	하늘상태	코드값	4
    // UUU	동서바람성분	m/s	12
    // VVV	남북바람성분	m/s	12
    // REH	습도	%	8
    // PTY	강수형태	코드값	4
    // LGT	낙뢰	kA(킬로암페어)	4
    // VEC	풍향	deg	10
    // WSD	풍속	m/s	10

    return (
        <article>
            <header>
                <div className="grid">
                    <div>
                        <h2>{area}초단기예보{date}</h2>
                    </div>

                    <div>
                        <select ref={sel} id="sel" onChange={(item) => getData(item)} required>
                            <option value=" " selected>선택</option>
                            {yeboitemTag}
                        </select>
                    </div>
                </div>
            </header>
            {/* props로 넘겨서 테이블 띄우기 */}
            <FcstTable sd = {sdata}/>
        </article>
    );

}

export default UltraSrtFcst;