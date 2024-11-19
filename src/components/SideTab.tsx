import { Col } from "react-bootstrap"

import "../styles/SideTab.css"
import {  NavLink } from "react-router-dom"

type SideTabType = {
    tabName : string;
    redirectTo : string;
    imgComponent: any
}

export const SideTab : React.FC<SideTabType> = ({tabName,redirectTo,imgComponent}) => {
    return (
        <Col xl={12} lg={12} md={12} sm={12} className="Tab-Container">
            <NavLink
to={redirectTo}
className={({ isActive }) =>
isActive ? "link-class active" : "link-class"
}
>
{imgComponent}
<span>{tabName}</span>
</NavLink>
        </Col>
    )
}