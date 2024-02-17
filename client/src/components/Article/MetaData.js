import React from "react";

function ArticleMetaData({ metaData }) {
  return (
    <div className="articleMetaData">
      <h3>{metaData.title} 📜 </h3>
      <div className="metaData">
        <p>
          كُتبت في: <span>{metaData.writtenAt} 🖊️</span>
        </p>
        <p>
          آخر تعديل: <span>{metaData.lastUpdatedAt} 🔎</span>
        </p>
        <p>
          زمن القراءة: <span>{metaData.readTime} دقائق ⌚️</span>
        </p>
      </div>
    </div>
  );
}

export default ArticleMetaData;
