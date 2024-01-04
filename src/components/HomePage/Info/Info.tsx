import { FaBook, FaBookReader } from 'react-icons/fa';
import './Info.scss';
import { Slide } from "react-awesome-reveal";

const Info = () => {
    return (
        <div className="bar">
            <Slide>
                <div className="bar-item">
                    <p>Home of Academics</p>
                </div>
                <div className="bar-item color1">
                    <FaBookReader />
                </div>
                <div className="bar-item">
                    <p>Home of Knowledge</p>
                </div>
                <div className="bar-item color2">
                    <FaBook />
                </div>
                <div className="bar-item">
                    <p>Home of Technology</p>
                </div>
            </Slide>
        </div>

    )
}

export default Info