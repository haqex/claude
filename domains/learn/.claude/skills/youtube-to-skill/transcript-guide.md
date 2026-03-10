# YouTube Transcript Extraction Guide

Reference for the `youtube-to-skill` skill. How to fetch transcripts and metadata from YouTube without an API key.

---

## How YouTube Transcripts Work

YouTube serves auto-generated and manual captions as timed XML via an internal endpoint. The URL for that endpoint is embedded in the watch page's JavaScript payload (`ytInitialPlayerResponse`).

---

## Step 1: Fetch the Watch Page

```
WebFetch: https://www.youtube.com/watch?v=<VIDEO_ID>
```

The response is an HTML page. The useful data is inside `<script>` tags as a large JSON blob assigned to `ytInitialPlayerResponse`.

---

## Step 2: Extract the Caption Track URL

Search the fetched page content for `"captionTracks"`. The structure looks like:

```json
"captionTracks": [
  {
    "baseUrl": "https://www.youtube.com/api/timedtext?v=VIDEO_ID&...",
    "name": { "simpleText": "English" },
    "vssId": ".en",
    "languageCode": "en",
    "kind": "asr"
  }
]
```

- Prefer `languageCode: "en"` and `kind: "asr"` (auto-generated)
- If multiple tracks exist, prefer manual (`kind` is absent or `"standard"`) over auto (`"asr"`)
- Extract the `baseUrl` value

---

## Step 3: Fetch the Transcript XML

```
WebFetch: <baseUrl from step 2>
```

Append `&fmt=json3` to get JSON instead of XML if possible, otherwise parse the XML.

**XML format:**
```xml
<transcript>
  <text start="12.34" dur="2.5">Hello and welcome</text>
  <text start="14.84" dur="3.1">to this tutorial</text>
</transcript>
```

**JSON3 format:**
```json
{
  "events": [
    { "tStartMs": 12340, "dDurationMs": 2500, "segs": [{ "utf8": "Hello and welcome" }] },
    { "tStartMs": 14840, "dDurationMs": 3100, "segs": [{ "utf8": "to this tutorial" }] }
  ]
}
```

---

## Step 4: Clean the Transcript

Raw captions have artifacts. Clean them:

1. **Strip timestamps** — drop `start`, `dur`, `tStartMs` etc.
2. **Decode HTML entities** — `&amp;` → `&`, `&#39;` → `'`
3. **Remove `[Music]`, `[Applause]`, `[Laughter]`** — caption noise
4. **Merge short fragments** — join consecutive lines into sentences
5. **Preserve paragraph breaks** — use silence gaps (dur > 1.5s) as natural paragraph boundaries

---

## Fallback: No Captions Available

If `captionTracks` is empty or missing:

1. Use the video **description** — often contains links, steps, or chapter markers
2. Look for **chapter markers** in the description: lines starting with a timestamp (`0:00`, `1:23`) indicate sections
3. Use the **title + description** to infer topic and structure
4. Note in the vault note: "Transcript unavailable — summary derived from description"

---

## Extracting Metadata

From the `ytInitialPlayerResponse` JSON blob in the page:

| Field | JSON path |
|-------|-----------|
| Title | `videoDetails.title` |
| Channel | `videoDetails.author` |
| Video ID | `videoDetails.videoId` |
| Description | `videoDetails.shortDescription` |
| Duration | `videoDetails.lengthSeconds` |
| Upload date | `microformat.playerMicroformatRenderer.uploadDate` |

If parsing the JSON is unreliable, fall back to HTML `<meta>` tags:
- `<meta name="title" content="...">` or `<title>...</title>`
- `<meta itemprop="channelId" content="...">`
- `<meta itemprop="uploadDate" content="...">`

---

## Common Issues

| Problem | Fix |
|---------|-----|
| `captionTracks` not found | Video has no captions — use fallback |
| `baseUrl` is relative | Prepend `https://www.youtube.com` |
| HTML entities in transcript text | Decode `&amp;`, `&#39;`, `&quot;` before using |
| Captions in wrong language | Pick track where `languageCode === "en"` |
| Age-restricted video | WebFetch will get a sign-in page — report to user and stop |
| Private/unavailable video | WebFetch returns error page — report to user and stop |
