// import
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { GoogleOAuthProvider } from "@react-oauth/google";
// components
import { Login, Navbar } from "./components/";
// constants
import { bgRectangle } from "./images/";
import { Container, createTheme, ThemeProvider } from "@mui/material";

function App() {
  const theme = createTheme({
    typography: {
      fontFamily: ["Mulish", "sans-serif", "Montserrat", "sans-serif"].join(
        ","
      ),
      htmlFontSize: 10,
    },
  });
  return (
    <ThemeProvider theme={theme}>
      <div
        style={{
          backgroundImage: `url(${bgRectangle})`,
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "contain",
          backgroundPositionY: "0",
          backgroundPositionX: "0",
          height: "100vh",
        }}
      >
        console.log();
        <GoogleOAuthProvider
          clientId={
            "65669985719-t5ihtep32r4p71a3oj5l5jgk507sf1md.apps.googleusercontent.com"
          }
        >
          <Container
            sx={{
              height: "100vh",
              maxWidth: "1288px",
            }}
          >
            <Router>
              <Routes>
                <Route path="/" element={<Login />} />
              </Routes>
            </Router>
          </Container>
        </GoogleOAuthProvider>
      </div>
    </ThemeProvider>
  );
}

export default App;
