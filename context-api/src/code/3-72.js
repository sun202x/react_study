import React from 'react';

class Form extends React.Component {
    state = {
        showText: true,
    };

    textRef = null;

    onClickFocus = () => {
        if (this.textRef) {
            // DOM 요소가 직접 넘어오기 때문에 current가 필요하지 않음
            this.textRef.focus();
        }
    };

    onClickVisible = () => {
        const { showText } = this.state;
        this.setState({ showText: !showText });
    };

    setTextRef = ref => {
        if (ref === null) {
            console.log('돔 요소가 제거됨');
        }
        this.textRef = ref;
    };

    render () {
        const { showText } = this.state;

        return (
            <div>
                {/* render 호출시 새로운 함수를 만들지 않으므로 input 요소가 생성되거 사라질때만 setTextRef 호출한다. */}
                {showText && <input type="text" ref={this.setTextRef} />}
                <button onClick={this.onClickFocus}>텍스트로 이동</button>
                <button onClick={this.onClickVisible}>텍스트 가리기</button>
            </div>
        );
    }
}

export default Form;