
import './Programs.css';
import One from '../assets/progs/1to1fund.jpg';
import Two from '../assets/progs/andsew.jpg';
import Three from '../assets/progs/blooddonation.jpg';
import Four from '../assets/progs/bookclub.jpg';
import Five from '../assets/progs/degzena.jpg';
import Six from '../assets/progs/food.jpg';
import Seven from '../assets/progs/jedgnochachin.jpg';
import Eight from '../assets/progs/ketemenet.jpg';
import Nine from '../assets/progs/sitech.jpg';
import Ten from '../assets/progs/whoarethey.jpg';
import Eleven from '../assets/progs/zarema.jpg';
import Twelvth from '../assets/progs/yimokirut.jpg';
function mapitout(){
    let array = [One,Two,Three,Four,Five,Six,Seven,Eight,Nine,Ten,Eleven,Twelvth];
    return array;
}
function Programs
() {
  return (
    <div className="Programs">
        <h2>Our Programs</h2>
        <p>Check us out on  our telegram.</p>
      <div className="thegridcontainer">
        {
            mapitout().map((item,i)=>{
                return (<div className='imagecontainergrid'>
                    <img src={item} />
                </div>)
            })
        }
      </div>
    </div>
  );
}

export default Programs;

