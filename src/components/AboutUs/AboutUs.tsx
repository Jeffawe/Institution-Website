import './aboutUs.scss'
import school1 from '../../assets/school1.png'
import child1 from '../../assets/child1.png'
import child2 from '../../assets/child2.png'

import { Fade, Bounce } from "react-awesome-reveal";

const AboutUs = () => {
  return (
    <div className="about-us-container">
      <div className="header">
        <Bounce>
          <img src={school1} alt="About Us Header" />
        </Bounce>
      </div>

      <div className="content">
        <Fade>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore
            magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
            est laborum.
          </p>
        </Fade>
      </div>

      <div className="image-grid">
        <div className="grid-item">
          <Fade className='fade'>
            <div className="hover-zoom">
              <img src={child1} alt="Zoomed Image" />
              <div className="overlay"></div>
              <div className="text">Text 1</div>
            </div>
          </Fade>
        </div>
        <div className="grid-item">
          <Fade className='fade'>
            <div className="hover-zoom">
              <img src={child2} alt="Zoomed Image" />
              <div className="overlay"></div>
              <div className="text">Text 2</div>
            </div>
          </Fade>
        </div>
        <div className="grid-item">
          <Fade className='fade'>
            <div className="hover-zoom">
              <img src={child2} alt="Zoomed Image" />
              <div className="overlay"></div>
              <div className="text">Text 3</div>
            </div>
          </Fade>
        </div>
        <div className="grid-item">
          <Fade className='fade'>
            <div className="hover-zoom">
              <img src={child1} alt="Zoomed Image" />
              <div className="overlay"></div>
              <div className="text">Text 4</div>
            </div>
          </Fade>
        </div>
      </div>
    </div>
  )
}

export default AboutUs
