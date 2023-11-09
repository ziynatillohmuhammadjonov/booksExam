// import
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// components
import { Login, Navbar } from "./components/";
// constants
import { bgRectangle } from "./images/";
import { Container, createTheme, ThemeProvider } from "@mui/material";
import Signin from "./components/Signin";
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
      </div>
    </ThemeProvider>
  );
}

export default App;
