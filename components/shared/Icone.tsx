import {
  // services
  Droplets,
  Camera,
  Truck,
  Cog,
  // wizard réponses débouchage
  GlassWater,
  Bath,
  Pipette,
  AlertTriangle,
  Zap,
  Calendar,
  Hourglass,
  CheckCircle2,
  Wind,
  AlertOctagon,
  // wizard réponses inspection
  Search,
  Home as HomeIcon,
  HardHat,
  Ruler,
  MoveHorizontal,
  Mountain,
  // wizard réponses fosse
  Cylinder,
  ChefHat,
  Package,
  Sparkles,
  // wizard réponses pompe
  Wrench,
  RefreshCw,
  Plus,
  CloudRain,
  PowerOff,
  Volume2,
  // génériques
  Phone,
  MapPin,
  Clock,
  Star,
  Shield,
  type LucideIcon,
} from 'lucide-react';

// Whitelist explicite — tree-shaken par Next.js
const REGISTRE: Record<string, LucideIcon> = {
  // Services (slug → icon)
  Droplets,
  Camera,
  Truck,
  Cog,
  // Réponses wizard
  GlassWater,
  Bath,
  Pipette,
  AlertTriangle,
  Zap,
  Calendar,
  Hourglass,
  CheckCircle2,
  Wind,
  AlertOctagon,
  Search,
  Home: HomeIcon,
  HardHat,
  Ruler,
  MoveHorizontal,
  Mountain,
  Cylinder,
  ChefHat,
  Package,
  Sparkles,
  Wrench,
  RefreshCw,
  Plus,
  CloudRain,
  PowerOff,
  Volume2,
  Phone,
  MapPin,
  Clock,
  Star,
  Shield,
};

type Props = {
  name: string;
  className?: string;
  strokeWidth?: number;
  'aria-hidden'?: boolean;
};

export function Icone({ name, className, strokeWidth = 2, ...rest }: Props) {
  const Composant = REGISTRE[name] ?? Wrench;
  return (
    <Composant
      className={className}
      strokeWidth={strokeWidth}
      aria-hidden
      {...rest}
    />
  );
}

export type IconName = keyof typeof REGISTRE;
