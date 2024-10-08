
import type { NextApiRequest, NextApiResponse } from 'next';
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const userJson = [
    { uname: 'u1', upass: 'p1' },
    { uname: 'u2', upass: 'p2' }
  ];
  if (req.method === 'POST') {
    // Handle POST request logic here
    const { uname, upass } = req.body;
      
  for (const user of userJson) {
      if (uname==user.uname && upass == user.upass){
        res.status(200).json({ message: 'Authorized'});
        break
      } 
      else {
        res.status(401).json({ message: 'Not Authorized'});

      }
  }
    // ... your POST request logic using uname and upass
  } else if (req.method === 'GET') {
    // Handle GET request logic here
    res.status(200).json(userJson);
  } else {
    // Handle other HTTP methods or return an error
    res.status(405).json({ message: 'Method not allowed' });
  }
}