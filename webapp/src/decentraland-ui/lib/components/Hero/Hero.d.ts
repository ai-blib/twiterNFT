import * as React from 'react';
import './Hero.css';
export declare type HeroProps = {
    width?: number;
    height?: number;
    centered?: boolean;
    className?: string;
};
export declare class Hero extends React.PureComponent<HeroProps> {
    static Header: ({ children, ...props }: {
        [x: string]: any;
        children: any;
    }) => JSX.Element;
    static Description: ({ children, ...props }: {
        [x: string]: any;
        children: any;
    }) => JSX.Element;
    static Content: ({ children, ...props }: {
        [x: string]: any;
        children: any;
    }) => JSX.Element;
    static Actions: ({ children, ...props }: {
        [x: string]: any;
        children: any;
    }) => JSX.Element;
    render(): JSX.Element;
}
