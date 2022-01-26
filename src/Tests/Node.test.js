import React from "react";
import { fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import Node from "../Components/Node";
import Enzyme, { render, shallow, mount } from "enzyme";
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import { THAWING_SPRINGS_BLOCKS_URL, SECRET_LOWLANDS_BLOCKS_URL, CALM_ANCHORAGE_BLOCKS_URL } from "../Constants/URLs";

Enzyme.configure({ adapter: new Adapter() });


const setupWithShallow = (props = {}) => shallow(<Node {...props}/>);
const setupWithRender = (props = {}) => render(<Node {...props}/>);
const setupWithMount = (props = {}) => mount(<Node {...props}/>);
const findByTestAttribute = (wrapper, val) => wrapper.find(`[data-test="${val}"]`);

const response = {
    data: [
        {
            "id": "5",
            "type": "blocks",
            "attributes": {
                "index": 1,
                "timestamp": 1530679678,
                "data": "Javier Monardo",
                "previous-hash": "KsmmdGrKVDr43/OYlM/oFzr7oh6wHG+uM9UpRyIoVe8="
            }
        }
    ]
};



describe("Node", () => {
    it("block corresponding to TS node is rendered", () => {
        const wrapper = setupWithRender({nodeName: "Thawing Springs", nodeServer: THAWING_SPRINGS_BLOCKS_URL, keyNumber: "0", blocks: response.data});
        const blockElement = findByTestAttribute(wrapper, "block");
        expect(blockElement.length).toBe(1);
    });

    it("block corresponding to TS node is rendered with Javier Monardo data", () => {
        const wrapper = setupWithMount({nodeName: "Thawing Springs", nodeServer: THAWING_SPRINGS_BLOCKS_URL, keyNumber: "0", blocks: response.data});
        // console.log(wrapper.html());
        const block = findByTestAttribute(wrapper, "block");
        expect(block.find("span").text()).toEqual("Javier Monardo");
    });
});