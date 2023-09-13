import { Github } from "lucide-react";
import { ModeToggleButton } from "./ModeToggleButton";
import { Button } from "./ui/button";
import { Separator } from "./ui/separator";

export function Header() {
    return (
        <header className="w-full flex justify-between border-b py-4">
            <h1 className="my-auto text-xl font-bold">
                upload.ai
            </h1>

            <div className="flex justify-center items-center gap-2">
                <Button
                    variant={"outline"}
                >
                    <Github className="w-4 h-4 mr-2" />
                    Github
                </Button>

                <Separator orientation="vertical" className="h-6" />

                <ModeToggleButton />
            </div>
        </header>
    )
}