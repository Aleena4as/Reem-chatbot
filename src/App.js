import React from 'react';
import ChatBot from './components/ChatBot';
import TranslateProvider from './context/Translate/TranslateContext';
import LiveAgentProvider from './context/LiveAgent/LiveAgentContext';
import { useState } from 'react';

const App = () => {
    return (
        <LiveAgentProvider>
            <TranslateProvider>
                <ChatBot />
            </TranslateProvider>
        </LiveAgentProvider>
    );
};

export default App;
