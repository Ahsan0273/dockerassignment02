const amqp = require('amqplib');

// RabbitMQ connection URL
const rabbitMQURL = 'amqp://admin:admin123@broker-service';
   
const sendMessage = async (queueName, message) => {
    let connection;
    try {
      // Connect to the RabbitMQ server
      connection = await amqp.connect(rabbitMQURL);
      const channel = await connection.createChannel();
  
      // Declare a queue (if not already exists)
      await channel.assertQueue(queueName, { durable: false });
  
      // Send the message to the queue
      channel.sendToQueue(queueName, Buffer.from(JSON.stringify(message)));
  
      console.log(`Message sent: ${message}`);
  
      // Close the channel and the connection
      await channel.close();
    } catch (error) {
      console.error('Error sending message:', error.message);
    }finally{
        if(connection) await connection.close();
    }
  }

// Function to receive messages
const receiveMessage = async (queueName) => {
    let connection;
    try {
      // Connect to the RabbitMQ server
      connection = await amqp.connect(rabbitMQURL);
      const channel = await connection.createChannel();

      // Declare a queue (if not already exists)
      await channel.assertQueue(queueName, { durable: false });

      console.log(`Waiting for messages from ${queueName}. To exit, press CTRL+C`);
  
      // Receive messages from the queue
      channel.consume(queueName, (message) => {
        if (message !== null) {
          console.log(`Received message: ${message.content.toString()}  ${message}`);
          channel.ack(message); // Acknowledge the message
        }
      });
    } catch (error) {
      console.error('Error receiving message:', error);
    }
  }
 
  module.exports = {
    sendMessage,
    receiveMessage
  }