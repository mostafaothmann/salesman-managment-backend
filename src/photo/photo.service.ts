import { Injectable } from '@nestjs/common';
import { join } from 'path';

@Injectable()
export class PhotoService {

  getFileUrl(filename: string) {
    // Return full URL for the uploaded file
    return `http://localhost:3000/uploads/photos/${filename}`;
  }

  // You can add more logic here later, e.g., saving URL to DB
}