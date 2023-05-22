import FcstTable from "./FcstTable";
import { useParams } from "react-router-dom";

const UltraSrtFcst = () => {

    const { dt } = useParams();
    
    const { area } = useParams();
    console.log(area);

    const { x } = useParams();
    const { y } = useParams();

    //pageNo=1&numOfRows=1000&dataType=JSON&base_date=20230521&base_time=0630&nx=55&ny=127
    let pageNo;
    let numOfRows;
    let base_date = dt;
    let base_time;
    let nx = x;
    let ny = y;
    let url = `https://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/getUltraSrtFcst?serviceKey=1CTxFE4ICqEXauo0PqpN1xZZ5LF7hHOeQ2pTjgNg%2F9Tyho8Cz2KItgTbJB%2Fee%2F4cxVfNcuajFNqiCUQGc2xx1Q%3D%3D&pageNo=1&numOfRows=1000&dataType=JSON&base_date=20230521&base_time=0630&nx=55&ny=127`;

    fetch(url)
    .then((response) => response.json()) 
    .then((data) => {
        
    });


    return (
        <article>
            <header>
                <div className="grid">
                    <div>
                        <h1>UltraSrtFcst</h1>
                    </div>

                    <div>
                        <select id="sel" required>
                            <option value=" " selected>선택</option>


                        </select>
                    </div>
                </div>
            </header>
            {/* props로 넘겨서 테이블 띄우기 */}
            <FcstTable />
        </article>
    );

}

export default UltraSrtFcst;