

const Taccident_nav2 = ({c2, sel1, sel2, setSel2}) => {
    
    const c2Arr = c2.filter((item) => sel1 === item[0]);
    // console.log(c2Arr);

    const btTag = c2Arr.map((item) => 
        <li key={item[1]}>
            <button onClick={() => setSel2(item)}>{item[1]}</button>
        </li>
    );

    return (
        <nav>
            <ul>
                <li><strong>교통사고 중분류</strong></li>
            </ul>
            <ul>
                {btTag}
            </ul>
        </nav>
    );

};

export default Taccident_nav2;