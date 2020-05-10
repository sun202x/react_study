import React from 'react';

class Form extends React.Component {
    state = {
        showText: true,
    };

    textRef = React.createRef();

    onClickFocus = () => {
        // showText 값에 따라 input이 존재하지 않을 수 있으므로 조건부 처리한다.
        if (this.textRef.current) {
            this.textRef.current.focus();
        }
    };

    onClickVisible = () => {
        const { showText } = this.state;
        this.setState({ showText: !showText });
    };

    render () {
        const { showText } = this.state;

        return (
            <div>
                {showText && <input type="text" ref={this.textRef} />}
                <button onClick={this.onClickFocus}>텍스트로 이동</button>
                <button onClick={this.onClickVisible}>텍스트 가리기</button>
            </div>
        );
    }
}

export default Form;