const SUPABASE_URL = "https://gaxusjfogkdkpyhynfad.supabase.co";
const SUPABASE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdheHVzamZvZ2tka3B5aHluZmFkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODA1MDQxNzIsImV4cCI6MjA5NjA4MDE3Mn0._iP-H38petYh5GLYK5NZNxleAA4fxKCF7xSK0KqRNCI";

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
  const records = await recordsRes.json();
  if (!Array.isArray(records)) {
      console.error("Records fetch failed:", records);
      throw new Error("Failed to fetch records: " + JSON.stringify(records));
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

  const list = levels.map((level, index) => ({
    key: index,
    name: level.name,
    author: level.author,
    id: level.gd_id,
    pass: level.pass,
    percentToQualify: level.percent_to_qualify,
    verificationVid: level.verification_vid,
    more: "none",
    vids: records
      .filter(r => r.level_id === level.id)
      .map(r => ({
        user: r.username,
        percent: r.percent,
        hz: r.hz,
        link: r.link,
        legacy: r.legacy
      }))
  }));

  return list;
}
