import React from 'react';

class TextInput extends React.Component {
    // 반환된 ref 객체를 통해 자식 요소에 접근할 수 있다.
    textRef = React.createRef();

    componentDidMount () {
        this.setTextFocus();
    }

    setTextFocus () {
        // ref 객체의 current 프로퍼티를 통해 자식요소에 접근
        debugger;
        this.textRef.current.focus();
    }

    render () {
        return (
            <div>
                {/* 접근하고자 하는 자식요소 ref 속성값에 ref 객체를 입력한다. */}
                <input type="text" ref={this.textRef} />
                <button>저장</button>
            </div>
        );
    }
}

export default TextInput;