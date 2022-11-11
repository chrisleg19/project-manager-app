
import {useState, useEffect} from "react"
import {Route, Routes} from "react-router-dom"
import {getUser} from "./utilities/users-service"
import AuthPage from "./pages/AuthPage";
import NewProjectPage from "./pages/NewProjectPage";
import ProjectsPage from "./pages/ProjectsPage";
import NavBar from "./components/NavBar";
import HomePage from "./pages/HomePage"
import SingleProject from "./pages/SingleProject"
import './App.css';
import projects from "./pages/ProjectsPage";


function App() {
//change the null to a blank object {} for a truthy value...(testing at the beginning of build)
//after creating token and getUser(), import and use it as initial state
const [user, setUser] = useState(getUser())

  return (
    <main className="App">
      {user ? (
      <>
      <NavBar user={user} setUser = {setUser}/>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/projects/new" element={<NewProjectPage/>}/>
        <Route path="/projects" element={<ProjectsPage project={projects}/>}/>
        <Route path="/api/projects/:id" element={<SingleProject />}/>
      </Routes> 
      </> )
      : 
      <AuthPage setUser={setUser}/>}
      
    </main>
  );
}

export default App;
