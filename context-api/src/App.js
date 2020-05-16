import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
// import Code1 from './code/3-56.js';
// import Code1 from './code/3-57.js';
// import Code1 from './code/3-58.js';
// import Code1 from './code/3-59.js';
// import Code1 from './code/3-60.js';
// import Code1 from './code/3-61.js';
// import Code1 from './code/3-62.js';
// import Code1 from './code/3-63.js';
// import Code1 from './code/3-65.js';
// import Code1 from './code/3-67.js';
// import Code1 from './code/3-68.js';
// import Code1 from './code/3-69.js';
// import Code1 from './code/3-70.js';
// import Code1 from './code/3-71.js';
// import Code1 from './code/3-72.js';
// import Code1 from './code/3-73.js';
import Code1 from './code/ThemeApp.js';

function App() {
  return (
    <BrowserRouter>
      <div style={{ width: '1000px', margin: '0 auto' }}>
        <h3>실전 리액트 프로그래밍</h3>
        <div style={{ padding: 20, border: '5px solid gray', margin: '0 auto' }}>
          <div style={{ borderBottom: '1px solid gray', marginBottom: 20 }}>
            예제 코드 실행결과
          </div>
          <Code1 />
        </div>
        
        <Link to="">
          <button>이전</button>
        </Link>
        <Link to="">
          <button>다음</button>
        </Link>
      </div>
    </BrowserRouter>
  );
}

export default App;
