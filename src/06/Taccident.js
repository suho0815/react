import data from './dataTaccident.json';
import Taccident_nav1 from './Taccident_nav1';
import Taccident_nav2 from './Taccident_nav2';
import { useState, useEffect } from 'react';

const Taccident = () => {

    const dataTaccident = data.data;
    // console.log(dataTaccident);


    let c1 = dataTaccident.map((item) =>
        item.사고유형_대분류);
    c1 = new Set(c1);
    c1 = [...c1];
    // console.log(c1);


    // const c2 = [];
    // for(let item of dataTaccident){
    //     let temp = [];
    //     temp.push(item.사고유형_대분류);
    //     temp.push(item.사고유형_중분류);
    //     c2.push(temp);
    // }
    // console.log(c2);

    const c2 = dataTaccident.map((item) =>
        [item.사고유형_대분류, item.사고유형_중분류]);
    // console.log(c2);

    const [sel1, setSel1] = useState(0); // 대분류 선택
    const [sel2, setSel2] = useState([]); //중분류 선택
    const [selData, setSelData] = useState({});

    useEffect(() => {
        console.log('Taccident sel1 use',sel1);
    }, []);

    useEffect(() => {
        console.log('Taccident sel1 useEffect sel1',sel1);
    }, [sel1]);

    useEffect(() => {
        console.log('Taccident sel1 useEffect sel2',sel2);
        let temp = dataTaccident.filter((item) => item.사고유형_대분류 === sel2[0] && item.사고유형_중분류 === sel2[1]) ;
        setSelData(temp[0]);
    }, [sel2]);


    // let datao = {};
    const btTag = [];
    useEffect(() => {
        console.log('Taccident sel1 useEffect selData', selData);
        // datao = selData.filter((item) => item.사고유형_대분류 !== sel2[0] && item.사고유형_중분류 !== sel2[1]);
        // console.log(datao);

        btTag = selData.map((item) => 
        <div key={item}>
            {item}
        </div>
    );

    },[selData])

    useEffect(() => {
        console.log('Taccident sel1',sel1);
        console.log('Taccident sel2',sel2);
    });

    return (
        <main className='container'>
            <article>
                <header>
                    <Taccident_nav1 c1={c1} sel1 = {sel1} setSel1 = {setSel1}/>
                    <Taccident_nav2 c2={c2} sel1 = {sel1} sel2 = {sel2} setSel2 = {setSel2}/>
                </header>
                <div className='grid'>
                    
                </div>
            </article>
        </main>
    );

}

export default Taccident;