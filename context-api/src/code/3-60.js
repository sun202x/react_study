import React from 'react';

const UserContext = React.createContext('unknown');
const ThemeContext = React.createContext('dark');

class App extends React.Component {
    render () {
        return(
            <div>
                {/* 여러 개의 Provider 컴포넌트를 중첩해서 사용 가능 */}
                <ThemeContext.Provider value="light">
                    <UserContext.Provider value="mike">
                        <div>상단 메뉴</div>
                        <Profile />
                        <div>하단메뉴</div>
                    </UserContext.Provider>
                </ThemeContext.Provider>
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
        // Consumer 컴포넌트도 마찬가지로 중첩해서 사용가능
        <ThemeContext.Consumer>
            {theme => (
                <UserContext.Consumer>
                    {username => (
                        <p
                            style={{ color: theme === 'dark' ? 'gray' : 'green' }}
                        >{`${username}님 안녕하세요.`}</p>
                    )}
                </UserContext.Consumer>
            )}
        </ThemeContext.Consumer>

    );
}

export default App;