import { cn } from "@/lib/utils"
import { User, Bot } from "lucide-react"

interface MessagesProps {
    content: string
    isUserMessage: boolean
}

export const Message = ({content, isUserMessage}: MessagesProps) =>{
    return <div className={cn({
        "bg-blue-100": isUserMessage,
        "bg-white": !isUserMessage,
    })}>
        <div className="p-6">
            <div className="max-w-3xl mx-auto flex items-start gap-2.5">
                <div className={cn("size-10 shrink-0 aspect-square rounded-full border border-zinc-700 bg-zinc-900 flex justify-center items-center", {
                    "bg-blue-950 border blue-700 text-zinc-200": isUserMessage,
                })}>
                    {isUserMessage ? <User className="size-5" /> : <Bot className="size-5 text-white" />}
                </div>
                <div className="flex flex-col ml-6 w-full">
                    <div className="flex items-center space-x-2">
                        <span className="text-sm font-semibold text-black">{isUserMessage ? "You" : "ScoutUp"}</span>
                    </div>

                    <p className="text-sm font-normal py-2.5 text-black">{content}</p>
                </div>
            </div>
        </div>
    </div>
}