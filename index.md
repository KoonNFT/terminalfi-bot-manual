[🇺🇸 English](en/index.md)

# Terminal.Fi XP Bot 설명서 🇰🇷

안녕하세요! **Terminal.Fi XP Bot**입니다.  
커뮤니티에서 활동하면 XP를 얻고 레벨이 올라갑니다.

이 설명서는 **일반 유저 명령어 + 관리자 명령어**를 다룹니다.  
(OWNER 전용 명령어 설명은 포함하지 않습니다.)

---

## 📌 일반 명령어 (모든 유저 사용 가능)

### `/stats`
내 현재 **XP, 레벨, 초대 수** 등의 스탯을 확인합니다.

### `/ranking`
그룹의 **경험치 TOP 10**을 보여줍니다.

### `/daily`
매일 1회 지급되는 **일일보상 XP**를 획득합니다.

### `/mylink`
나만의 **Terminal.Fi 초대 링크**를 생성합니다.

### `/myinvites`
내가 초대한 유저 수를 확인합니다.

### `/invites_ranking`
초대 인원 기준 **초대 랭킹 TOP 10**을 보여줍니다.

### `/join`
진행 중인 **추첨 이벤트**가 있을 경우 참가합니다.

### `/event_rank`
관리자가 설정한 **캠페인 기간 동안의 XP 랭킹**을 확인합니다.

---

## 🔧 관리자 전용 명령어

관리자 전용 명령어는 **DM에서 사용 권장**합니다.  
(OWNER 명령어는 본 설명서에서 제외됨)

### ➤ 기본 조회 명령어
- `/chat_id <@handle 또는 user_id>`  
  특정 유저의 텔레그램 ID 확인  
- `/list_admins`  
  등록된 관리자 목록  
- `/ref_user <@handle>`  
  특정 유저의 초대 수 조회  
- `/user_stats <@handle>`  
  특정 유저의 XP/레벨/초대/활동 등 전체 스탯 조회  

### ➤ 활동 요약 명령어
- `/today` — 오늘 기준 메인 그룹 요약 (KST)  
- `/week` — 최근 7일 요약  
- `/range YYYY-MM-DD YYYY-MM-DD` — 기간별 요약  

### ➤ XP 관련 관리  
- `/add_xp_bonus <word> <xp>` — 특정 키워드 포함 메시지에 보너스 XP 지급  
- `/add_xp_block <word>` — XP를 주지 않을 키워드 등록  
- `/del_xp_word <word>` — 등록된 키워드 삭제  
- `/list_xp_words` — XP 키워드 목록 조회  

### ➤ XP 지급 정책 설정
- `/set_cooldown <초>` — 메시지당 XP 지급 간 최소 간격  
- `/set_daily_cap <XP>` — 일일 최대 XP 제한  
- `/set_inv_xp <XP>` — 초대 1명당 지급 XP 설정  

### ➤ 캠페인 설정
- `/set_campaign <시작날짜> <종료날짜>`  
  캠페인 XP 기간 설정  
- `/clear_campaign`  
  캠페인 데이터 초기화  

### ➤ 봇 운영 시간 / 활성화 상태
- `/set_time <시작> <종료>`  
  특정 시간대에는 XP 계산을 중지 (KST 기준)  
- `/bot_off`  
  봇 기능 일시 중지  
- `/bot_on`  
  봇 기능 재개  
- `/bot_status`  
  현재 봇 운영 상태 확인  

### ➤ 수동 XP 지급/차감
- `/add_xp <@handle> <XP>`  
  특정 유저에게 XP 지급  
- `/sub_xp <@handle> <XP>`  
  특정 유저에게 XP 차감  

### ➤ 추첨 이벤트
- `/lottery [분] [당첨자수]`  
  추첨 시작 (예: `/lottery 5 3` → 5분 뒤 3명 추첨)  
- `/lottery_end <인원수>`  
  즉시 추첨 종료 후 당첨자 발표  

---

## 📞 문의
버그 제보 및 문의: **@KoonNFT**

