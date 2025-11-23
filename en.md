---
title: English
nav_order: 2
layout: default
---

[🇰🇷 한국어](./)

# Terminal.Fi XP Bot Manual (EN)

Terminal.Fi XP Bot allows your Telegram community to earn XP through activity,  
climb levels, and participate in ranking and event systems.

This document covers **user commands** and **admin commands only**.  
(OWNER-only commands are intentionally excluded.)

---

## 📌 User Commands

### `/stats`
View your **XP, level, invitations**, and overall statistics.

### `/ranking`
Display the **Top 10** XP ranking.

### `/daily`
Claim your **daily XP reward** (once per day).

### `/mylink`
Generate your personal **Terminal.Fi invite link**.

### `/myinvites`
Check how many users you have invited so far.

### `/invites_ranking`
Show the **Top invite ranking**.

### `/join`
Join the currently active **lottery event**.

### `/event_rank`
Display XP ranking **within the configured campaign period**.

---

## 🔧 Admin Commands

Admin commands are recommended to use via **DM with the bot**.  
(OWNER-only commands are excluded.)

---

### 1) Basic Lookup

- `/chat_id <@handle or user_id>`  
  → Get a user’s Telegram `user_id`

- `/list_admins`  
  → Display all registered admins

- `/ref_user <@handle>`  
  → Show how many users the target account invited

- `/user_stats <@handle>`  
  → Full user stats (XP, level, invites, activity logs, etc.)

---

### 2) Activity Summary

- `/today` — Today's main group activity summary (KST)  
- `/week` — Last 7 days summary  
- `/range YYYY-MM-DD YYYY-MM-DD` — Summary for a custom date range  

---

### 3) XP Keyword Management

- `/add_xp_bonus <word> <xp>`  
  → Grant bonus XP when the keyword appears in a message

- `/add_xp_block <word>`  
  → Block XP when the keyword appears

- `/del_xp_word <word>`  
  → Remove a bonus/block keyword

- `/list_xp_words`  
  → Display the list of keyword rules

---

### 4) XP Policy Settings

- `/set_cooldown <seconds>`  
  → Minimum interval before the same user can earn XP again

- `/set_daily_cap <XP>`  
  → Maximum XP a user can earn per day

- `/set_inv_xp <XP>`  
  → XP rewarded per invited user

---

### 5) Campaign Settings

- `/set_campaign <YYYY-MM-DD> <YYYY-MM-DD>`  
  → Configure campaign XP period (used by `/event_rank`)

- `/clear_campaign`  
  → Reset campaign configuration and data

---

### 6) Bot Operation & Status

- `/set_time <start> <end>`  
  → Define hours (KST, 0–23) when XP tracking is active

- `/bot_off`  
  → Temporarily disable XP tracking and main bot functions

- `/bot_on`  
  → Re-enable bot functions

- `/bot_status`  
  → Show current bot state and time policy

---

### 7) Manual XP & Lottery

- `/add_xp <@handle> <XP>`  
  → Manually grant XP

- `/sub_xp <@handle> <XP>`  
  → Subtract XP from a user

- `/lottery [minutes] [winners]`  
  → Start a timed lottery  
    Example: `/lottery 5 3` → Draw 3 winners after 5 minutes

- `/lottery_end <winners>`  
  → End the lottery and select winners

---

## 📞 Contact

Support / bug reports: **[@KoonNFT](https://t.me/KoonNFT)**
