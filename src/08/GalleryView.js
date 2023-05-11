
import style from './GalleryView.module.css'

const GalleryView = ({ mkw }) => {

    // galTitle : 이름, galPhotographyLocation : 위치, galSearchKeyword : 키워드, galWebImageUrl : 이미지

    // console.log(mkw);

    let kwTags = [];
    let kwTag = [];
    for (let m of mkw) {

        // let searchkwTag = [];
        const searchkw = m.galSearchKeyword.split(', ');

        // searchkwTag = searchkw.map((item) => {
        //     searchkwTag.push(<span>{item}</span>)
        // });

        for (let i = 0; i < searchkw.length; i++){
            searchkw[i] = <span key={i}>{searchkw[i]}</span>;
        }
        // console.log(searchkw);
        
        kwTag.push(
            <article key={m.galContentId}>
        <header className={style.he1}>
            <div className='grid'>
                <h4>{m.galTitle}</h4>
                <span>{m.galPhotographyLocation}</span>
            </div>
        </header>
        <div>
            <img src={m.galWebImageUrl} alt="image"/>
        </div>
        <footer className={style.searchkw}>
            {searchkw}
        </footer>
    </article>
        );

    }
    console.log(mkw.length);

    for(let i = 0; i < mkw.length; i+=2){
        if( i+1 > mkw.length){
            kwTags.push(
            <div key={i}>{kwTag[i]}</div>
            )
        }else{
            kwTags.push(
                <div className='grid' key={i}>{kwTag[i]}{kwTag[i+1]}</div>
            )
        }
        
    }
    console.log(kwTags);

    return (
        <div>
            {kwTags}
        </div>
    );

}
export default GalleryView;