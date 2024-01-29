import { Grid } from "@mui/material"

function Skills() {
    return (
        <>
        <Grid container lg={12} spacing={3}>
                <Grid item lg={3}>
                    <img className='javascript' src="images/skillslogo/javascript2.png" alt="" />
                </Grid>
                <Grid item lg={3}>
                    <img className='mongodb' src="images/skillslogo/mongodb2.png" alt="" />
                </Grid>
                <Grid item lg={3}>
                    <img className='express' style={{paddingTop: '15px'}} src="images/skillslogo/express2.png" alt="" />
                </Grid>
                <Grid item lg={3}>
                    <img className='react' src="images/skillslogo/react2.png" alt="" />
                </Grid>
                <Grid item lg={3}>
                    <img className='node' src="images/skillslogo/node2.png" alt="" />
                </Grid>
                <Grid item lg={3}>
                    <img className='recoil' src="images/skillslogo/recoil2.png" alt="" />
                </Grid>
                <Grid item lg={3}>
                    <img className='jwt' src="images/skillslogo/jwt3.png" alt="" />
                </Grid>
                <Grid item lg={3}>
                    <img className='github' src="images/skillslogo/github2.png" alt="" />
                </Grid>
                <Grid item lg={3}>
                    <img className='npm' src="images/skillslogo/npm.png" alt="" />
                </Grid>
                <Grid item lg={3}>
                    <img className='postman' src="images/skillslogo/postman2.png" alt="" />
                </Grid>
                <Grid item lg={3}>
                    <img className='aws' src="images/skillslogo/aws2.png" alt="" />
                </Grid>
                <Grid item lg={3}>
                    <img className='docker' src="images/skillslogo/docker2.png" alt="" />
                </Grid>
            </Grid>
        </>
    )
}

export default Skills