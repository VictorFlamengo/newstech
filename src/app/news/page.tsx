import Link from "next/link";

interface ArticlesProps {
    id: string;
    author: string;
    title: string;
    description: string;
    urlToImage: string;
    url:string;

}

interface ResponseProps {
    articles: ArticlesProps[]
}

export default async function News() {
    
    const API_KEY= process.env.API_KEY
    
    const res = await fetch(`https://newsapi.org/v2/everything?q=apple&from=2025-07-29&to=2025-07-29&sortBy=popularity&apiKey=${API_KEY}`)
    const data: ResponseProps = await res.json()


    return(
        <div className="dark:bg-gray-900 min-h-screen">
            <h1 className="text-center text-2xl dark:text-white p-8">Notícias de tecnologia</h1>
            <div className="flex flex-col items-center"> 
                {data.articles.map(art =>(
                    
                    <div key={art.id} className="bg-white dark:bg-gray-800 rounded-lg px-6 py-8 ring shadow-xl ring-gray-900/5 m-4 max-w-xl">
                        <img src={art.urlToImage} alt={art.title} className="w-full h-auto rounded-lg" />
                        <h3 className="text-gray-900 dark:text-white mt-5 text-base font-medium tracking-tight">{art.title}</h3>
                        <p className="text-gray-500 dark:text-gray-400 mt-2 text-sm ">
                            {art.description}
                        </p>
                        <div className="flex justify-between pt-3 items-center">
                            <p>
                                <Link href={art.url} className="underline text-blue-400 hover:text-blue-600 duration-700">
                                    Acessar
                                </Link>
                            </p>
                            <p className="text-xs text-gray-500">
                                Author: {art.author}
                            </p>
                        </div> 
                            
                    </div>

                ))}

            </div>
        </div>
    )
}