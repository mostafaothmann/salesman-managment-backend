import {
    Controller,
    Post,
    UploadedFile,
    UseInterceptors
} from '@nestjs/common';
import type { Express } from 'express';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { SpeechService } from './speech.service';

@Controller('speech')
export class SpeechController {

    constructor(private speechService: SpeechService) { }

    @Post('transcribe')
    @UseInterceptors(
        FileInterceptor('audio', {
            storage: diskStorage({
                destination: './uploads/audios',
                filename: (req, file, cb) => {
                    cb(null, Date.now() + '-' + file.originalname);
                }
            })
        })
    )
    async transcribe(@UploadedFile() file: Express.Multer.File) {

        const transcript = await this.speechService.transcribe(file.path);

        return {
            transcript
        };
    }

} 