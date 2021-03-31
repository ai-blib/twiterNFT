import * as React from 'react';
export declare class Parallax extends React.PureComponent {
    scene: React.ReactNode;
    parallax: any;
    componentDidMount(): void;
    componentWillUnmount(): void;
    static Layer: ({ depth, children, ...rest }: {
        [x: string]: any;
        depth: any;
        children: any;
    }) => JSX.Element;
    render(): JSX.Element;
}
