export const fetchUser = (userId)=>{
    return $.ajax({
      url: `/api/users/${userId}`,
      method: "GET"
    })
}

export const fetchUsers = ()=>{
  return $.ajax({
    url: '/api/users',
    method: "GET"
  })
}

export const fetchResults = (query)=> {
  return $.ajax({
    url: `/api/users/search/${query}`,
    method: 'GET'
  })
}