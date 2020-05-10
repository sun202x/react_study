import React from 'react';

const UserContext = React.createContext('unknown');

class App extends React.Component {
    state = {
        username: '',
    };

    onChangeName = e => {
        const username = e.target.value;
        this.setState({ username });
    };

    render () {
        const { username } = this.state;
        return(
            <div>
                <UserContext.Provider value={username}>
                    <Profile />
                </UserContext.Provider>
                <input type="text" value={username} onChange={this.onChangeName} />
            </div>
        );
    }
}

/**
 * React.PureComponent는 shouldComponentUpdate가 이미 구현 되어 있으며,
 * props와 state를 얕은 비교(1 depth)를 통해 변경된 것이 있을 때만 다시 렌더링한다.
 */
class Profile extends React.PureComponent {
    // props와 state가 없기 때문에 최초 렌더 이후 shouldComponentUpdate의 반환값이 false이다.
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
            {username => <p>{`${username}님 안녕하세요.`}</p>}
        </UserContext.Consumer>
    );
}

export default App;