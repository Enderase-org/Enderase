
import './Mission.css';
import {AiFillHeart as Love} from 'react-icons/ai';
import {FaHandshake as Excellence} from 'react-icons/fa';
import {FaPeopleCarry as Diligence} from 'react-icons/fa';
function Mission() {
  return (
    <div className="Mission">
      <div className="missionstatment">
        <h1>Our mission</h1>
        <p> Becoming the first Ethiopian youth Delegate Group that is the best
            youth led association in the country
        </p>
          <h2>Our Values</h2>
      </div>

      <div className="valuemain">
             
          <div className="valuescontainer">
            <div className="value">
                <div className="icon">

            <Love color="red" size={102}/>
                </div>
                <div className="valuetext">
                <h4>Love</h4>     
            <p> Love is patient, Love is kind. It does'n't envy; 
                It isn't proud;
            doesn't dishonour others; it's not self seeking; it keeps no record of wrongs.
             Love doesn't delight with evil,
            but delights in truth</p>
                </div>
            </div>

            <div className="value">
                <div className="icon">
            <Excellence color="black" size={102}/>
                     </div>
                     <div className="valuetext">
                <h4>Excellence</h4>      
                <p>
                Do you see a man skillful in his work? He shall stand before kings.
                </p>
                </div>
            </div>

            <div className="value">
                <div className="icon">

            <Diligence color="blue" size={102}/>
                </div>
                <div className="valuetext">
                <h4>Diligence</h4>

                <p>
                What we hope to do with ease, we must first learn to do with
                diligence. So , whatever you do, do it with all your might
                </p>
                </div>
            </div>

          </div>
      </div>

      <div>

      </div>
    </div>
  );
}

export default Mission;

