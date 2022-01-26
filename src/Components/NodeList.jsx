import React, {useEffect} from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Accordion from "react-bootstrap/Accordion";
import Node from "./Node";
import { THAWING_SPRINGS_BLOCKS_URL, SECRET_LOWLANDS_BLOCKS_URL, CALM_ANCHORAGE_BLOCKS_URL } from "../Constants/URLs";
import { getBlocks } from "../Services/NodeServices";



const NodeList = () => {

    const [thawingSpringsBlocks, setThawingSpringsBlocks] = React.useState();
    const [secretLowLandsBlocks, setSecretLowLandsBlocks] = React.useState();
    const [calmAnchorageBlocks, setCalmAnchorageBlocks] = React.useState();

    useEffect(() => {
        const intervalId = setInterval(async () => {
            try {
                const {data} = await getBlocks(THAWING_SPRINGS_BLOCKS_URL);
                setThawingSpringsBlocks(data.data);
            } catch(error) {
                console.error(error);
            }
        }, 5000);

        return (() => clearInterval(intervalId));
    }, []);


    useEffect(() => {
        const intervalId = setInterval(async () => {
            try {
                const {data} = await getBlocks(SECRET_LOWLANDS_BLOCKS_URL);
                setSecretLowLandsBlocks(data.data);
            } catch(error) {
                console.error(error);
            }

            return (() => clearInterval(intervalId));
        }, 5000);
    }, []);


    useEffect(() => {
        const intervalId = setInterval(async () => {
            try {
                const {data} = await getBlocks(CALM_ANCHORAGE_BLOCKS_URL);
                setCalmAnchorageBlocks(data.data);
            } catch(error) {
                console.error(error);
            }

            return (() => clearInterval(intervalId));
        }, 5000);
    }, []);


    return (
        <header>
            <Container>
                <Row className="mt-4 justify-content-center">
                    <Col xs="12" xl="8">
                        <p className="fw-bold fs-2">NODES</p>
                        <Row>
                            <Col xs="12">
                                <Accordion>
                                    <Node data-test="TWServer" nodeName="Thawing Springs" nodeServer={THAWING_SPRINGS_BLOCKS_URL} keyNumber="0" blocks={thawingSpringsBlocks}/>
                                    <Node data-test="SLServer" nodeName="Secret Lowlands" nodeServer={SECRET_LOWLANDS_BLOCKS_URL} keyNumber="1" blocks={secretLowLandsBlocks}/>
                                    <Node data-test="CAServer" nodeName="Calm Anchorage" nodeServer={CALM_ANCHORAGE_BLOCKS_URL} keyNumber="2" blocks={calmAnchorageBlocks}/>
                                </Accordion>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </header>
    );
};

export default NodeList;