"use client";

type VariantKey =
  | `headline.${100 | 200 | 300 | 400}`
  | `title.${100 | 101 | "100_sb" | 200 | "200_sb"}`
  | `subtitle.${100 | "100_sb" | 101 | 200 | "200_sb" | 201 | 202}`
  | `body.${100 | "100_sb" | 200 | "200_sb" | 201 | 300 | "300_sb" | 301}`
  | `caption.${100 | "100_sb" | 200 | "200_sb" | 300 | "300_sb"}`
  | "gnb_on"
  | "gnb_off"
  | "btn";

type ColorKey = "DEFAULT" | "1" | "2" | "3";

export interface TypographyProps {
  variant: VariantKey;
  children: React.ReactNode;
  className?: string;
  color?: ColorKey;
  id?: string; // id prop 추가
  onClick?: () => void;
}

const variants: Record<VariantKey, string> = {
  "headline.100": "text-[24px] md:text-[42px] font-bold tracking-[-0.5px]",
  "headline.200": "text-[22px] md:text-[36px] font-semibold tracking-[-0.5px]",
  "headline.300": "text-[20px] md:text-[32px] font-semibold tracking-[-0.5px]",
  "headline.400": "text-[18px] md:text-[28px] font-semibold tracking-[-0.5px]",
  "title.100": "text-[16px] md:text-[20px] font-normal tracking-[-0.5px]",
  "title.101": "text-[16px] md:text-[24px] font-normal tracking-[-0.5px]",
  "title.100_sb": "text-[16px] md:text-[20px] font-semibold tracking-[-0.5px]",
  "title.200": "text-[16px] md:text-[22px] font-normal tracking-[-0.5px]",
  "title.200_sb": "text-[16px] md:text-[22px] font-semibold tracking-[-0.5px]",
  "subtitle.100": "text-xl font-normal tracking-[-0.5px]",
  "subtitle.100_sb": "text-xl font-semibold tracking-[-0.5px]",
  "subtitle.101": "text-xl font-normal tracking-[-0.5px]",
  "subtitle.200": "text-lg font-normal tracking-[-0.5px]",
  "subtitle.200_sb": "text-lg font-semibold tracking-[-0.5px]",
  "subtitle.201": "text-lg font-normal tracking-[-0.5px]",
  "subtitle.202": "text-lg font-semibold tracking-[-0.09px]",
  "body.100": "text-[14px] md:text-[16px] font-light tracking-[-0.5px]",
  "body.100_sb": "text-[14px] md:text-[16px] font-semibold tracking-[-0.5px]",
  "body.200": "text-[13px] md:text-[15px] font-light tracking-[-0.5px]",
  "body.200_sb": "text-[13px] md:text-[15px] font-semibold tracking-[-0.5px]",
  "body.201": "text-[13px] md:text-[15px] font-normal tracking-[-0.5px]",
  "body.300": "text-[12px] md:text-[14px] font-normal tracking-[-0.5px]",
  "body.300_sb": "text-[12px] md:text-[14px] font-semibold tracking-[-0.5px]",
  "body.301": "text-[12px] md:text-[14px] font-normal tracking-[-0.5px]",
  "caption.100": "text-[11px] md:text-[13px] font-normal tracking-[-0.5px]",
  "caption.100_sb": "text-[11px] md:text-[13px] font-semibold tracking-[-0.5px]",
  "caption.200": "text-[10px] md:text-[12px] font-normal tracking-[-0.5px]",
  "caption.200_sb": "text-[10px] md:text-[12px] font-semibold tracking-[-0.5px]",
  "caption.300": "text-[9px] md:text-[11px] font-normal tracking-[-0.5px]",
  "caption.300_sb": "text-[9px] md:text-[11px] font-semibold tracking-[-0.5px]",
  gnb_on: "text-[12px] font-bold",
  gnb_off: "text-[12px] font-normal tracking-[-0.5px]",
  btn: "text-[15px] font-bold",
};

const lineHeights: Record<VariantKey, string> = {
  "headline.100": "leading-[50px]",
  "headline.200": "leading-[44px]",
  "headline.300": "leading-[38px]",
  "headline.400": "leading-[36px]",
  "title.100": "leading-[38px]",
  "title.101": "leading-[38px]",
  "title.100_sb": "leading-[38px]",
  "title.200": "leading-[38px]",
  "title.200_sb": "leading-[38px]",
  "subtitle.100": "leading-7",
  "subtitle.100_sb": "leading-7",
  "subtitle.101": "leading-8",
  "subtitle.200": "leading-[26px]",
  "subtitle.200_sb": "leading-[26px]",
  "subtitle.201": "leading-[30px]",
  "subtitle.202": "leading-[22px]",
  "body.100": "leading-[27px]",
  "body.100_sb": "leading-[27px]",
  "body.200": "leading-[27px]",
  "body.200_sb": "leading-[27px]",
  "body.201": "leading-[26px]",
  "body.300": "leading-5",
  "body.300_sb": "leading-5",
  "body.301": "leading-[27px]",
  "caption.100": "leading-5",
  "caption.100_sb": "leading-5",
  "caption.200": "leading-[18px]",
  "caption.200_sb": "leading-[18px]",
  "caption.300": "leading-4",
  "caption.300_sb": "leading-4",
  gnb_on: "leading-[14px]",
  gnb_off: "leading-[14px]",
  btn: "leading-[26px]",
};

function classNames(...classes: (string | undefined)[]) {
  return classes.filter(Boolean).join(" ");
}

function getElementForVariant(variant: VariantKey): keyof JSX.IntrinsicElements {
  if (variant.startsWith("headline.")) return "h1";
  if (variant.startsWith("title.")) return "h2";
  if (variant.startsWith("subtitle.")) return "h3";
  if (variant.startsWith("body.")) return "p";
  if (variant.startsWith("caption.")) return "span";
  if (variant === "gnb_on" || variant === "gnb_off") return "span";
  if (variant === "btn") return "span";
  return "div";
}

const Typography: React.FC<TypographyProps> = ({ variant, children, className, color, id, ...rest }) => {
  const colorClasses = {
    DEFAULT: "text-light-text dark:text-dark-text",
    1: "text-light-text-1 dark:text-dark-text-1",
    2: "text-light-text-2 dark:text-dark-text-2",
    3: "text-light-text-3 dark:text-dark-text-3",
  };

  const defaultColor = variant.startsWith("headline.") || variant.startsWith("title.") || variant.startsWith("subtitle.") ? "3" : "DEFAULT";

  const colorClass = colorClasses[color || defaultColor];

  const Element = getElementForVariant(variant);

  return (
    <Element id={id} className={classNames(variants[variant], lineHeights[variant], colorClass, className)} {...rest}>
      {typeof children === "string" ? <span>{children}</span> : children}
    </Element>
  );
};

const TypographyShowcase: React.FC = () => {
  return (
    <div className="p-8 bg-light-bg dark:bg-dark-bg">
      <Typography variant="headline.100">Typography Showcase</Typography>

      <hr className="mb-8 my-8" />

      {(Object.keys(variants) as VariantKey[]).map((variant) => (
        <Typography key={variant} variant={variant} className="mb-4">
          {variant}: 다람쥐 헌 쳇바퀴에 타고파 (The quick brown fox jumps over the lazy dog)
        </Typography>
      ))}
    </div>
  );
};

export { Typography, TypographyShowcase };
