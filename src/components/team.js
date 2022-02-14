import ImageGallery from 'react-image-gallery';
import './Team.css';
import Team1 from '../assets/teamedit.jpg';
import Team2 from '../assets/team2.jpg';
import Team3 from '../assets/team3.jpg';
const images = [
  {
    original:Team1,
    originalHeight:"500px",
    originalWidth:"800px",
    thumbnail:Team1,
    thumbnailWidth:"50px",
    thumbnailHeight:"50px"
  }
]
function Team() {
  return (
    <div className="Team" id="team">
      <div>
        <p className="imageheader"> Meet the team!</p>
      </div>
      <div className="imageconatianer">
     {/* <ImageGallery 
      
     items={images}/> */}
     <img src={Team1} style={{}}/>
      </div>
      <div className="endofimage">

      </div>
    </div>
  );
}

export default Team;

