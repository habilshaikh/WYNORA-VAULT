import { cn } from '../../lib/utils';

export const BrandWordmark = ({
  className,
  iconClassName,
  textClassName,
  label = 'WYNORA VAULT',
}) => {
  return (
    <div
      className={cn('inline-flex items-center', className)}
    >
      {/* LOGO IMAGE */}
      <span
        className={cn('shrink-0', iconClassName)}
        style={{
          height: '55px',
          width: 'auto',
          display: 'block',
          flexShrink: 0,
          verticalAlign: 'middle',
          backgroundImage: "url('/LOGO.png')",
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'contain',
          backgroundPosition: 'center center',
          aspectRatio: '1 / 1',
        }}
        aria-hidden="true"
      />

      {/* BRAND NAME + TAGLINE */}
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <span
          className={cn('select-none', textClassName)}
          style={{
            display: 'inline-block',
            color: '#D4AF37',
            fontWeight: 700,
            fontSize: '22px',
            letterSpacing: '0.08em',
            whiteSpace: 'nowrap',
            lineHeight: 1,
            verticalAlign: 'middle',
          }}
        >
          {label}
        </span>

       {/* TAGLINE — label ke niche */}
<div
  style={{
    display: 'flex',
    alignItems: 'center',
    gap: '5px',
    marginTop: '4px',
    color: '#D4AF37',
    fontSize: '11px',
    letterSpacing: '0.18em',
    fontWeight: 400,
  }}
>
  <span>Personalized</span>
  <span style={{ color: '#D4AF37', fontWeight: 300 }}>|</span>
  <span>Safe</span>
  <span style={{ color: '#D4AF37', fontWeight: 300 }}>|</span>
  <span>Trusted</span>
</div>
      </div>

    </div>
  );
};