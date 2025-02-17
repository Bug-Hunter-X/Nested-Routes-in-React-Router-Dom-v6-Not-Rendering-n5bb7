import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route path="about" element={<About />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

function Home() {return <div>Home<Outlet /></div>}
function About() {return <div>About</div>}
function NotFound() {return <div>404</div>}
import { Outlet } from 'react-router-dom';
export default App;