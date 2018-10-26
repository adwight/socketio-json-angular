var express = require('express');
var path = require('path');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);

var port = 8000;

app.use(express.static(path.join(__dirname, "public")));

io.on('connection', (socket) => {
  console.log('new connection made');

  io.emit('ranking',
  [
  {'Dealer ID': 43569, 'Hands Per Hour': 84.39, 'Difference from Casino Avg': 61.25, 'Total Hands': 790.0, 'test': 'great win'}, 
  {'Dealer ID': 20641, 'Hands Per Hour': 80.49, 'Difference from Casino Avg': 57.35, 'Total Hands': 320.0},
  {'Dealer ID': 3624, 'Hands Per Hour': 76.69, 'Difference from Casino Avg': 53.55, 'Total Hands': 883.0},
  {'Dealer ID': 40540, 'Hands Per Hour': 73.03, 'Difference from Casino Avg': 49.88, 'Total Hands': 871.0},
  {'Dealer ID': 21029, 'Hands Per Hour': 72.94, 'Difference from Casino Avg': 49.8, 'Total Hands': 336.0},
  {'Dealer ID': 48475, 'Hands Per Hour': 66.52, 'Difference from Casino Avg': 43.37, 'Total Hands': 171.0},
  {'Dealer ID': 40684, 'Hands Per Hour': 57.92, 'Difference from Casino Avg': 34.77, 'Total Hands': 232.0},
  {'Dealer ID': 25579, 'Hands Per Hour': 50.46, 'Difference from Casino Avg': 27.32, 'Total Hands': 556.0}, 
  {'Dealer ID': 25620, 'Hands Per Hour': 19.6, 'Difference from Casino Avg': -3.54, 'Total Hands': 864.0}, 
  {'Dealer ID': 47278, 'Hands Per Hour': 14.39, 'Difference from Casino Avg': -8.75, 'Total Hands': 201.0},
  {'Dealer ID': 8959, 'Hands Per Hour': 6.56, 'Difference from Casino Avg': -16.58, 'Total Hands': 269.0}, 
  {'Dealer ID': 6047, 'Hands Per Hour': 5.79, 'Difference from Casino Avg': -17.35, 'Total Hands': 97.0}, 
  {'Dealer ID': 14300, 'Hands Per Hour': 2.2, 'Difference from Casino Avg': -20.94, 'Total Hands': 89.0}, 
  {'Dealer ID': 4687, 'Hands Per Hour': 0.0, 'Difference from Casino Avg': -23.14, 'Total Hands': 0.0},
  {'Dealer ID': 20785, 'Hands Per Hour': 0.0, 'Difference from Casino Avg': -23.14, 'Total Hands': 0.0}
  ]
);


    io.emit('log',
    [
    {'Employee ID': 3624, 'Table': 'BJ51', 'Game': 'Blackjack', 'Start Time': '12:35 pm', 'End Time': '1:30 pm', 'Total Time': '1 hour(s), 25.0 min(s)', 'Hands Dealt': 65},
    {'Employee ID': 3624, 'Table': 'BJ51', 'Game': 'Blackjack', 'Start Time': '1:35 pm', 'End Time': '2:01 pm', 'Total Time': '0 hour(s), 25.3 min(s)', 'Hands Dealt': 13},
    {'Employee ID': 3624, 'Table': 'BJ51', 'Game': 'Blackjack', 'Start Time': '3:00 pm', 'End Time': '3:30 pm', 'Total Time': '1 hour(s), 30.0 min(s)', 'Hands Dealt': 56},
    {'Employee ID': 3624, 'Table': 'BJ51', 'Game': 'Blackjack', 'Start Time': '3:41 pm', 'End Time': '4:53 pm', 'Total Time': '1 hour(s), 12.2 min(s)', 'Hands Dealt': 53}, 
    {'Employee ID': 6047, 'Table': 'BJ53', 'Game': 'Blackjack', 'Start Time': '07:15 am', 'End Time': '9:00 am', 'Total Time': '1 hour(s), 44.8 min(s)', 'Hands Dealt': 72}, 
    {'Employee ID': 20641, 'Table': 'BJ53', 'Game': 'Blackjack', 'Start Time': '10:40 pm', 'End Time': '11:59 pm', 'Total Time': '1 hour(s), 19.3 min(s)', 'Hands Dealt': 59}, 
    {'Employee ID': 21029, 'Table': 'BJ52', 'Game': 'Blackjack', 'Start Time': '08:47 am', 'End Time': '9:15 am', 'Total Time': '0 hour(s), 27.4 min(s)', 'Hands Dealt': 13}, 
    {'Employee ID': 25579, 'Table': 'BJ53', 'Game': 'Blackjack', 'Start Time': '12:58 pm', 'End Time': '2:59 pm', 'Total Time': '1 hour(s), 1.1 min(s)', 'Hands Dealt': 48}, 
    {'Employee ID': 47278, 'Table': 'BJ51', 'Game': 'Blackjack', 'Start Time': '10:01 am', 'End Time': '11:59 am', 'Total Time': '2 hour(s), 58.0 min(s)', 'Hands Dealt': 87}, 
    {'Employee ID': 48475, 'Table': 'BJ53', 'Game': 'Blackjack', 'Start Time': '04:16 am', 'End Time': '06:50 am', 'Total Time': '2 hour(s), 34.2 min(s)', 'Hands Dealt': 45},
    {'Employee ID': 48475, 'Table': 'BJ53', 'Game': 'Blackjack', 'Start Time': '06:54 am', 'End Time': '08:00 am', 'Total Time': '1 hour(s), 5.3 min(s)', 'Hands Dealt': 15},
    {'Employee ID': 48475, 'Table': 'BJ53', 'Game': 'Blackjack', 'Start Time': '08:05 am', 'End Time': '08:45 am', 'Total Time': '0 hour(s), 44.3 min(s)', 'Hands Dealt': 24},
    {'Employee ID': 48475, 'Table': 'BJ53', 'Game': 'Blackjack', 'Start Time': '08:49 am', 'End Time': '09:50 am', 'Total Time': '1 hour(s), 0.2 min(s)', 'Hands Dealt': 38},
    {'Employee ID': 48475, 'Table': 'BJ53', 'Game': 'Blackjack', 'Start Time': '10:30 am', 'End Time': '11:45 am', 'Total Time': '1 hour(s), 15.7 min(s)', 'Hands Dealt': 61}
    ]
    );

  socket.on('send-message', (data) => {
    console.log(data.text);
    io.emit('message-received', data);
  });

   socket.on('event1', (data) => {
      console.log(data.msg);
    });

   socket.emit('event2', {
      msg: 'Server to client, do you read me? Over.'
    });

   socket.on('event3', (data) => {
      console.log(data.msg);
      socket.emit('event4', {
        msg: 'Loud and clear :)'
      });
    });

});

server.listen(port, () => {
  console.log("Listening on port " + port);
});