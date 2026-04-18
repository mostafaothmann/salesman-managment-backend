import {
  WebSocketGateway,
  WebSocketServer,
  OnGatewayConnection,
  OnGatewayDisconnect,
  SubscribeMessage,
} from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';

@WebSocketGateway(5000, {
  cors: {
    origin: '*',
    methods: ["GET", "POST"]
  },
})
export class NotificationGateway
  implements OnGatewayConnection, OnGatewayDisconnect {

  @WebSocketServer()
  server!: Server;

  handleConnection(client: Socket) {
    console.log('✅ Client connected:', client.id);
  }

  handleDisconnect(client: Socket) {
    console.log('❌ Client disconnected:', client.id);
  }

  
  @SubscribeMessage('join_admin')
  handleJoinAdmin(client: Socket) {
    console.log("🔥 Admin joined:", client.id);
    client.join('admins');
  }

  @SubscribeMessage('join_client')
  handleJoinClient(client: Socket) {
    console.log("👤 Client joined:", client.id);
    client.join('clients');
  }

  sendAdminNotification(payload: any) {
    this.server.to('admins').emit('notification', payload);
  }

  sendClientNotification(payload: any) {
    this.server.to('clients').emit('notification', payload);
  }

  sendAllNotification(payload: any) {
    this.server.emit('notification', payload);
  }
}