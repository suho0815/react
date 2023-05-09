//https://apis.data.go.kr/B551011/PhotoGalleryService1/gallerySearchList1?serviceKey=1CTxFE4ICqEXauo0PqpN1xZZ5LF7hHOeQ2pTjgNg%2F9Tyho8Cz2KItgTbJB%2Fee%2F4cxVfNcuajFNqiCUQGc2xx1Q%3D%3D&numOfRows=10&pageNo=1&MobileOS=ETC&MobileApp=AppTest&arrange=A&keyword=%ec%9e%90%ea%b0%88%ec%b9%98&_type=json
import style from './Gallery.module.css';
import { useState, useEffect, useRef } from 'react';

const Gallery = () => {
    //키워드 input
    const txt1 = useRef();

    //컴포넌트가 맨처음 랜더링 될 때
    useEffect(() => {
        txt1.current.focus();
    }, []);

    //확인버튼
    const show = (e) => {
        e.preventDefault();
        if (txt1.current.value === '') return;

        let kw = encodeURI(txt1.current.value);
        console.log(txt1.current.value, kw);
    }

    //취소버튼
    const showClear = (e) => {
        e.preventDefault();
    }


    let url = "https://apis.data.go.kr/B551011/PhotoGalleryService1/gallerySearchList1?serviceKey=1CTxFE4ICqEXauo0PqpN1xZZ5LF7hHOeQ2pTjgNg%2F9Tyho8Cz2KItgTbJB%2Fee%2F4cxVfNcuajFNqiCUQGc2xx1Q%3D%3D&numOfRows=10&pageNo=1&MobileOS=ETC&MobileApp=AppTest&arrange=A&keyword=%ec%9e%90%ea%b0%88%ec%b9%98&_type=json" ;

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
                    <button onClick={(e) => show(e)}>검색</button>
                    <button onClick={(e) => showClear(e)}>취소</button>
                    </div>
                </div>
            </article>
        </main>
    )
}

export default Gallery;