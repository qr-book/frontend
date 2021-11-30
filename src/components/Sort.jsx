import React from "react";

function Sort({ items }) {
  const [activeSortType, setActiveSortType] = React.useState(0);
  const onSelectItem = (index) => {
    setActiveSortType(index);
  };

  return (
    <div className="sort">
      <h3>Sort:</h3>
      <ul>
        {items &&
          items.map((name, index) => (
            <li
              onClick={() => onSelectItem(index)}
              className={`
                  ${activeSortType === index ? "active-sort" : ""}
                  `}
              key={`${name}_${index}`}
            >
              {name}
              <svg
                className="sort-icon"
                width="17"
                height="14"
                viewBox="0 0 17 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M14.6466 0L16.715 1.363L7.74694 13.514H5.67859L0.67749 6.931L2.74584 5.1185L6.71276 8.5985L14.6466 0Z"
                  fill="black"
                />
              </svg>
            </li>
          ))}
      </ul>
    </div>
  );
}

export default Sort;