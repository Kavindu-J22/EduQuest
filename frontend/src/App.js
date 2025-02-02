import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SignIn from './components/Signin';
import SignUp from './components/Signup';
import { AuthProvider } from './contexts/AuthContext';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import HomePage from './components/HomePage';
import NavBar from './components/Navbar';
import ProfilePage from './components/Profile';
import Video from './components/Video';
import AddCoursePage from './components/AddCourse';
import ViewCoursesPage from './components/AllCourses';
import AboutUsPage from './components/About';

function App() {

  const [darkMode, setDarkMode] = useState(false);

  const lightTheme = createTheme({
    palette: {
      mode: 'light',
    },
  });

  const darkTheme = createTheme({
    palette: {
      mode: 'dark',
    },
  });

  return (
    <Router>
    <AuthProvider>
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
    <CssBaseline />
    <NavBar darkMode={darkMode} setDarkMode={setDarkMode} />
      <Routes>
      <Route path="/" element={<HomePage />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/video" element={<Video />} />
          <Route path="/addcourse" element={<AddCoursePage />} />
          <Route path="/course" element={<ViewCoursesPage />} />
          <Route path="/about" element={<AboutUsPage />} />
      </Routes>
      </ThemeProvider>
    </AuthProvider>
    </Router>
  );
}

export default App;
