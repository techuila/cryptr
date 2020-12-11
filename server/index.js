const express = require('express');
const Server = require('./Server');
require('dotenv').config();

const { NODE_ENV, PORT, HOST } = process.env;

const server = new Server(express, PORT, NODE_ENV, HOST);

server.start();
