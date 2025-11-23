[🇰🇷 한국어](#/)

# Terminal.Fi XP Bot Manual

Terminal.Fi XP Bot lets your Telegram community earn XP by chatting  
and use it for rankings, invite rewards and campaign events.  

This doc covers **user commands** and **admin commands only**.  
(OWNER-only commands are intentionally excluded.)

---

## 📌 User Commands

These commands can be used by any member in the group.

### `/stats`
Show your current **XP, level, invite count** and basic stats.

### `/ranking`
Display the **Top 10 ranking** based on XP.

### `/daily`
Claim your **daily XP reward** (once per day).

### `/mylink`
Generate your personal **Terminal.Fi invite link**.

### `/myinvites`
Check how many users you have invited so far.

### `/invites_ranking`
Show the **Top invite ranking** based on invited users.

### `/join`
Join an active **lottery event** (if one is running).

### `/event_rank`
Show XP ranking **within the configured campaign period**.

---

## 🔧 Admin Commands

Admin commands are best used in **DM with the bot**.  
(OWNER-only commands are not documented here.)

### 1) Lookup

- `/chat_id <@handle or user_id>`  
  → Get the Telegram `user_id` of a specific user

- `/list_admins`  
  → List all registered admins

- `/ref_user <@handle>`  
  → Check how many users this account has invited

- `/user_stats <@handle>`  
  → Full stats (XP, level, invites, activity, etc.) for a user

---

### 2) Activity Summary

- `/today`  
  → Today’s activity summary for the main group (KST)

- `/week`  
  → Summary for the last 7 days

- `/range YYYY-MM-DD YYYY-MM-DD`  
  → Summary for a custom date range

---

### 3) XP Keywords

- `/add_xp_bonus <word> <xp>`  
  → Give **bonus XP** when a message contains this keyword

- `/add_xp_block <word>`  
  → **Block XP** when a message contains this keyword

- `/del_xp_word <word>`  
  → Remove a registered XP keyword (bonus / block)

- `/list_xp_words`  
  → List all XP-related keywords

---

### 4) XP Policy

- `/set_cooldown <seconds>`  
  → Set the **minimum interval** between XP gains for the same user

- `/set_daily_cap <XP>`  
  → Set **maximum XP per day** per user

- `/set_inv_xp <XP>`  
  → Set XP amount **awarded per invite**

---

### 5) Campaign Controls

- `/set_campaign <YYYY-MM-DD> <YYYY-MM-DD>`  
  → Set the campaign XP period (used by `/event_rank`)

- `/clear_campaign`  
  → Clear the campaign period and related data

---

### 6) Bot Operation & Status

- `/set_time <start> <end>`  
  → Set KST hours (0–23) when XP tracking should be active/inactive

- `/bot_off`  
  → Temporarily **disable XP tracking and main features**

- `/bot_on`  
  → **Re-enable** the bot after it has been turned off

- `/bot_status`  
  → Check current bot status and time configuration

---

### 7) Manual XP & Lottery

- `/add_xp <@handle> <XP>`  
  → Manually add XP to a specific user

- `/sub_xp <@handle> <XP>`  
  → Subtract XP from a specific user

- `/lottery [minutes] [winners]`  
  → Start a lottery  
  Example: `/lottery 5 3` → draw **3 winners after 5 minutes**

- `/lottery_end <winners>`  
  → End the current lottery and draw that many winners immediately

---

## 📞 Contact

Support / bug reports: **[@KoonNFT](https://t.me/KoonNFT)**  
