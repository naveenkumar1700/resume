import { Container,Row,Col} from "react-bootstrap"
import { Outlet } from "react-router-dom"
import { SideNav } from "./SideNav"


const mainContainerStyle : React.CSSProperties = {
    position: "absolute",
    left: "16.67%",
    top:0,
    bottom: 0,
    padding: 0
}

export const Layout = () => {
    return (
        <Container fluid className="m-0 p-0">
            <Row className="m-0 p-0">
                    <SideNav />
                <Col xl={10} lg={10} md={10} sm={10} style={mainContainerStyle}>
                    <Outlet />
                </Col>
            </Row>
        </Container>
    )
}