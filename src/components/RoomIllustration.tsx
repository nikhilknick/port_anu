export default function RoomIllustration() {
  return (
    <div className="relative w-full max-w-[440px]">
      <div className="bg-bg-card border border-[rgba(201,169,110,0.15)] rounded-lg overflow-hidden p-8 shadow-card aspect-[4/3.5] flex items-end relative">
        <div className="room-illustration relative w-full h-full">
          {/* Wall */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#2a2018] to-[#1e1610] rounded-sm" />

          {/* Floor */}
          <div className="absolute bottom-0 left-0 right-0 h-[30%] bg-gradient-to-t from-[#3a2e1e] to-[#2a2018] border-t border-[rgba(201,169,110,0.1)]" />

          {/* Rug */}
          <div
            className="absolute bottom-[28%] left-[10%] right-[10%] h-[12%] rounded border border-[rgba(201,169,110,0.2)]"
            style={{
              background:
                'repeating-linear-gradient(90deg, rgba(201,169,110,0.15) 0px, rgba(201,169,110,0.15) 2px, transparent 2px, transparent 10px)',
            }}
          />

          {/* Sofa */}
          <div className="absolute bottom-[27%] left-[8%] w-[56%]">
            <div className="h-[28px] bg-gradient-to-b from-[#8a6b4a] to-[#6b5035] rounded-t shadow-[inset_0_-4px_8px_rgba(0,0,0,0.3)]" />
            <div className="absolute top-[-22px] left-[3%] h-[22px] w-[30%] bg-gradient-to-br from-[#a07850] to-[#7a5a38] rounded-[3px] shadow-[inset_0_2px_4px_rgba(255,255,255,0.1)]" />
            <div className="absolute top-[-22px] left-[35%] h-[22px] w-[30%] bg-gradient-to-br from-[#a07850] to-[#7a5a38] rounded-[3px] shadow-[inset_0_2px_4px_rgba(255,255,255,0.1)]" />
            <div className="absolute top-[-22px] left-[67%] h-[22px] w-[30%] bg-gradient-to-br from-[#a07850] to-[#7a5a38] rounded-[3px] shadow-[inset_0_2px_4px_rgba(255,255,255,0.1)]" />
            <div className="absolute bottom-[-8px] left-[8%] w-[6px] h-[8px] bg-[#4a3520] rounded-b-sm" />
            <div className="absolute bottom-[-8px] right-[8%] w-[6px] h-[8px] bg-[#4a3520] rounded-b-sm" />
          </div>

          {/* Table */}
          <div className="absolute bottom-[28%] left-[26%] w-[22%]">
            <div className="h-[6px] bg-gradient-to-b from-[#c9a96e] to-[#a8824a] rounded-sm shadow-[0_2px_8px_rgba(201,169,110,0.3)]" />
            <div className="absolute top-[6px] left-[10%] w-[4px] h-[16px] bg-[#6b5035]" />
            <div className="absolute top-[6px] right-[10%] w-[4px] h-[16px] bg-[#6b5035]" />
            <div className="absolute top-[-8px] left-[10%] w-[30%] h-[7px] bg-gradient-to-r from-[#7a8c72] to-[#5a6c52] rounded-[1px]" />
            <div className="absolute top-[-14px] right-[15%] w-[8px] h-[14px] bg-gradient-to-b from-[#c4714a] to-[#9a5035] rounded-t-sm rounded-b-[1px]" />
          </div>

          {/* Plant */}
          <div className="absolute bottom-[27%] right-[8%] w-[10%]">
            <div
              className="h-[20px] bg-gradient-to-b from-[#c4714a] to-[#9a5035] rounded-b"
              style={{ clipPath: 'polygon(10% 0%, 90% 0%, 100% 100%, 0% 100%)' }}
            />
            <div className="absolute bottom-[18px] left-1/2 w-[2px] h-[28px] bg-[#7a8c72] -translate-x-1/2" />
            <div className="absolute bottom-[38px] left-[-8px] w-[18px] h-[10px] bg-gradient-to-br from-[#7a8c72] to-[#5a6c52] rounded-tl-[50%] rounded-br-[50%] -rotate-30" />
            <div className="absolute bottom-[30px] right-[-8px] w-[18px] h-[10px] bg-gradient-to-br from-[#7a8c72] to-[#5a6c52] rounded-tl-[50%] rounded-br-[50%] rotate-30 scale-x-[-1]" />
            <div className="absolute bottom-[46px] left-[2px] w-[18px] h-[10px] bg-gradient-to-br from-[#7a8c72] to-[#5a6c52] rounded-tl-[50%] rounded-br-[50%] -rotate-[60deg]" />
          </div>

          {/* Lamp */}
          <div className="absolute bottom-[27%] left-[4%] w-[8%]">
            <div
              className="w-[36px] h-[20px] bg-gradient-to-b from-[rgba(201,169,110,0.6)] to-[rgba(201,169,110,0.2)]"
              style={{
                borderRadius: '0 0 50% 50%/0 0 30px 30px',
                clipPath: 'polygon(10% 0%, 90% 0%, 100% 100%, 0% 100%)',
              }}
            />
            <div className="w-[3px] h-[40px] bg-[#6b5035] mx-auto" />
            <div className="w-[18px] h-[6px] bg-[#6b5035] rounded-sm mx-auto" />
            <div className="absolute top-[16px] left-1/2 -translate-x-1/2 w-[30px] h-[30px] bg-[radial-gradient(circle,rgba(255,200,100,0.3),transparent_70%)] rounded-full animate-[lampPulse_3s_ease_infinite]" />
          </div>

          {/* Artwork */}
          <div className="absolute top-[8%] right-[12%]">
            <div className="w-[52px] h-[40px] border-2 border-[rgba(201,169,110,0.4)] rounded-sm p-1 bg-[rgba(201,169,110,0.05)]">
              <div className="w-full h-full bg-gradient-to-br from-[#2a4a3a] via-[#4a2a1a] to-[#1a3a4a] rounded-[1px]" />
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-[-14px] left-1/2 -translate-x-1/2 bg-bg-card border border-[rgba(201,169,110,0.15)] rounded-full px-[18px] py-[6px] text-[0.72rem] tracking-[0.14em] uppercase text-gold whitespace-nowrap shadow-[0_4px_16px_rgba(0,0,0,0.3)]">
        Living Room
      </div>
    </div>
  )
}
