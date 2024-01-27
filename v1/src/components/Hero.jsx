import {Typography} from '@mui/material'

function Hero() {
    return (
        <>
        <Typography variant='h3'>Harish Panchanatham</Typography>
        <br />
        <Typography>Self-Sufficient 3x Developer | analyst @capgemini</Typography>
        <br />
        <Typography>I build scalable web applications</Typography>
        <br />
        <br />
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between'
        }}>
            <div>
                <Typography>About</Typography>
                <Typography>Experience</Typography>
                <Typography>Projects</Typography>
            </div>
            <div>
            <Typography>icons</Typography>
            </div>
        </div>
        </>
    )
}

export default Hero