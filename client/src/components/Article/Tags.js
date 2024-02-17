import React from "react";

function Tags({tags}) {
  return (
    <div className="tags-qoute">
      <span>كلمات مفتاحية 🔑</span>
      <div className="tags-container">
        <div className="tags">
          {tags.map(tag => <div className="tag">{tag}</div>)}
        </div>
      </div>
    </div>
  );
}

export default Tags;
