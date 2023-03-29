import '../styles/banner.css';
const Banner = (props) => {
    let title=props.data;
    return ( 
        <div className="Banner d-flex align-items-center justify-content-center">
            {/* <img src="/images/food3.jpeg" alt="" /> */}
            <div className="title" >
                <h1 className="head1" style={{color:"white",fontSize:"90px",fontWeight:"bold"}} >{title}</h1>
            </div>
        </div>
     );
}
 
export default Banner;