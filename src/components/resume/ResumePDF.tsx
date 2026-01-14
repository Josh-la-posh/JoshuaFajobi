import { Document, Page, Text, View, StyleSheet, Link } from "@react-pdf/renderer";
import type { JsonResume } from "@/data/resume";

// Design tokens
const SP = 4;
const FONT = { body: 10, h1: 18, h2: 11, h3: 10, small: 8.5 };
const COLOR = {
  accent: "#1e40af",
  text: "#1f2937",
  muted: "#4b5563",
  light: "#6b7280",
  border: "#d1d5db",
  bg: "#f9fafb",
};

const styles = StyleSheet.create({
  page: { padding: SP * 6, paddingBottom: SP * 10, fontSize: FONT.body, fontFamily: "Helvetica", color: COLOR.text, lineHeight: 1.4 },
  // Header
  headerWrap: { marginBottom: SP * 3 },
  name: { fontSize: FONT.h1, fontWeight: 700, letterSpacing: 0.5 },
  label: { fontSize: FONT.h2, color: COLOR.muted, marginTop: SP / 2 },
  contactRow: { flexDirection: "row", flexWrap: "wrap", marginTop: SP * 1.5, gap: SP },
  contactItem: { fontSize: FONT.small, color: COLOR.light },
  // Sections
  section: { marginTop: SP * 3 },
  sectionHeader: { flexDirection: "row", alignItems: "center", marginBottom: SP * 1.5 },
  h2: { fontSize: FONT.h2, fontWeight: 700, textTransform: "uppercase", letterSpacing: 1, color: COLOR.accent },
  sectionLine: { flex: 1, height: 1, backgroundColor: COLOR.border, marginLeft: SP * 2 },
  h3: { fontSize: FONT.h3, fontWeight: 700 },
  // Layout
  row: { flexDirection: "row", justifyContent: "space-between", alignItems: "flex-start" },
  muted: { color: COLOR.muted, fontSize: FONT.body },
  light: { color: COLOR.light, fontSize: FONT.small },
  // Skills
  skillsWrap: { flexDirection: "row", flexWrap: "wrap", gap: SP },
  chip: { fontSize: FONT.small, backgroundColor: COLOR.bg, borderRadius: 3, paddingVertical: SP * 0.75, paddingHorizontal: SP * 1.5, color: COLOR.text },
  // Bullets
  bulletWrap: { flexDirection: "row", marginBottom: SP * 0.75 },
  bulletDot: { width: SP * 2.5, fontSize: FONT.body, color: COLOR.accent },
  bulletText: { flex: 1, lineHeight: 1.35 },
  metric: { fontWeight: 700, color: COLOR.accent },
  // Cards
  card: { marginBottom: SP * 2.5 },
  cardHeader: { flexDirection: "row", justifyContent: "space-between", alignItems: "baseline", marginBottom: SP * 0.5 },
  // Inline items
  inlineList: { flexDirection: "row", flexWrap: "wrap", gap: SP * 2 },
  inlineItem: { fontSize: FONT.small, color: COLOR.text },
  // Footer
  footer: { position: "absolute", bottom: SP * 3, left: SP * 6, right: SP * 6, flexDirection: "row", justifyContent: "space-between", fontSize: FONT.small, color: COLOR.light, borderTopWidth: 1, borderTopColor: COLOR.border, paddingTop: SP },
  link: { color: COLOR.accent, textDecoration: "none" },
});

function formatDate(iso?: string) {
  if (!iso) return "Present";
  const [y, m] = iso.split("-");
  if (!y) return iso;
  const date = new Date(Number(y), Number(m || "1") - 1, 1);
  return date.toLocaleDateString("en-US", { month: "short", year: "numeric" });
}

function Bullet({ children }: { children: string }) {
  const parts = children.split(/(\b\d+(?:[.,]\d+)?%?\+?\b)/g).filter(Boolean);
  return (
    <View style={styles.bulletWrap}>
      <Text style={styles.bulletDot}>•</Text>
      <Text style={styles.bulletText}>
        {parts.map((p, i) => /\b\d+(?:[.,]\d+)?%?\+?\b/.test(p) ? <Text key={i} style={styles.metric}>{p}</Text> : <Text key={i}>{p}</Text>)}
      </Text>
    </View>
  );
}

function SectionHeader({ title }: { title: string }) {
  return (
    <View style={styles.sectionHeader}>
      <Text style={styles.h2}>{title}</Text>
      <View style={styles.sectionLine} />
    </View>
  );
}

export function ResumePDF({ data }: { data: JsonResume }) {
  const achievements = (data.achievements && data.achievements.length) ? data.achievements.slice(0, 6) : [];
  const achievementSet = new Set(achievements.map(a => a.toLowerCase()));

  return (
    <Document>
      <Page size="A4" style={styles.page}>
        {/* Header */}
        <View style={styles.headerWrap}>
          <Text style={styles.name}>{data.basics.name}</Text>
          <Text style={styles.label}>{data.basics.label}</Text>
          <View style={styles.contactRow}>
            {data.basics.location?.city && (
              <Text style={styles.contactItem}>{data.basics.location.city}, {data.basics.location.countryCode}</Text>
            )}
            {data.basics.email && <Text style={styles.contactItem}>{data.basics.email}</Text>}
            {data.basics.phone && <Text style={styles.contactItem}>{data.basics.phone}</Text>}
            {data.basics.url && <Link src={data.basics.url} style={styles.link}><Text style={styles.contactItem}>{data.basics.url.replace(/^https?:\/\//, "")}</Text></Link>}
            {data.basics.profiles?.map((p, i) => p.url && (
              <Link key={i} src={p.url} style={styles.link}><Text style={styles.contactItem}>{p.network}</Text></Link>
            ))}
          </View>
          {(data.basics.availability || data.basics.workAuthorization) && (
            <View style={[styles.contactRow, { marginTop: SP }]}>
              {data.basics.availability && <Text style={styles.light}>{data.basics.availability}</Text>}
              {data.basics.workAuthorization && <Text style={styles.light}>{data.basics.workAuthorization}</Text>}
            </View>
          )}
        </View>

        {/* Summary */}
        {data.basics.summary && (
          <View style={styles.section}>
            <SectionHeader title="PROFESSIONAL SUMMARY" />
            <Text style={styles.muted}>{data.basics.summary}</Text>
          </View>
        )}

        {/* Skills */}
        {data.skills?.length ? (
          <View style={styles.section}>
            <SectionHeader title="SKILLS" />
            {data.skills.map((s, i) => (
              <View key={i} style={{ marginBottom: SP * 1.5 }}>
                <Text style={[styles.h3, { marginBottom: SP * 0.5 }]}>{s.name}</Text>
                <View style={styles.skillsWrap}>
                  {s.keywords.map((k, idx) => <Text key={idx} style={styles.chip}>{k}</Text>)}
                </View>
              </View>
            ))}
          </View>
        ) : null}

        {/* Key Achievements */}
        {achievements.length ? (
          <View style={styles.section}>
            <SectionHeader title="KEY ACHIEVEMENTS" />
            {achievements.map((a, i) => <Bullet key={i}>{a}</Bullet>)}
          </View>
        ) : null}

        {/* Experience */}
        {data.work?.length ? (
          <View style={styles.section}>
            <SectionHeader title="EXPERIENCE" />
            {data.work.map((w, i) => (
              <View key={i} style={styles.card}>
                <View style={styles.cardHeader}>
                  <View style={{ flexDirection: "row", alignItems: "baseline", gap: SP }}>
                    <Text style={styles.h3}>{w.position}</Text>
                    <Text style={styles.muted}>at {w.name}</Text>
                  </View>
                  <Text style={styles.light}>{formatDate(w.startDate)} – {formatDate(w.endDate)}</Text>
                </View>
                {w.url && <Link src={w.url}><Text style={[styles.link, { fontSize: FONT.small }]}>{w.url}</Text></Link>}
                {w.summary && <Text style={{ marginTop: SP * 0.5 }}>{w.summary}</Text>}
                {w.highlights?.length ? (
                  <View style={{ marginTop: SP }}>
                    {w.highlights
                      .filter(h => !achievementSet.has(h.toLowerCase()))
                      .slice(0, 4)
                      .map((h, j) => <Bullet key={j}>{h}</Bullet>)}
                  </View>
                ) : null}
              </View>
            ))}
          </View>
        ) : null}

        {/* Products & Projects */}
        {(data.projects?.length || data.products?.length) ? (
          <View style={styles.section}>
            <SectionHeader title="PRODUCTS & PROJECTS" />
            {data.products?.slice(0, 3).map((prod, i) => (
              <View key={`prod-${i}`} style={styles.card}>
                <View style={styles.cardHeader}>
                  <Text style={styles.h3}>{prod.name}</Text>
                  <Text style={styles.light}>{prod.platform}</Text>
                </View>
                {prod.url && <Link src={prod.url}><Text style={[styles.link, { fontSize: FONT.small }]}>{prod.url}</Text></Link>}
                {prod.description && <Text style={{ marginTop: SP * 0.5 }}>{prod.description}</Text>}
                {prod.stack?.length ? (
                  <View style={[styles.skillsWrap, { marginTop: SP }]}>
                    {prod.stack.slice(0, 6).map((k, idx) => <Text key={idx} style={styles.chip}>{k}</Text>)}
                  </View>
                ) : null}
              </View>
            ))}
            {data.projects?.slice(0, 3).map((p, i) => (
              <View key={`proj-${i}`} style={styles.card}>
                <Text style={styles.h3}>{p.name}</Text>
                {p.url && <Link src={p.url}><Text style={[styles.link, { fontSize: FONT.small }]}>{p.url}</Text></Link>}
                {p.description && <Text style={{ marginTop: SP * 0.5 }}>{p.description}</Text>}
                {p.keywords?.length ? (
                  <View style={[styles.skillsWrap, { marginTop: SP }]}>
                    {p.keywords.slice(0, 6).map((k, idx) => <Text key={idx} style={styles.chip}>{k}</Text>)}
                  </View>
                ) : null}
              </View>
            ))}
          </View>
        ) : null}

        {/* Education */}
        {data.education?.length ? (
          <View style={styles.section}>
            <SectionHeader title="EDUCATION" />
            {data.education.map((e, i) => (
              <View key={i} style={styles.card}>
                <View style={styles.cardHeader}>
                  <Text style={styles.h3}>{e.institution}</Text>
                  <Text style={styles.light}>{formatDate(e.startDate)} – {formatDate(e.endDate)}</Text>
                </View>
                <Text style={styles.muted}>{[e.studyType, e.area].filter(Boolean).join(" in ")}</Text>
              </View>
            ))}
          </View>
        ) : null}

        {/* Certifications */}
        {data.certifications?.length ? (
          <View style={styles.section}>
            <SectionHeader title="CERTIFICATIONS" />
            <View style={styles.inlineList}>
              {data.certifications.map((c, i) => (
                <View key={i} style={{ flexDirection: "row", alignItems: "baseline", gap: SP / 2 }}>
                  <Text style={styles.inlineItem}>{c.name}</Text>
                  <Text style={styles.light}>({c.issuer})</Text>
                </View>
              ))}
            </View>
          </View>
        ) : null}

        {/* Languages */}
        {data.languages?.length ? (
          <View style={styles.section}>
            <SectionHeader title="LANGUAGES" />
            <View style={styles.inlineList}>
              {data.languages.map((l, i) => (
                <Text key={i} style={styles.inlineItem}>{l.language}{l.fluency ? ` (${l.fluency})` : ""}</Text>
              ))}
            </View>
          </View>
        ) : null}

        {/* Footer */}
        <View style={styles.footer} fixed>
          <Text>{data.basics.name} • {data.basics.email}</Text>
          <Text render={({ pageNumber, totalPages }) => `Page ${pageNumber} of ${totalPages}`} />
        </View>
      </Page>
    </Document>
  );
}
