import {
  Zap,
  Wind,
  Cog,
  Wrench,
  Settings,
  ShieldCheck,
  Headset,
  MapPinned,
  BadgeCheck,
  Handshake,
  CalendarClock,
  CheckCircle2,
  Users,
  MapPin,
  Factory,
  HardHat,
  HeartPulse,
  Hotel,
  Landmark,
  RadioTower,
  Wheat,
  Droplets,
  Building2,
  GraduationCap,
  Truck,
  ShoppingBag,
  Target,
  Eye,
  Gem,
  Phone,
  Mail,
  Clock,
  ArrowRight,
  type LucideProps,
} from "lucide-react";

const iconMap = {
  Zap,
  Wind,
  Cog,
  Wrench,
  Settings,
  ShieldCheck,
  Headset,
  MapPinned,
  BadgeCheck,
  Handshake,
  CalendarClock,
  CheckCircle2,
  Users,
  MapPin,
  Factory,
  HardHat,
  HeartPulse,
  Hotel,
  Landmark,
  RadioTower,
  Wheat,
  Droplets,
  Building2,
  GraduationCap,
  Truck,
  ShoppingBag,
  Target,
  Eye,
  Gem,
  Phone,
  Mail,
  Clock,
  ArrowRight,
} as const;

export type IconName = keyof typeof iconMap;

interface IconProps extends LucideProps {
  name: string;
}

export function Icon({ name, ...props }: IconProps) {
  const Cmp = iconMap[name as IconName] ?? Cog;
  return <Cmp {...props} />;
}
