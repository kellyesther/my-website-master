import React, { useRef, useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import "./App.css";
import { Link } from "react-router-dom";
import profileImage from "./assets/profileImage.jpg";
import {
  AppBar,
  Button,
  Divider,
  Toolbar,
  Typography,
} from "@material-ui/core";

export default function Home() {
  const classes = useStyles();
  const aboutMeRef = useRef(null);
  const projectsRef = useRef(null);
  const contactsRef = useRef(null);

  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  const scrollTo = (ref: any) => {
    if (ref && ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
  }, []);
  return (
    <>
      <AppBar position="static" style={{ backgroundColor: "#2E3B55" }}>
        <Toolbar>
          <Button color="inherit">Kelly Chan</Button>
          <div className={classes.buttons}>
            <Button color="inherit" onClick={() => scrollTo(aboutMeRef)}>
              About
            </Button>
            <Button color="inherit" onClick={() => scrollTo(projectsRef)}>
              Projects
            </Button>
            <Button color="inherit" onClick={() => scrollTo(contactsRef)}>
              Contact
            </Button>
          </div>
        </Toolbar>
      </AppBar>
      {/* <div className={classes.container}> */}
      <div className={classes.topContainer}>
        <div className={classes.introduction}>
          <Typography variant="h5" component="h2">
            Hi, I&apos;m Kelly Chan
          </Typography>
          <Typography variant="h5" component="h2">
            Software Developer
          </Typography>
          <Typography variant="h5" component="h2">
            Christchurch, New Zealand
          </Typography>
        </div>
        <img className={classes.profileImage} src={profileImage} alt="" />
      </div>
      {/* </div> */}

      <div className={classes.aboutMe} ref={aboutMeRef}>
        <h3>About Me</h3>

        <Divider style={{ width: "100%" }}></Divider>
        <p>
          I was born and raised in Kuching, Sarawak, a city located in the east
          side of Malaysia. I moved to Christchurch, New Zealand in 2017 to
          pursue my degree.
        </p>
        <p>
          I’ve always admired technology and Im curious on how it works. I wish
          to contribute to this industry by studying computer science. I also
          had the opportunity to study different subjects alongside my computer
          science major at the University of Canterbury. In my first year I
          decided to take a few psychology papers for interest and from then on,
          I decided to make psychology as as my second major. I enjoy learning
          about how human behaviour works and I get to understand more about
          myself and others.
        </p>
        <p>
          In my free time, I like to hang out with my friends. New Zealand is
          really diversed and I get to meet with people from different countries
          and backgrounds. I am grateful to learn more about their cultures. My
          other hobbies include reading, watching movies and shows, and playing
          video games.
        </p>
        <p>
          I’m also interested in travelling and photography. I love to go on
          road trips around New Zealand during my university breaks. I also like
          to do volunteering and have been a member of the Student Volunteer
          Army since my first year here in New Zealand.
        </p>
        <p>
          To know more about my journey as a UC student, I have an official
          university student profile which can be viewed by clicking the button
          below.
        </p>
        <div className={classes.button}>
          <Button variant="contained" color="primary">
            My UC Profile
          </Button>
        </div>
      </div>
      <div className={classes.aboutMe} ref={projectsRef}>
        <h3>Projects</h3>

        <Divider style={{ width: "100%" }}></Divider>
        <p>
          Throughout my time studying computer science in University of
          Canterbury, I managed to complete different kinds of projects in each
          of my courses. In each project or assignment, I learned how to use
          various types of technologies and code in different languages.
        </p>
        <p>
          This personal website is an additional side project that I decided to
          do at my own time. The main purpose is for me to learn more about HTML
          and CSS. The website also functions as a platform to showcase my works
          done at university and outside of it. This website is a rework written
          in React and Typescript.
        </p>
        <p>Do check out my projects page by clicking the button below</p>
        <div className={classes.button}>
          <Button
            variant="contained"
            color="primary"
            component={Link}
            to="/my-projects"
          >
            My Projects
          </Button>
        </div>
      </div>
      <div className={classes.contact} ref={contactsRef}>
        <h3>Contact</h3>

        <Divider style={{ width: "100%" }}></Divider>
        <div
          style={{
            flexDirection: "row",
            display: "flex",
            justifyContent: "space-around",
            width: "100%",
            alignItems: "center",
          }}
        >
          <div>
            <p> Phone: +64 27 5056368 </p>
            <p> Email: kellyesther97@gmail.com </p>
            <p> Location: Christchurch, New Zealand </p>
          </div>
          <div
            style={{
              alignItems: "center",
              flexDirection: "column",
              display: "flex",
            }}
          >
            <p> Other Links </p>

            <div
              style={{
                display: "flex",
                alignItems: "center",
                flexDirection: "row",
              }}
            >
              <div className={classes.otherLinks}>
                <a href="https://github.com/kec67" target="blank">
                  <img src="https://img.icons8.com/bubbles/96/000000/github.png"></img>
                </a>
                <p>GitHub</p>
              </div>
              <div className={classes.otherLinks}>
                <a
                  href="https://linkedin.com/in/kelly-esther-chan"
                  target="blank"
                >
                  <img src="https://img.icons8.com/bubbles/96/000000/linkedin.png"></img>
                </a>
                <p>LinkedIn</p>
              </div>
            </div>
          </div>
          <div
            style={{
              alignItems: "center",
              flexDirection: "column",
              display: "flex",
            }}
          >
            <p> My CV </p>
            <a
              href="https://drive.google.com/open?id=1rjaFS5Z1cwH85I8UohEckx_lJ11Llh6k"
              target="blank"
            >
              <img src="https://img.icons8.com/bubbles/96/000000/pdf-2.png"></img>
            </a>
            <p> Download CV</p>
          </div>
        </div>
      </div>
      <div className={classes.footer}>
        <p> © Kelly Chan. All Rights Reserved </p>
      </div>

      {isVisible ? (
        <div
          style={{ position: "fixed", zIndex: 1, right: 15, bottom: 40 }}
          onClick={scrollToTop}
        >
          <img
            src="https://i.postimg.cc/44Ytsk8Z/top-arrow-emoj.png"
            alt="Go to top"
          />
        </div>
      ) : (
        <></>
      )}
    </>
  );
}

const useStyles = makeStyles((theme) => ({
  buttons: {
    marginLeft: "auto",
  },

  footer: {
    backgroundImage:
      "url('http://codex-themes.com/scalia/wp-content/uploads/2014/12/footer-background-011.jpg')",
    height: 200,
    alignItems: "center",
    justifyContent: "center",
    display: "flex",
    color: "aliceblue",
  },
  topContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    backgroundImage: "url('https://wallpaperaccess.com/full/423924.jpg')",
    backgroundSize: "cover",
    height: 600,
    width: "100%",
  },
  introduction: {
    margin: 20,
    alignItems: "center",
    display: "flex",
    flexDirection: "column",
    width: "100%",
  },
  profileImage: {
    display: "flex",
    height: 300,
    width: 300,
    borderRadius: 200,
  },
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "100%",
  },

  aboutMe: {
    display: "flex",
    flexDirection: "column",
    paddingInline: 100,
  },
  contact: {
    display: "flex",
    flexDirection: "column",
    paddingInline: 100,
    alignItems: "center",
  },
  otherLinks: {
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    width: 150,
  },

  button: {
    alignSelf: "center",
  },
}));
