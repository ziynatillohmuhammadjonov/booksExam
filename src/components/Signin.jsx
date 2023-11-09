import { Card, CardContent, Container, Typography } from "@mui/material";
import { fIcon, gIcon } from "../images";
import { Link } from "react-router-dom";

function Signin() {
  return (
    <div>
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
              sx={{ fontWeight: 700, marginBottom: "24px" }}
            >
              Sign in
            </Typography>
            <button className="flex justify-center items-center w-[100%] py-3 px-6 border rounded text-base mb-4">
              <img src={gIcon} alt="google icon" className="mr-4" />
              Continue with Google
            </button>
            <button className="flex justify-center items-center w-[100%] py-3 px-6 border rounded text-base mb-[28.5px]">
              <img src={fIcon} alt="google icon" className="mr-4" />
              Continue with Facebook
            </button>
            <div className="flex justify-between items-center text-xs mb-[28.5px]">
              <hr className="border border-black grow-1 w-[43%]" />
              OR <hr className="border border-black grow-1 w-[43%]" />
            </div>
            <form>
              <div className="mb-4">
                <label
                  htmlFor="name"
                  className="mb-1 block text-sm font-medium text-[#07074D]"
                >
                  Your name
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Enter your name"
                  className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                  autoFocus
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="mb-1 block text-sm font-medium text-[#07074D]"
                >
                  Your Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Enter your name"
                  className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="subject"
                  className="mb-1 block text-sm font-medium text-[#07074D]"
                >
                  Your username
                </label>
                <input
                  type="text"
                  name="subject"
                  id="subject"
                  placeholder="Enter your username"
                  className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="subject"
                  className="mb-1 block text-sm font-medium text-[#07074D]"
                >
                  Your password
                </label>
                <input
                  type="password"
                  name="subject"
                  id="password"
                  placeholder="Enter your password"
                  className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                />
              </div>
              <button className="flex justify-center items-center w-[100%] py-[10px] px-6 border rounded text-base mb-3 bg-[#6200ee] text-white">
                Button
              </button>
              <p className="text-center">
                Already signed up?
                <Link className="text-[#6200ee]"> Go to sign in.</Link>
              </p>
            </form>
          </CardContent>
        </Card>
      </Container>
    </div>
  );
}

export default Signin;
