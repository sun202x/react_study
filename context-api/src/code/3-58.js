import React from 'react';

const UserContext = React.createContext('unknown');

class App extends React.Component {
    render () {
        return(
            <div>
                <UserContext.Provider value="mike">
                    <div>상단 메뉴</div>
                    <div>하단메뉴</div>
                </UserContext.Provider>
                {/* Consumer 컴포넌트가 있다면 반드시 Provider 안쪽에 넣어야 한다. */}
                <Profile />
            </div>
        );
    }
}

function Profile() {
    return (
        <div>
            <Greeting />
        </div>
    );
}

function Greeting() {
    return (
        <UserContext.Consumer>
            {username => (
                <p>{`${username}님 안녕하세요.`}</p>
            )}
        </UserContext.Consumer>

    );
}

export default App;