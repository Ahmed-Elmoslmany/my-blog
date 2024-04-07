import React from "react";
import { Link } from "react-router-dom";

function Tags({ tags }) {
  return (
    <div className="tags-qoute">
      <span>كلمات مفتاحية 🔑</span>
      <div className="tags-container">
        <div className="tags">
          {tags.map((tag) => (
            <Link to={`/articles/${tag}`}>
              <div className="tag">{tag}</div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Tags;
