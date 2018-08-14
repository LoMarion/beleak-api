import { init, listen } from './app';

async function run() {
    const app = await init();
    listen(app);
}

run();