# Webhook Receiver (Node.js)

A minimal receiver for AgileBrain webhooks. Node 18 or later, no dependencies.

## Run It

```bash
node receiver.mjs
```

In a second terminal, send the sample delivery:

```bash
./test-delivery.sh
```

The test prints `HTTP 204`, and the receiver prints the participant ID and the scores. Use the same path and deployment ID in both files.

## Before You Connect It

1. Set `WEBHOOK_PATH` in `receiver.mjs` to a random path.
2. Set `DEPLOYMENT_ID` to the value from onboarding.
3. Replace `issuedByYou` with a lookup of the participant IDs your server issued, and `saveScores` with your own storage.
4. Serve the receiver over HTTPS and give AgileBrain its public address, including the path.
