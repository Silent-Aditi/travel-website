async function fetchSubmissions() {
  const res = await fetch('/api/submissions');
  if (!res.ok) throw new Error('failed to fetch');
  return res.json();
}

function renderTable(submissions) {
  if (!submissions || submissions.length === 0) return '<p>No submissions yet.</p>';
  const keys = Array.from(submissions.reduce((set, s) => { Object.keys(s).forEach(k => set.add(k)); return set; }, new Set()));
  let html = '<table><thead><tr>' + keys.map(k => `<th>${k}</th>`).join('') + '</tr></thead><tbody>';
  for (const s of submissions) {
    html += '<tr>' + keys.map(k => `<td>${escapeHtml(String(s[k] ?? ''))}</td>`).join('') + '</tr>';
  }
  html += '</tbody></table>';
  return html;
}

function escapeHtml(str) {
  return str.replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
}

async function load() {
  const content = document.getElementById('content');
  const count = document.getElementById('count');
  try {
    content.innerHTML = 'Loading…';
    const payload = await fetchSubmissions();
    const subs = Array.isArray(payload.submissions) ? payload.submissions : [];
    content.innerHTML = renderTable(subs);
    count.textContent = ` (${subs.length})`;
  } catch (err) {
    content.innerHTML = '<p style="color:crimson">Failed to load submissions</p>';
    console.error(err);
  }
}

document.getElementById('refresh').addEventListener('click', load);
window.addEventListener('load', load);
