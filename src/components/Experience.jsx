import * as React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import Typography from '@mui/material/Typography';
import { useState, useEffect } from 'react';
import { createTheme } from '@mui/material/styles';
import { ThemeProvider } from '@mui/material/styles';

const Experience = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 640px)');

    setIsMobile(mediaQuery.matches);

    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    mediaQuery.addEventListener('change', handleMediaQueryChange);

    return () => {
      mediaQuery.removeEventListener('change', handleMediaQueryChange);
    };
  }, []);
  if (isMobile) {
    const theme = createTheme({
      typography: {
        h8: {
          fontSize: 10,
        },
        body1: {
          fontWeight: 400,
        },
      },
    });
    return (
      <section
        id="experience"
        className="flex flex-col mt-24 ss:mt-44 justify-center items-center gap-10 text-primary">
        <p1 className=" font-poppins font-semibold text-4xl tracking-wide">
          Experience
        </p1>
        <div className=" mt-12 sm:w-3/5 flex flex-col gap-16 justify-center items-center">
          <div className="flex-col flex gap-4 w-[80%] justify-center items-center">
            <p className=" font-poppins font-semibold text-gray-500 text-base">
              Competitive Programmer
            </p>
            <p className=" text-sm">
              {' '}
              I’m into competitive programming I m a core member in the PSD
              (Problem solving division) , competed in several competitions like
              code forces competitions, TCPC (Tunisian competitive programming
              competition ) ,IEEEXtreme and Google hash code and managed to
              experience solving puzzles and problems using c++ as a programming
              language .
            </p>
          </div>
          <div className="flex-col flex gap-4 w-[80%] justify-center items-center">
            <p className=" font-poppins font-semibold text-gray-500 text-base">
              Frontend developer
            </p>
            <p className=" text-sm">
              {' '}
              I have a solid understanding of front-end technologies, including
              HTML, CSS, JavaScript, and various libraries and frameworks such
              as React . I am also skilled in responsive design, cross-browser
              compatibility, and web accessibility.
            </p>
          </div>
          <div className="flex-col flex gap-4 w-[80%] justify-center items-center">
            <p className=" font-poppins font-semibold text-gray-500 text-base">
              IEEE Core member
            </p>
            <p className=" text-sm">
              {' '}
              I have been a core member in IEEE ISSAT So SB where I was a
              treasurer of the IAS (industry application society) and the
              webmaster in the PES (power and energy society) chapters and
              within this association I didn’t only manage to learn technical
              and soft skills but also earn friends and build connection with a
              lot of people out there.
            </p>
          </div>
          <div className="flex-col flex gap-4 w-[80%] justify-center items-center">
            <p className=" font-poppins font-semibold text-gray-500 text-base">
              Game Designer
            </p>
            <p className=" text-sm">
              {' '}
              I had also an experience as a part of a great team in the global
              game jam competition where we competed twice there and managed to
              get 5fth place in the second time, you can check the games we made
              over here (link).
            </p>
          </div>
          <div className="flex-col flex gap-4 w-[80%] justify-center items-center">
            <p className=" font-poppins font-semibold text-gray-500 text-base">
              Freelancer ( UI/UX )
            </p>
            <p className=" text-sm">
              {' '}
              I am a UI/UX freelancer with a passion for designing digital
              products that provide an optimal user experience. My expertise
              lies in creating intuitive and visually appealing interfaces that
              are easy to use and meet the needs of the target audience.
            </p>
          </div>
          <div className="flex-col flex gap-4 w-[80%] justify-center items-center">
            <p className=" font-poppins font-semibold text-gray-500 text-base">
              Gomycode UI/UX instructor
            </p>
            <p className=" text-sm">
              {' '}
              With a talent for simplifying complex concepts and a patient and
              encouraging teaching style, I have a proven track record of
              empowering students to achieve their learning goals.
            </p>
          </div>
        </div>
      </section>
    );
  } else
    return (
      <section
        id="experience"
        className="flex flex-col mt-24 ss:mt-44 justify-center items-center gap-10 text-primary">
        <p1 className=" font-poppins font-semibold text-4xl tracking-wide">
          Experience
        </p1>
        <div className=" mt-12 sm:w-3/5">
          <Timeline
            position="alternate"
            style={{
              '@media (max-width: 600px)': {
                '.MuiTimelineItem-root': {
                  flexDirection: 'column !important',
                  alignItems: 'flex-start !important',
                },
                '.MuiTimelineItem-missingOppositeContent:before': {
                  display: 'none !important',
                },
                '.MuiTypography-h6': {
                  marginBottom: '8px !important',
                },
                '.MuiTypography-root': {
                  fontSize: '14px !important',
                },
              },
            }}>
            <TimelineItem>
              <TimelineSeparator>
                <TimelineDot />
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent>
                <Typography variant="h6" component="span">
                  Competitive Programmer
                  <br />
                  <br />
                </Typography>
                <Typography>
                  {' '}
                  I’m into competitive programming I m a core member in the PSD
                  (Problem solving division) , competed in several competitions
                  like code forces competitions, TCPC (Tunisian competitive
                  programming competition ) ,IEEEXtreme and Google hash code and
                  managed to experience solving puzzles and problems using c++
                  as a programming language .
                </Typography>
              </TimelineContent>
            </TimelineItem>
            <TimelineItem>
              <TimelineSeparator>
                <TimelineDot />
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent>
                <Typography variant="h6" component="span">
                  Frontend developer
                  <br />
                  <br />
                </Typography>
                <Typography align="left">
                  I have a solid understanding of front-end technologies,
                  including HTML, CSS, JavaScript, and various libraries and
                  frameworks such as React . I am also skilled in responsive
                  design, cross-browser compatibility, and web accessibility.
                </Typography>
              </TimelineContent>
            </TimelineItem>
            <TimelineItem>
              <TimelineSeparator>
                <TimelineDot />
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent>
                <Typography variant="h6" component="span">
                  Core IEEE member
                  <br />
                  <br />
                </Typography>
                <Typography>
                  I have been a core member in IEEE ISSAT So SB where I was a
                  treasurer of the IAS (industry application society) and the
                  webmaster in the PES (power and energy society) chapters and
                  within this association I didn’t only manage to learn
                  technical and soft skills but also earn friends and build
                  connection with a lot of people out there.
                </Typography>
              </TimelineContent>
            </TimelineItem>
            <TimelineItem>
              <TimelineSeparator>
                <TimelineDot />
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent>
                <Typography variant="h6" component="span">
                  Game Designer
                  <br />
                  <br />
                </Typography>
                <Typography align="left">
                  I had also an experience as a part of a great team in the
                  global game jam competition where we competed twice there and
                  managed to get 5fth place in the second time, you can check
                  the games we made over here (link).
                </Typography>
              </TimelineContent>
            </TimelineItem>
            <TimelineItem>
              <TimelineSeparator>
                <TimelineDot />
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent>
                <Typography variant="h6" component="span">
                  Freelancer ( UI/UX )
                  <br />
                  <br />
                </Typography>
                <Typography>
                  I am a UI/UX freelancer with a passion for designing digital
                  products that provide an optimal user experience. My expertise
                  lies in creating intuitive and visually appealing interfaces
                  that are easy to use and meet the needs of the target
                  audience.
                </Typography>
              </TimelineContent>
            </TimelineItem>
            <TimelineItem>
              <TimelineSeparator>
                <TimelineDot />
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent>
                <Typography variant="h6" component="span">
                  Gomycode UI/UX instructor
                  <br />
                  <br />
                </Typography>
                <Typography align="left">
                  With a talent for simplifying complex concepts and a patient
                  and encouraging teaching style, I have a proven track record
                  of empowering students to achieve their learning goals.
                </Typography>
              </TimelineContent>
            </TimelineItem>
            <TimelineItem>
              <TimelineSeparator>
                <TimelineDot />
              </TimelineSeparator>
              <TimelineContent>
                <Typography variant="h6" component="span">
                  <br />
                  <br />
                </Typography>
                <Typography></Typography>
              </TimelineContent>
            </TimelineItem>
          </Timeline>
        </div>
      </section>
    );
};

export default Experience;
