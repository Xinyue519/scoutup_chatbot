import { ChatWrapper } from "@/components/ChatWrapper"
import { ragChat } from "@/lib/rag-chat"
import { redis } from "@/lib/redis"
import { cookies } from "next/headers"
import { AboutPage } from "@/components/AboutPage"


interface PageProps{
    params: {
        url: string | string[] | undefined
    }
}

function reconstructUrl({ url }: { url:string[]}){
    const decodedComponnet = url.map((component) => decodeURIComponent(component))

    return decodedComponnet.join("/")
}

const Page = async ({ params }: PageProps) =>{
    const sessionCookie = (await cookies()).get("sessionId")?.value

    if(params.url == "about"){
        return <AboutPage />
    }
    const reconstructedUrl = reconstructUrl({url: params.url as string[]})

    const sessionId = (reconstructUrl + "--" + sessionCookie).replace(/\//g, "")

    const isAlreadyIndexed = await redis.sismember("indexed-urls", reconstructedUrl)

    const initialMessages = await ragChat.history.getMessages({ amount: 10, sessionId })

    console.log("Is already indexed", isAlreadyIndexed)

    if(!isAlreadyIndexed){
        await ragChat.context.add({
            type: "html",
            source: reconstructedUrl,
            config: { chunkOverlap: 50, chunkSize: 200 },
        })
        await redis.sadd("indexed-urls", reconstructedUrl)
    }
    
    return <ChatWrapper sessionId={sessionId} initialMessages={initialMessages} />
}

export default Page