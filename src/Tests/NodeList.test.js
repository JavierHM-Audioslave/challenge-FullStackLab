import React from "react";
import { fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import NodeList from "../Components/NodeList";
import Node from "../Components/Node";
import Enzyme, { render, shallow } from "enzyme";
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import { THAWING_SPRINGS_BLOCKS_URL, SECRET_LOWLANDS_BLOCKS_URL, CALM_ANCHORAGE_BLOCKS_URL } from "../Constants/URLs";

Enzyme.configure({ adapter: new Adapter() });




const setupWithShallow = (props = {}) => shallow(<NodeList {...props}/>);
const setupWithRender = (props = {}) => render(<NodeList {...props}/>);
const findByTestAttribute = (wrapper, val) => wrapper.find(`[data-test="${val}"]`);




describe("NodeList", () => {

    it("TWServer element always renders", () => {
        const wrapper = setupWithShallow();
        const tWServerNode = findByTestAttribute(wrapper, "TWServer");
        expect(tWServerNode.length).toBe(1);
    });

    it("SLServer element always renders", () => {
        const wrapper = setupWithShallow();
        const sLServerNode = findByTestAttribute(wrapper, "SLServer");
        expect(sLServerNode.length).toBe(1);
    });

    it("CAServer element always renders", () => {
        const wrapper = setupWithShallow();
        const cAServerNode = findByTestAttribute(wrapper, "CAServer");
        expect(cAServerNode.length).toBe(1);
    });


    it("one block by each Node component is rendered", async () => {

        const wrapper = setupWithRender();
        const tWServerNode = findByTestAttribute(wrapper, "accordionItem");
        expect(tWServerNode.length).toBe(3);
    });
});