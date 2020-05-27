import React from 'react';

function Layout({children}) {
    // children을 함수가 아닌 리액트 요소로 넘겨받으면 코드 중복을 피할 수 있다.
    return (
        <div>
            <div>여기는 Header입니다.</div>
            {children}
            <div>여기는 Footer입니다.</div>
        </div>
    );
}

function MyComponent() {
    return (
        <Layout>
            <div><p>I'm MyComponent</p></div>
        </Layout>
    )
}

export default MyComponent;