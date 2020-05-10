import React from 'react';

class Form extends React.Component {
    textInputRef = React.createRef();

    onClick = () => {
        // 컴포넌트의 ref를 이용하면 해당 컴포넌트의 메서드를 호출할 수 있다.
        this.textInputRef.current.setTextFocus();
    };

    render () {
        return (
            <div>
                {/* 컴포넌트도 ref를 설정해줄 수 있다. */}
                <TextInput ref={this.textInputRef} />
                <button onClick={this.onClick}>텍스트로 이동</button>
            </div>
        );
    }
}

class TextInput extends React.Component {
    textRef = React.createRef();

    setTextFocus () {
        this.textRef.current.focus();
    }

    render () {
        return (
            <div>
                <input type="text" ref={this.textRef} />
                <button>저장</button>
            </div>
        );
    }
}

export default Form;