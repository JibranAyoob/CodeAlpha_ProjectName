# Testing, Monitoring, and Optimization Checklist

## Phase 1: Connection Tests
- Verify webhook reception from each platform sandbox.
- Verify outbound API delivery for Facebook/Instagram/WhatsApp/LinkedIn.
- Verify AI provider authentication and response shape.

## Phase 2: Conversation Scenarios
- Simple FAQ (services, pricing range, turnaround).
- Portfolio request requiring asset recommendation.
- High-intent lead asking for timeline + budget.
- Sensitive/complex inquiry requiring manual review route.
- VIP contact receiving priority route.

## Phase 3: Reliability
- API timeout and retry behavior.
- Rate-limit handling and backoff behavior.
- Error workflow and alert notifications.

## Phase 4: Quality
- Brand voice consistency score (manual rubric).
- CTA clarity and click-through tracking.
- Lead qualification quality (accepted vs rejected leads).

## Phase 5: Ongoing Optimization
- Weekly prompt updates from real conversation review.
- Monthly top intents and unanswered question analysis.
- Monthly AI usage/cost review and token budget tuning.
