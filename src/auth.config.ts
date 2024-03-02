import { NextAuthConfig } from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { getUserByEmail } from "@/utils";
import { SignInSchema } from "@/schemas";

import bcryptjs from "bcryptjs";

export default {
    providers: [
        Credentials({
            async authorize(credentials) {
                const validFields = SignInSchema.safeParse(credentials)
                if (validFields.success) {                    
                    const user = await getUserByEmail(validFields.data.email);
                    if (!user || !user.password) return null
                    const passwordsMatch = await bcryptjs.compare(validFields.data.password, user.password);
                    if (!passwordsMatch) return null
                    
                    const { password, ...restUserData } = user;
                    return restUserData;
                }
                return null;
            }
        })
    ]
}satisfies NextAuthConfig