import { TextInput } from "@/components/form-inputs";

export default function LoginPage() {
    return(
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 min-h-screen p-10">
            <h1 className="m-5">Login Page</h1>
            <div className="w-full flex flex-col gap-5 bg-gray-300 shadow-md p-5 rounded-md">
                <TextInput name="username" label="Username" type="text"/>
                <TextInput name="password" label="Password" type="password"/>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Login</button>
            </div>
        </div>
    )
}