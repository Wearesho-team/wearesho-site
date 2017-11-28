import * as React from "react";
import {BaseInput} from "react-context-form";
import {ReactInputMask} from "../../../../../helpers/imports/reactInputMask"

import {PhoneInputProps, PhoneInputPropTypes} from "./PhoneInputProps";

export class PhoneInput extends BaseInput<HTMLInputElement> {
    public static readonly propTypes = PhoneInputPropTypes;

    public props: PhoneInputProps;

    protected maskElement: typeof ReactInputMask;
    protected maskList: string [];

    public constructor(props) {
        super(props);

        this.maskList = this.props.maskList
            .sort((prev, curr) => prev.replace(/\D/g, "").length - curr.replace(/\D/g, "").length);
    }

    public async componentDidUpdate() {
        if (document.activeElement !== this.maskElement.input) {
            return;
        }

        this.maskElement.setCursorPos(this.maskElement.input.selectionStart);
        if (this.maskElement.value !== this.context.value) {
            // tslint:disable:no-object-literal-type-assertion
            await this.handleChange({
                currentTarget: {
                    value: this.context.value
                }
            } as React.ChangeEvent<HTMLInputElement>);
            this.maskElement.setCursorPos(this.maskElement.input.selectionStart);
        }
    }

    public render(): JSX.Element {
        const {maskList, ...nativeProps} = this.childProps as PhoneInputProps;

        const value = this.context.value || "";
        const mask = this.getCurrentMask(value.replace(/\D/g, "").length);

        const inputProps = {
            ...nativeProps,
            ...{
                onChange: this.handleChange,
                onPaste: this.handlePaste,
                ref: this.setElement,
                maskChar: "",
                type: "tel",
                value,
                mask
            }
        };

        return (
            <ReactInputMask {...inputProps}/>
        );
    }

    protected setElement = (element: typeof ReactInputMask): void => {
        if (!(element instanceof ReactInputMask)) {
            this.maskElement = undefined;
            return;
        }

        this.maskElement = element;
        if (this.childProps.ref instanceof Function) {
            this.childProps.ref(element.input);
        }
    };

    protected getCurrentMask(valueLength: number): string {
        return this.maskList
            .reduce((prev, curr) => prev.replace(/\D/g, "").length > valueLength ? prev : curr)
    }

    protected handlePaste = async (event: ClipboardEvent): Promise<void> => {
        event.preventDefault();

        const value = event.clipboardData.getData("Text");
        if (!value) {
            return;
        }

        // tslint:disable:no-object-literal-type-assertion
        await this.handleChange({
            currentTarget: {
                value: event.clipboardData.getData("Text")
            }
        } as React.ChangeEvent<HTMLInputElement>);
    }
}
