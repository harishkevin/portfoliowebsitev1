import { Typography, Grid, Button } from "@mui/material"

function Projects() {
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
                    }}>CoreAi · E-Learning Application</Typography>
                <Typography className='Inter'>Interned as a MERN Stack Developer, specializing in crafting efficient and scalable web applications.</Typography>
            </Grid>
        </Grid>
        <br />
        <br />
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
                    }}>Yoshops · E-Commerce Application</Typography>
                <Typography className='Inter'>Interned as a MERN Stack Developer, specializing in crafting efficient and scalable web applications.</Typography>
            </Grid>
        </Grid>
        <br />
        <br />
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
                    }}>Fullstack ToDo Application</Typography>
                <Typography className='Inter'>Interned as a MERN Stack Developer, specializing in crafting efficient and scalable web applications.</Typography>
            </Grid>
        </Grid>
        </>
    )
}

export default Projects