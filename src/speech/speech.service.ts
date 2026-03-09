import { Injectable } from '@nestjs/common';
import { exec } from 'child_process';
import { promisify } from 'util';

const execAsync = promisify(exec);

@Injectable()
export class SpeechService {

    async transcribe(filePath: string) {
        const modelPath = './whisper.cpp/models/ggml-medium.bin';

        const command = `
      ./whisper.cpp/main \
      -m ${modelPath} \
      -f ${filePath} \
      -l ar
    `;

        const { stdout } = await execAsync(command);

        return stdout;
    }

}