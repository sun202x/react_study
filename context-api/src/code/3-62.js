import React from 'react';

const UserContext = React.createContext('mike');
const ThemeContext = React.createContext('dark');

class MyComponent extends React.Component {
    state = {
        username: 'unknown',
        theme: 'light',
    };

    componentDidMount () {
        const { username, theme }  = this.props;
        this.setState({ username, theme });
    }

    render () {
        const { username, theme } = this.state;

        return (
            <div>
                <p>
                    안녕하세요 {username}님
                </p>
                <p style={{ color: theme === 'dark' ? 'gray' : 'green' }}>
                    현재 {theme} 테마를 사용 중 입니다. 
                </p>
            </div>
        );
    }
}

// export default MyComponent;
export default props => (
    <UserContext.Consumer>
        {username => (
            <ThemeContext.Consumer>
                {/* context의 데이터를 MyComponent의 props로 설정한다 */}
                {theme => <MyComponent {...props} username={username} theme={theme} />}
            </ThemeContext.Consumer>
        )}
    </UserContext.Consumer>
);