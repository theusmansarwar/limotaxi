// menuItems.js
import {
  LayoutDashboard,
  Briefcase,
  Clock,
  Truck,
  FileText,
  Ban,
  Search,
  FolderClosed,
  Users,
  Bell,
  AlertTriangle,
  Slash,
  Banknote,
  Settings,
  History,
  CreditCard,
  BookOpen
} from "lucide-react";

// Dispatch Sidebar Menu Items (without dropdowns)
export const dispatchMenuItems = [
  { 
    id: "dashboard", 
    label: "Dashboard", 
    icon: LayoutDashboard, 
    path: "/dispatch/dashboard",
    active: false 
  },
  { 
    id: "jobs", 
    label: "Jobs Overview", 
    icon: Briefcase,
    path: "/dispatch/jobs" 
  },
  { 
    id: "timeline", 
    label: "Timeline", 
    icon: Clock,
    path: "/dispatch/timeline" 
  },
  { 
    id: "vehicles", 
    label: "Vehicles", 
    icon: Truck,
    path: "/dispatch/vehicles" 
  },
  { 
    id: "permits", 
    label: "Permits", 
    icon: FileText,
    path: "/dispatch/permits" 
  },
  { 
    id: "blacklist", 
    label: "Blacklist", 
    icon: Ban,
    path: "/dispatch/blacklist" 
  },
  { 
    id: "search", 
    label: "Search Jobs", 
    icon: Search,
    path: "/dispatch/search" 
  },
  { 
    id: "closed", 
    label: "Closed Jobs", 
    icon: FolderClosed,
    path: "/dispatch/closed" 
  },
  { 
    id: "customers", 
    label: "Customers", 
    icon: Users,
    path: "/dispatch/customers" 
  },
  { 
    id: "alarms", 
    label: "Alarms", 
    icon: Bell,
    path: "/dispatch/alarms" 
  },
  { 
    id: "alerts", 
    label: "Alerts", 
    icon: AlertTriangle,
    path: "/dispatch/alerts" 
  },
  { 
    id: "suspensions", 
    label: "Suspensions", 
    icon: Slash,
    path: "/dispatch/suspensions" 
  },
  { 
    id: "banking", 
    label: "Banking", 
    icon: Banknote,
    path: "/dispatch/banking" 
  },
  { 
    id: "preferences", 
    label: "Preferences", 
    icon: Settings,
    path: "/dispatch/preferences" 
  }
];

// Admin Sidebar Menu Items (with dropdowns)
export const adminMenuItems = [
  { 
    id: "dashboard", 
    label: "Dashboard", 
    icon: LayoutDashboard, 
    children: [
      { 
        id: "general", 
        label: "General", 
        icon: LayoutDashboard,
        path: "/admin/general" 
      },
      { 
        id: "users", 
        label: "Users", 
        icon: Users,
        path: "/admin/users" 
      },
      { 
        id: "vehicles", 
        label: "Vehicles", 
        icon: Truck,
        path: "/admin/vehicles" 
      },
      { 
        id: "zone", 
        label: "Zone", 
        icon: FileText,
        path: "/admin/zone" 
      },
      { 
        id: "tariff", 
        label: "Tariff", 
        icon: Banknote,
        path: "/admin/tariff" 
      },
      { 
        id: "pois", 
        label: "POIs", 
        icon: FileText,
        path: "/admin/pois" 
      },
      { 
        id: "driver-app", 
        label: "Driver App", 
        icon: Truck,
        path: "/admin/driver-app" 
      },
      { 
        id: "notifications", 
        label: "Notifications", 
        icon: Bell,
        path: "/admin/notifications" 
      },
      { 
        id: "planning", 
        label: "Planning", 
        icon: Clock,
        path: "/admin/planning" 
      }
    ]
  },
  { 
    id: "history", 
    label: "History", 
    icon: History,
    children: [
      { 
        id: "booking-history", 
        label: "Booking History", 
        icon: BookOpen,
        path: "/admin/booking-history" 
      },
      { 
        id: "payment-history", 
        label: "Payment History", 
        icon: Banknote,
        path: "/admin/payment-history" 
      }
    ]
  },
  { 
    id: "account", 
    label: "Account", 
    icon: CreditCard,
    children: [
      { 
        id: "profile", 
        label: "Profile", 
        icon: Users,
        path: "/admin/profile" 
      },
      { 
        id: "settings", 
        label: "Settings", 
        icon: Settings,
        path: "/admin/settings" 
      }
    ]
  },
  { 
    id: "booking-app", 
    label: "Booking App", 
    icon: BookOpen,
    children: [
      { 
        id: "active-bookings", 
        label: "Active Bookings", 
        icon: BookOpen,
        path: "/admin/active-bookings" 
      },
      { 
        id: "completed-bookings", 
        label: "Completed", 
        icon: FolderClosed,
        path: "/admin/completed-bookings" 
      }
    ]
  }
];