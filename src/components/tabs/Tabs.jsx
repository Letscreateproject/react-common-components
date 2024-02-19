    import React, { useState } from 'react';
    import './Tabs.css'; // Ensure you create this CSS file for styling

    const Tabs = () => {
    const [activeTab, setActiveTab] = useState('tab1');
    let Tabs=[
                {id:1,key:'Tab 1',value:'tab1',content:'Content for Tab 1'},
                {id:2,key:'Tab 2',value:'tab2',content:'Content for Tab 2'},
                {id:3,key:'Tab 3',value:'tab3',content:'Content for Tab 3'},
                {id:4,key:'Tab 4',value:'tab4',content:'Content for Tab 4'}
            ];

    return (
        <>
        <h3>Tabs</h3>
        <div className="tab-wrapper">
        <ul className="tab-list">
            {Tabs.map((tab)=>(<li key={tab.id} 
            className={activeTab === tab.value ? 'active' : ''} style={{width:'100%'}}
            onClick={() => setActiveTab(tab.value)}>
                {tab.key}
                </li>
                )
                )
            }
        </ul>
        <div className="tab-content">
            {activeTab === 'tab1' && <div>Content for Tab 1</div>}
            {activeTab === 'tab2' && <div>Content for Tab 2</div>}
            {activeTab === 'tab3' && <div>Content for Tab 3</div>}
        </div>
        </div>
        </>
    );
    };

    export default Tabs;
