import data from './dataTaccident.json';
import Taccident_detail from './Taccident_detail';
import Taccident_nav1 from './Taccident_nav1';
import Taccident_nav2 from './Taccident_nav2';
import { useState, useEffect } from 'react';
import './Taccident.css';

const Taccident = () => {

    const dataTaccident = data.data;
    
    let c1 = dataTaccident.map((item) =>
        item.사고유형_대분류);
    c1 = new Set(c1);
    c1 = [...c1];

    const c2 = dataTaccident.map((item) =>
        [item.사고유형_대분류, item.사고유형_중분류]);
    // console.log(c2);

    const [sel1, setSel1] = useState(0); // 대분류 선택
    const [sel2, setSel2] = useState([]); //중분류 선택
    const [selData, setSelData] = useState({});

    // useEffect(() => {
    //     console.log('Taccident sel1 use',sel1);
    // }, []);

    // useEffect(() => {
    //     console.log('Taccident sel1 useEffect sel1',sel1);
    // }, [sel1]);

    useEffect(() => {
        // console.log('Taccident sel1 useEffect sel2',sel2);
        let temp = dataTaccident.filter((item) => item.사고유형_대분류 === sel2[0] && item.사고유형_중분류 === sel2[1]) ;
        setSelData(temp[0]);
    }, [sel2]);
    

    
    useEffect(() => {
        console.log('Taccident sel1 useEffect selData', selData);

    },[selData])

    // useEffect(() => {
    //     console.log('Taccident sel1',sel1);
    //     console.log('Taccident sel2',sel2);
    // });

    return (
        <main className='container'>
            <article>
                <header>
                    <Taccident_nav1 c1={c1} sel1 = {sel1} setSel1 = {setSel1}/>
                    <Taccident_nav2 c2={c2} sel1 = {sel1} sel2 = {sel2} setSel2 = {setSel2}/>
                </header>
                <div className='grid'>
                    {/* {tags} */}
                  { selData && <Taccident_detail selData = {selData}/>}
                </div>
            </article>
        </main>
    );

}

export default Taccident;