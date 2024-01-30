import { supabase } from '../components/database/supabase.ts'
import bcrypt from 'bcryptjs-react'

export const loginAuth = async ( password: string, email: string ): Promise<string> => {

  const m = await supabase.from('authors').select().eq('email', email)

  if (m.data?.length) {
    const p = await supabase.from('authors').select('pwd').eq('email', email)

    if (p.data && p.data.length > 0 && p.data[0]?.pwd) {
      if (await bcrypt.compare(password, p.data[0].pwd)) {
        return 'User correctly logged!'
      } else {
        return 'Incorrect password'
      }
    } else {
      return 'Invalid user data'
    }
  } else {
    return "User doesn't exist"
  }
  
}
