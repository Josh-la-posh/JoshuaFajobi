import { Document, Page, Text, View, StyleSheet, Link } from "@react-pdf/renderer";
import type { JsonResume } from "@/data/resume";

const styles = StyleSheet.create({
  page: { padding: 28, fontSize: 11, fontFamily: "Helvetica" },
  h1: { fontSize: 18, fontWeight: 700 },
  h2: { fontSize: 13, marginTop: 14, marginBottom: 6, fontWeight: 700 },
  h3: { fontSize: 11, fontWeight: 700 },
  row: { flexDirection: "row", justifyContent: "space-between" },
  muted: { color: "#666" },
  chip: { fontSize: 9, borderWidth: 1, borderColor: "#ddd", borderRadius: 4, padding: 3, marginRight: 4, marginBottom: 4 },
  listItem: { marginBottom: 2 },
  section: { marginTop: 8 },
});

export function ResumePDF({ data }: { data: JsonResume }) {
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        {/* Header */}
        <View style={styles.row}>
          <Text style={styles.h1}>{data.basics.name}</Text>
          <Text>{data.basics.label}</Text>
        </View>
        <Text style={styles.muted}>
          {data.basics.email} • {data.basics.phone} • {data.basics.url}
        </Text>
        {data.basics.profiles?.length ? (
          <Text style={styles.muted}>
            {data.basics.profiles.map(p => p.url).filter(Boolean).join(" • ")}
          </Text>
        ) : null}

        {/* Summary */}
        {data.basics.summary && (
          <View style={styles.section}>
            <Text style={styles.h2}>Summary</Text>
            <Text>{data.basics.summary}</Text>
          </View>
        )}

        {/* Work */}
        {!!data.work?.length && (
          <View style={styles.section}>
            <Text style={styles.h2}>Experience</Text>
            {data.work.map((w, i) => (
              <View key={i} style={{ marginBottom: 8 }}>
                <View style={styles.row}>
                  <Text style={styles.h3}>{w.position} — {w.name}</Text>
                  <Text style={styles.muted}>
                    {w.startDate} — {w.endDate ?? "Present"}
                  </Text>
                </View>
                {w.url && (
                  <Link src={w.url}>
                    <Text style={{ color: "#2563eb" }}>{w.url}</Text>
                  </Link>
                )}
                {w.summary && <Text>{w.summary}</Text>}
                {w.highlights?.length ? (
                  <View style={{ marginTop: 3 }}>
                    {w.highlights.map((h, j) => (
                      <Text key={j} style={styles.listItem}>• {h}</Text>
                    ))}
                  </View>
                ) : null}
              </View>
            ))}
          </View>
        )}

        {/* Projects (selected) */}
        {!!data.projects?.length && (
          <View style={styles.section}>
            <Text style={styles.h2}>Selected Projects</Text>
            {data.projects.slice(0, 5).map((p, i) => (
              <View key={i} style={{ marginBottom: 6 }}>
                <Text style={styles.h3}>{p.name}</Text>
                {p.url && (
                  <Link src={p.url}>
                    <Text style={{ color: "#2563eb" }}>{p.url}</Text>
                  </Link>
                )}
                {p.description && <Text>{p.description}</Text>}
                {p.keywords?.length ? (
                  <View style={{ marginTop: 4, flexDirection: "row", flexWrap: "wrap" }}>
                    {p.keywords.slice(0, 8).map((k, idx) => (
                      <Text key={idx} style={styles.chip}>{k}</Text>
                    ))}
                  </View>
                ) : null}
              </View>
            ))}
          </View>
        )}

        {/* Skills */}
        {!!data.skills?.length && (
          <View style={styles.section}>
            <Text style={styles.h2}>Skills</Text>
            {data.skills.map((s, i) => (
              <View key={i} style={{ marginBottom: 4 }}>
                <Text style={styles.h3}>{s.name}</Text>
                <Text>{s.keywords.join(", ")}</Text>
              </View>
            ))}
          </View>
        )}
      </Page>
    </Document>
  );
}
