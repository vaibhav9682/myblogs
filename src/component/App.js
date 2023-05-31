import { Routes, Route } from 'react-router-dom'
import { Navbar, PostDetail, CreatePost, Home, UpdatePost } from './'


function App() {
  return (
    <div className="container">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/post/:postId" element={<PostDetail />} />
        <Route path="/create-post" element={<CreatePost />} />
        <Route path="/update-post/:postId" element={<UpdatePost />} />


      </Routes>
    </div>
  );
}

export default App;
