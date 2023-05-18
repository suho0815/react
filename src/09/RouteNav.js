import {Link} from 'react-router-dom'

const RouteNav = () => {

    return(
        <nav>
            <ul>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/page1/🍎/🥕'>Page1</Link></li>
                <li><Link to='/page2?item=🍎&item2=🥕'>Page2</Link></li>

            </ul>
        </nav>

    );


}
export default RouteNav;