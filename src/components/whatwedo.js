
import './Whatwedo.css';
import Personal from '../assets/personal.png';
import Economical from '../assets/financial.png';
import Social from '../assets/social.png';
import Political from '../assets/political.png';
function Whatwedo() {
  return (
    <section className="Whatwedo" id="values">
      <div className="valueshead">
        <p>
          What We Do
        </p>
      </div>

      <div className="valuegrid">

      <div className="firstleft">
     <img className="images" src={Personal} alt="txt" />
      </div>
      <div className="firstright">
        <p className="valuetags">Personal</p>
      Lorem Ipsum is simply dummy text of the printing and 
      typesetting industry. Lorem Ipsum has been the industry's
       standard dummy text ever since the 1500s, when an unknown
        printer took a galley of type and scrambled it to make
         a type specimen book. It has survived not only five 
         centuries, but also the leap into electronic 
         typesetting, remaining essentially unchanged. 
         It was popularised in the 1960s with the release 
         of Letraset sheets containing Lorem Ipsum passages..
      </div>
      <div className="secondleft">
      <p className="valuetags">Social</p>
      It is a long established fact that a reader will be 
      distracted by the readable content of a page when 
      looking at its layout. The point of using Lorem Ipsum 
      is that it has a more-or-less normal distribution of 
      letters, as opposed to using 'Content here, content here',
       making it look like readable English. Many desktop
        publishing packages and web page editors now use Lorem
         Ipsum as their default model text, and a search for 
         'lorem ipsum' will uncover many web sites still in
          their infancy. 
       </div>
       <div className="secondright">
       <img className="images" src={Social} alt="txt"/>
       </div>
       <div className="thirdleft">
       <img className="images" src={Economical} alt="txt"/>
       </div>
       <div className="thirdright">
       <p className="valuetags">Financial</p>
       Contrary to popular belief, Lorem Ipsum is not simply 
       random text. It has roots in a piece of classical Latin
        literature from 45 BC, making it over 2000 years old. 
        Richard McClintock, a Latin professor at Hampden-Sydney
         College in Virginia, looked up one of the more obscure
          Latin words, consectetur, from a Lorem Ipsum passage,
           and going through the cites of the word in classical
            literature, discovered the undoubtable source. 
           
       </div>
       <div className="fourthleft">
       <p className="valuetags">Political</p>
       There are many variations of passages of Lorem Ipsum
        available, but the majority have suffered alteration 
        in some form, by injected humour, or randomised words
         which don't look even slightly believable.
          If you are going to use a passage of Lorem
           Ipsum, you need to be sure there isn't
            anything embarrassing hidden in the middle of text.
             All the Lorem Ipsum generators on the
              Internet tend to repeat predefined chunks
               as necessary, making this the first true
                generator on the Internet.
       </div>
       <div className="fourthright">
       <img className="images" src={Political} alt="txt"/>
       </div>
      </div>
    </section>
  );
}

export default Whatwedo;

