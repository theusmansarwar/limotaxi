// Menu configurations for different sidebars
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

export const dispatchMenuItems = [
  { id: "dashboard", label: "Dashboard", icon: LayoutDashboard, active: true },
  { id: "jobs", label: "Jobs Overview", icon: Briefcase },
  { id: "timeline", label: "Timeline", icon: Clock },
  { id: "vehicles", label: "Vehicles", icon: Truck },
  { id: "permits", label: "Permits", icon: FileText },
  { id: "blacklist", label: "Blacklist", icon: Ban },
  { id: "search", label: "Search Jobs", icon: Search },
  { id: "closed", label: "Closed Jobs", icon: FolderClosed },
  { id: "customers", label: "Customers", icon: Users },
  { id: "alarms", label: "Alarms", icon: Bell },
  { id: "alerts", label: "Alerts", icon: AlertTriangle },
  { id: "suspensions", label: "Suspensions", icon: Slash },
  { id: "banking", label: "Banking", icon: Banknote },
  { id: "preferences", label: "Preferences", icon: Settings }
];

export  const adminMenuItems = [
  { 
    id: "dashboard", 
    label: "Dashboard", 
    icon: LayoutDashboard, 
    active: true,
    children: [
      { id: "general", label: "General", icon: LayoutDashboard },
      { id: "users", label: "Users", icon: Users },
      { id: "vehicles", label: "Vehicles", icon: Truck },
      { id: "zone", label: "Zone", icon: FileText },
      { id: "tariff", label: "Tariff", icon: Banknote },
      { id: "pois", label: "POIs", icon: FileText },
      { id: "driver-app", label: "Driver App", icon: Truck },
      { id: "notifications", label: "Notifications", icon: Bell },
      { id: "planning", label: "Planning", icon: Clock }
    ]
  },
  { 
    id: "history", 
    label: "History", 
    icon: History,
    children: [
      { id: "booking-history", label: "Booking History", icon: BookOpen },
      { id: "payment-history", label: "Payment History", icon: Banknote }
    ]
  },
  { 
    id: "account", 
    label: "Account", 
    icon: CreditCard,
    children: [
      { id: "profile", label: "Profile", icon: Users },
      { id: "settings", label: "Settings", icon: Settings }
    ]
  },
  { 
    id: "booking-app", 
    label: "Booking App", 
    icon: BookOpen,
    children: [
      { id: "active-bookings", label: "Active Bookings", icon: BookOpen },
      { id: "completed-bookings", label: "Completed", icon: FolderClosed }
    ]
  }
];