# AI Agent for Social Media Automation (n8n)

This repository now includes a complete starter implementation for building an AI-powered social media automation agent in n8n.

## What is included

- `n8n/workflows/social-media-ai-agent.json` – main end-to-end n8n workflow template
- `n8n/config/.env.example` – environment variable template for keys, endpoints, limits, and controls
- `n8n/config/prompt-template.md` – AI prompt and brand-voice template
- `n8n/config/routing-rules.json` – smart routing and lead scoring rules
- `n8n/config/platform-response-policy.json` – platform formatting and delivery policies
- `n8n/testing/test-scenarios.md` – testing, monitoring, and optimization checklist

## Implementation order

1. Import `social-media-ai-agent.json` into n8n.
2. Configure credentials and variables using `.env.example`.
3. Start with Facebook/Instagram webhook + delivery.
4. Add WhatsApp delivery path.
5. Add LinkedIn delivery path.
6. Enable memory, lead routing, and analytics logging.
7. Run the test scenarios and refine prompts/rules.

## Workflow architecture mapping

The workflow is organized into the same five layers:

1. Trigger Layer (webhook + schedule)
2. Message Reception Layer (normalization + intent/context parsing)
3. AI Processing Layer (prompt build + model call)
4. Response Generation Layer (platform-aware formatting + CTA)
5. Message Delivery Layer (channel API delivery + logging)

## Notes

- Replace placeholder URLs and credentials before production use.
- Add platform-specific webhook verification steps in your Meta/LinkedIn/Twilio app settings.
- Use n8n error workflows and alerts for operational monitoring.
