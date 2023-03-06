import {
    Link,
    useLocation
} from 'react-router-dom';

function Footer() {
    return (
        <footer className='bg-light fixed-bottom'>
            <ul>
                <li>
                    <a href="https://github.com/lsegura06">
                        <i className="fab fa-github fa-2x"></i>
                    </a>
                </li>
                <li>
                    <a href="">
                        <i className="fab fa-linkedin fa-2x"></i>
                    </a>
                </li>
                
            </ul>
        </footer>
    );
}

export default Footer;