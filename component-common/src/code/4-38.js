import getDisplayName from 'recompose/getDisplayName';
import React from 'react';

// 고차 컴포넌트
function withSomething(InputComponent) {
    class OutputComponent extends InputComponent {
        render() {
            const rendered = super.render();
            if (rendered && rendered.type !== 'div') {
                return React.createElement('div', null, rendered);
            }
            return rendered;
        }
    }

    // OutputComponent.displayName =
    //     `withSomething(${getDisplayName(InputComponent)})`;
    return OutputComponent;
}

// InputComponent
class MyComponent extends React.Component {
    state = {
        name: "MyComponent"
    };

    render() {
        const { name } = this.state;

        return (
            <>
                <p>I'm {name}</p>
            </>
        );
    }
};


export default withSomething(MyComponent);