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
                    <Typography className='Inter' variant='h3' style={{
                        color: '#EFECEC',
                        fontWeight: '700'
                    }}>Harish Panchanatham</Typography>
                    <Typography className='Inter' style={{
                        color: '#EFECEC'
                    }}>Self-Sufficient 3x Developer | analyst @capgemini</Typography>
                    <Typography className='Inter'>I build scalable web applications</Typography>
                </div>
                <br />
                <br />
                <br />
                <br />
                <div>
                    <Typography className='Inter'>About</Typography>
                    <br />
                    <Typography className='Inter'>Experience</Typography>
                    <br />
                    <Typography className='Inter'>Projects</Typography>
                </div>
            </div>
            <div>
            <img style={{
                width: '30px',
                marginRight: '30px'
            }} src="./social/github.svg" alt="" />
            <img style={{
                width: '30px',
                marginRight: '30px'
            }} src="./social/linkedin.svg" alt="" />
            <img style={{
                width: '30px',
                marginRight: '30px'
            }} src="./social/mail.svg" alt="" />
            </div>
        </div>
        </>
    )
}

export default Hero