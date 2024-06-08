// // jest-dom adds custom jest matchers for asserting on DOM nodes.
// // allows you to do things like:
// // expect(element).toHaveTextContent(/react/i)
// // learn more: https://github.com/testing-library/jest-dom
// import "@testing-library/jest-dom";
// import { server } from "./mocks/broswer"; // 미리 server.js에 설정해둔 모킹 서버를 불러옴
// beforeAll(() => server.listen()); // 테스트를 시작하기 전에 모킹 서버를 연결함
// afterEach(() => server.restHandlers()); // 각 테스트가 끝나면 핸들러를 초기화해서, 다른 테스트에 영향을 주지 않도록 함
// afterAll(() => server.close()); // 모든 테스트가 끝난 후, 모킹 서버를 닫아줌

// // beforeEach & afterEach : 각각의 테스트 함수가 실행되기 전 / 실행된 후에 매번 실행할 코드
// // beforeAll & afterAll : 테스트를 시작하기 전 / 다 끝난 후에 딱 한번만 실행할 코드
