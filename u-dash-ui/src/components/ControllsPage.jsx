import React from "react";
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import DasherPic from './Dasher.jpg';
import { Textarea } from 'evergreen-ui'

function ControllerPage() {
    // State for our summary of poem
    const [summary, setSummary] = React.useState('')

    return (
        <div style={{
            width: 700, paddingLeft: 30
        }}>
            <h4>ReactJS Evergreen Textarea Component</h4>
            <Textarea
                onChange={(e) => setSummary(e.target.value)}
                placeholder="Enter your summary of poem"
            /> <br></br>
            Last Input: {summary.slice(-1)}
        </div>
    );
}

export default ControllerPage;
