
import CredentialsProvider from "next-auth/providers/credentials";
import GithubProvider from "next-auth/providers/github";

export const options = {
    providers: [
        GithubProvider({
            clientId: process.env.GITHUB_APPID,
            clientSecret: process.env.GITHUB_SECRET
        }),
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                username: {
                    label: "نام کاربری",
                    type: "text",
                    placeholder: "نام کاربری"
                },
                password: {
                    label: "کلمه عبور را وارد کنید",
                    type: "text",
                    placeholder: "نام کاربری"
                }
            },
            async authorize(credentials) {
                const user = {
                    id: "11",
                    name: "علیرضا سپه وند",
                    username: 'Alireza',
                    password: "138144"
                }

                if (credentials?.username === user.username &&
                    credentials?.password === user.password
                ) {
                    return user
                } else {
                    return null
                }
            }
        }),
    ],
    pages: {
        signIn: '/fa/auth/login',
        signOut: '/fa/auth/logout'
    },
}