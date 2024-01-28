import { Typography, Grid } from "@mui/material"

function Experience() {
    return (
        <>
        <Grid container style={{
            width: '100%'
        }}>
            <Grid item style={{
                width: '30%'
            }}>
                <Typography>2023</Typography>
            </Grid>
            <Grid item style={{
                width: '70%'
            }}>
                <Typography>Software Developer Intern · yoshops.com</Typography>
                <Typography>Interned as a MERN Stack Developer, specializing in crafting efficient and scalable web applications.</Typography>
                <Typography>Utilized MongoDB, Express.js, React, and Node.js for web development.</Typography>
                <Typography>Contributed to real-world projects, implementing robust MERN stack architectures.</Typography>
                <Typography>Achieved a 15% improvement in application performance and error reduction throughstrategic code enhancements.</Typography>
                <Typography>Proficient in AWS for enhanced scalability and reliability.</Typography>
            </Grid>
        </Grid>
        </>
    )
}

export default Experience