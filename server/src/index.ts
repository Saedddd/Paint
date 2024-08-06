import express from 'express';
import expressWs from "express-ws"
import { Application } from 'express';
import { WebSocket } from 'ws';




interface Connect {
    ws: CustomWebSocket,
    msg: Message
}

interface Message {
    id: string; // Определяем структуру ожидаемого объекта msg
    method: string; // Метод, который будет использоваться в switch-case
    [key: string]: any; // Дополнительные поля
}

interface CustomWebSocket extends WebSocket {
    id?: string; // Расширяем интерфейс WebSocket с добавлением поля id
}



const { app } = expressWs(express() as Application);
const wsInstance = expressWs(app);
const PORT = process.env.PORT || 5000;
const aWss = wsInstance.getWss();

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));

app.ws('/', (ws, req) => {
    console.log('Client connected');
    ws.send('You are successfully connected');
    ws.on('message', (msg) => {
        try {
            const message = typeof msg === 'string' ? msg : msg.toString();
            const messageObj: Message = JSON.parse(message);
            
            // Проверка наличия метода
            if (messageObj.method) {
                switch (messageObj.method) {
                    case "connection":
                        connectionHandler({ ws, msg: messageObj });
                        break;
                    // Добавьте другие случаи для других методов
                    default:
                        console.log('Unknown method:', messageObj.method);
                        break;
                }
            } else {
                console.log('Method not provided in the message');
            }
        } catch (error) {
            console.error('Error handling message:', error);
        }
    });
});

const connectionHandler = ({ ws, msg }: Connect) => {
    (ws as CustomWebSocket).id = msg.id;
    broadcastConnection(ws, msg);
};

const broadcastConnection = (ws: CustomWebSocket, msg: Message) => {
    aWss.clients.forEach(client => {
        const customClient = client as CustomWebSocket;
        if (customClient.id !== ws.id) { // Отправляем сообщение всем клиентам, кроме самого отправителя
            customClient.send(`User ${msg.username || 'Unknown'} is now connected`);
        }
    });
};
