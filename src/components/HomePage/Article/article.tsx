import child1 from '../../../assets/child1.png'
import child2 from '../../../assets/child2.png'
import './article.scss'
import { Zoom, Fade } from "react-awesome-reveal";

const article = () => {
    return (
        <div className="articles">
            {/* Article 1 */}
            <div className="article">
                <Zoom className='zoom'>
                    <div className="image left">
                        <img src={child1} alt="Two people working together" />
                    </div>
                </Zoom>
                <div className="content">
                    <Fade>
                        <h2>Lorem Ipsum</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In facilisis massa quis sem pretium, id vestibulum nunc placerat.
                            Sed pellentesque id turpis sed molestie. Donec porta est arcu, cursus varius arcu laoreet eu.
                            Sed tempus nisi enim, eu varius sem congue eu. Phasellus quis lobortis est.
                            Proin quis sapien eget dolor facilisis maximus nec ut tellus.
                            Cras tempus eros sit amet ipsum auctor, et tempor augue cursus.
                            Morbi sit amet feugiat nisi. Aenean faucibus vehicula ipsum, vitae vehicula turpis
                            vulputate ac. </p>
                        <button>Read More</button>
                    </Fade>
                </div>
            </div>

            {/* Article 2 */}
            <div className="article">
                <Zoom className='mobile zoom'>
                    <div className="image right">
                        <img src={child2} alt="Two people engaged in an activity" />
                    </div>
                </Zoom>
                <div className="content">
                    <Fade>
                        <h2>Lorem Ipsum</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In facilisis massa quis sem pretium, id vestibulum nunc placerat.
                            Sed pellentesque id turpis sed molestie. Donec porta est arcu, cursus varius arcu laoreet eu.
                            Sed tempus nisi enim, eu varius sem congue eu. Phasellus quis lobortis est.
                            Proin quis sapien eget dolor facilisis maximus nec ut tellus.
                            Cras tempus eros sit amet ipsum auctor, et tempor augue cursus.
                            Morbi sit amet feugiat nisi. Aenean faucibus vehicula ipsum, vitae vehicula turpis
                            vulputate ac. </p>
                        <button>Read More</button>
                    </Fade>
                </div>
                <Zoom className='non_mobile'>
                    <div className="image right">
                        <img src={child2} alt="Two people engaged in an activity" />
                    </div>
                </Zoom>
            </div>
        </div>
    )
}

export default article