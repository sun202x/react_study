import hoistNonReactStatic from 'hoist-non-react-statics';
import React from 'react';

// 고차 컴포넌트
function withSomething(InputComponent) {
    class OutputComponent extends React.Component {
        render() {
            return <InputComponent {...this.props} />;
        }
    };

    hoistNonReactStatic(OutputComponent, InputComponent);

    console.log(">>>> has static function: ", OutputComponent.staticFunction);
    return OutputComponent;
}

// InputComponent
class MyComponent extends React.Component {
    state = {
        name: "MyComponent"
    };

    static staticFunction = () => console.log("test");

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