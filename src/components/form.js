
import './Form.css';
import Lion from '../assets/lion.jpg';
function Form() {
  return (
    <section className="form" id="form">
    <div>
    <h3  className="chead">Contact Us</h3>
    </div>

    <div className="circles">
      <div className="squarecontainer">
        <div className="containerhead">
        <div className="circle">

        </div>
        </div>
        <p> +251 9876545</p>
      </div>

      <div className="squarecontainer">
      <div className="containerhead">
        <div className="circle">

        </div>
        </div>
        <p> Enderase@gmail.com</p>
      </div>

      <div className="squarecontainer">
      <div className="containerhead">
        <div className="circle">

        </div>
        </div>
        <p> 78987/10</p>
      </div>

      
    </div>


    <div className="formcontainer">
    <div className="formfields">
      
    <div className="headname">
    <h1>Contact Us</h1>
    </div>
    <div className="fullname controlitem">
    <label className="label" for="email">Full Name</label>
		<input type="text" className="formcontrol" name="name" id="name" placeholder="Full Name"/>
   
     </div>

    <div className="emailaddress controlitem">
    <label className="label" for="email">Email Address</label>
		<input type="email" className="formcontrol" name="email" id="email" placeholder="Email"/>
   
    </div>
    <div className="subject controlitem">
    <label className="label" for="email">Subject</label>
		<input type="text" className="formcontrol" name="subject" id="subject" placeholder="Subject"/>
   
    </div>
    <div className="message controlitem">
    <label className="label" for="email">Message</label>
		<input type="ematextil" className="formcontrol" name="Message" id="Message" placeholder="Message"/>
   
    </div>
    <div className="sendbuttonspace">
      <div className="sendbutton">
      Send
      </div>

      
    </div>

      </div>
      <div className="formimage">
      <img src={Lion} alt="formimage"/>
    </div>



    </div>
  </section>

  );
}

export default Form;

