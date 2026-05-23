export default function Loading() {
  return (
    <div style={styles.container}>
      <div style={styles.spinner}></div>
      <p style={styles.text}>Loading...</p>
    </div>
  );
}

const styles = {
  container: {
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    backgroundColor: "#0f172a", // dark keren
  },
  spinner: {
    width: "50px",
    height: "50px",
    border: "5px solid #334155",
    borderTop: "5px solid #38bdf8",
    borderRadius: "50%",
    animation: "spin 1s linear infinite",
  },
  text: {
    marginTop: "15px",
    color: "#e2e8f0",
    fontSize: "16px",
  },
};