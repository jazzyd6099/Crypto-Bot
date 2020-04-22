const Discord = require('discord.js');
const client = new Discord.Client();
const config = require("./config.json");
const prefix = "?"
const { promisify } = require("util");
const readdir = promisify(require("fs").readdir);
const Enmap = require("enmap");
