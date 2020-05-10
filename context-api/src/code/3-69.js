import React from 'react';

function TextInput({ textRef }) {
    return (
        <div>
            {/* 부모 컴포넌트로 부터 전달받은 ref를 설정한다. */}
            <input type="text" ref={textRef} />
            <button>저장</button>
        </div>
    );
}

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
                {/* 
                    해당 구조로 사용하는 것은 TextInput 컴포넌트 구조를 
                    알아야 하므로 꼭 필요한 경우에만 사용해야 한다. 
                */}
                <TextInput textRef={this.textRef} />
                <button onClick={this.setTextFocus}>텍스트로 이동</button>
            </div>
        );
    }
}

export default Form;