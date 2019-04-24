import { test } from './modules/test';
import test2 from './modules/test2';

async function async_test() {
    let test_message = await test();
    console.log('%c%s', (window.log_color) ? window.log_color.blue : '', test_message);
}

async_test();

test2('Второй тест импорта!');