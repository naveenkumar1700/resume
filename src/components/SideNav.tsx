import { Col } from "react-bootstrap"
import ProfileImg from "../assets/naveenProfileImg.svg"

import "../styles/Sidenavbar.css"
import { SideTab } from "./SideTab"
import { FaHome } from "react-icons/fa"
import { TbArrowRoundaboutRight } from "react-icons/tb"
import { AiFillFilePdf } from "react-icons/ai"
import { MdOutlineContactless } from "react-icons/md"

export const SideNav = () => {
    return (<Col xl={2} lg={2} md={2} sm={2} className="sidenavbar-container">
            <Col xl={12} lg={12} md={12} sm={12} className="image-container">
                <img src={ProfileImg} className="sideNav-image" />
            </Col>
            <Col xl={12} lg={12} md={12} sm={12} className="mt-2">
                <SideTab tabName={"Home"} redirectTo={"/home"} imgComponent={<FaHome fontSize={26} />} />
                <SideTab tabName={"About Me"} redirectTo={"/aboutme"} imgComponent={<TbArrowRoundaboutRight fontSize={26} />} />
                <SideTab tabName={"Resume"} redirectTo={"/resume"} imgComponent={<AiFillFilePdf fontSize={26} />} />
                <SideTab tabName={"Contact"} redirectTo={"/contact"} imgComponent={<MdOutlineContactless fontSize={26} />} />
            </Col>
    </Col>)
}