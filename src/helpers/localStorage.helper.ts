export const get = (key: string) => {
  const data = localStorage.getItem(key)
  const parsedData = JSON.parse(data || '[]')

  return data ? parsedData : null
}

export const set = (key: string, value: any) => {
  const data = JSON.stringify(value)
  localStorage.setItem(key, data)

  return localStorage.getItem(key) === JSON.stringify(data)
}
