import { useEffect } from 'react'
import { supabase } from './database/supabase.ts'

const Recomendations = () => {
  useEffect(() => {
    async function fetchData() {
      try {
        const { data, error } = await supabase.from('blogs').select('*')

        if (error) throw console.log(error)

        console.log(data)
      } catch (error) {
        console.error(error)
      }
    }

    fetchData()
  }, [])
  return <></>
}

export default Recomendations
