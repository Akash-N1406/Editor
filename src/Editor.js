import React from 'react';
import * as Y from 'yjs';
import { MonacoBinding } from 'y-monaco';
import { Editor } from '@monaco-editor/react';
import { WebsocketProvider } from 'y-websocket';

const EditorComponent = ({ onEditorMount }) => {
  
  function handleEditorDidMount(editor) {
    // Provide reference back to App.js for download feature
    if (onEditorMount) onEditorMount(editor);

    const doc = new Y.Doc();
    const provider = new WebsocketProvider('ws://localhost:1234', 'monaco-demo', doc);
    
    // Awareness (User Info)
    const name = 'User ' + Math.floor(Math.random() * 100);
    const color = '#' + Math.floor(Math.random() * 16777215).toString(16);
    provider.awareness.setLocalStateField('user', { name, color });

    const type = doc.getText('monaco');
    new MonacoBinding(type, editor.getModel(), new Set([editor]), provider.awareness);
  }

  return (
    <Editor
      height="100%"
      defaultLanguage="javascript"
      defaultValue="// Welcome to MS-Collab"
      onMount={handleEditorDidMount}
      theme="vs-dark"
      options={{ fontSize: 14, minimap: { enabled: false } }}
    />
  );
};

export default EditorComponent;