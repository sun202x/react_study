import React from 'react';

const ThemeContext = React.createContext('dark');

class MyComponent extends React.Component {
    state = {
        theme: 'light',
    };

    componentDidMount () {
        const theme  = this.context;
        this.setState({ theme });
    }

    render () {
        const { theme } = this.state;

        return (
            <div>
                <p style={{ color: theme === 'dark' ? 'gray' : 'green' }}>
                    현재 {theme} 테마를 사용 중 입니다. 
                </p>
            </div>
        );
    }
}
// contextType으로 설정하면 하나의 context밖에 설정하지 못한다는 단점이 존재
MyComponent.contextType = ThemeContext;

export default MyComponent;