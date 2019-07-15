import React from 'react';
import Accordion from './components/Accordion'
import './App.css';

function App() {
    return (
        <div className="App">
            <Accordion 
                title="Which versions of React include Hooks?" 
                content="Starting with 16.8.0, React includes a stable implementation of React Hooks 
                for: React DOM, React DOM Server, React Test Renderer, React Shallow Renderer. Note that 
                to enable Hooks, all React packages need to be 16.8.0 or higher. Hooks won’t work if 
                you forget to update, for example, React DOM."
            />
            <Accordion 
                title="Do I need to rewrite all my class components?" 
                content="No. There are no plans to remove classes from React — we all need to keep 
                shipping products and can’t afford rewrites. We recommend trying Hooks in new code."
            />
            <Accordion 
                title="How much of my React knowledge stays relevant?" 
                content="<p>Hooks are a more direct way to use the React features you already know — such 
                as state, lifecycle, context, and refs. They don’t fundamentally change how React 
                works, and your knowledge of components, props, and top-down data flow is just as relevant.</p>
                <p>Hooks do have a learning curve of their own. If there’s something missing in this 
                documentation, raise an issue and we’ll try to help.</p>"
            />
        </div>
    );
}

export default App;
