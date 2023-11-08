import {
  Button,
  ButtonGroup,
  Card,
  CardContent,
  Container,
  Grid,
  ListItem,
  Typography,
} from "@mui/material";
import React from "react";

function Login() {
  return (
    <Container
      sx={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Card sx={{ width: "430px" }}>
        <CardContent>
          <Typography
            textAlign={"center"}
            fontSize={"2.5rem"}
            variant="h5"
            sx={{ fontWeight: 700 }}
          >
            Sign up
          </Typography>
          <Grid container spacing={1}>
            <Grid xs={8}>
              <ListItem sx={{ border: "solid red" }}>xs=8</ListItem>
            </Grid>
            <Grid xs={8}>
              <ListItem>xs=8</ListItem>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </Container>
  );
}

export default Login;
