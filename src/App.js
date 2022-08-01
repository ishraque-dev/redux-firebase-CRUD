import './App.css';
import Home from './Pages/Home';
import { Routes, Route } from 'react-router-dom';
import Posts from './Pages/Posts';
import EditPost from './Pages/EditPost';
import AddPost from './Pages/AddPost';
import NavBar from './components/NavBar';
function App() {
  return (
    <div style={{ textAlign: 'center' }}>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/posts" element={<Posts />} />
        <Route path="/addPost" element={<AddPost />} />
        <Route path="/editPost" element={<EditPost />} />
      </Routes>
    </div>
  );
}
export default App;
