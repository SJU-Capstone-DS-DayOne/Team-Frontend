// server.js는 모킹 서버를 설정하는 역할을 한다.
import { setupWorker } from "msw/browser";
import { handlers } from "./handler";

// 불러온 handler들을 통해 모킹 서버를 설정함
export const worker = setupWorker(...handlers);
