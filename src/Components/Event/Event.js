import * as React from 'react';
import { Link } from "react-router-dom";
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import EventComponent from './EventComponent';

function Event() {

    const days = [
        "Starting soon",
        "Today",
        "Tomorrow",
        "This week",
        "This weekend",
        "Next week",
        "Custom"
    ];


    const distance = [2, 5, 10, 25, 50, 100];


    const category = [
        "Art & Culture",
        "Career & Business",
        "Community & Environment",
        "Dancing",
        "Games",
        "Health & Wellbeing",
        "Hobbies & Passions",
        "Identity & Language",
        "Movements & Politics",
        "Music",
        "Parents & Family",
        "Pets & Animals",
        "Religion & Spirituality",
        "Science & Education",
        "Social Activities",
        "Sports & Fitness",
        "Support & Coaching",
        "Technology",
        "Travel & Outdoor",
        "Writing"
    ]


    const [dayType, setDayType] = React.useState('');
    const [type, setType] = React.useState('');
    const [dist, setDist] = React.useState(Infinity);
    const [cate, setCate] = React.useState('');

    const handleDayType = (event) => {
        setDayType(event.target.value);
    };
    const handleType = (event) => {
        setType(event.target.value);
    };
    const handleDist = (event) => {
        setDist(event.target.value);
    };
    const handleCategory = (event) => {
        setCate(event.target.value);
    };

    console.log(dayType, type, dist, cate );

    return (

        <div >
            <Link to="EVENTS">EVENTS</Link>
            <Link to="GROUPS">GROUPS</Link>
            <br />
            <div>
                <Select
                    sx={{ maxHeight: 46, m: 1, borderRadius: 10, minWidth: 140 }}
                    value={dayType}
                    onChange={handleDayType}
                    displayEmpty
                    inputProps={{ 'aria-label': 'Without label' }}
                >
                    <MenuItem value="">
                        <em>Any Day</em>
                    </MenuItem>
                    {
                        days.map((day) => <MenuItem value={day}>{day}</MenuItem>)
                    }
                </Select>
                <Select
                    sx={{ maxHeight: 46, m: 1, borderRadius: 10, minWidth: 140 }}
                    value={type}
                    onChange={handleType}
                    displayEmpty
                    inputProps={{ 'aria-label': 'Without label' }}
                >
                    <MenuItem value="">
                        <em>Any Type</em>
                    </MenuItem>
                    <MenuItem value="Online">Online</MenuItem>)
                    <MenuItem value="In Person">In Person</MenuItem>)
                </Select>

                <Select
                    sx={{ maxHeight: 46, m: 1, borderRadius: 10, minWidth: 140 }}
                    value={dist}
                    onChange={handleDist}
                    displayEmpty
                    inputProps={{ 'aria-label': 'Without label' }}
                >
                    <MenuItem value={Infinity}>
                        <em>Any Distance</em>
                    </MenuItem>
                    {
                        distance.map((d) => <MenuItem value={d}>{d} miles</MenuItem>)
                    }
                </Select>

                <Select
                    sx={{ maxHeight: 46, m: 1, borderRadius: 10, minWidth: 140 }}
                    value={cate}
                    onChange={handleCategory}
                    displayEmpty
                    inputProps={{ 'aria-label': 'Without label' }}
                >
                    <MenuItem value="">
                        <em>Any Category</em>
                    </MenuItem>
                    {
                        category.map((d) => <MenuItem value={d}>{d}</MenuItem>)
                    }
                </Select>
                <hr />
            </div>

            <div>
                <EventComponent />
            </div>
        </div>
    )
}

export default Event;