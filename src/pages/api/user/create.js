// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export const userList = [];

export default function handler(req, res) {
  if (req.method === 'POST') {
    createUser(req, res);
  } else if (req.method === 'GET') {
    res.status(200).json(userList);
  } else {
    res.status(200).json({ message: 'Invalid request' });
  }
}

const createUser = (req, res) => {
  const { body = {} } = req;
  const user = userList.find(u => u.email === body.email);
  if (user) {
    res.status(200).json({ message: 'User already present' });
  } else {
    userList.push({
      id: userList.length,
      ...body
    });
    return res.status(200).json({
      id: userList.length,
      ...body
    });
  }
};
