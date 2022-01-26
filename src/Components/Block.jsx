import React from "react";
import Accordion from "react-bootstrap/Accordion";


const Block = ({id, data}) => {

    return (
        <>
            <Accordion.Body data-test="block" className="block-info mt-2">
                <h6 className="block-id-color">{id.padStart(3, 0)}</h6>
                <span>{data}</span>
            </Accordion.Body>
        </>
    );
};


export default Block;