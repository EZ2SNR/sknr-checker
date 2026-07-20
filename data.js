/* ============================================================
 * data.js — SKNR 데이터 번들 (캐릭터 DB + 콘텐츠 DB)
 * 손으로 갱신하는 곳. 계산 엔진은 index.html 에 있습니다.
 * dataVersion 은 index.html CONFIG.schemaVersion 과 일치해야 합니다.
 * ============================================================ */
window.SKNR_DB = {
  dataVersion: 1,
  updated: "2026-07-20",

  /* ============================================================
   * 캐릭터 DB — 월요일 편성 실데이터 (2026-07 검증)
   * critSelfBuff: 본인 패시브 등 장비 외 치확 (실효 = 명목 + 이 값 + 콘텐츠 버프)
   * ============================================================ */
  characterDB: {
    nata:    { name:"나타",   baseStats:{cc:23, cd:150, wc:0},  critSelfBuff:33, weakType:"bonus", reqWeakEff:100 },
    miho:    { name:"미호",   baseStats:{cc:5,  cd:150, wc:20}, critSelfBuff:0,  weakType:"bonus", reqWeakEff:100 },
    biscuit: { name:"비스킷", baseStats:{cc:5,  cd:150, wc:0},  critSelfBuff:0,  weakType:"none",  reqWeakEff:null },
    lina:    { name:"리나",   baseStats:{cc:5,  cd:150, wc:0},  critSelfBuff:0,  weakType:"none",  reqWeakEff:null },
    evan:    { name:"에반",   baseStats:{cc:5,  cd:150, wc:0},  critSelfBuff:0,  weakType:"none",  reqWeakEff:null }
  },

  /* ============================================================
   * 콘텐츠 DB — 지분/타수는 실측, 스킬 순서는 열람용(계산 미사용)
   * ============================================================ */
  contentDB: {
    mon_siege: {
      name: "월요일 공성전",
      scoring: "best1of5",
      roster: ["nata","miho","biscuit","lina","evan"],
      shares: { nata:74, miho:20, biscuit:3, lina:1, evan:0 },     // 실측 2026-07
      hits:   { nata:24, miho:15, biscuit:9 },                     // 시전 x 3체
      weakBuff: { nata:54, miho:54 },                              // 비스킷 아랫스킬 (공상위 2인)
      buffRouting: { type:"rank", value:2, targets:["nata","miho"], note:"비스킷 약확54는 공격력 상위 2인에게 — 나타·미호가 공격력 1~2위를 유지해야 합니다 (방어구 주옵 공% 유지)." },
      record: 13441763,
      rotation: "비스킷↓ 미호↑ 나타↓ 나타↑ 비스킷↑ / 리나↑ 미호↓ 미호↑ 나타↓ 나타↑ / 비스킷↑ 비스킷↓ 미호↓ 나타↓ 나타↑ / 리나↑ 비스킷↑ 미호↓ 나타↓ 나타↑"
    }
  },
};
