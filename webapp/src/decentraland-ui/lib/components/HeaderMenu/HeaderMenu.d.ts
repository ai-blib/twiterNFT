import * as React from 'react';
import './HeaderMenu.css';
export declare type HeaderMenuProps = {
    stackable?: boolean;
};
export declare class HeaderMenu extends React.PureComponent<HeaderMenuProps> {
    static defaultProps: Partial<HeaderMenuProps>;
    static Left: ({ children }: {
        children: any;
    }) => JSX.Element;
    static Right: ({ children }: {
        children: any;
    }) => JSX.Element;
    render(): JSX.Element;
}
