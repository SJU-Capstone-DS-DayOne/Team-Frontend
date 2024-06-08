import { http, HttpResponse } from "msw";

export const handlers = [
    http.post("/login", async ({ request }) => {
        console.log(request);

        const access = "123456";
        const refreshToken = "123465";
        return HttpResponse.json(null, {
            status: 200,
            headers: {
                access: `${access}`, // Set access token in Authorization header
            },
            cookies: {
                refresh: {
                    // Set refresh token as a cookie
                    value: refreshToken,
                    secure: true,
                    httpOnly: true,
                    sameSite: "None",
                },
            },
        });
    }),
];
