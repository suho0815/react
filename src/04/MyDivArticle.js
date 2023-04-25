// 전역으로 css적용
import './MyDiv.css';
// 컴포넌트에 css적용 (MyDiv.module.css)
import style from './MyDiv.module.css';

//state 변수 사용 1단계
import { useState } from 'react';


// const MyDivArticle = (probs) => {
    // 매개변수를 probs 사용하지 않고 오브젝트에 매개변수명을 넣어서 사용
const MyDivArticle = ({aname}) => {
    // const aname = probs.aname;
    let n = (aname === undefined) ? '0' : aname.slice(-1);
    // let cnt = 0;
    console.log(n);

    //state 변수 사용 2단계 : 변수 선언
    const [cnt, setCnt] = useState(0);

    //click 이벤트 처리
    const like = ()=> {
        // cnt= cnt + 1;
        //state 변수 사용 3단계 : 변수 내용 변경
        setCnt(cnt + 1);
        console.log(cnt);
    }

    return(
        <article>
            <header><h1 className={style.mah1}>{ aname || 'MyDiv0'}</h1></header>
            <ul className={style.aul}>
                <li className={style.ali}>{n === '0' ? 'MyDiv0' : 'MyDiv'+ n}1</li>
                <li className={style.ali}>{'MyDiv' + n}2</li>
                <li className={style.ali}>{aname + '3'}</li>
                
            </ul>
            {/* {n === '1' ? <footer>
                <h2>div</h2>
                </footer>: ''} */}

                {n === '1' && <footer>
                <h2><span onClick={() => like()}>✔</span> {cnt}</h2>
                </footer>}
            
        </article>
    );
}

export default MyDivArticle;