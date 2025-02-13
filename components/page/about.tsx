const About = () => {
    return (
        <div>
            <div id="about" className="ml-5">
                <h2 className="text-2xl font-bold mb-4 text-black">About Me</h2>
                
                {/* Layout chính */}
                <div className="flex flex-col md:flex-row items-center md:items-start gap-4 md:gap-8">
                    {/* Hình ảnh */}
                    <img src="/meme-meo.jpg" alt="khanh" className="w-full md:w-60 h-60 md:ml-5 mb-4 md:mb-0"></img>
                    
                    {/* Thông tin cá nhân */}
                    <div className="flex flex-col w-full md:text-left">
                        <h1 className="text-2xl font-bold mb-4 text-black">Fullstack Developer</h1>
                        <h1 className="text-2xl mb-2 text-black">This is my bio</h1>
                        <div className="flex flex-col md:flex-row w-full">
                            <ul className="flex-1">
                                <li className="text-xl font-bold mb-2 text-black">Full name: <span className="font-normal"> Khúc Gia Khánh</span></li>
                                <li className="text-xl font-bold mb-2 text-black">Birthday:  <span className="font-normal"> 27/08/2004</span></li>
                                <li className="text-xl font-bold mb-2 text-black">Phone: <span className="font-normal"> 0842618148</span></li>
                            </ul>
                            <ul className="flex-1">
                                <li className="text-xl font-bold mb-2 text-black">Age: <span className="font-normal">21</span></li>
                                <li className="text-xl font-bold mb-2 text-black">Email: <span className="font-normal">khucgiakhanh27082004@gmail.com</span></li>
                                <li className="text-xl font-bold mb-2 text-black">Github: <a href="https://github.com/KhucKhanh/" className="font-normal">https://github.com/KhucKhanh</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About;
