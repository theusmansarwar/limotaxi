import React from "react";
import Tabs from "../../components/Tabs/Tabs";
import DriverPage from "../DriverPage/DriverPage";
import CustomerPage from "../CustomerPage/CustomerPage";

const AccBank = () => {
  const tabs = [
    {
      id: "setup",
      label: "Setup",
      component: null,
      subTabs: [
        { id: "driver", label: "Driver", component: <DriverPage /> },
        { id: "customer", label: "Customer", component: <CustomerPage /> },
      ],
    },
    {
      id: "accounts",
      label: "Accounts",
      component: <CustomerPage />,
    },
    {
      id: "accounts",
      label: "Account Groups",
      component: <CustomerPage />,
    },
    {
      id: "accounts",
      label: "Value",
      component: <CustomerPage />,
    },
     {
      id: "accounts",
      label: "Channels",
      component: <CustomerPage />,
    },
  ];

  return (
    <div className="AccBank">
      <Tabs tabs={tabs} className="custom-Tabs" />
    </div>
  );
};

export default AccBank;
