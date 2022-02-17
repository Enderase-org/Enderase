
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
                <li><a href="#manual">Manual</a></li>
                <li><a href="#magazine">Magazine</a></li>
                <li><a href="#app">Our App</a></li>

              </ul>

              <ul>
                <li><a href="#others">Others</a></li>
                <li><a href="#developer">Developer</a></li>
                <li><a href="#about">About</a></li>
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
              <li className="circle"><a href="#facebook"> <Fb/> </a></li>
              <li className="circle"><a href="#telegram"> <Gram/> </a></li>
              <li className="circle"><a href="#tiktok"> <Tik/> </a></li>
              <li className="circle"><a href="#whatsapp"> <Wapp/> </a></li>
              <li className="circle"><a href="#instagram"> <Insta/> </a></li>

            </ul>
          </IconContext.Provider>
            
            </div>
          </div>
  );
}

export default Footer;

