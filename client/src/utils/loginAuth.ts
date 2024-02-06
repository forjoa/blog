import { supabase } from '../components/database/supabase.ts'
import bcrypt from 'bcryptjs-react'

interface Response {
  message: string,
  flag?: boolean
}

export const loginAuth = async ( password: string, email: string ): Promise<Response> => {

  const m = await supabase.from('authors').select().eq('email', email)

  if (m.data?.length) {
    const p = await supabase.from('authors').select('pwd').eq('email', email)

    if (p.data && p.data.length > 0 && p.data[0]?.pwd) {
      if (await bcrypt.compare(password, p.data[0].pwd)) {
        return { message: 'User correctly logged!', flag: true }
      } else {
        return { message: 'Incorrect password' }
      }
    } else {
      return { message: 'Invalid user data' }
    }
  } else {
    return { message: "User doesn't exist" }
  }
  
}
