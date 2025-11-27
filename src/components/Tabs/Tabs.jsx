import React, { useState } from "react";
import "./Tabs.css";

const Tabs = ({ tabs, className = "" }) => {
  const [activeTab, setActiveTab] = useState(tabs[0]?.id);
 
  const activeParent = tabs.find((t) => t.id === activeTab);

  const [activeSubTab, setActiveSubTab] = useState(
    activeParent?.subTabs?.[0]?.id || null
  );

  const handleParentClick = (id) => {
    setActiveTab(id);

    const parent = tabs.find((t) => t.id === id);
    if (parent?.subTabs?.length > 0) {
      setActiveSubTab(parent.subTabs[0].id);
    } else {
      setActiveSubTab(null);
    }
  };

  return (
    <div className={`TabsContainer ${className}`}>
 
      <div className="links">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            className={activeTab === tab.id ? "active" : ""}
            onClick={() => handleParentClick(tab.id)}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {activeParent?.subTabs?.length > 0 && (
        <div className="subLinks">
          {activeParent.subTabs.map((sub) => (
            <button
              key={sub.id}
              className={activeSubTab === sub.id ? "active" : ""}
              onClick={() => setActiveSubTab(sub.id)}
            >
              {sub.label}
            </button>
          ))}
        </div>
      )}

      <div className="tabContent">
        {activeParent?.subTabs?.length > 0 ? (
          activeParent?.subTabs?.map((sub) =>
            activeSubTab === sub.id ? (
              <div key={sub.id}>{sub.component}</div>
            ) : null
          )
        ) : (
          <div>{activeParent?.component}</div>
        )}
      </div>
    </div>
  );
};

export default Tabs;
