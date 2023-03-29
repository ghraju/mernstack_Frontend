import { Route,Routes } from "react-router-dom";
import About from "./about";
import AddPost from "./AddPosts";
import Banner from "./banner";
import FoodieHome from "./FoodieHome";
import Navbar from "./navbar";
import Posts from "./posts";
import SinglePost from "./singlePost";
const HomePortal = () => {
    return ( 
        <div className="HomePortal">
           <Navbar/>
            <Routes>
                <Route path="/" element={<FoodieHome/>} />
                <Route path="/about" element={<About/>}/>
                <Route path="/add-posts" element={<AddPost/>}/>
                <Route path="/posts" element={<Posts/>}/>
                <Route path="/posts/:id" element={<SinglePost/>}/>
                
            </Routes>
        </div>
     );
}
 
export default HomePortal;