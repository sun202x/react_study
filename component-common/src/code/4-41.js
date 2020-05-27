import React from 'react';

class MountEvent extends React.Component {
    componentDidMount() {
        const { name } = this.props;
        sendMountEvent(name);
    }
    
    render() {
        const { children } = this.props;
        // chilren 함수의 결과값을 반환
        return children();
    }
}

// InputComponent
function MyComponent() {
    return (
        // 결과적으론 <p>I'm MyComponent</p>가 렌더링 됨
        <MountEvent name="MyComponent">{() => <p>I'm MyComponent</p>}</MountEvent>
    );
    return (
        // 이것처럼 다른 속성값 이름을 사용해도 무방하다.
        <MountEvent name="MyComponent" render={() => <p>I'm MyComponent</p>} />
    );
}

function sendMountEvent(name) {
    console.log("sent to server! ", name);
}

export default MyComponent;