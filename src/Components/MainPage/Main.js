import { Container, Grid, Paper, Typography } from '@mui/material';
import React from 'react';
import { useStyle } from './MainStyle';
import styles from "./Main.module.scss";
import Sidbar from '../Sidebar/Sidbar';



const Main = () => {
    const classes = useStyle()
    return (
            <Container maxWidth="xl">
                <Grid container spacing={3} sx={{marginTop: "20px", height: "90vh"}}>
                <Grid item xs={12}  md={4} lg={3}>
                    <Paper className={classes.first}>
                        <Sidbar></Sidbar>
                    </Paper>
                </Grid>
                <Grid item xs={12} md={8} lg={9}>
                    <Paper className={classes.second}>
                        
                    </Paper>
                </Grid>
            </Grid>
            </Container>

            
    );
};

export default Main;