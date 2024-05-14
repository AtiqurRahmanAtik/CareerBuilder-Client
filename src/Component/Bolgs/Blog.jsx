

const Blog = () => {
    return (
        <div>
            
            <section className="bg-white dark:bg-gray-900">
    <div className="container px-6 py-10 mx-auto">
        <div className="text-center">
            <h1 className="text-2xl font-semibold text-gray-800 capitalize lg:text-3xl dark:text-white"> The blog</h1>

            <p className="max-w-lg mx-auto mt-4 text-gray-500">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure veritatis sint autem nesciunt, laudantium
                quia tempore delect
            </p>
        </div>

        <div className="grid grid-cols-1 gap-8 mt-8 lg:grid-cols-2">
            <div>
                <img className="relative z-10 object-cover w-full rounded-md h-96" src={`https://i.ibb.co/f42hqT9/0-efoc2takya9z-Xra-L.webp`} alt=""/>

                <div className="relative z-20 max-w-lg p-6 mx-auto -mt-20 bg-white rounded-md shadow dark:bg-gray-900">
                    <a href="#" className="font-semibold text-gray-800 hover:underline dark:text-white md:text-xl">
                    What is an access token and refresh token?
                    </a>

                    <p className="mt-3 text-sm text-gray-500 dark:text-gray-300 md:text-sm">
                    The access token is used to authenticate API requests to access protected resources, while the refresh token is used to obtain new access tokens once the current ones expire.
                    </p>

                   
                </div>
            </div>

            <div>
                <img className="relative z-10 object-cover w-full rounded-md h-96" src={`https://i.ibb.co/nR2d1Qh/f3a9a38b-116d-4b35-8f46-8d8abb78166f.png`} alt=""/>

                <div className="relative z-20 max-w-lg p-6 mx-auto -mt-20 bg-white rounded-md shadow dark:bg-gray-900">
                    <a href="#" className="font-semibold text-gray-800 hover:underline dark:text-white md:text-xl">
                    What is express js ?
                    </a>

                    <p className="mt-3 text-sm text-gray-500 dark:text-gray-300 md:text-sm">
                    Express.js is the most popular web framework for Node.js. It is designed for building web applications and APIs and has been called the de facto standard server framework for Node.js.
                    </p>

                  
                </div>
            </div>


            <div>
                <img className="relative z-10 object-cover w-full rounded-md h-96" src={`https://i.ibb.co/1Mkwzd7/nest-js-logo.png`} alt=""/>

                <div className="relative z-20 max-w-lg p-6 mx-auto -mt-20 bg-white rounded-md shadow dark:bg-gray-900">
                    <a href="#" className="font-semibold text-gray-800 hover:underline dark:text-white md:text-xl">
                    What is Nest JS ?
                    </a>

                    <p className="mt-3 text-sm text-gray-500 dark:text-gray-300 md:text-sm">
                    Nest (NestJS) is a framework for building efficient, scalable Node.js server-side applications. It uses progressive JavaScript, is built with and fully supports TypeScript (yet still enables developers to code in pure JavaScript) and combines elements of OOP (Object Oriented Programming), FP (Functional Programming), and FRP (Functional Reactive Programming).
                    </p>

                   
                </div>
            </div>

            <div>
                <img className="relative z-10 object-cover w-full rounded-md h-96" src={`https://i.ibb.co/XLswsG9/1-j-o-VY0-Fbe-Au5-AT0-Brf-St-A.webp`} alt=""/>

                <div className="relative z-20 max-w-lg p-6 mx-auto -mt-20 bg-white rounded-md shadow dark:bg-gray-900">
                    <a href="#" className="font-semibold text-gray-800 hover:underline dark:text-white md:text-xl">
                    How do they work and where should
                    we store them on the client side?
                    </a>

                    <p className="mt-3 text-sm text-gray-500 dark:text-gray-300 md:text-sm">
                    Modern web browsers support a number of ways for websites to store data on the user's computer — with the user's permission — then retrieve it when necessary. This lets you persist data for long-term storage, save sites or documents for offline use ...
                    </p>

                   
                </div>
            </div>



        </div>
    </div>
</section>
        </div>
    );
};

export default Blog;