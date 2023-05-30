import { useState, useEffect, useRef } from "react";

const CntInput = ({num, setnum}) => {

    const txtref = useRef();

    useEffect(() => {
        //txtref.current.focus();
        txtref.current.value = 1;
    }, [])

    const minus = (e) => {
        e.preventDefault(); // 이벤트 전파를 막음(form 태그로 태그 값 전송하며 페이지가 새로고침 되는 것을 막음)
        if (num <= 0) {
            setnum(0);
            txtref.current.value = parseInt(txtref.current.value) - 1;
        } else {
            setnum(num - 1);
            txtref.current.value = parseInt(txtref.current.value) - 1;
        }

    }

    const plus = (e) => {
        e.preventDefault();
        setnum(num + 1);
        txtref.current.value = parseInt(txtref.current.value) + 1;
    }

    return (
        <article>
            <form>
                <div className="grid">
                    <div><button onClick={(e) => minus(e)}>-</button></div>
                    <div><input ref={txtref} type="text" id="txt1" name="txt1" readOnly /></div>
                    <div><button onClick={(e) => plus(e)}>+</button></div>
                </div>
            </form>
        </article>

    );
}

export default CntInput;