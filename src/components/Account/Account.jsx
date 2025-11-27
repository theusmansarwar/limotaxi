import React from "react";
import Tabs from "../Tabs/Tabs";
import Overview from "./Overview/Overview";
import Billing from "./Billing/Billing";
import HowWorks from "./HowWorks/HowWorks";

const Account = () => {
  const tabs = [
    {
      id: "overview",
      label: "Overview",
      component: <Overview />,
    },
    {
      id: "billing",
      label: "Your billing information",
      component: <Billing />,
    },
    {
      id: "work",
      label: "How it works",
      component: <HowWorks />,
    },
  ];

  return (
    <div className="AccountsDashboard">
      <Tabs tabs={tabs} />
    </div>
  );
};

export default Account;
