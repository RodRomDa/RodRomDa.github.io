import {AuthProvider, RequireAuth} from './services/Auth';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Redirect from './pages/Redirect';
import PageLayout from './pages/PageLayout';
import Login from './pages/Login';
import Error from './pages/Error';
import Home from './pages/Home';
import Themes from './pages/Themes';
import NewTheme from './pages/NewTheme';
import NewIdea from './pages/NewIdea';
import OneTheme from './pages/OneTheme';
import Idea from './pages/Idea';
import ScrollUp from './services/ScrollUp';


function App() {
  return (
    <AuthProvider>
      <Router>
        <ScrollUp>
          <Routes>
              <Route element={<RequireAuth>
                                    <PageLayout/>
                              </RequireAuth>} >
                <Route path="themes" element={<Themes/>}/>
                <Route path="themes/:themeId" element={<OneTheme/>} />    
                <Route path="themes/new" element={<NewTheme/>}/>
                <Route path="themes/:themeId/idea/:ideaId" element={<Idea/>}/>
                <Route path="themes/:themeId/idea/new" element={<NewIdea/>}/>
                
                <Route path="*" element={<Error/>} />
                <Route path="/" element={<Redirect/>} />
              </Route>

              <Route path="login" element={<Login/>} />
          </Routes>
        </ScrollUp>
      </Router>
    </AuthProvider>
  );
}

export default App;
