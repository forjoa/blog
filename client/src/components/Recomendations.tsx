import { useState } from 'react'
import { Blog } from '../types/types.ts'
import { fetchRecommendations } from '../utils/fetchRecommendations.ts'

const Recomendations = () => {
  const [recommendations, setRecommendations] = useState<Blog[]>([])

  fetchRecommendations().then(d => setRecommendations(d.data as Blog[]))

  return (
    <main className='recommendations-container'>
      {recommendations.map((blog, index) => {
        return (
          <div className='blog-recommended' key={index}>
            <h3>{blog.title}</h3>
            <p>{blog.content}</p>
          </div>
        )
      })}
    </main>
  )
}

export default Recomendations
