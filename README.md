# YouTube Thumbnail Fix

A simple extension for Chromium that fixes YouTube thumbnails in Russia

## How does it work?

YouTube's cdn `yt3.ggpht.com` seems to be blocked in Russia, so the thumbnails that rely on this specific cdn won't load. This extension redirects all `yt3.ggpht.com` requests to `yt4.ggpht.com`.

If `yt4.ggpht.com` suddenly gets blocked too, you can always change redirect host option in the `rules.json` file to `yt5.ggpht.com` and so on.

## UPD: YouTube Music thumbnails stopped working

Same solution. Now extension also redirects all `lh3.googleusercontent.com` requests to `yt4.ggpht.com`.
