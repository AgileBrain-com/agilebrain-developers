import { createServer } from 'node:http';

const PORT = 3000;
const WEBHOOK_PATH = '/agilebrain/REPLACE-WITH-RANDOM-PATH';  // keep secret
const DEPLOYMENT_ID = 'REPLACE-WITH-DEPLOYMENT-ID';           // from onboarding

createServer((req, res) => {
  const path = new URL(req.url, 'http://localhost').pathname;
  if (req.method !== 'POST' || path !== WEBHOOK_PATH) {
    res.writeHead(404).end();
    return;
  }

  let body = '';
  req.setEncoding('utf8');
  req.on('data', (chunk) => { body += chunk; });
  req.on('end', () => {
    res.writeHead(204).end(); // acknowledge first, then process

    let payload;
    try { payload = JSON.parse(body); } catch { return; }
    if (!payload || typeof payload !== 'object') return;

    const { event, session } = payload;
    if (session?.deploymentId !== DEPLOYMENT_ID) {
      console.log('Ignored delivery for deployment', session?.deploymentId);
      return;
    }

    if (event === 'session.completed') {
      // customId is the participant ID you passed as ?sessionId=
      if (!issuedByYou(session.customId)) return;
      saveScores(session.customId, session.needScores);
    }
  });
}).listen(PORT, () => console.log(`Listening on ${PORT}`));

function issuedByYou(participantId) {
  return true; // replace with a lookup of the IDs your server issued
}

function saveScores(participantId, scores) {
  console.log(participantId, scores); // replace with your storage
}
