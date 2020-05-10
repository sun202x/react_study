import React from 'react';

// context API 없이 두 단계 아래의 컴포넌트로 데이터 전달
class App extends React.Component {
    render () {
        return(
            <div>
                <div>상단 메뉴</div>
                {/* Profile로 username 전달 */}
                <Profile username="mike"/>
                <div>하단메뉴</div>
            </div>
        );
    }
}

function Profile({ username }) {
    return (
        <div>
            {/* 다시 Greeting으로 username 전달 */}
            <Greeting username={username} />
        </div>
    );
}

function Greeting({ username }) {
    // 전달 받은 username 사용
    return <p>{`${username}님 안녕하세요.`}</p>
}

export default App;