import data from './dataFrcst.json';
import style from './Frcst.module.css';

import { useState } from 'react';

const Frcst = () => {
    const dtKey = ["frcstOneDt", "frcstTwoDt", "frcstThreeDt", "frcstFourDt"];
    const cnKey = ["frcstOneCn", "frcstTwoCn", "frcstThreeCn", "frcstFourCn"];

    // dtKey.map((item) => console.log(data[item]));
    // cnKey.map((item) => console.log(data[item]));
    
    let dtcn = {};
    dtKey.map((item, idx) => 
        dtcn[data[item]] = data[cnKey[idx]]
        );

    const [cn, setcn] = useState('');
    const [sel, setsel] = useState('');

    // 상세정보
    const detail = (k) =>{
        
        setsel(k);

        let dtcnItem = dtcn[k].split(',');
        dtcnItem = dtcnItem.map((item)=> item.split(':'));
        dtcnItem = dtcnItem.map((item) => 
                    <div key={item[0]}>
                        <span className={style.sp1}>{item[0]}</span>
                        {item[1].trim() === '낮음' ? <span className={style.sp21}>{item[1]}</span>
                        : item[1].trim() === '보통' ? <span className={style.sp22}>{item[1]}</span>
                        : <span className={style.sp23}>{item[1]}</span> }
                    </div>
        );        
        setcn(dtcnItem);

    };


    // 요일
    let dtTag = [];
    dtTag = Object.keys(dtcn).map((item, idx) => 
            <div className={sel === item ? style.dt : style.dt1} 
            key={'dt' + idx}
            onClick={()=> detail(item)}>{item}</div>
    );
    

    // console.log(data);
    return (
        <main className='container'>
            <article>
                <header>
                    <h2>초미세먼지 주간예보</h2>
                    <div className="grid">
                        {dtTag}
                    </div>
                </header>
                <div className="grid">
                    {cn}
                </div>
            </article>
            
        </main>
    );
}

export default Frcst;