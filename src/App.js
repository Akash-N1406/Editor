import React, { useRef } from 'react';
import EditorComponent from './Editor';
import './App.css';

function App() {
  const editorRef = useRef(null);

  const handleDownload = () => {
    if (!editorRef.current) return;
    const content = editorRef.current.getValue();
    const blob = new Blob([content], { type: 'text/javascript' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'collab-code.js';
    link.click();
  };

  return (
    <div style={{ height: "100vh", display: "flex", flexDirection: "column", background: '#1e1e1e' }}>
      <header style={{ 
        padding: '10px 20px', background: '#0078d4', color: 'white', 
        display: 'flex', justifyContent: 'space-between', alignItems: 'center' 
      }}>
        <h2 style={{ margin: 0, fontSize: '1.2rem' }}>Microsoft Collab Editor</h2>
        <button onClick={handleDownload} style={{
          padding: '8px 15px', background: '#28a745', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer'
        }}>Download .js</button>
      </header>
      
      <div className="editor-container">
        <EditorComponent onEditorMount={(editor) => (editorRef.current = editor)} />
      </div>
    </div>
  );
}

export default App;