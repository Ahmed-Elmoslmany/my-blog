import React from 'react'
import Tags from './Article/Tags'

function HomeTags() {
  return (
    <div className="homeTags">
    <Tags tags={["Backend","Middleware", "JavaScript", "API", "StatusCode", "Rate-Limiting", "DoS"]}></Tags>
    </div>
  )
}

export default HomeTags