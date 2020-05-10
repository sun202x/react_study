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

    render () {
        const { showText } = this.state;

        return (
            <div>
                {/* ref를 함수로 넘길 경우 DOM 요소를 참조할 수 있는 매개변수가 넘어온다. */}
                {showText && <input type="text" ref={ref => (this.textRef = ref)} />}
                <button onClick={this.onClickFocus}>텍스트로 이동</button>
                <button onClick={this.onClickVisible}>텍스트 가리기</button>
            </div>
        );
    }
}

export default Form;