import { useState, useEffect} from "react";
import FcstTable from "./FcstTable";


const VilageFcst = () => {
    // useState변수 : 변수 값이 변경이 되면 재 랜더링
    const [items, setItems] = useState();
    

    //랜더링이 될 때 한번 실행
    useEffect(() => {
        let url = `https://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/getVilageFcst?`;
        url = url + `serviceKey=1CTxFE4ICqEXauo0PqpN1xZZ5LF7hHOeQ2pTjgNg%2F9Tyho8Cz2KItgTbJB%2Fee%2F4cxVfNcuajFNqiCUQGc2xx1Q%3D%3D`;
        url = url + `&numOfRows=60`;
        url = url + `&pageNo=1`;
        url = url + `&base_date=20230524`;
        url = url + `&base_time=0500`;
        url = url + `&nx=55`;
        url = url + `&ny=127`;
        url = url + `&dataType=JSON`

        console.log(url);

        fetch(url)
            .then((resp) => resp.json())
            .then((data) => setItems(data.response.body.items.item))
            .catch((err) => console.log(err))
       
    }, []);

    useEffect(() => {
        console.log('items', items);
    }, [items])


    return (
        <>
            {items && <FcstTable items={items} gubun='단기예보'/>}
        </>
    );
}
export default VilageFcst;