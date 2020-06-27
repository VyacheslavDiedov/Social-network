import React from "react";
import { create } from "react-test-renderer";
import ProfileStatus from "./ProfileStatus";

describe("ProfileStatus component", () => {
    test("status from props should be in the state", () => {
        const component = create(<ProfileStatus status="Hello world" />);
        const instance = component.getInstance();
        expect(instance.state.status).toBe("Hello world");
    });

    test("after creation <span> should be displayed", () => {
        const component = create(<ProfileStatus status="Hello world" />);
        const root = component.root;
        const span = root.findByType("span");
        expect(span.children.length).toBe(1);
    });

    test("after creation <input> shouldn't be displayed", () => {
        const component = create(<ProfileStatus status="Hello world" />);
        const root = component.root;
        expect(() => {
            const input = root.findByType("input");
        }).toThrow();
    });

    test(`after creation <span> should contain correct status`, () => {
        const component = create(<ProfileStatus status="Hello world" />);
        const root = component.root;
        const span = root.findByType("span");
        expect(span.children[0]).toBe("Hello world");
    });

    test(`input should be displayed in editMode insted of span`, () => {
        const component = create(<ProfileStatus status="Hello world" />);
        const root = component.root;
        const span = root.findByType("span");
        span.props.onDoubleClick();
        const input = root.findByType("input");
        expect(input.props.value).toBe("Hello world");
        expect(() => {
            const spanClose = root.findByType("span");
        }).toThrow();
    });

    test(`callback should be called`, () => {
        const mockCallBack = jest.fn();
        const component = create(<ProfileStatus status="Hello world" updateStatus = {mockCallBack} />);
        const instance = component.getInstance();
        instance.deactivateEditMode();
        expect(mockCallBack.mock.calls.length).toBe(1);
    });
});