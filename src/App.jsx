import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Box } from "@mui/material";
import { Navbar, Footer } from "./components";
import { Home, ExerciseDetail } from "./pages";
const App = () => {
  return (
    <Box width="400px" sx={{ width: { xl: "1488px" } }} m="auto">
      <Navbar />
      <Routes>
        {/* home route*/}
        <Route path="/" element={<Home />} />
        {/* each ex page route */}
        <Route path="/exercise/:id" element={<ExerciseDetail />} />
      </Routes>
      <Footer />
    </Box>
  );
};
export default App;
