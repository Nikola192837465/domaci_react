export function Footer() {
  return (
    <footer>
      <p
        className="text-center"
        style={{
          padding: ".5rem 7rem",
          textAlign: "center",
          fontWeight: 800,
          backgroundColor: "gray",
          color: "white",
        }}
      >
        &copy; {new Date().getFullYear()} Domaci iz ITEH-a. All rights reserved.
      </p>
    </footer>
  );
}
