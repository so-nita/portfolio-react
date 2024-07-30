import Transition from "./transition";
const Content = () => {
    return (
        <div>
            <Transition />
            <div className="flex flex-col items-center justify-center bg-blue-950">
                <h1 className="text-4xl font-bold text-center">Hello, Tailwind!</h1>
                <p className="text-lg text-center mt-5">This is a simple Tailwind CSS template for React.</p>
                <button className="bg-purple-400">Button</button>
            </div>
        </div>
        
    );
};

export default Content;