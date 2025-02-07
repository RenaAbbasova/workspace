curl -X POST https://localhost:1443/token \
  -H "Content-Type: application/json" \
  -d '{"username": "user1@veridas.com", "password": "1234"}' \
  --insecure


curl -X GET https://localhost:1443/users --insecure

curl -X GET https://localhost:1443/users \
  -H "Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoxLCJlbWFpbCI6InVzZXIxQHZlcmlkYXMuY29tIiwiYWN0aXZlIjp0cnVlLCJ0eXBlIjoiYWRtaW4ifSwiaWF0IjoxNzM4ODgwMDk5LCJleHAiOjE3Mzg4ODA5OTl9.69KSFwLySxgaaKwYCktgxhVlbUmtsOy_AJcljna9Fro" \
  --insecure

in controlers user
const getUsers = async (req, res) => {
  try {
    const users = await usersRepository.getAll();
    res.json(users);  // Ensure this is returning JSON
  } catch (err) {
    res.status(500).json({ error: 'Failed to retrieve users' });
  }
};
