import { Link } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { CntAtoms, CntAtomsTwice } from "./CntAtoms";

const CntDisp = () => {

    const n = useRecoilValue(CntAtoms);
    const n2 = useRecoilValue(CntAtomsTwice);

    return (
        
            <article>
                <h2>입력값 : {n}, 입력값 2배 : {n2}</h2>
                <footer>
                    <Link to={`/`} >입력 화면 이동</Link>
                </footer>
            </article>
    );
}
export default CntDisp;