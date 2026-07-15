import type { ReactElement } from "react";

type IconProps = { className?: string };

const base = "h-6 w-6";

export function IconStack({ className = base }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} stroke="currentColor" strokeWidth="1.4">
      <rect x="4" y="4" width="16" height="4.5" rx="1" />
      <rect x="4" y="10.25" width="16" height="4.5" rx="1" />
      <rect x="4" y="16.5" width="16" height="4.5" rx="1" />
      <circle cx="7" cy="6.25" r="0.6" fill="currentColor" stroke="none" />
      <circle cx="7" cy="12.5" r="0.6" fill="currentColor" stroke="none" />
      <circle cx="7" cy="18.75" r="0.6" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function IconOrbit({ className = base }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} stroke="currentColor" strokeWidth="1.4">
      <circle cx="12" cy="12" r="2.6" />
      <ellipse cx="12" cy="12" rx="9" ry="4" />
      <ellipse cx="12" cy="12" rx="4" ry="9" />
      <circle cx="12" cy="3" r="0.9" fill="currentColor" stroke="none" />
      <circle cx="21" cy="12" r="0.9" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function IconGrid({ className = base }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} stroke="currentColor" strokeWidth="1.4">
      <rect x="4" y="4" width="7" height="7" rx="1" />
      <rect x="13" y="4" width="7" height="7" rx="1" />
      <rect x="4" y="13" width="7" height="7" rx="1" />
      <rect x="13" y="13" width="7" height="7" rx="1" />
    </svg>
  );
}

export function IconSpark({ className = base }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} stroke="currentColor" strokeWidth="1.4">
      <path d="M12 3L13.6 9.4L20 12L13.6 14.6L12 21L10.4 14.6L4 12L10.4 9.4L12 3Z" strokeLinejoin="round" />
    </svg>
  );
}

export function IconBolt({ className = base }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} stroke="currentColor" strokeWidth="1.4">
      <path d="M13 3L5 13.5H11.5L10.5 21L19 10H12.5L13 3Z" strokeLinejoin="round" />
    </svg>
  );
}

export function IconBars({ className = base }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} stroke="currentColor" strokeWidth="1.4">
      <path d="M4 20V13" strokeLinecap="round" />
      <path d="M10 20V8" strokeLinecap="round" />
      <path d="M16 20V11" strokeLinecap="round" />
      <path d="M20 20V4" strokeLinecap="round" />
    </svg>
  );
}

export function IconCloud({ className = base }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} stroke="currentColor" strokeWidth="1.4">
      <path d="M7.5 18C5 18 3 16.1 3 13.7C3 11.5 4.6 9.7 6.7 9.4C7.3 6.9 9.5 5 12.1 5C15.1 5 17.5 7.4 17.5 10.3C17.5 10.4 17.5 10.6 17.5 10.7C19.5 11 21 12.7 21 14.7C21 17 19.1 18 17 18H7.5Z" strokeLinejoin="round" />
    </svg>
  );
}

export function IconLink({ className = base }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} stroke="currentColor" strokeWidth="1.4">
      <path d="M9.5 14.5L14.5 9.5" strokeLinecap="round" />
      <path d="M11 6.5L12.6 4.9C14.1 3.4 16.5 3.4 18 4.9C19.5 6.4 19.5 8.8 18 10.3L16.4 11.9" strokeLinecap="round" />
      <path d="M13 17.5L11.4 19.1C9.9 20.6 7.5 20.6 6 19.1C4.5 17.6 4.5 15.2 6 13.7L7.6 12.1" strokeLinecap="round" />
    </svg>
  );
}

export function IconShield({ className = base }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} stroke="currentColor" strokeWidth="1.4">
      <path d="M12 3.5L19 6.2V11.3C19 15.6 16.1 19.4 12 20.5C7.9 19.4 5 15.6 5 11.3V6.2L12 3.5Z" strokeLinejoin="round" />
      <path d="M9 12L11.2 14.2L15.5 9.7" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function IconFactory({ className = base }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} stroke="currentColor" strokeWidth="1.4">
      <path d="M3 19V10L8 13.5V10L13 13.5V8L21 12.5V19H3Z" strokeLinejoin="round" />
      <path d="M3 19H21" strokeLinecap="round" />
    </svg>
  );
}

export function IconTruck({ className = base }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} stroke="currentColor" strokeWidth="1.4">
      <rect x="2.5" y="7" width="11" height="9" rx="1" />
      <path d="M13.5 10H17.5L20.5 13V16H13.5V10Z" strokeLinejoin="round" />
      <circle cx="6" cy="17.5" r="1.6" />
      <circle cx="17" cy="17.5" r="1.6" />
    </svg>
  );
}

export function IconBox({ className = base }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} stroke="currentColor" strokeWidth="1.4">
      <path d="M3.5 7.5L12 3.5L20.5 7.5L12 11.5L3.5 7.5Z" strokeLinejoin="round" />
      <path d="M3.5 7.5V16.5L12 20.5V11.5" strokeLinejoin="round" />
      <path d="M20.5 7.5V16.5L12 20.5" strokeLinejoin="round" />
    </svg>
  );
}

export function IconLandmark({ className = base }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} stroke="currentColor" strokeWidth="1.4">
      <path d="M3 9.5L12 4L21 9.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M4.5 9.5V19H19.5V9.5" strokeLinejoin="round" />
      <path d="M3 19H21" strokeLinecap="round" />
      <path d="M8 12.5V16.5M12 12.5V16.5M16 12.5V16.5" strokeLinecap="round" />
    </svg>
  );
}

export function IconPulse({ className = base }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} stroke="currentColor" strokeWidth="1.4">
      <path d="M3 12.5H7L9 7L14 18L16.5 12.5H21" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function IconBed({ className = base }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} stroke="currentColor" strokeWidth="1.4">
      <path d="M2.5 18.5V9.5" strokeLinecap="round" />
      <path d="M2.5 14.5H21.5V18.5" strokeLinejoin="round" />
      <path d="M21.5 14.5V11.5C21.5 10.4 20.6 9.5 19.5 9.5H10.5V14.5" strokeLinejoin="round" />
      <circle cx="6.5" cy="11.8" r="1.3" />
    </svg>
  );
}

export function IconRoute({ className = base }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} stroke="currentColor" strokeWidth="1.4">
      <circle cx="5" cy="6" r="2" />
      <circle cx="19" cy="18" r="2" />
      <path d="M5 8V12C5 13.5 6 14.5 7.5 14.5H16.5C18 14.5 19 15.5 19 16" strokeLinecap="round" />
    </svg>
  );
}

export function IconLayers({ className = base }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} stroke="currentColor" strokeWidth="1.4">
      <path d="M12 3.5L21 8L12 12.5L3 8L12 3.5Z" strokeLinejoin="round" />
      <path d="M3 12L12 16.5L21 12" strokeLinejoin="round" />
      <path d="M3 16L12 20.5L21 16" strokeLinejoin="round" />
    </svg>
  );
}

export const industryIconBySlug: Record<string, (p: IconProps) => ReactElement> = {
  "manufacturing": IconFactory,
  "distribution": IconTruck,
  "consumer-goods": IconBox,
  "financial-services": IconLandmark,
  "healthcare": IconPulse,
  "hospitality": IconBed,
  "logistics-supply-chain": IconRoute,
  "diversified-conglomerates": IconLayers,
};

export const serviceIconBySlug: Record<string, (p: IconProps) => ReactElement> = {
  "sap-solutions": IconStack,
  "salesforce-solutions": IconOrbit,
  "odoo-implementation": IconGrid,
  "ai-powered-business-applications": IconSpark,
  "intelligent-automation": IconBolt,
  "data-analytics": IconBars,
  "cloud-transformation": IconCloud,
  "enterprise-integrations": IconLink,
  "managed-services": IconShield,
};
