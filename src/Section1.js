import image2 from './image2.jpg';
import './Section1.css';

function Section1(){
    
    return(
        <section >
            <div className="box1" key="About">

            </div>

            <div className="box2">
                <div className="img1">
                    <img src={image2} />
                </div>
                <div className="cont">
                    <h1>Find your Destination</h1>
                    <p>
                        Right place to know everything for your destination.
                        Right place to know everything for your destination.
                        Right place to know everything for your destination.
                        Right place to know everything for your destination.
                        Right place to know everything for your destination.
                        Right place to know everything for your destination.
                    </p>
                </div>
            </div>
        </section>
    );
}

export default Section1;