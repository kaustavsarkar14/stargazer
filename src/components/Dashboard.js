import React from 'react'
import "./Dashboard.css"
import Search from './Search'
import Chart from './Chart'



export default function Dashboard() {
    return (
        <div className="middlebar" >
            <Search />
            <div className="welcome">
                <div className="goodmorning">
                    <h4>Good morning, stargazer</h4>
                    <p>Open the panel and explore the wonders of the universe</p>
                </div>
                <button className='explore-btn' >+ Explore</button>
            </div>
            <div className="tasks">
                <h5 style={{ marginTop: "2rem", marginBottom: "1rem" }} >My tasks</h5>
                <div className="taskbar">
                    <p style={{ marginBottom: "1rem" }}>2 active tasks</p>
                    <div className="tasklist">
                        <div className="task">
                            <div className="img"><img src='https://img.freepik.com/free-photo/worldface-ugandan-man-white-background_53876-30388.jpg' /></div>
                            <div className="name">stargazer</div>
                            <div className="taskname">Meteor shower observation</div>
                            <div className="time">Tonight's event</div>
                        </div>
                        <div className="task">
                            <div className="img"><img src='https://img.freepik.com/free-photo/worldface-ugandan-man-white-background_53876-30388.jpg' /></div>
                            <div className="name">stargazer</div>
                            <div className="taskname">Meteor shower observation</div>
                            <div className="time">Tonight's event</div>
                        </div>
                        <div className="task">
                            <div className="img"><img src='https://img.freepik.com/free-photo/worldface-ugandan-man-white-background_53876-30388.jpg' /></div>
                            <div className="name">stargazer</div>
                            <div className="taskname">Meteor shower observation</div>
                            <div className="time">Tonight's event</div>
                        </div>
                    </div>
                    <button className='events-btn' >See all events</button>
                </div>
                <h5 style={{ marginTop: "2rem", marginBottom: "1rem" }} >Total observation hours</h5>
                <Chart/>
            </div>
        </div>
    )
}
