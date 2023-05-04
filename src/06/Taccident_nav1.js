

const Taccident_nav1 = ({c1, sel1, setSel1}) => {

    // const show = (item) => {
    //     console.log(item)
    // }

    const btTag = c1.map((item) => 
        <li key={item}>
            <button onClick={() => setSel1(item)} className={item == sel1 ? "bt1" : "bt11"}>{item}</button>
        </li>
    );

    // const btTag = [];
    // for(let item of cc1){
    //     btTag.push(<li><button>{item}</button></li>);
    // }
    // console.log(btTag);

    return (
        <nav>
            <ul>
                <li><strong>교통사고 대분류</strong></li>
            </ul>
            <ul>
                {btTag}
            </ul>
        </nav>
    );

};

export default Taccident_nav1;