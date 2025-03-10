const Stats = () => {
    const stats = [
        {
            num: 3,
            text: 'Years of experience',
        },
        {
            num: 8,
            text: 'Technology Mastered',
        },
        {
            num: 14,
            text: 'Project Completed',
        },
        {
            num: 300,
            text: 'Code Commits',
        },
        
    ]
  return (
    <section className="pt-4 pb-6 xl:pb-4">
        <div className="container mx-auto">
            <div className="flex flex-wrap gap-6 max-w-[80vw] mx-auto xl:max-w-none">
                {stats.map((item, index) =>{
                    return <div key={index} className="flex-1 flex gap-4 items-center justify-center xl:justify-start ">
                        <div key={index} className="text-4xl xl:text-6xl font-extrabold">{item.num}</div>
                        <p className={`${item.text.length < 15 ? "max-w-[100px]" : "max-w-[150px]"} leading-snug text-white/80`}>{item.text}</p>
                    </div>
                })}
            </div>
        </div>
    </section>
  )
}

export default Stats