import React, { useState, Component } from 'react';

// 고차 컴포넌트
function withDebug(InputComopnent) {
    return class OutputComponent extends InputComopnent {
        render() {
            return (
                <React.Fragment>
                    <p>props: {JSON.stringify(this.props)}</p>
                    <p>state: {JSON.stringify(this.state)}</p>
                    {super.render()}
                </React.Fragment>
            );
        }
    };
}

function withDiv(InputComopnent) {
    return class OutputComponent extends InputComopnent {
        render() {
            const rendered = super.render();
            if (rendered && rendered.type !== 'div') {
                return React.createElement('div', null, rendered);
            }
            return rendered;
        }
    };
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

export default withDiv(withDebug(MyComponent));