import React, { useState, useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';

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
    const [Component, setComponent] = useState();

    const movePrevious = () => {
        const preIndex = Math.max(currentIndex - 1, 0);
        setCurrentIndex(preIndex);
    }

    const moveNext = () => {
        const nextIndex = Math.min(currentIndex + 1, examples.length - 1);
        setCurrentIndex(nextIndex);
    }

    useEffect(() => {
        import(`./code/${examples[currentIndex]}`).then((module) => {
            let instance;

            if (!module.default.prototype) {
                instance = () => {
                    return {
                        render: () => module.default()
                    }
                }
            } else {
                instance = new module.default();
            }

            setComponent(instance);
        });
    }, [currentIndex]);

    return (
        <BrowserRouter>
            <div style={{ width: '1000px', margin: '0 auto' }}>
                <h3>실전 리액트 프로그래밍</h3>
                <div style={{ padding: 20, border: '5px solid gray', margin: '0 auto', height: '600px' }}>
                    <div style={{ borderBottom: '1px solid gray', marginBottom: 20 }}>
                        예제 코드({examples[currentIndex]}) 실행결과
                    </div>
                    {Component && Component.render()}
                </div>

                <button onClick={movePrevious}>이전</button>
                <button onClick={moveNext}>다음</button>
            </div>
        </BrowserRouter>
    );
}

export default App;
