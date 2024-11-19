import { Col } from "react-bootstrap"

// import profileImg from "../assets/image.jpeg"
import "../styles/Home.css"

export const Home = () => {
    return (<Col xl={12} lg={12} md={12} sm={12} className="main-container">
        <div className="d-flex flex-column">
        <span className="main-text">Naveen Kumar</span>
        <span className="sub-text">Operations Engineer</span>
        </div>
        {/* <img src={profileImg} className="profile-img" /> */}
    </Col>)
}