import logo from '../logo.svg';
import './Hello.css';
import MyClockImage from '../02/MyClockImage';

const Hello = () => { //컴포넌트(사용자 정의태그) 만들기(기존 태그와 구분을 위해 무조건 대문자로 시작)
    let name = '이수호';
    let git = 'https://github.com/suho0815';

    return (

        <main className='container'>
            <article data-theme="dark">
                <div>
                    <img src={logo} className='App-logo' alt='logo' />
                </div>
                <MyClockImage/>
                <footer>
                    <hgroup>
                        <h1>{name}</h1>
                        <h2><a href={git}>{git}</a></h2>
                    </hgroup>
                </footer>
            </article>

        </main>

    );
}

export default Hello; // 컴포넌트 내보내기