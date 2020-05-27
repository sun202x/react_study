import React from 'react';

class MountInfo extends React.Component {
    state = {
        hasMounted: false,
    };

    componentDidMount() {
        this.setState({ 
            hasMounted: true
        });
    }
    
    render() {
        const { children } = this.props;
        const { hasMounted } = this.state;
        // mount 정보와 함께 children 함수 호출
        return children({ hasMounted });
    }
}

class MyComponent extends React.Component {
    componentDidUpdate() {
        const { hasMounted } = this.props;
        // MountInfo에서 넘겨받은 마운트 정보를 생명주기 메서드에서 사용하고 있다.
        console.log(`lifecycle functions can access hasMounted(${hasMounted})`);
    }

    render() {
        const { hasMounted } = this.props;
        return <p>{`hasMounted: ${hasMounted}`}</p>;
    }
};

export default function MyComponentWrapper(props) {
    return (
        <MountInfo>
            {/* 마운트 정보를 MyComponent로 전달 */}
            {({ hasMounted }) => <MyComponent {...props} hasMounted={hasMounted} />}
        </MountInfo>
    );
}