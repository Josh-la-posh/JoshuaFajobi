import { Document, Page, Text, View, StyleSheet, Link } from "@react-pdf/renderer";
import type { JsonResume } from "@/data/resume";

// Spacing & typography scale
const SP = 4; // base spacing unit
const FONT = {
  body: 11.5,
  h1: 20,
  h2: 14,
  h3: 11.5,
  small: 9.5,
};

const styles = StyleSheet.create({
  page: { padding: SP * 7, fontSize: FONT.body, fontFamily: "Helvetica" },
  h1: { fontSize: FONT.h1, fontWeight: 700 },
  h2: { fontSize: FONT.h2, fontWeight: 700, marginBottom: SP * 2 },
  h3: { fontSize: FONT.h3, fontWeight: 700 },
  rule: { height: 1, backgroundColor: "#e5e5e5", marginVertical: SP * 3 },
  row: { flexDirection: "row", justifyContent: "space-between" },
  muted: { color: "#555" },
  chip: { fontSize: FONT.small, borderWidth: 1, borderColor: "#ccc", borderRadius: 4, paddingVertical: SP, paddingHorizontal: SP * 2, marginRight: SP * 2, marginBottom: SP * 2 },
  listItem: { marginBottom: SP, lineHeight: 1.3 },
  section: { marginTop: SP * 4 },
  bulletWrap: { flexDirection: "row" },
  bulletDot: { width: SP * 2, fontSize: FONT.body, textAlign: "center" },
  bulletText: { flex: 1 },
  skillsGrid: { flexDirection: "row", flexWrap: "wrap" },
  skillGroup: { width: "48%", marginBottom: SP * 3 },
  smallMuted: { color: "#666", fontSize: FONT.small },
});

function formatDate(iso?: string) {
  if (!iso) return "Present";
  const [y, m] = iso.split("-");
  if (!y) return iso;
  const date = new Date(Number(y), Number(m || "1") - 1, 1);
  return date.toLocaleDateString("en-US", { month: "short", year: "numeric" });
}

function Bullet({ children }: { children: string }) {
  return (
    <View style={styles.bulletWrap}>
      <Text style={styles.bulletDot}>•</Text>
      <Text style={styles.bulletText}>{children}</Text>
    </View>
  );
}

export function ResumePDF({ data }: { data: JsonResume }) {
  // Prefer explicit achievements; fallback to heuristic extraction.
  let achievements = (data.achievements && data.achievements.length) ? data.achievements.slice(0, 6) : [];
  if (!achievements.length) {
    const fallback: string[] = [];
    for (const w of data.work) {
      if (!w.highlights) continue;
      for (const h of w.highlights) {
        if (/\d|%/.test(h) && fallback.length < 6) fallback.push(`${h} (${w.name})`);
      }
      if (fallback.length >= 6) break;
    }
    achievements = fallback;
  }
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        {/* Header */}
        <Text style={styles.h1}>{data.basics.name}</Text>
        <Text style={styles.muted}>{data.basics.label}</Text>
        <Text style={styles.muted}>
          {data.basics.location?.city}, {data.basics.location?.countryCode} • {data.basics.email} • {data.basics.phone}
        </Text>
        <Text style={styles.muted}>{data.basics.url}</Text>
        {data.basics.profiles?.length ? (
          <Text style={styles.smallMuted}>
            {data.basics.profiles.map(p => p.url || p.network).filter(Boolean).join(" • ")}
          </Text>
        ) : null}
        <View style={styles.rule} />

        {/* Summary */}
        {data.basics.summary && (
          <View style={styles.section}>
            <Text style={styles.h2}>Summary</Text>
            <Text>{data.basics.summary}</Text>
          </View>
        )}

        {/* Core Skills (inline chips) */}
        {data.skills?.length && (
          <View style={styles.section}>
            <Text style={styles.h2}>Core Skills</Text>
            <View style={styles.skillsGrid}>
              {data.skills.map((s, i) => (
                <View key={i} style={styles.skillGroup}>
                  <Text style={styles.h3}>{s.name}</Text>
                  <View style={{ flexDirection: "row", flexWrap: "wrap", marginTop: SP }}>
                    {s.keywords.map((k, idx) => (
                      <Text key={idx} style={styles.chip}>{k}</Text>
                    ))}
                  </View>
                </View>
              ))}
            </View>
          </View>
        )}

        {/* Achievements */}
        {achievements.length ? (
          <View style={styles.section}>
            <Text style={styles.h2}>Selected Impact</Text>
            {achievements.map((a, i) => <Bullet key={i}>{a}</Bullet>)}
          </View>
        ) : null}

        {/* Experience */}
        {!!data.work?.length && (
          <View style={styles.section}>
            <Text style={styles.h2}>Experience</Text>
            {data.work.map((w, i) => (
              <View key={i} style={{ marginBottom: SP * 4 }}>
                <View style={styles.row}>
                  <Text style={styles.h3}>{w.position} · {w.name}</Text>
                  <Text style={styles.muted}>
                    {formatDate(w.startDate)} – {formatDate(w.endDate)}
                  </Text>
                </View>
                {w.url && (
                  <Link src={w.url}>
                    <Text style={{ color: "#2563eb" }}>{w.url}</Text>
                  </Link>
                )}
                {w.summary && <Text>{w.summary}</Text>}
                {w.highlights?.length ? (
                  <View style={{ marginTop: SP }}>
                    {w.highlights.map((h, j) => <Bullet key={j}>{h}</Bullet>)}
                  </View>
                ) : null}
              </View>
            ))}
          </View>
        )}

        {/* Projects (curated top 5) */}
        {!!data.projects?.length && (
          <View style={styles.section}>
            <Text style={styles.h2}>Selected Projects</Text>
            {data.projects.slice(0, 5).map((p, i) => (
              <View key={i} style={{ marginBottom: SP * 3 }}>
                <Text style={styles.h3}>{p.name}</Text>
                {p.url && (
                  <Link src={p.url}>
                    <Text style={{ color: "#2563eb" }}>{p.url}</Text>
                  </Link>
                )}
                {p.description && <Text>{p.description}</Text>}
                {p.keywords?.length ? (
                  <View style={{ marginTop: SP, flexDirection: "row", flexWrap: "wrap" }}>
                    {p.keywords.slice(0, 8).map((k, idx) => (
                      <Text key={idx} style={styles.chip}>{k}</Text>
                    ))}
                  </View>
                ) : null}
              </View>
            ))}
          </View>
        )}

        {/* Education Placeholder */}
        {data.education?.length ? (
          <View style={styles.section}>
            <Text style={styles.h2}>Education</Text>
            {data.education.map((e, i) => (
              <View key={i} style={{ marginBottom: SP * 2 }}>
                <Text style={styles.h3}>{e.institution}</Text>
                <Text style={styles.muted}>{[e.studyType, e.area].filter(Boolean).join(" · ")}</Text>
                <Text style={styles.smallMuted}>{formatDate(e.startDate)} – {formatDate(e.endDate)}</Text>
              </View>
            ))}
          </View>
        ) : (
          <View style={styles.section}>
            <Text style={styles.h2}>Education</Text>
            <Text style={styles.smallMuted}>Add education entries in `resume.education`.</Text>
          </View>
        )}

        {/* Certifications */}
        {data.certifications?.length ? (
          <View style={styles.section}>
            <Text style={styles.h2}>Certifications</Text>
            {data.certifications.map((c, i) => (
              <View key={i} style={{ marginBottom: SP * 2 }}>
                <Text style={styles.h3}>{c.name}</Text>
                <Text style={styles.smallMuted}>{[c.issuer, formatDate(c.date)].filter(Boolean).join(" · ")}</Text>
                {c.url && (
                  <Link src={c.url}>
                    <Text style={{ color: "#2563eb" }}>{c.url}</Text>
                  </Link>
                )}
              </View>
            ))}
          </View>
        ) : null}

        {/* Languages */}
        {data.languages?.length ? (
          <View style={styles.section}>
            <Text style={styles.h2}>Languages</Text>
            <View>
              {data.languages.map((l, i) => (
                <Text key={i} style={styles.listItem}>{l.language}{l.fluency ? ` – ${l.fluency}` : ""}</Text>
              ))}
            </View>
          </View>
        ) : null}
      </Page>
    </Document>
  );
}
