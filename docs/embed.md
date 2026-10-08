# Run the Exercise

Use a direct link, an embedded frame, or a pop-up window. The AgileBrain Hub runs the full participant experience.

## Participant IDs

- Add a participant ID to the link as `?sessionId=`. The Hub returns it as `session.customId` in every webhook.
- Generate a new random value, such as a UUID, for each participant and exercise, and map it to the participant on your server. Never use an email address, a name, or a sequential ID.
- Each participant ID can be used for one completed exercise.

## Options

```html
<!-- Direct link -->
<a href="https://hub.agilebrain.com/run/your-exercise-slug?sessionId=PARTICIPANT_ID">
  Start the exercise
</a>

<!-- Embedded frame -->
<iframe
  src="https://hub.agilebrain.com/run/your-exercise-slug?sessionId=PARTICIPANT_ID"
  width="100%" height="700"
  style="border: none; border-radius: 8px;"
  allow="fullscreen"
  title="AgileBrain exercise"></iframe>

<!-- Pop-up window (opens from a click) -->
<button type="button" onclick="window.open(
  'https://hub.agilebrain.com/run/your-exercise-slug?sessionId=PARTICIPANT_ID',
  'agilebrain', 'width=900,height=760')">
  Start the exercise
</button>
```

A runnable page with all three options is in [`examples/embed/index.html`](../examples/embed/index.html).

## Notes

- Scores arrive on your server by [webhook](webhooks.md).
- Give AgileBrain a return URL during onboarding and participants land there when they finish.
- On phones, open the direct link so the exercise has the full screen.
