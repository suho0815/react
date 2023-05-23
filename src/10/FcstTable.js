import { useParams } from "react-router-dom";
//import code from "./getcode.json";
//import { useState } from "react";

const FcstTable = ({ sd, yebo }) => {

    const { uorv } = useParams();
    let trTag = [];

    // const  [data, setData] = useState(sd);

    // console.log(sd);
    // console.log(uorv);
    // console.log(typeof uorv);
    console.log(yebo);

    function getDatef(fcstDate){ //예보일자 문자열 보기 좋게 바꾸기 //getDatef(string)
        return fcstDate.substring(0, 4) + "-" + fcstDate.substring(4, 6) + "-" + fcstDate.substring(6);
    }

    function getTimef(fcstTime){ //예보시각 문자열 보기 좋게 바꾸기 //getTimef(string)
        return fcstTime.substring(0,2) + ":" + fcstTime.substring(2);
    }

    function getValuef(fcstValue){ //예보 값 단위 추가
        // 하늘상태(SKY), 강수형태(PTY) 두 경우엔 코드값 사용
        
        // 하늘상태(SKY) 코드 : 맑음(1), 구름많음(3), 흐림(4)
        // 강수형태(PTY) 코드 : (초단기) 없음(0), 비(1), 비/눈(2), 눈(3), 빗방울(5), 빗방울눈날림(6), 눈날림(7) 
        //                       (단기) 없음(0), 비(1), 비/눈(2), 눈(3), 소나기(4) 
        


    }

    const getUltra = (item) => {
        console.log(item);
        
        trTag = sd.map((item1) =>
            <tr key={item1["fcstTime"]}>
                <td>{yebo[yebo.findIndex((yeboItem) => item1["category"] === yeboItem.항목값)].항목명}</td>
                <td>{getDatef(item1["fcstDate"])}</td>
                <td>{getTimef(item1["fcstTime"])}</td>
                <td>{item1["fcstValue"]}</td>
            </tr>
        );

        // setData(temp);

    }

    const getVilage = () => {

    }

    if (uorv === '0') {
        getUltra(sd);

    } else if (uorv === '1') {

    }

    // const getData = (uorv) => {
    //     if(uorv === "0"){
    //         getUltra();
    //     }else if (uorv === "1"){
    //         getVilage();
    //     }
    // }

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
                {trTag}

            </tbody>
        </table>

    );

}

export default FcstTable;