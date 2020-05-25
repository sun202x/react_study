import React, { useState, Component } from 'react';

// 고차 컴포넌트
function withMountEvent(InputComopnent, componentName) {
    return class OutputComponent extends Component {
        componentDidMount() {
            sendMountEvent(componentName);
        }

        render() {
            return <InputComopnent {...this.props} />;
        }
    };
}

function withHasMounted(InputComopnent) {
    return class OutputComponent extends React.Component {
        state = {
            hasMounted: false,
        };

        componentDidMount() {
            this.setState({ hasMounted: true });
        }

        render() {
            const { hasMounted } = this.state;
            return <InputComopnent {...this.props} hasMounted={hasMounted} />;
        }
    };
}

function withOnlyLogin(InputComponent) {
    return function ({ isLogin, ...rest }) {
        const [doLogin, setDoLogin] = useState(isLogin);

        function logIn() {
            setDoLogin(!doLogin);
        }

        if (doLogin) {
            return (
                <>
                    <InputComponent {...rest} />
                    <input type="button" value="log out" onClick={logIn}></input>
                </>
            );
        } else {
            return (
                <>
                    <p>권한이 없습니다.</p>
                    <input type="button" value="log in" onClick={logIn}></input>
                </>
            );
        }
    }
}

// InputComponent
function MyComponent({ hasMounted }) {
    return (
        <>
            <p>I'm MyComponent</p>
            <p>{`마운트 되었습니까? ${hasMounted ? 'Y' : 'N'}`}</p>
        </>
    );
}

function sendMountEvent() {
    console.log("sent to server!");
}

export default withOnlyLogin(withHasMounted(withMountEvent(MyComponent, 'MyComponent')));