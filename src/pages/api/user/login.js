// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { userList } from './create';

export default function handler(req, res) {
  if (req.method === 'POST') {
    login(req, res);
  } else {
    res.status(404).json({ message: 'Invalid request' });
  }
}

const login = (req, res) => {
  const { body = {} } = req;
  const user = userList.find(
    u => u.email === body.email && u.password === body.password
  );
  if (user) {
    res.status(200).json(user);
  } else {
    res.status(200).json({ message: 'Username / password not valid' });
  }
};
