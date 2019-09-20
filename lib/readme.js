"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const logger_1 = require("./logger");
const render_readme_1 = require("./render-readme");
function readme(application, cwd) {
    application.get('*', async (request, response) => {
        try {
            response
                .status(200)
                .send(await render_readme_1.renderReadme(cwd));
        }
        catch (exception) {
            logger_1.logger.error('app:get', exception);
            response
                .status(500)
                .json({ exception });
        }
    });
}
exports.readme = readme;
