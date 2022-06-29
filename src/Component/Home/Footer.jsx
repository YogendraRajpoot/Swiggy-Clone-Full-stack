import React from 'react'

export const Footer = () => {
  return (
    <>
    <div
      style={{
        display: "flex",
        width: "203vh",
        border: "2px solid black",
        justifyContent: "space-evenly",
        alignItems: "flex-start",
        backgroundColor: "black",
        color: "white",
      }}
    >
      <div>
        <ul>
          <li>
            <b className="text-muted">COMPANY</b>
          </li>
          <li>About Us</li>
          <li>Team</li>
          <li>Careers</li>
          <li>Swiggy Blog</li>
          <li>Bug Bounty</li>
          <li>Swiggy Pop</li>
          <li>Swiggy Super</li>
        </ul>
      </div>
      <div>
        <ul>
          <li>
            <b className="text-muted">CONTACT</b>
          </li>
          <li>Help & Support</li>
          <li>Partner with Us</li>
          <li>Ride with us</li>
        </ul>
      </div>
      <div>
        <ul style={{}}>
          <li style={{}}>
            <b className="text-muted">LEGAL</b>
          </li>
          <li>Terms & Conditions</li>
          <li>Refund & Cancellation</li>
          <li>Privacy Policy</li>
          <li>Cookie Policy</li>
          <li>Offer Terms</li>
        </ul>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          borderRadius: "10px",
          width: "20vh",
        }}
      >
        <img
          src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_108/iOS_ajgrty"
          alt="apple"
          className="img-fluid"
          style={{
            borderRadius: "10px",
            width: "20vh",
          }}
        />
        <img
          src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_108/play_ip0jfp"
          alt="googleplay"
          className="img-fluid"
          style={{
            borderRadius: "10px",
            width: "20vh",
          }}
        />
      </div>
    </div>
    {/* <div style={{width: "203vh",backgroundColor: "white",height:"2vh"}}></div> */}
    <div
      style={{
        display: "flex",
        width: "203vh",
        border: "2px solid black",
        justifyContent: "space-evenly",
        alignItems: "flex-start",
        backgroundColor: "black",
        color: "white",
      }}
    >
      <div>
        <b style={{ color: "GREY" }}>WE DELIVER TO</b>
        <ul>
          <li style={{ marginTop: "10px" }}>Achalpur</li>
          <li>Adilabad</li>
          <li>Adityapur</li>
          <li>Adoni</li>
          <li>Agartala</li>
          <li>Agara</li>
          <li>Ahmedabad</li>
          <li>Ahmednagar</li>
          <li>Ajmer</li>
          <li>Akola</li>
          <li>Akot</li>
          <li>Aligarh</li>
          <li>Alwar</li>
          <li>Ambala</li>
          <li>Ambikapur</li>
          <li>Ambur</li>
          <li>Amreli</li>
          <li>Arrah</li>
          <li>Anantpur</li>
        </ul>
      </div>
      <div>
        <b style={{ color: "GREY" }}>WE DELIVER TO</b>
        <li style={{ marginTop: "10px" }}>Damoh</li>
        <li>Darbhanga</li>
        <li>Darjeeling</li>
        <li>Datia</li>
        <li>Dausa</li>
        <li>Devnagere</li>
        <li>Dehri</li>
        <li>Delhi</li>
        <li>Deoghar</li>
        <li>Dewas</li>
        <li>Dhamtari</li>
        <li>Dhanbad</li>
        <li>Dhar</li>
        <li>Dharmshala</li>
        <li>Eluru</li>
        <li>Etewah</li>
        <li>Erode</li>
        <li>Faridabad</li>
        <li>Faridkot</li>
      </div>
      <div className="col">
        <b style={{ color: "GREY" }}>WE DELIVER TO</b>
        <ul>
          <li style={{ marginTop: "10px" }}>Kayamk</li>
          <li>Kayamkulam</li>
          <li>Khammam</li>
          <li>Khandwa</li>
          <li>Khanna</li>
          <li>Kharagpur</li>
          <li>Kharogone</li>
          <li>Kishanganz</li>
          <li>Kochi</li>
          <li>Kolar</li>
          <li>Kolhapur</li>
          <li>Kolkata</li>
          <li>Kollam</li>
          <li>Korbe</li>
          <li>Kota</li>
          <li>Eluru</li>
          <li>Etewah</li>
          <li>Erode</li>
          <li>Faridabad</li>
          <li>Faridkot</li>
        </ul>
      </div>
      <div className="col">
        <b style={{ color: "GREY" }}>WE DELIVER TO</b>
        <ul>
          <li style={{ marginTop: "10px" }}>Puri</li>
          <li>Purnia</li>
          <li>Purulia</li>
          <li>Pushkar</li>
          <li>Puttur</li>
          <li>Rae-Barely</li>
          <li>Raipur</li>
          <li>Rajaplayam</li>
          <li>Rajkot</li>
          <li>Ranchi</li>
          <li>Ramgadh</li>
          <li>Rampur</li>
          <li>Raniganj</li>
          <li>Dhar</li>
          <li>Dharmshala</li>
          <li>Eluru</li>
          <li>Etewah</li>
          <li>Erode</li>
          <li>Faridabad</li>
          <li>Faridkot</li>
        </ul>
      </div>
    </div>
  </>
  )
}
