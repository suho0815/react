//https://apis.data.go.kr/B551011/PhotoGalleryService1/gallerySearchList1?serviceKey=1CTxFE4ICqEXauo0PqpN1xZZ5LF7hHOeQ2pTjgNg%2F9Tyho8Cz2KItgTbJB%2Fee%2F4cxVfNcuajFNqiCUQGc2xx1Q%3D%3D&numOfRows=10&pageNo=1&MobileOS=ETC&MobileApp=AppTest&arrange=A&keyword=%ec%9e%90%ea%b0%88%ec%b9%98&_type=json
import style from './Gallery.module.css';
import { useState, useEffect, useRef } from 'react';
import GalleryView from './GalleryView';

const Gallery = () => {
    //키워드 input
    const txt1 = useRef();
    const [mykw, setmykw] = useState();
    const pageNumbers = [];
    const [mypg, setmypg] = useState();
    // const [mypgno, setmypgno] = useState(1);

    let numOfRows = 10;

    let pageno = 1;
    //컴포넌트가 맨처음 랜더링 될 때
    useEffect(() => {
        txt1.current.focus();
    }, []);




    //확인버튼
    const show = (e) => {
        e.preventDefault();
        if (txt1.current.value === '') return;

        let kw = encodeURI(txt1.current.value);
        setmypg();
        // setmypgno(pageno);
        // console.log(txt1.current.value, kw);
        // console.log(pageno);
        // console.log(mypgno);

        let url = "https://apis.data.go.kr/B551011/PhotoGalleryService1/gallerySearchList1?serviceKey=1CTxFE4ICqEXauo0PqpN1xZZ5LF7hHOeQ2pTjgNg%2F9Tyho8Cz2KItgTbJB%2Fee%2F4cxVfNcuajFNqiCUQGc2xx1Q%3D%3D&numOfRows=" + numOfRows + "&pageNo=" + pageno + "&MobileOS=ETC&MobileApp=AppTest&arrange=A&keyword=" + kw + "&_type=json";
        //data.response.body.totalCount
        fetch(url)
            .then((response) => response.json())
            .then((data) => {
                setmykw(data.response.body.items.item);

                const totalPages = Math.ceil(data.response.body.totalCount / numOfRows);
                for (let i = 1; i <= totalPages; i++) {
                    pageNumbers.push(i);
                }

                setmypg(pageNumbers.map((pageNumber) => (
                    <span  className="page-item">
                        <button className="pagebt" onClick={(e) => {pageno = pageNumber;
                        // console.log(pageNumber);
                        show(e);}}>
                            {pageNumber}
                        </button>
                    </span>
                )));
                // console.log(url);

            })
            .catch((err) => console.log(err))

    }

    //취소버튼
    const showClear = (e) => {
        e.preventDefault();
    }

    return (
        <main className="container">
            <article>
                <header>
                    <h1>한국관광공사 관광사진 정보</h1>
                </header>
                <div className="grid">
                    <div>
                        <input ref={txt1} type="text" id="txt" name="txt" placeholder='키워드를 입력하세요.' required></input>
                    </div>

                    <div className={style.btDiv}>
                        <button onClick={(e) => {show(e)}}>검색</button>
                        <button onClick={(e) => showClear(e)}>취소</button>
                    </div>
                </div>
            </article>
            {mykw && <GalleryView mkw={mykw} />}

            <div className={style.page}>
                {mypg}
            </div>

        </main>
    )
}

export default Gallery;