import {Typography} from '@mui/material'

function Hero() {
    return (
        <>
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            height: '100%',
            justifyContent: 'space-between'
        }}>
            <div>
                <div>
                    <Typography variant='h3'>Harish Panchanatham</Typography>
                    <Typography>Self-Sufficient 3x Developer | analyst @capgemini</Typography>
                    <Typography>I build scalable web applications</Typography>
                </div>
                <br />
                <br />
                <div>
                    <Typography>About</Typography>
                    <Typography>Experience</Typography>
                    <Typography>Projects</Typography>
                </div>
            </div>
            <div>
            <Typography>icons</Typography>
            </div>
        </div>
        </>
    )
}

export default Hero