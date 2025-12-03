import "../styles/Dropdown.css";

export default function DropdownMenu({ items, onClose }) {
  return (
    <div className="dropdown-menu">
      {items.map((item, i) => (
        <div
          key={i}
          className="dropdown-menu-item"
          onClick={() => {
            item.action();
            onClose();
          }}
        >
          {item.label}
        </div>
      ))}
    </div>
  );
}
