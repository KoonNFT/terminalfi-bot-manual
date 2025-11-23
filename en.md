---
title: Terminal.Fi XP Bot (EN)
nav_order: 2
---

[🇰🇷 한국어](./)

# Terminal.Fi XP Bot Manual

Terminal.Fi XP Bot lets your Telegram community earn XP through activity,  
and use it for rankings, invite rewards and campaign events.

This doc covers **user commands** and **admin commands only**.  
(OWNER-only commands are intentionally excluded.)

---

## 📌 User Commands

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
Show the **Top invite ranking** by invited users.

### `/join`
Join an active **lottery event**.

### `/event_rank`
Show XP ranking **within the configured campaign period**.

---

## 🔧 Admin Commands

Admin commands are best used in **DM with the bot**.  
(OWNER-only commands are not documented here.)

### 1) Lookup

- `/chat_id <@handle or user_id>` – Get a user’s Telegram `user_id`  
- `/list_admins` – List all registered admins  
- `/ref_user <@handle>` – Check how many users this account has invited  
- `/user_stats <@handle>` – Full stats (XP, level, invites, activity, etc.)  

---

### 2) Activity Summary

- `/today` – Today’s activity summary for the main group (KST)  
- `/week` – Summary for the last 7 days  
- `/range YYYY-MM-DD YYYY-MM-DD` – Summary for a custom date range  

---

### 3) XP Keywords

- `/add_xp_bonus <word> <xp>` – Give **bonus XP** when a message contains keyword  
- `/add_xp_block <word>` – **Block XP** when a message contains keyword  
- `/del_xp_word <word>` – Remove a registered XP keyword  
- `/list_xp_words` – List all XP-related keywords  

---

### 4) XP Policy

- `/set_cooldown <seconds>` – Minimum interval between XP gai_
