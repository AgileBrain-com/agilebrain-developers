#!/usr/bin/env bash
# Sends a sample session.completed delivery to the local receiver.
curl -sS -o /dev/null -w 'HTTP %{http_code}\n' -X POST http://localhost:3000/agilebrain/REPLACE-WITH-RANDOM-PATH \
  -H "Content-Type: application/json" \
  -d '{"event":"session.completed","sentAt":"2026-01-15T14:30:00.000Z","session":{
        "customId":"3f6c1e2a-9b7d-4c1e-8a52-0d4f7b9e6a10",
        "status":"COMPLETED",
        "deploymentId":"REPLACE-WITH-DEPLOYMENT-ID",
        "needScores":{"exampleScore":0.61}}}'
