import { useState } from "react";

import destination1 from './destination1.jpg';
import destination2 from './destination2.jpg';
import destination3 from './destination3.jpg';
import like from './like.png';
import './Section2.css';

// import { FaHeart } from "react-icons/fa";
{/* <FaHeart /> */ }

const data = [
    {
        id: 1,
        image: destination1,
        destination: "Moscow",
        description: "Apple a day keeps doctor away.",
        text: "Let's Go"
    },
    {
        id: 2,
        image: destination2,
        destination: "India",
        description: "Mango is sweet, yellow in color.",
        text: "Let's Go"
    },
    {
        id: 3,
        image: destination3,
        destination: "Singapore",
        description: "Several tastes are avalable. Enjoy!!!",
        text: "Let's Go"
    }

];


function Cards() {

    const [num, setNum] = useState(0);
    const inc = () => {
        setNum(num + 1);

    }

    return (
        <div className="section2">
            <h1>Choose your Dream place</h1>
            <div className="cards">
                {data.map((info) => {
                    const { id, image, destination, description, text } = info;

                    return (
                        <div className="card" key={id}>
                            <div className="card-img" style={{ backgroundImage: `url(${image})`, backgroundRepeat: "no-repeat", backgroundSize: "cover" }}>
                                <div className="space">
                                    <div className="location">{destination}</div>
                                    <div className="heart">Heart</div>
                                </div>
                                <div className="text">
                                    <button>Explore More...</button>
                                </div>
                            </div>
                            <div className="dest-info">
                                {description}
                                Add capsule with thumbs up and count of it.
                                Add capsule with thumbs up and count of it.
                            </div>

                            <div className="go-like">
                                <button className="go">{text}</button>
                                {/* <div className="like">
                                    <div onClick={inc}>
                                        <img src={like} />
                                    </div>
                                    <div></div>
                                    <div>{num}</div>
                                </div> */}
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default Cards;