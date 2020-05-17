import React from 'react';

class Animal extends React.Component {
    state = { name: this.props.name };

    componentDidMount() {
        console.log(">>> Animal Component mount!!");
    }

    componentDidUpdate() {
        console.log(">>> Animal Component update!!");
    }

    componentWillUnmount() {
        console.log(">>> Animal Component unmount!!");
    }

    render() {
        return <li>{this.state.name}</li>;
    }
}

class ListAndKey extends React.Component {
    state = {
        items: [
            { id: 1, value: 'cat' },
            { id: 2, value: 'horse' },
            { id: 3, value: 'chicken' },
        ],
    };

    handleClick = () => {
        this.setState({
            items: [
                { id: 4, value: 'dog' },
                ...this.state.items,
            ],
        });
    };

    render() {
        return (
            <div>
                <button onClick={this.handleClick}>Insert dog at 0</button>
                <ul>
                    {this.state.items.map((item, i) => (
                        <Animal key={i} name={item.value} />
                    ))}
                </ul>
            </div>
        );
    }
}

export default ListAndKey;