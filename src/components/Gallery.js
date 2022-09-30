import { Col, Container, Nav, Row, Tab } from "react-bootstrap";
import { GalleryCard } from "./GalleryCard";
import colorSharp2 from "../assets/img/color-sharp2.png";
import gallImg1 from "../assets/img/project-img1.png";
import gallImg2 from "../assets/img/project-img2.png";
import gallImg3 from "../assets/img/project-img3.png";
import TrackVisibility from 'react-on-screen';

export const Gallery = () => {

    const galleries = [
        {
            title: "Business Startup",
            description: "Designe & Development",
            imgUrl: gallImg1,
        },
        {
            title: "Business Startup",
            description: "Designe & Development",
            imgUrl: gallImg2,
        },
        {
            title: "Business Startup",
            description: "Designe & Development",
            imgUrl: gallImg3,
        },
        {
            title: "Business Startup",
            description: "Designe & Development",
            imgUrl: gallImg1,
        },
        {
            title: "Business Startup",
            description: "Designe & Development",
            imgUrl: gallImg2,
        },
        {
            title: "Business Startup",
            description: "Designe & Development",
            imgUrl: gallImg3,
        },
    ];
    return (
        <section className="gallery" id="gallery">
            <Container>
                <Row>
                    <Col>
                        <TrackVisibility>
                            {({ isVisible }) => 
                            <div className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                                <h2>Gallery</h2>
                                <p>
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                                    when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                                </p>
                            </div>
                            }
                        </TrackVisibility>
                        <Tab.Container id="gallery-tabs" defaultActiveKey="first">
                            <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                                <Nav.Item>
                                    <Nav.Link eventKey="first">Tab One</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="second">Tab Two</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="third">Tab Three</Nav.Link>
                                </Nav.Item>
                            </Nav>
                            <Tab.Content>
                                <Tab.Pane eventKey="first">
                                    <Row>
                                        {
                                            galleries.map((gallery, index) => {
                                                return (
                                                    <GalleryCard 
                                                    key={index}
                                                    {...gallery}
                                                    />
                                                )
                                            })
                                        }
                                    </Row>
                                </Tab.Pane>
                                <Tab.Pane eventKey="second">Loren Ipsum</Tab.Pane>
                                <Tab.Pane eventKey="third">Loren Ipsum</Tab.Pane>
                            </Tab.Content>
                        </Tab.Container>
                    </Col>
                </Row>
            </Container>
            <img className="background-image-right" src={colorSharp2} />
        </section>
    );
};