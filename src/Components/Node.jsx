import React from "react";
import Accordion from "react-bootstrap/Accordion";
import Block from "./Block";


const Node = ({nodeName, nodeServer, keyNumber, blocks}) => {


    return (
        <Accordion.Item data-test="accordionItem" eventKey={keyNumber} className="mb-3 shadow p-3">
                {/* Following line is Accordion.Button instead of Accordion.Header because this last one styles the background color of the clicked element at light-blue*/}
                <Accordion.Button className="bg-white">
                    <div className="w-75 d-flex flex-column justify-content-center align-items-start node_name">
                        <div className="node-name text-dark">{nodeName}</div>
                        <div className="server-name text-secondary mt-1">{nodeServer}</div>
                    </div>
                    <div className="offset-1 text-dark status">ONLINE</div>
                </Accordion.Button>
                {blocks && blocks.map(block => <Block id={block.id} data={block.attributes.data} key={block.id.padStart(3, 0)} />)}
        </Accordion.Item>
    );
};


export default Node;