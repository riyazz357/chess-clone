import  express from 'express';
import { socket } from 'socket.io';
import http from 'http';
import chess from 'chess.js';



const app=express();
const server=http.createServer(app); //creating a web server
const io=socket(server); // enable real time features

