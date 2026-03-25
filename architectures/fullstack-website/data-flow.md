# Data Flow Diagrams

Structured data flow diagrams at three levels of abstraction. Each level zooms into a process from the level above.

---

## Level 0 — Context Diagram

The system as a single process, showing all external entities and data flows.

```mermaid
graph LR
    U((User))
    ADMIN((Admin))
    EMAIL((Email Service))
    OAUTH((OAuth Provider))

    SYS["Full-Stack Website"]

    U -->|"browse, submit forms,\nupload files"| SYS
    SYS -->|"pages, data,\nnotifications"| U
    ADMIN -->|"manage content,\nview analytics"| SYS
    SYS -->|"dashboards,\nreports"| ADMIN
    OAUTH -->|"identity tokens"| SYS
    SYS -->|"auth requests"| OAUTH
    SYS -->|"transactional emails"| EMAIL
    EMAIL -->|"delivery status"| SYS

    style SYS fill:#1a2a2a,stroke:#15aabf,color:#e0e0e0
    style U fill:#1a1a2e,stroke:#228be6,color:#e0e0e0
    style ADMIN fill:#2a1a2a,stroke:#7950f2,color:#e0e0e0
    style EMAIL fill:#2a2a1a,stroke:#fab005,color:#e0e0e0
    style OAUTH fill:#1a2a1a,stroke:#40c057,color:#e0e0e0
```

**External entities:**
| Entity | Role | Data exchanged |
|--------|------|---------------|
| User | End user of the application | Pages, form submissions, file uploads, real-time updates |
| Admin | Internal admin managing content and monitoring | Dashboards, content management, analytics reports |
| OAuth Provider | Google, GitHub for social login | Identity tokens, profile data |
| Email Service | Transactional email delivery | Email payloads, delivery status webhooks |

---

## Level 1 — System Diagram

Decompose the system into major processes.

```mermaid
graph TB
    U((User))
    ADMIN((Admin))
    OAUTH((OAuth Provider))
    EMAIL((Email Service))

    subgraph System["Full-Stack Website"]
        P1["1.0 Authentication\n& Authorization"]
        P2["2.0 Content\nDelivery"]
        P3["3.0 Data\nMutation"]
        P4["4.0 File\nManagement"]
        P5["5.0 Analytics\n& Observability"]
        P6["6.0 Real-time\nSync"]

        DS_USER[("Users\nStore")]
        DS_CONTENT[("Content\nStore")]
        DS_FILES[("File\nStore")]
        DS_EVENTS[("Event\nStore")]
    end

    U -->|"credentials,\nOAuth redirect"| P1
    OAUTH -->|"identity token"| P1
    P1 -->|"session cookie"| U
    P1 -->|"user record"| DS_USER
    P1 -->|"verification email"| EMAIL

    U -->|"page request"| P2
    P2 -->|"query with RLS"| DS_CONTENT
    P2 -->|"rendered page"| U
    DS_USER -->|"auth context"| P2

    U -->|"form data"| P3
    P3 -->|"validated write"| DS_CONTENT
    P3 -->|"mutation event"| P5
    P3 -->|"invalidate cache"| P2

    U -->|"file upload"| P4
    P4 -->|"store file"| DS_FILES
    P4 -->|"file URL"| U
    DS_FILES -->|"CDN URL"| P2

    P5 -->|"track event"| DS_EVENTS
    P5 -->|"dashboards"| ADMIN
    U -->|"client events"| P5
    P2 -->|"pageview"| P5

    P3 -->|"broadcast change"| P6
    P6 -->|"real-time update"| U

    style P1 fill:#2a1a2a,stroke:#7950f2,color:#e0e0e0
    style P2 fill:#1a2a1a,stroke:#40c057,color:#e0e0e0
    style P3 fill:#1a1a2e,stroke:#228be6,color:#e0e0e0
    style P4 fill:#2a2a1a,stroke:#fab005,color:#e0e0e0
    style P5 fill:#1a2a2a,stroke:#15aabf,color:#e0e0e0
    style P6 fill:#2a1a1a,stroke:#e03131,color:#e0e0e0
```

**Process descriptions:**

| Process | Responsibility | Technology |
|---------|---------------|------------|
| 1.0 Authentication & Authorization | Sign up, sign in, OAuth, MFA, session management, password reset | Supabase Auth, Next.js Middleware |
| 2.0 Content Delivery | Render pages via RSC, serve static assets, apply caching, evaluate feature flags | Next.js App Router, Vercel CDN, PostHog flags |
| 3.0 Data Mutation | Validate input, execute writes, invalidate caches, broadcast changes | Server Actions, Zod, Supabase client |
| 4.0 File Management | Upload, store, serve, resize, delete files | Supabase Storage, Vercel Image Optimization |
| 5.0 Analytics & Observability | Track events, measure performance, manage dashboards, alert on anomalies | PostHog, Vercel Analytics |
| 6.0 Real-time Sync | Broadcast database changes to connected clients | Supabase Realtime (WebSocket) |

**Data stores:**

| Store | Technology | Access pattern |
|-------|-----------|---------------|
| Users Store | Supabase `auth.users` + `public.profiles` | RLS-gated, JWT-authenticated |
| Content Store | Supabase PostgreSQL tables | RLS-gated, server-side queries |
| File Store | Supabase Storage buckets | RLS-gated, CDN-served |
| Event Store | PostHog | Write-only from app, read via PostHog UI/API |

---

## Level 2 — Process Decomposition

### 1.0 Authentication & Authorization

```mermaid
graph TB
    U((User))
    OAUTH((OAuth Provider))
    EMAIL((Email Service))

    P1_1["1.1 Credential\nValidation"]
    P1_2["1.2 OAuth\nExchange"]
    P1_3["1.3 Session\nManagement"]
    P1_4["1.4 Authorization\nCheck"]
    P1_5["1.5 Account\nRecovery"]

    DS_USER[("Users Store")]
    DS_SESSION[("Session Store\n(JWT cookies)")]

    U -->|"email + password"| P1_1
    U -->|"OAuth redirect"| P1_2
    OAUTH -->|"code + token"| P1_2
    P1_1 -->|"hash check"| DS_USER
    P1_2 -->|"upsert user"| DS_USER
    P1_1 -->|"create session"| P1_3
    P1_2 -->|"create session"| P1_3
    P1_3 -->|"set cookie"| DS_SESSION
    P1_3 -->|"session cookie"| U
    DS_SESSION -->|"JWT claims"| P1_4
    P1_4 -->|"user_id → RLS"| DS_USER
    U -->|"reset request"| P1_5
    P1_5 -->|"reset email"| EMAIL
    P1_5 -->|"update password"| DS_USER

    style P1_1 fill:#2a1a2a,stroke:#7950f2,color:#e0e0e0
    style P1_2 fill:#2a1a2a,stroke:#7950f2,color:#e0e0e0
    style P1_3 fill:#2a1a2a,stroke:#7950f2,color:#e0e0e0
    style P1_4 fill:#2a1a1a,stroke:#e03131,color:#e0e0e0
    style P1_5 fill:#2a2a1a,stroke:#fab005,color:#e0e0e0
```

### 3.0 Data Mutation

```mermaid
graph TB
    U((User))

    P3_1["3.1 Input\nValidation"]
    P3_2["3.2 Authorization\nGate"]
    P3_3["3.3 Business\nLogic"]
    P3_4["3.4 Database\nWrite"]
    P3_5["3.5 Cache\nInvalidation"]
    P3_6["3.6 Event\nEmission"]

    DS_CONTENT[("Content Store")]
    DS_EVENTS[("Event Store")]
    RT["Real-time\nBroadcast"]

    U -->|"form data / action"| P3_1
    P3_1 -->|"Zod schema"| P3_2
    P3_2 -->|"check RLS / role"| P3_3
    P3_3 -->|"transform data"| P3_4
    P3_4 -->|"INSERT / UPDATE"| DS_CONTENT
    DS_CONTENT -->|"success"| P3_5
    P3_5 -->|"revalidatePath/Tag"| U
    P3_4 -->|"change event"| P3_6
    P3_6 -->|"capture"| DS_EVENTS
    P3_4 -->|"pg_notify"| RT

    style P3_1 fill:#1a1a2e,stroke:#228be6,color:#e0e0e0
    style P3_2 fill:#2a1a1a,stroke:#e03131,color:#e0e0e0
    style P3_3 fill:#1a2a1a,stroke:#40c057,color:#e0e0e0
    style P3_4 fill:#1a2a2a,stroke:#15aabf,color:#e0e0e0
    style P3_5 fill:#2a2a1a,stroke:#fab005,color:#e0e0e0
    style P3_6 fill:#1a2a2a,stroke:#15aabf,color:#e0e0e0
```

### 5.0 Analytics & Observability

```mermaid
graph TB
    U((User))
    ADMIN((Admin))
    SERVER["Server\n(RSC / Actions)"]

    P5_1["5.1 Client-side\nAutocapture"]
    P5_2["5.2 Server-side\nEvent Capture"]
    P5_3["5.3 Feature Flag\nEvaluation"]
    P5_4["5.4 Session\nRecording"]
    P5_5["5.5 Dashboard\n& Reporting"]

    DS_EVENTS[("PostHog\nEvent Store")]

    U -->|"clicks, pageviews"| P5_1
    P5_1 -->|"batch events"| DS_EVENTS
    SERVER -->|"mutation events,\nerrors"| P5_2
    P5_2 -->|"server events"| DS_EVENTS
    SERVER -->|"flag key + context"| P5_3
    P5_3 -->|"evaluate"| DS_EVENTS
    DS_EVENTS -->|"flag value"| SERVER
    U -->|"DOM snapshots"| P5_4
    P5_4 -->|"replay data"| DS_EVENTS
    DS_EVENTS -->|"query"| P5_5
    P5_5 -->|"insights"| ADMIN

    style P5_1 fill:#1a2a2a,stroke:#15aabf,color:#e0e0e0
    style P5_2 fill:#1a2a2a,stroke:#15aabf,color:#e0e0e0
    style P5_3 fill:#2a1a2a,stroke:#7950f2,color:#e0e0e0
    style P5_4 fill:#2a2a1a,stroke:#fab005,color:#e0e0e0
    style P5_5 fill:#1a2a1a,stroke:#40c057,color:#e0e0e0
```

---

## Data Store Access Matrix

Which processes read from and write to which stores:

| Process | Users Store | Content Store | File Store | Event Store |
|---------|:-----------:|:------------:|:---------:|:----------:|
| 1.0 Auth | R/W | — | — | — |
| 2.0 Content Delivery | R | R | R | — |
| 3.0 Data Mutation | R | R/W | — | W |
| 4.0 File Management | R | W (refs) | R/W | — |
| 5.0 Analytics | R (identify) | — | — | R/W |
| 6.0 Real-time | — | R (stream) | — | — |
