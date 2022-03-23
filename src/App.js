import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import { NavBarContainer } from './containers/NavBarContainer/NavBarContainer'
import { AboutContainer } from './containers/AboutContainer/AboutContainer';
import { HomeContainer } from './containers/HomeContainer/HomeContainer';
import { WorkContainer } from './containers/WorkContainer/WorkContainer';
import { ContactContainer } from './containers/ContactContainer/ContactContainer';
import { BlogContainer } from './containers/BlogContainer/BlogContainer';
import { SkillsContainer } from './containers/SkillsContainer/SkillsContainer';

const App = () => {
  const routes = [{name: 'Home', path:'/', element: <HomeContainer />},
                    {name: 'About', path: '/about', element: <AboutContainer />},
                    {name: 'Skills', path: '/skills', element: <SkillsContainer />},
                    {name: 'Work', path: '/work', element: <WorkContainer />},
                    {name: 'Contact', path: '/contact', element: <ContactContainer />},
                    {name: 'Blog', path: '/blog', element: <BlogContainer />}
                   ]
  return (
    <Router>
      <NavBarContainer routes={routes}/>
      <Routes>
        {routes.map((route, index) => <Route key={index} path={route.path} element={route.element}/>)}
      </Routes>
    </Router>
  );
}

export default App;
