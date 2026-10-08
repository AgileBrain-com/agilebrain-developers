# AgileBrain Developers

Run AgileBrain exercises inside your product with a link, an embedded frame, or a pop-up, and receive each participant's scores on your server by webhook.

Documentation: **[agilebrain.com/developers](https://agilebrain.com/developers/)**

## How an Integration Works

1. **Set up the exercise.** AgileBrain sets up an exercise for your organization and sends you its link and deployment ID.
2. **Open the exercise.** Send each participant to your exercise link with a participant ID.
3. **Run and score.** The AgileBrain Hub runs the exercise and scores the session.
4. **Receive scores.** The Hub posts `session.completed` to your webhook.

## Contents

| Path | Description |
|---|---|
| [`docs/embed.md`](docs/embed.md) | Direct link, embedded frame, and pop-up options |
| [`docs/webhooks.md`](docs/webhooks.md) | Webhook events and payload |
| [`examples/embed/`](examples/embed/) | A single HTML page with all three embed options |
| [`examples/webhook-receiver-node/`](examples/webhook-receiver-node/) | A Node.js webhook receiver and a local test delivery |

## Quickstart

Requires Node 18 or later. No dependencies.

```bash
cd examples/webhook-receiver-node
node receiver.mjs
# in a second terminal
./test-delivery.sh
```

The test prints `HTTP 204`, and the receiver prints the participant ID and the scores. See the [example README](examples/webhook-receiver-node/README.md) for the settings to change before you connect it to your organization.

## Access

AgileBrain grants access to approved partners under an agreement. Onboarding includes your exercise link and deployment ID, webhook setup, and score definitions.

Request access at [agilebrain.com/developers](https://agilebrain.com/developers/#access).

## Questions

Contact AgileBrain at [agilebrain.com/contact-us](https://agilebrain.com/contact-us/).

## License

Copyright 2026 AgileBrain, Inc. The documentation and examples in this repository are licensed under the Apache License 2.0; see [`LICENSE`](LICENSE). The license covers the files in this repository only and grants no rights to the AgileBrain service, name, or marks.
