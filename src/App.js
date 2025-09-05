import logo from "./wip.png";
import "./App.css";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import * as React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";

function App() {
  return (
    <Container maxWidth="sm" sx={{ p: 2 }}>
      <Stack spacing={2}>
        <Box sx={{ borderRadius: 2, bgcolor: "#C8E6C9", p: 2 }}>
          <Stack spacing={1}>
            <Typography align="center">Thomas Karam</Typography>
            <Typography align="center">
              Technial Leader, People Manager, Team Builder
            </Typography>
            <Typography align="center">tom.karam@gmail.com</Typography>
            <div align="center">
              <a href="https://www.linkedin.com/in/thomaskaram/">LinkedIn</a>
              <span>&nbsp;|&nbsp;</span>
              <a href="https://github.com/Flynn81">GitHub</a>
              <span>&nbsp;|&nbsp;</span>
              <a href="https://stackoverflow.com/users/43796/flynn81">
                StackOverflow
              </a>
            </div>
          </Stack>
        </Box>
        <Box sx={{ borderRadius: 2, bgcolor: "#C8E6C9", p: 2 }}>
          <Stack spacing={1}>
            <Typography align="center">Recommended Reading</Typography>
            <Link
              align="center"
              href="https://www.goodreads.com/book/show/6452796-drive"
            >
              Drive
            </Link>
            <Link
              align="center"
              href="https://www.goodreads.com/book/show/67825.Peopleware"
            >
              Peopleware
            </Link>
            <Link
              align="center"
              href="https://www.goodreads.com/book/show/16158601-turn-the-ship-around"
            >
              Turn the Ship Around!
            </Link>
            <Link
              align="center"
              href="https://www.goodreads.com/book/show/2741559-tribal-leadership"
            >
              Tribal Leadership
            </Link>
            <Link
              align="center"
              href="https://www.goodreads.com/en/book/show/17255186-the-phoenix-project"
            >
              The Phoenix Project
            </Link>
            <Link
              align="center"
              href="https://www.goodreads.com/book/show/44333183-the-unicorn-project"
            >
              The Unicorn Project
            </Link>
            <Link
              align="center"
              href="https://www.goodreads.com/book/show/40492.Revolution_in_The_Valley"
            >
              Revolution in The Valley
            </Link>
            <Link
              align="center"
              href="https://www.goodreads.com/book/show/222146.Masters_of_Doom"
            >
              Masters of Doom
            </Link>
            <Link
              align="center"
              href="https://www.goodreads.com/book/show/1416925.Show_Stopper_"
            >
              Show Stopper!
            </Link>
            <Link
              align="center"
              href="https://www.goodreads.com/book/show/16158522-eleven-rings"
            >
              Eleven Rings
            </Link>
          </Stack>
        </Box>
      </Stack>
    </Container>
  );
}

export default App;
