import React from 'react';

/**
 * createContext 함수를 사용하여 context 객체 생성
 * 파라미터로 default 값을 받고 실행 반환 값으로 {Provider, Consumer}를 반환
 */
const UserContext = React.createContext('unknown');

// context API 사용하여 컴포넌트로 데이터 전달
class App extends React.Component {
    render () {
        return(
            <div>
                {/* UserContext.Provider를 통해 하위 컴포넌트에게 데이터 전달 */}
                <UserContext.Provider value="jack">
                    <div>상단 메뉴</div>
                    <Profile />
                    <div>하단메뉴</div>
                </UserContext.Provider>
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
        // UserContext.Consumer를 사용하여 상위 컴포넌트에서 전달한 데이터를 사용
        <UserContext.Consumer>
            {username => <p>{`${username}님 안녕하세요.`}</p>}
        </UserContext.Consumer>
    );
}

export default App;