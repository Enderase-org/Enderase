
import './Footer.css';
import {FiFacebook as Fb} from 'react-icons/fi'
import {BsInstagram as Insta} from 'react-icons/bs'
import {FaTelegramPlane as Gram} from 'react-icons/fa'
import {BsWhatsapp as Wapp} from 'react-icons/bs'
import {FaTiktok as Tik} from 'react-icons/fa'
import {IconContext} from 'react-icons'
function Footer() {
  return (

          <div className=' Footer'>

            <div className="footmain">

              <div className='foottext'>
                <p>If you have any questions or any enquireies that you
                  would like to forward to us, do not hesitate to contact us in
                  the above form, we would be more that happy to ablige
                </p>
              </div>
              <div className="footlists">

              <ul>
                <li>Manual</li>
                <li>Magazine</li>
                <li>Our App</li>

              </ul>

              <ul>
                <li>Others</li>
                <li>Developer</li>
                <li>About</li>
              </ul>
              </div>

            </div>

            <div className="footend">
            <p>
              &copy; 2022  Enderase Website . Design by{' '}
              <a href='#' rel='nofollow'>
                Efuye
              </a>
            </p>
          <IconContext.Provider value={{style:{fontSize:'25px',color:"#fff"}}}>
            <ul>
              <li className="circle"> <Fb/> </li>
              <li className="circle"> <Gram/> </li>
              <li className="circle"> <Tik/> </li>
              <li className="circle"> <Wapp/> </li>
              <li className="circle"> <Insta/> </li>

            </ul>
          </IconContext.Provider>
            
            </div>
          </div>
  );
}

export default Footer;

