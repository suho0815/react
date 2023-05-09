import { useState, useRef, useEffect } from "react";
import './MyRef.css';

const MyRef = () => {
    const txtref = useRef();

    const itemArr = useRef([]);
    const [itemTag, setItemTag] = useState();

    useEffect(() => {
        txtref.current.focus();
    }, [])

    const addItem = (e) => {
        e.preventDefault();
        itemArr.current = [...itemArr.current, txtref.current.value];
        console.log("addItem = ", itemArr.current);
        itemArr.current = new Set(itemArr.current); // Set으로 바꿔서 중복 제거
        itemArr.current = [...itemArr.current];
        
        // itemArr.current.filter((item, idx) => {return itemArr.current.indexOf(item) === idx});

        let tempTag = itemArr.current.map((item, idx) => <span key={'sp'+idx} className="sp">{item}</span>);
        
        setItemTag(tempTag);

    }
    
    const resetItem = (e) => {
        txtref.current.value = '';
        txtref.current.focus();
        console.log("resetItem");
    }

    return(
        <main className="container">
            <article>
                <header>
                    <form>
                        <div className="grid">
                            <div>
                                <label htmlFor="txt1">과일/채소 입력</label>
                                <input ref={txtref} type="text" id="txt1" name="txt1" required/>

                            </div>
                            <div>
                                <button onClick={(e) => addItem(e)}>등록</button>
                                <button onClick={(e) => resetItem(e)}>취소</button>
                            </div>
                        </div>
                        
                    </form>
                </header>
                <div >
                    {itemTag}
                </div>
            </article>
        </main>
    );

}

export default MyRef;