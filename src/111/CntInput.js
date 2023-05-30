import { useRecoilState } from "recoil";
import { CntAtoms } from "./CntAtoms";
import { Link } from "react-router-dom";

const CntInput = () => {

    const [n, setN] = useRecoilState(CntAtoms);
    

    const minus = (e) => {
        e.preventDefault(); // 이벤트 전파를 막음(form 태그로 태그 값 전송하며 페이지가 새로고침 되는 것을 막음)
        if (n -1 < 0) {
            setN(0);
        } else {
            setN(n - 1);
        }

    }

    const plus = (e) => {
        e.preventDefault();
        setN(n + 1);
    }

    return (
        
            <article>
                <form>
                    <div className="grid">
                        <div><button onClick={minus}>-</button></div>
                        <div><input type="text" id="txt1" name="txt1" readOnly value={n}/></div>
                        <div><button onClick={plus}>+</button></div>
                    </div>
                </form>
                <footer>
                    <Link to={`/disp`} >출력 화면 이동</Link>
                </footer>
            </article>
        
    );
}

export default CntInput;