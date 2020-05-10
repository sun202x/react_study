import React from 'react';

// forwardRef 함수를 사용하면 부모 컴포넌트에서 넘어온 ref 속성 값을 직접적으로 처리 할 수 있다.
const TextInput = React.forwardRef((props, ref) => (
    <div>
        <input type="text" ref={ref} />
        <button>저장</button>
    </div>
));

class Form extends React.Component {
    textRef = React.createRef();

    componentDidMount () {
        this.setTextFocus();
    }

    setTextFocus = () => {
        this.textRef.current.focus();
    }

    render () {
        return (
            <div>
                <TextInput ref={this.textRef} />
                <button onClick={this.setTextFocus}>텍스트로 이동</button>
            </div>
        );
    }
}

export default Form;