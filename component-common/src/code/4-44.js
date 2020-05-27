import React from 'react';

class MouseTracer extends React.Component {
    state = {
        x: null,
        y: null,
    };

    onMouseMove = e => {
        this.setState({
            x: e.clientX,
            y: e.clientY,
        });
    };
    
    render() {
        const { children } = this.props;
        const { x, y } = this.state;
        
        return <div onMouseMove={this.onMouseMove}>{children({ x, y })}</div>
    }
}

export default function MyComponent() {
    return (
        // MyComponent에서 마우스 좌표값을 사용할 수 있게 되었다.
        // { x, y }처럼 명명된 매개변수로 받는 것이 좋다
        <MouseTracer>{({ x, y }) => <p>{`(x, y): (${x}, ${y})`}</p>}</MouseTracer>
    );
}