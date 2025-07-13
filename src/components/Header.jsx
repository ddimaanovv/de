export default function Header({ onMenuClick }) {
  return (
    <header
      style={{
        padding: "1rem",
        backgroundColor: "#222",
        color: "white",
        textAlign: "center",
        position: "relative", // для корректного z-index
      }}
    >
      {/* Кнопка меню (видна только на мобилках через CSS) */}
      <button
        className="menu-button"
        onClick={onMenuClick}
        aria-label="Toggle menu"
      >
        ☰
      </button>

      <h1>Halltape Roadmap DE</h1>
    </header>
  );
}
