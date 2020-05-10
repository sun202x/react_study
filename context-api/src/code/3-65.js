import React from 'react';

const UserContext = React.createContext({ name: 'unknown' });

// 3-65, 66 통합
// 예제가 이상함...
class MyComponent extends React.Component {
    state = {
        userContextValue: {
            name: 'unknown'
        },
        // name: 'mike',
    };

    onChangeName = e => {
        const name = e.target.value;
        // this.setState({ name });
        this.setState({ userContextValue: { name } });
    };

    render () {
        // const { name } = this.state;
        const { userContextValue } = this.state;

        return (
            <div>
                {/* <UserContext.Provider value={{ name }}> */}
                <UserContext.Provider value={userContextValue}>
                    <button onClick={this.onChangeName} value="jack">jack</button>
                    <button onClick={this.onChangeName} value="mike">mike</button>

                    <div>상단 메뉴</div>
                    <Profile />
                    <div>하단메뉴</div>
                </UserContext.Provider>
            </div>
        );
    }
}

class Profile extends React.PureComponent {
    render () {
        return (
            <div>
                <Greeting />
            </div>
        );
    }
}

function Greeting() {
    return (
        <UserContext.Consumer>
            {info => {
                console.log("render Consumer component!!");

                return (
                    <React.Fragment>
                        <p>{`${info.name}님 안녕하세요.`}</p>
                    </React.Fragment>
                );
            }}
        </UserContext.Consumer>
    );
}

export default MyComponent;