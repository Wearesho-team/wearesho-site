import * as PropTypes from "prop-types";

export interface TransitionSwitchProps {
    classNames: string,
    className?: string,
    timeout?: number,
}

export const TransitionSwitchPropTypes = {
    classNames: PropTypes.string.isRequired,
    className: PropTypes.string,
    timeout: PropTypes.number,
};

export const TransitionSwitchDefaultProps = {
    timeout: 500,
};
