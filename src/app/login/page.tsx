"use client"


import axios from "axios";

import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";


import "react-toastify/dist/ReactToastify.css";

function Page() {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = () => {
        axios({
            url: "/api/login",
            method: "POST",
            params: {
                username: username,
                password: password,
            },


        })
            .then((res) => {
                console.log(res);

                localStorage.setItem("login", "true");

                toast.success("Login berhasil", {
                    onClose: () => {
                        location.href = "/";
                    },
                });
            })
            .catch((err) => {

                toast.error(err.response.data.message);
            });
    }

    return (
        <div className="container w-screen h-screen flex items-center justify-center">
            <ToastContainer />

            <Card className="w-[350px]">
                <CardHeader>
                    <CardTitle>LOGIN</CardTitle>
                </CardHeader>
                <CardContent>

                    <div className="grid w-full items-center gap-4">
                        <div className="flex flex-col space-y-1.5">
                            <Label htmlFor="name">USERNAME</Label>
                            <Input id="username" placeholder="" name="username" onChange={(e) => setUsername(e.target.value)} />
                        </div>
                        <div className="flex flex-col space-y-1.5">
                            <div className="flex flex-col space-y-1.5">
                                <Label htmlFor="name">Name</Label>
                                <Input type="password" id="password" name="password" onChange={(e) => setPassword(e.target.value)} />
                            </div>
                        </div>
                    </div>
                    <Button onClick={handleLogin} className="mt-5">MASUK</Button>


                </CardContent>
            </Card>
        </div>
    );
}


export default Page;
