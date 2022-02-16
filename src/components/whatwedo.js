
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

      <div className="firstleft valcon">
     <img className="images" src={Personal} alt="txt" />
      </div>
      <div className="firstright valcon">
        <p className="valuetags">Personal</p>
        <p>

      At enderase, We believe development and growth starts 
      at the personal level, building the physical, mental,
      as well as emotional areas of personal excellence
      before attempting to develop other non fundamental 
      competencies. We want the youth of our generation
      to drive its strength from inside, internally, without
      being dependant upon others. The foundation of a excellence
      is frist and foremost personal excellence. 
        </p>
      </div>
      <div className="secondleft valcon">
      <p className="valuetags">Social</p>
      <p>
      It is a long established fact that those who travel
      alone can go fast but those who travel together go far.
      Community is one of the central theme at our organization and
      we want a youth that is connected and in touch with
      people of differenct spheres of life and be socially 
      competent so that we can integrate into society better.
      We, here at enderase, believe not only in independence of
      personality but also interdependece. Only through interacting
      with others can character be built.

      </p>
       </div>
       <div className="secondright valcon">
       <img className="images" src={Social} alt="txt"/>
       </div>
       <div className="thirdleft valcon">
       <img className="images" src={Economical} alt="txt"/>
       </div>
       <div className="thirdright valcon">
       <p className="valuetags">Financial</p>
       <p>
      Contrary to popular belief, money is not the root of evil, It
      is how people use it and interact with it. The economy is a 
      giant interconnected system of businesses and values being
      exchanged on a daily basis. We believe it is important for 
      every individual to know and understand the basics of money
      and value so the youth can be able to contribute to the growing 
      economy as well as change his or her life for the better. And the
      key to do this is through financial intelligence.

      
       </p>
           
       </div>
       <div className="fourthleft valcon">
       <p className="valuetags">Political</p>
       <p>
      What does it mean to be a citizen??? especially a good 
      citizen? This is a question that every person, more importantly 
      the youth, should ask. Theodore Roosevelt famously once said, 
      "The first requisite of a good citizen in this republic is 
      that he shall be able and willing to pull his own weight".
       This might mean differenc things to different people but 
       for us , it means being a law abiding, responsible person
        who would be willling to participate and push for
      postive change in our political atmosphere.

       
       </p>
       </div>
       <div className="fourthright valcon">
       <img className="images" src={Political} alt="txt"/>
       </div>
      </div>
    </section>
  );
}

export default Whatwedo;

/*
 Lorem Ipsum is simply dummy text of the printing and 
      typesetting industry. Lorem Ipsum has been the industry's
       standard dummy text ever since the 1500s, when an unknown
        printer took a galley of type and scrambled it to make
         a type specimen book. It has survived not only five 
         centuries, but also the leap into electronic 
         typesetting, remaining essentially unchanged. 
         It was popularised in the 1960s with the release 
         of Letraset sheets containing Lorem Ipsum passages..

         
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
          
           Contrary to popular belief, Lorem Ipsum is not simply 
       random text. It has roots in a piece of classical Latin
        literature from 45 BC, making it over 2000 years old. 
        Richard McClintock, a Latin professor at Hampden-Sydney
         College in Virginia, looked up one of the more obscure
          Latin words, consectetur, from a Lorem Ipsum passage,
           and going through the cites of the word in classical
            literature, discovered the undoubtable source. 

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

         */

