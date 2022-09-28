import React, { useState, createContext } from 'react';

export const LiveAgentContext = createContext();

const LiveAgentProvider = ({ children }) => {
    const [liveAgent, setliveAgent] = useState(false);

    const liveAgentStatus = {
        agent_status: liveAgent ? 'Leave Agent' : '',
    };

    const switchLiveAgentStatus = status => {
        setliveAgent(status);
    };

    return (
        <LiveAgentContext.Provider value={{ liveAgent, liveAgentStatus, switchLiveAgentStatus }}>
            {children}
        </LiveAgentContext.Provider>
    );
};

export default LiveAgentProvider;
