import React, {Component} from 'react';
import './App.css';
import 'rsuite/dist/styles/rsuite-default.css';
import ResponsiveNav from '@rsuite/responsive-nav';

const items = [
    { eventKey: 'A', label: 'Item A' },
    { eventKey: 'B', label: 'Item B' },
    { eventKey: 'C', label: 'Item C' },
    { eventKey: 'D', label: 'Item D' },
    { eventKey: 'E', label: 'Item E' },
    { eventKey: 'F', label: 'Item F' },
    { eventKey: 'G', label: 'Item G' },
    { eventKey: 'H', label: 'Item H' },
    { eventKey: 'I', label: 'Item I' },
    { eventKey: 'J', label: 'Item J' },
    { eventKey: 'K', label: 'Item K' },
    { eventKey: 'L', label: 'Item L' },
    { eventKey: 'M', label: 'Item M' },
    { eventKey: 'N', label: 'Item N' }
];

const App = () => {
    const [activeKey, setActiveKey] = React.useState('A');

    return (
        <div>
            <div style={{border: '1px solid #ddd', padding: 10 }}>
                <ResponsiveNav
                    activeKey={activeKey}
                    onSelect={setActiveKey}
                    appearance="subtle" justified
                >
                    {items.map(item => (
                        <ResponsiveNav.Item key={item.eventKey} eventKey={item.eventKey}>
                            {item.label}
                        </ResponsiveNav.Item>
                    ))}
                </ResponsiveNav>
            </div>
        </div>
    );
};
export default App;
