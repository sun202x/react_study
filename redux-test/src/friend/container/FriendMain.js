import React from "react";
import store from "../../common/store";
import { getNextFriend } from "../../common/mockData";
import { addFriend } from "../state";
import FriendList from "../component/FriendList";
import { connect } from "react-redux";
// import * as actions from "../state";

class FriendMain extends React.Component {
    componentDidMount() {
        this.unsubscribe = store.subscribe(() => this.forceUpdate());
    }

    componentWillUnmount() {
        this.unsubscribe();
    }

    onAdd = () => {
        const friend = getNextFriend();
        this.props.addFriend(friend);
    };

    render () {
        console.log("FriendMain render");
        const { friends } = this.props;
        return (
            <div>
                <button onClick={this.onAdd}>친구 추가</button>
                <FriendList friends={friends} />
            </div>
        );
    }
}

const mapStateToProps = state => {
    return { friends: state.friend.friends };
};

const mapDispatchToProps = dispatch => {
    return {
        addFriend: friend => {
            dispatch(addFriend(friend));
        }
    };
};


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(FriendMain);

// mapDispatchToProps 함수 없이도 전달할 수 있다.
// export default connect(
//     mapStateToProps,
//     actions
// )(FriendMain);