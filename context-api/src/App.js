import React, { useState, useEffect } from 'react';

function App() {
    const examples = [
        "3-56",
        "3-57",
        "3-58",
        "3-59",
        "3-60",
        "3-61",
        "3-62",
        "3-63",
        "3-65",
        "3-67",
        "3-68",
        "3-69",
        "3-70",
        "3-71",
        "3-72",
        "3-73",
        "ThemeApp",
    ];

    const [currentIndex, setCurrentIndex] = useState(0);
    const [Component, setComponent] = useState({});

    const moveFirst = () => moveExample(0);
    const movePrevious = () => moveExample(currentIndex - 1);
    const moveNext = () => moveExample(currentIndex + 1);
    const moveLast = () => moveExample(examples.length - 1);
    const moveExample = (index) => setCurrentIndex(Math.max(Math.min(index, examples.length - 1), 0));

    useEffect(() => {
        import(`./code/${examples[currentIndex]}`).then((module) => setComponent({ comp: module.default }));
    }, [currentIndex]);

    return (
        <div style={{ width: '1000px', margin: '0 auto' }}>
            <h3>실전 리액트 프로그래밍</h3>
            <div style={{ padding: 20, border: '5px solid gray', margin: '0 auto', height: '600px' }}>
                <div style={{ borderBottom: '1px solid gray', marginBottom: 20 }}>
                    예제 코드({examples[currentIndex]}) 실행결과
                </div>

                {Component.comp && (<Component.comp />)}
            </div>

            <button onClick={moveFirst}>{`<<`}</button>
            <button onClick={movePrevious}>{`<`}</button>
            <button onClick={moveNext}>{`>`}</button>
            <button onClick={moveLast}>{`>>`}</button>
        </div>
    );
}

export default App;
