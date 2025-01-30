import Nav from '../Nav'
import '../css/home.css';
import kenti from '../img/kenti.jpg';
import gh from '../img/github-svgrepo-com.svg'
import linkedin from '../img/linkedin-svgrepo-com.svg'
const Home = () => {
  return (
    <div>
      <div className="main">

        <div className="details">
          <div className="left">
            <p className="job-title">Software Engineer</p>
            <p className="hello">Hello I'm</p>
            <p className="hello-name">Kenti Johnson</p>
            <p className="bio">I specialize in innovative user interfaces and backend APIs, and data structures, using technologies such as html, css, javascript, React.js, Node, postgreSQL to deliver innovative business solutions. </p>
            <ul className="links">
              <li className="link-item">
                <img className='github-icon' src={gh} alt='gh' />
              </li>
              <li className="link-item">
                <img className='linkedin-icon' src={linkedin} alt='gh' />
              </li>
              <li className="link-item">UW</li>
            </ul>
          </div>
          <div className="right">
            <img className='kenti' src={kenti} alt="Kenti's photo" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
