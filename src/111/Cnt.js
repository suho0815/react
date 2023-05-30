import { Route, Routes, BrowserRouter } from "react-router-dom";
import { RecoilRoot } from "recoil";
import CntDisp from "./CntDisp";
import CntInput from "./CntInput";

const Cnt = () => {



    return (
        <BrowserRouter>
            <main className="container">
                <RecoilRoot>
                    <Routes>
                        <Route path="/" element={<CntInput />}></Route>
                        <Route path="/disp" element={<CntDisp />}></Route>
                    </Routes>
                </RecoilRoot>
            </main>
        </BrowserRouter>
    );
}

export default Cnt;