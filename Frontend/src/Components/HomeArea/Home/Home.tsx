import "./Home.css";
import image from "../../../Assets/Pictures/images.jpg"

function Home(): JSX.Element {
    return (
        <div className="Home">
            <h2>Our Home Page</h2>
            <p>The Best Furniture Store</p>
            <img src={image}/>

        </div>
    );
}

export default Home;
