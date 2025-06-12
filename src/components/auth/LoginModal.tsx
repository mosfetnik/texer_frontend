import React from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "../ui/button";
import { LogInIcon } from "lucide-react";
import Image from "next/image";
import { signIn } from "next-auth/react";
const LoginModal = () => {
  
  const handleLogin = () => {
    signIn("google", {
      callbackUrl: "/dashboard",
      redirect: true,
    });
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>Getting start</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="text-2xl">Login to teXer</DialogTitle>
          <DialogDescription>
            Geting the chat response at witout any delay
          </DialogDescription>
        </DialogHeader>

        <Button variant="outline" onClick={handleLogin}>
          <Image
            src="/img/google.webp"
            alt="google-img"
            width={30}
            height={30}
            className="mr-4"
          />
          Continue with google
        </Button>
      </DialogContent>
    </Dialog>
  );
};

export default LoginModal;
