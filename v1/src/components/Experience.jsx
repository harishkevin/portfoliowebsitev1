import { Typography, Grid, Button } from "@mui/material"

function Experience() {
    return (
        <>
        <Grid container style={{
            width: '100%'
        }}>
            <Grid item style={{
                width: '30%'
            }}>
                <Typography className='Inter'>Present</Typography>
            </Grid>
            <Grid item style={{
                width: '70%'
            }}>
                <Typography className='Inter' style={{
                        color: '#EFECEC'
                    }}>Analyst · Capgemini</Typography>
                <Typography className='Inter'>Interned as a MERN Stack Developer, specializing in crafting efficient and scalable web applications.</Typography>
                <Typography className='Inter'>Utilized MongoDB, Express.js, React, and Node.js for web development.</Typography>
                <Typography className='Inter'>Contributed to real-world projects, implementing robust MERN stack architectures.</Typography>
                <Typography className='Inter'>Achieved a 15% improvement in application performance and error reduction throughstrategic code enhancements.</Typography>
                <Typography className='Inter'>Proficient in AWS for enhanced scalability and reliability.</Typography>
            </Grid>
        </Grid>
        <br />
        <Grid container style={{
            width: '100%'
        }}>
            <Grid item style={{
                width: '30%'
            }}>
                <Typography className='Inter'>2023</Typography>
            </Grid>
            <Grid item style={{
                width: '70%'
            }}>
                <Typography className='Inter' style={{
                        color: '#EFECEC'
                    }}>Software Developer Intern · yoshops.com</Typography>
                <Typography className='Inter'>Interned as a MERN Stack Developer, specializing in crafting efficient and scalable web applications.</Typography>
                <Typography className='Inter'>Utilized MongoDB, Express.js, React, and Node.js for web development.</Typography>
                <Typography className='Inter'>Contributed to real-world projects, implementing robust MERN stack architectures.</Typography>
                <Typography className='Inter'>Achieved a 15% improvement in application performance and error reduction throughstrategic code enhancements.</Typography>
                <Typography className='Inter'>Proficient in AWS for enhanced scalability and reliability.</Typography>
                <br />
                <Button className="experienceToolButton" variant="contained" size="small" style={{
                    textTransform: 'capitalize',
                    borderRadius: '50px',
                    background: '#FC6736',
                    height: '30px',
                    marginRight: '5px',
                    marginBottom: '5px'
                }}>Javascript</Button>
                <Button className="experienceToolButton" variant="contained" size="small" style={{
                    textTransform: 'capitalize',
                    borderRadius: '50px',
                    background: '#FC6736',
                    height: '30px',
                    marginRight: '5px',
                    marginBottom: '5px'
                }}>React</Button>
                <Button className="experienceToolButton" variant="contained" size="small" style={{
                    textTransform: 'capitalize',
                    borderRadius: '50px',
                    background: '#FC6736',
                    height: '30px',
                    marginRight: '5px',
                    marginBottom: '5px'
                }}>MongoDB</Button>
                <Button className="experienceToolButton" variant="contained" size="small" style={{
                    textTransform: 'capitalize',
                    borderRadius: '50px',
                    background: '#FC6736',
                    height: '30px',
                    marginRight: '5px',
                    marginBottom: '5px'
                }}>AWS</Button>
            </Grid>
        </Grid>
        </>
    )
}

export default Experience