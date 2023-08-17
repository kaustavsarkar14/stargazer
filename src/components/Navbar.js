import React from 'react'
import "./Navbar.css"
import GridViewIcon from '@mui/icons-material/GridView';
import ShareIcon from '@mui/icons-material/Share';
import PeopleIcon from '@mui/icons-material/People';
import DateRangeIcon from '@mui/icons-material/DateRange';

export default function Navbar() {
    return (
        <div className='navbar' >
            <div className="navitems">
                <div className="dashboard">
                    <GridViewIcon style={{ color: "white" }} />
                </div>
                <div className="share">
                    <ShareIcon />
                </div>
                <div className="community">
                    <PeopleIcon />
                </div>
                <div className="calander">
                    <DateRangeIcon/>
                </div>
            </div>
        </div>
    )
}
