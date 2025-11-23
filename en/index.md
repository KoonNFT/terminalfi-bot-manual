[🇰🇷 한국어](../index.md)

# Terminal.Fi XP Bot Manual 🇺🇸

Welcome to **Terminal.Fi XP Bot**!  
By participating in the community, you can earn XP and level up.

This documentation includes **user commands and admin commands only**.  
(OWNER-level commands are intentionally excluded.)

---

## 📌 User Commands (Available to Everyone)

### `/stats`
Shows your XP, level, invites, and full stats.

### `/ranking`
Displays **Top 10 XP ranking**.

### `/daily`
Claim your **daily XP reward** (once per day).

### `/mylink`
Generate your personal **Terminal.Fi invitation link**.

### `/myinvites`
Check how many users you have invited.

### `/invites_ranking`
Shows the **Top 10 invite ranking**.

### `/join`
Join an active lottery event (if available).

### `/event_rank`
Check the XP ranking **within the current campaign period**.

---

## 🔧 Admin Commands

Admin commands are recommended to be used **via DM**.  
(OWNER commands are not included in this manual.)

### ➤ Basic Lookup
- `/chat_id <@handle or user_id>` — Get user’s Telegram ID  
- `/list_admins` — List all registered admins  
- `/ref_user <@handle>` — Check user’s invite count  
- `/user_stats <@handle>` — Full stats for a specific user  

### ➤ Activity Summary
- `/today` — Today’s summary (KST)  
- `/week` — Last 7 days summary  
- `/range YYYY-MM-DD YYYY-MM-DD` — Summary for a custom period  

### ➤ XP Keyword Controls
- `/add_xp_bonus <word> <xp>` — Bonus XP when message contains keyword  
- `/add_xp_block <word>` — Block XP when message contains keyword  
- `/del_xp_word <word>` — Delete existing keyword  
- `/list_xp_words` — Show all XP-related keywords  

### ➤ XP Rules
- `/set_cooldown <seconds>` — Minimum interval between XP gains  
- `/set_daily_cap <XP>` — Daily XP limit per user  
- `/set_inv_xp <XP>` — XP awarded per invite  

### ➤ Campaign Controls
- `/set_campaign <start> <end>` — Set campaign XP period  
- `/clear_campaign` — Reset campaign data  

### ➤ Bot Operation Hours / Status
- `/set_time <start> <end>` — Disable XP during specific hours (KST)  
- `/bot_off` — Temporarily disable bot  
- `/bot_on` — Reactivate bot  
- `/bot_status` — Check current bot status  

### ➤ Manual XP Control
- `/add_xp <@handle> <XP>` — Give XP manually  
- `/sub_xp <@handle> <XP>` — Subtract XP manually  

### ➤ Lottery Commands
- `/lottery [minutes] [winners]`  
  Start a timed lottery  
- `/lottery_end <winners>`  
  End lottery immediately and draw winners  

---

## 📞 Contact
For support or bug reports: **@KoonNFT**

