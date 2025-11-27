import React, { useState } from "react";
import "./Tabs.css";

const Tabs = ({ tabs, className = "" }) => {
  const [activeTab, setActiveTab] = useState(tabs[0]?.id);

  // find active parent tab object
  const activeParent = tabs.find((t) => t.id === activeTab);

  // state for sub tabs (if exists)
  const [activeSubTab, setActiveSubTab] = useState(
    activeParent?.subTabs?.[0]?.id || null
  );

  // update sub-tab when parent changes
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

      {/* ------------ Parent Tabs ------------- */}
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

      {/* ------------ Content Area ------------- */}
      <div className="tabContent">
        {/* If Sub tabs exist → show sub tab content */}
        {activeParent?.subTabs?.length > 0 ? (
          activeParent?.subTabs?.map((sub) =>
            activeSubTab === sub.id ? (
              <div key={sub.id}>{sub.component}</div>
            ) : null
          )
        ) : (
          /* Otherwise show parent content */
          <div>{activeParent?.component}</div>
        )}
      </div>
    </div>
  );
};

export default Tabs;
