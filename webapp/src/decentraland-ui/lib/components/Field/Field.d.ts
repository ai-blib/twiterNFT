import * as React from 'react';
import { InputProps } from 'semantic-ui-react';
import './Field.css';
export declare type FieldProps = InputProps & {
    label?: string;
    error?: boolean;
    message?: string;
    action?: string;
    onAction?: (event: React.MouseEvent<HTMLButtonElement>) => void;
};
export declare class Field extends React.PureComponent<FieldProps> {
    hasAction(): (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
    isAddress(): boolean;
    render(): JSX.Element;
}
