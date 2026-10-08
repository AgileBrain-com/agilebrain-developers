# Webhook Events

AgileBrain turns on the webhook for your organization during onboarding. The AgileBrain Hub then posts each session event to your server as JSON.

## Events

| Event | When it fires |
|---|---|
| `session.created` | A session starts. It carries no scores. |
| `session.completed` | The session is scored. |

## Example

```http
POST https://your-server.example.com/agilebrain/<unguessable-path>
Content-Type: application/json

{
  "event": "session.completed",
  "sentAt": "2026-01-15T14:30:00.000Z",
  "session": {
    "customId": "3f6c1e2a-9b7d-4c1e-8a52-0d4f7b9e6a10",
    "status": "COMPLETED",
    "deploymentId": "REPLACE-WITH-DEPLOYMENT-ID",
    "needScores": {
      "exampleScore": 0.61,
      "anotherScore": 0.48
    }
  }
}
```

| Field | Type | Description |
|---|---|---|
| `event` | string | `session.created` or `session.completed` |
| `sentAt` | string | Delivery time, ISO 8601 UTC |
| `session.customId` | string | The participant ID you passed as `?sessionId=` |
| `session.status` | string | `COMPLETED` on `session.completed` |
| `session.deploymentId` | string | The exercise the session belongs to |
| `session.needScores` | object | Score name to number. Null on `session.created`. |

Payloads can include more fields than shown. Ignore fields you do not use.

## Handling Deliveries

- One webhook receives events for every exercise in your organization. Filter on `event` and `session.deploymentId`.
- Respond with any 2xx status within 10 seconds. Store the payload and process it after you respond.
- The Hub sends each event once. Keep your receiver available.
- Keep your webhook path secret and accept only participant IDs your server issued.

## Scores

`needScores` maps each score name to a number. Treat the keys as opaque and do not assume a fixed list. Score definitions come with onboarding.
