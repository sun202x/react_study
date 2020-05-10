import React from 'react';

// 3-63, 64 통합
const UserContext = React.createContext({
    username: 'unknown',
    helloCount: 0,
    onHello: () => {}
});

class App extends React.Component {
    constructor(props) {
        super(props);

        // context 데이터를 관리하기 위한 설정
        this.state = {
            username: 'mike',
            helloCount: 0,
            // this.onHello를 context 데이터로 넘겨주면서 하위 컴포넌트에서 사용할 수 있게 됨
            onHello: this.onHello
        };
    }

    onHello = () => {
        const { helloCount } = this.state;
        this.setState({ helloCount: helloCount + 1 });
    };

    render () {
        return(
            <div>
                {/* state 전체를 context data로 전달 */}
                <UserContext.Provider value={this.state}>
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
        <UserContext.Consumer>
            {value => (
                <React.Fragment>
                    <p>{`${value.username}님 안녕하세요`}</p>
                    <p>{`인사 횟수: ${value.helloCount}`}</p>
                    {/* App 컴포넌트로 부터 전달받은 onHello를 등록 */}
                    <button onClick={value.onHello}>인사하기</button>
                </React.Fragment>
            )}
        </UserContext.Consumer>
    );
}

export default App;