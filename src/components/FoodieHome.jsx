
import '../styles/home.css'
import Navbar from './navbar';

const FoodieHome = () => {
    return (
        <div className="home">
     
            <div className="home1 ">
                <div className="image row">
                    <div  className="image col-lg-8 col-sm-12 p-0 ">
                        <img height="700px" className=" img1 col-lg-8 col-sm-12 w-100"  src="images/food15.jpeg" alt="" />
                    </div>
                    <div className="sec col-lg-4 col-sm-12 bg-warning p-5 ">
                        <p className='main_para fw-bold' style={{fontSize:"20px",textAlign:"left"}}>featured Posts</p>
                        <h1 className="head1" style={{fontSize:"70px",fontWeight:"bold",textAlign:"left"}}>love the delicious & tasty Foods</h1>
                        <hr size="5px" width="90%" color="red" />
                        <p className='para2' style={{fontSize:"20px",textAlign:"justify"}}>A small river named Duden flows by their place   and supplies it with the necessary regelialia</p>
                        <button className="btn  btn-danger text-light">Read more &rarr;</button>
                    </div>

                </div>
            </div>
            <h1 id="hg1 fw-bold">Recent Stories</h1>
            <section className="home3 row ">
                <div className="k1 col-lg-6 row  ">
                    <div className="k11 col-6">
                        <img src="/images/food1.webp" width="280px" height="250px" alt="" />
                        
                        <p>Tasty & Delicious Foods</p>
                        <a className="btn btn-warning text-danger fw-bold" href="">Read More   &rarr;</a>
                    </div>
                    <div className="k12 col-6">
                        <img  src="/images/food2.jpeg" width="280px" height="250px" alt="" />
                        <p>Tasty & Delicious Foods</p>
                        <a className="btn btn-warning text-danger fw-bold" href="">Read More   &rarr;</a>
                    </div>
                    <div className="k13 col-6">
                        <img  src="/images/food3.jpeg" width="280px" height="250px" alt="" />
                        <p>Tasty & Delicious Foods</p>
                        <a className="btn btn-warning text-danger fw-bold" href="">Read More   &rarr;</a>
                    </div>
                    <div className="k14 col-6">
                        <img  src="/images/food4.webp" width="280px" height="250px" alt="" />
                        <p>Tasty & Delicious Foods</p>
                        <a className="btn btn-warning text-danger fw-bold" href="">Read More   &rarr;</a>
                    </div>
                </div>
                <div className="k2 col-lg-6">
                    <img src="/images/food5.jpeg" width='720px' height='660px' alt="" />
                </div>
            </section>


        </div>);
}

export default FoodieHome;