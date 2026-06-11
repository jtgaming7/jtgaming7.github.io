const SUPABASE_URL = "https://gaxusjfogkdkpyhynfad.supabase.co";
const SUPABASE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ0.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdheHVzamZvZ2tka3B5aHluZmFkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODA1MDQxNzIsImV4cCI6MjA5NjA4MDE3Mn0._iP-H38petYh5GLYK5NZNxleAA4fxKCF7xSK0KqRNCI";

async function fetchList() {
  const levelsRes = await fetch(
    `${SUPABASE_URL}/rest/v1/levels?select=*&order=rank_position.asc`,
    {
      headers: {
        "apikey": SUPABASE_KEY,
        "Authorization": `Bearer ${SUPABASE_KEY}`
      }
    }
  );
  const levels = await levelsRes.json();
  if (!Array.isArray(levels)) {
    console.error("Levels fetch failed:", levels);
    throw new Error("Failed to fetch levels: " + JSON.stringify(levels));
  }

  const recordsRes = await fetch(
    `${SUPABASE_URL}/rest/v1/records?select=*`,
    {
      headers: {
        "apikey": SUPABASE_KEY,
        "Authorization": `Bearer ${SUPABASE_KEY}`
      }
    }
  );
  const records = await recordsRes.json();
  if (!Array.isArray(records)) {
    console.error("Records fetch failed:", records);
    throw new Error("Failed to fetch records: " + JSON.stringify(records));
  }

  const list = levels.map((level, index) => ({
    key: index,
    name: level.name,
    author: level.author,
    id: level.gd_id,
    pass: level.pass,
    percentToQualify: parseInt(level.percent_to_qualify),
    verificationVid: level.verification_vid,
    verifierLegacy: level.verifier_legacy,   // NEW: per-verifier legacy flag
    more: "none",
    vids: records
      .filter(r => r.level_id === level.id)
      .map(r => ({
        user: r.username,
        percent: parseInt(r.percent),
        hz: r.hz,
        link: r.link,
        legacy: r.legacy
      }))
  }));

  return list;
}

async function fetchChangelog() {
  const res = await fetch(
    `${SUPABASE_URL}/rest/v1/changelog?select=*&order=date.desc`,
    {
      headers: {
        "apikey": SUPABASE_KEY,
        "Authorization": `Bearer ${SUPABASE_KEY}`
      }
    }
  );
  const data = await res.json();
  if (!Array.isArray(data)) {
    console.error("Changelog fetch failed:", data);
    return [];
  }
  return data;
}
