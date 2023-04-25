import MyDivArticle from "./MyDivArticle";


const MyDiv = () => {

    return(
        <main className="container">
            <h1>MyDiv</h1>
            
            <MyDivArticle aname='MyDiv0'/>
            <MyDivArticle aname='MyDiv1'/>
            <MyDivArticle aname='MyDiv2'/>
        </main>
    );
}

export default MyDiv;