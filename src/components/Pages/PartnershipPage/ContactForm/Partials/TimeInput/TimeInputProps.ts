import * as PropTypes from "prop-types";
import {BaseInputProps} from "react-context-form";

export interface TimeInputProps extends BaseInputProps<HTMLInputElement> {
    mask?: string,
    alwaysShowMask?: boolean,
    maskChar?: string,
    onCursorEnd?: (element: HTMLInputElement) => void
}

export const TimeInputPropTypes = {
    mask: PropTypes.string,
    alwaysShowMask: PropTypes.bool,
    maskChar: PropTypes.string,
    onCursorEnd: PropTypes.func
};

export const TimeInputDefaultProps = {
    mask: "99:99",
    maskChar: "-",
    alwaysShowMask: true,
};
