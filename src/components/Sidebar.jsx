export default function Sidebar({ toc, isOpen, onLinkClick }) {
  return (
    <aside className={`sidebar ${isOpen ? "open" : ""}`}>
      <h2>Оглавление</h2>
      <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
        {toc.map((item) => (
          <li key={item.id} style={{ marginLeft: (item.level - 2) * 16 }}>
            <a
              href={`#${item.id}`}
              onClick={() => {
                onLinkClick();
              }}
            >
              {item.text}
            </a>
          </li>
        ))}
      </ul>
    </aside>
  );
}
