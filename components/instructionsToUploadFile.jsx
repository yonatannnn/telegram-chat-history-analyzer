import React from 'react';

const ChatHistoryInstructions = () => {
    return (
        <div>
                <ul style={{
                    listStyleType: 'none', 
                    padding: '10px',
                    borderRadius: '8px',
                    width: 'fit-content',
                    margin: 'auto',
                    fontFamily: 'Monospace, sans-serif',
                    fontSize: '14px',
                    lineHeight: '1.5',

                }}>
                    <h3 style={{
                        fontSize: '16px',
                        margin: '0 0 10px 0',
                        textAlign: 'center',
                        color: 'white',
                    }}>
                        To Get Chat History in JSON Format
                    </h3>
                    <li style={{ textAlign : 'start', marginBottom: '8px', color: 'white' }}>
                        1. Open the Telegram app on your Telegram Desktop.
                    </li>
                    <li style={{textAlign : 'start', marginBottom: '8px', color: 'white' }}>
                        2. Go to the desired chat or group.
                    </li>
                    <li style={{textAlign : 'start', marginBottom: '8px', color: 'white' }}>
                        3. Click the three-dot menu (or options menu) in the top-right corner.
                    </li>
                    <li style={{textAlign : 'start', marginBottom: '8px', color: 'white' }}>
                        4. Select "Export Chat History."
                    </li>
                    <li style={{textAlign : 'start', marginBottom: '8px', color: 'white' }}>
                        5. Choose JSON format from the available options.
                    </li>
                    <li style={{ textAlign : 'start',color: 'white' }}>
                        6. Save the file to your device and upload it here.
                    </li>
                </ul>
        </div>
    );
};

export default ChatHistoryInstructions;
