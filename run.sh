#!/bin/bash
cd backend
npm install
node initDbs.js&
node index.js &

cd ../frontend
npm install
npm start