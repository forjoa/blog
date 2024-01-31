// type to insert new user

export interface InsertUserParams {
  complete_name: string
  username: string
  email: string
  pwd: string
  date: Date
}

// blogs types

export interface Blog {
  id: number,
  category_id: number,
  author_id: number,
  title: string,
  content: string,
  date: Date
}