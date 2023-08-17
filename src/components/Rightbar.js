import React from 'react'
import "./Rightbar.css"
export default function Rightbar() {
  return (
    <div className='rightbar' >
      <div className="user">
        <img className='pfp' src="https://img.freepik.com/free-photo/portrait-white-man-isolated_53876-40306.jpg" alt="" />
        <h5>Hello</h5>
      </div>
      <h4 className='date' >December 2022</h4>
      <div className="calanderdiv">
        <div className="dates">
          <h6>Mon</h6>
          <h6>2</h6>
        </div>
        <div className="dates">
          <h6>Mon</h6>
          <h6>2</h6>
        </div>
        <div className="dates">
          <h6>Mon</h6>
          <h6>2</h6>
        </div>
        <div className="dates">
          <h6>Mon</h6>
          <h6>2</h6>
        </div>
        <div className="dates">
          <h6>Mon</h6>
          <h6>2</h6>
        </div>
        <div className="dates">
          <h6>Mon</h6>
          <h6>2</h6>
        </div>
        <div className="dates">
          <h6>Mon</h6>
          <h6>2</h6>
        </div>
      </div>
      <div className="eventsdiv">
        <h5 >Upcoming calestial events</h5>
        <div className="events">

          <div className="number">2</div>
          <div className="namedesc">
            <div className="name">Planetorium visit</div>
            <div className="desc">Guided tour with an astronomer</div>
          </div>
          <div className="times">19:00-21:00</div>
        </div>
        <div className="events">

          <div className="number">2</div>
          <div className="namedesc">
            <div className="name">Planetorium visit</div>
            <div className="desc">Guided tour with an astronomer</div>
          </div>
          <div className="times">19:00-21:00</div>
        </div>
        <div className="events">

          <div className="number">2</div>
          <div className="namedesc">
            <div className="name">Planetorium visit</div>
            <div className="desc">Guided tour with an astronomer</div>
          </div>
          <div className="times">19:00-21:00</div>
        </div>
        <div className="events">

          <div className="number">2</div>
          <div className="namedesc">
            <div className="name">Planetorium visit</div>
            <div className="desc">Guided tour with an astronomer</div>
          </div>
          <div className="times">19:00-21:00</div>
        </div>
        <div className="events">

          <div className="number">2</div>
          <div className="namedesc">
            <div className="name">Planetorium visit</div>
            <div className="desc">Guided tour with an astronomer</div>
          </div>
          <div className="times">19:00-21:00</div>
        </div>

      </div>
    </div>
  )
}
