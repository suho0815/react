import { useParams } from "react-router-dom";
import { useState } from "react";

const FcstTable = (sd) => {

    const { uorv } = useParams();
    const  [data, setData] = useState();


    console.log(sd);
    console.log(uorv);

    if(uorv === 0){
        getUltra();
    }else if (uorv === 1){
        getVilage();
    }


    // const getData = (uorv) => {
    //     if(uorv === 0){
    //         getUltra();
    //     }else if (uorv === 1){
    //         getVilage();
    //     }
    // }

    
    const getUltra = () => {
        // const yeboitem = ['1시간강수량(RN1)', '하늘상태(SKY)', '동서바람성분(UUU)', '남북바람성분(VVV)', '습도(REH)', '강수형태(PTY)', '낙뢰(LGT)', '풍향(VEC)', '풍속(WSD)'];

        const temp = sd.map((item) => {
            <tr>
                <td scope="col">{item["category"]}</td>
                <td scope="col">{item["fcstDate"]}</td>
                <td scope="col">{item["fcstTime"]}</td>
                <td scope="col">{item["fcstDate"]}</td>
            </tr>
        });

        console.log(temp);
        setData(temp);
    }
    
    const getVilage = () => {

    }

    

    return (

        <table>
            <thead>
                <tr>
                    <th scope="col">항목명</th>
                    <th scope="col">예보일자</th>
                    <th scope="col">예보시각</th>
                    <th scope="col">예보 값</th>
                </tr>
            </thead>
            <tbody>
                {data}

            </tbody>
        </table>

    );

}

export default FcstTable;