import { FilePath } from './package';
import { logger } from './logger';
import { renderReadme } from './render-readme';
import { Request, Response, Application } from 'express';

export function readme(application: Application, cwd?: FilePath) {
  application.get('*', async (request: Request, response: Response) => {
    try {
      response
        .status(200)
        .send(await renderReadme(cwd));
    } catch (exception) {
      logger.error('app:get', exception);

      response
        .status(500)
        .json({ exception });
    }
  });
}
