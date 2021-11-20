import React from 'react';
import Styles from './Sidebar.module.scss'
import img from '../Photos/2.jpg';
import { Avatar, Container, Grid, Link, Paper, SvgIcon, Typography } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GetAppIcon from '@mui/icons-material/GetApp';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import MailIcon from '@mui/icons-material/Mail';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';


const Sidbar = () => {
    return (
        <Container fixed align='center' className={Styles.root}>
            <Grid  container spacing={2} direction='column'>
                <Grid item>
                    <Avatar className={Styles.avater}> <img src={img} alt="Abid photos" /> </Avatar>
                </Grid>
                <Grid item>
                <Typography className={Styles.sidbarName}>
                    Abidur Rahman Abid
                </Typography>
                </Grid>
                <Grid item >
                    <Paper className={Styles.sidbertitle}>
                        <Typography className={Styles.web}>Web Devloper</Typography>
                    </Paper>
                </Grid>
                <Grid item>
                        <Paper className={Styles.sidbertitle}>
                            <Link className={Styles.display}>
                                <SvgIcon className={Styles.downloadIcon}> <GetAppIcon/> </SvgIcon>
                                <Typography className={Styles.resum}>Download Resume</Typography>
                            </Link>
                        </Paper> 
                </Grid>
                <Grid item className={Styles.socialIcon}>
                    <Link><SvgIcon className={Styles.github}><GitHubIcon/> </SvgIcon></Link>
                    <Link><SvgIcon className={Styles.github}><LinkedInIcon/> </SvgIcon></Link>
                    <Link><SvgIcon className={Styles.github}><FacebookIcon/> </SvgIcon></Link>
                </Grid >
                <Grid item className={Styles.contact}>
                        <div sx={{display:'flex',JustifyContent:'center'}} className={Styles.align}>
                            <typography className={Styles.detailse}>
                                <SvgIcon className={Styles.contecticon}><LocationOnIcon/></SvgIcon>
                                Bangladesh,Dhaka
                            </typography>
                        </div>
                        <typography className={Styles.detailse}>
                            <SvgIcon className={Styles.contecticon}><MailIcon/></SvgIcon>
                                Abidkhan1603@gmail.com
                        </typography>
                        <typography className={Styles.detailse}>
                            <SvgIcon className={Styles.contecticon}><PhoneAndroidIcon/></SvgIcon>
                            01780146581,01637674086
                        </typography>
                </Grid>

                <div className="sidbaritem">Email Me</div>
            </Grid>
        </Container>
    );
};

export default Sidbar;