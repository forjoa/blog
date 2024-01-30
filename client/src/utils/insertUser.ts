import { supabase } from '../components/database/supabase.ts'
import bcrypt from 'bcryptjs-react'
import { InsertUserParams } from '../types/types'

export const registerUser = async ( name: string, username: string, email: string, password: string ): Promise<string> => {
    
  const p = await supabase.from('authors').select('*').eq('username', username)

  if (p.data?.length) {
    return 'User already exists!'
  }

  const userParams: InsertUserParams = {
    complete_name: name,
    username: username,
    email: email,
    pwd: await bcrypt.hash(password, 10),
    date: new Date(),
  }

  const { status } = await supabase.from('authors').insert(userParams)

  if (status === 201) {
    return 'Registration successful!'
  } else {
    return 'Something went wrong!'
  }
}
