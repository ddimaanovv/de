export default function Sidebar({ toc }) {
  return (
    <aside
      style={{
        width: 250,
        padding: "1rem",
        borderRight: "1px solid #ddd",
        height: "100vh",
        // вот это и делает меню «липким» при скролле страницы
        position: "sticky",
        top: 0, // прилипнет к верхней границе viewport
        alignSelf: "flex-start", // чтобы sticky работал внутри flex-контейнера
        background: "#fafafa", // чтобы текст основного контента не просвечивал
      }}
    >
      <h2>Оглавление</h2>
      <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
        {toc.map((item) => (
          <li key={item.id} style={{ marginLeft: (item.level - 2) * 16 }}>
            <a
              href={`#${item.id}`}
              style={{ color: "#333", textDecoration: "none" }}
            >
              {item.text}
            </a>
          </li>
        ))}
      </ul>
    </aside>
  );
}
