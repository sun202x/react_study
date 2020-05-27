import React from 'react';
// api 호출시 가장 많이 사용되는 피키지
import axios from 'axios';

class DataFetcher extends React.Component {
    state = {
        data: null,
    };

    componentDidMount() {
        const { url, parseData } = this.props;
        axios(url).then(response => {
            const data = parseData(response.data);
            this.setState({ data });
        });
    }
    
    render() {
        const { children } = this.props;
        const { data } = this.state;
        
        if (data == null) {
            // 데이터 도착 전까지는 DataFetcher 컴포넌트 자체에서 로딩 문구 표시
            return <p>데이터 로딩 중...</p>
        } else {
            return children({ data });
        }
    }
}

export default function F() {
    return (
        <DataFetcher
            url="https://api.github.com/repos/facebook/react"
            parseData={parseRepoData}
        >
            {({ data }) => (
                <div>
                    <p>{`name: ${data.name}`}</p>
                    <p>{`stars: ${data.stars}`}</p>
                    <p>{`open issues: ${data.openIssues}`}</p>
                </div>
            )}
        </DataFetcher>
    );
}

function parseRepoData (data) {
    return {
        name: data.name,
        stars: data.stargazers_count,
        openIssues: data.open_issues,
    };
}