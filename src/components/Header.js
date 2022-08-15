const Header = () => {
  const menu = [
    {
      title: "About the project",
      path: "#",
    },
    {
      title: "Contact us",
      path: "#",
    },
  ];

  return (
    <header>
      <div className="container header_content">
        <div className="brand">ReactIntl</div>
        <nav>
          <ul>
            {menu.map(({ title, path }) => (
              <li key={title}>
                <a href={path}>{title}</a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;