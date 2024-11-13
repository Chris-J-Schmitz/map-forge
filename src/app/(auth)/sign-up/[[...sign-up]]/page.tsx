import { ClerkProvider, SignUp } from "@clerk/nextjs";

export default function SignUpPage() {
    return <ClerkProvider>
        <SignUp />
    </ClerkProvider>
}