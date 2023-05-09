// probs : 부모가 가지고 있는 데이터를 자식이 받아서 사용
// const BoxRows = (probs) => {
import { useState } from "react";
import './Box.css';
import style from './Box.module.css';

const BoxRows = ({ mv }) => {
    // const mvlist = [...probs.mv];
    // console.log("boxrows", mv);
    
    // [상태변수, 상태변수를 변환할 함수] = useState(초기값)
    const [fTags, setfTags] = useState("상세 보기");
    
    // 클릭된 자료 확인
    const showMv = (line) => {
        let tempTag =   <tr>
                        <td className={style.tempsp}>{line.movieCd}</td>
                        <td className={style.tempsp}>{line.movieNm}</td>
                        <td className={style.tempsp} colSpan={2}>{line.openDt}</td>
                        </tr>

        setfTags(tempTag);

       // setfTags("[" + line.movieCd + "] " + line.movieNm + " " +line.openDt);
        
        //영화코드 : movieCd, 영화명 : movieNm, 개봉일 : openDt, 
    }

    let trTags = [];
    for (let row of mv) {
        console.log(row.rank, row.movieNm, row.salesAmt, row.rankInten);
        let icon;
        let intent = parseInt(row.rankInten);

        if(intent > 0){
            icon = '⬆' ;  
        }else if(intent < 0){
            icon = '⬇';
        }else if(intent === 0){
            icon = '⏺';
        }
        trTags.push(
            <tr className="mytr" key={row.movieCd} onClick={() => showMv(row)}>
                <td>{row.rank}</td>
                <td>{row.movieNm}</td>
                <td>{parseInt(row.salesAmt).toLocaleString()}</td>
                <td>{icon}{intent === 0 ? '': Math.abs(intent)}</td>
            </tr>
            );
    }
    return (
        <>
            <tbody>
                {trTags}
            </tbody>
            <tfoot className={style.fT}>
                <td colSpan={4}>{fTags}</td>
            </tfoot>
        </>
    );

}

export default BoxRows;