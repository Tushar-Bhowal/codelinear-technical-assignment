import Image from "next/image";

export function HeroVisual() {
  return (
    <div
      className="relative mx-auto aspect-608/500 w-full max-w-152"
      style={{ containerType: "inline-size" }}
    >
      <div
        className="absolute left-0 top-0 h-125 w-152 origin-top-left"
        style={{ transform: "scale(min(1, calc(100cqi / 608px)))" }}
      >
        <div
          aria-hidden
          className="absolute -top-2 left-30 h-99.75 w-99.75 rounded-full opacity-50 blur-[100px]"
          style={{
            background:
              "linear-gradient(103.43deg, #00B4FD -1.02%, #003ACE 83.53%)",
          }}
        />

        <div className="absolute left-25.75 top-10 h-75.25 w-90.75 overflow-hidden rounded-[31px]">
          <Image
            src="/assets/hero/hero-person.png"
            alt="A customer using the N7 banking app on her phone while working on a laptop"
            width={363}
            height={301}
            sizes="363px"
            className="h-full w-full object-cover"
            priority
          />
        </div>

        <div className="absolute left-88.25 top-15.75 h-45.25 w-56 rounded-xl bg-white/40 shadow-[0_8px_40px_rgba(0,0,0,0.35)] backdrop-blur-[16.19px]">
          <div className="absolute inset-1 overflow-hidden rounded-[11px]">
            <Image
              src="/assets/hero/hero-balance-card.png"
              alt="N7 mobile dashboard showing Toni Kross with a total balance of $42,295.00 USD"
              fill
              sizes="220px"
              className="scale-135 object-cover"
              priority
            />
          </div>
        </div>

        <div className="absolute -left-7 top-44.5 h-29.25 w-63.5 rounded-xl bg-white/40 shadow-[0_8px_40px_rgba(0,0,0,0.35)] backdrop-blur-[16.19px]">
          <div className="absolute left-1 top-1 h-27.25 w-61.5 overflow-hidden rounded-[11px]">
            <Image
              src="/assets/hero/hero-recent-activity.png"
              alt="Recent activity card showing transactions filtered by This Week with a -$59 entry to Jin for work"
              fill
              sizes="246px"
              className="object-cover"
              priority
            />
          </div>
        </div>
      </div>
    </div>
  );
}
