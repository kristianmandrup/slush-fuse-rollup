import Observable from 'FuseJS/Observable';
import server from './server';

export const message = Observable("Greetings from ES2015!");
export const server = server;