import Link from "next/link";

export default function Agenticai(){
    return(
        <div className="Parent1">
            <h1 className="text">Agentic AI</h1>
            <div className="container">
            <img src="../image/Agentic AI.Png" alt="Open source ai" />
            </div>
            <p className="text1">
            Agentic AI refers to artificial intelligence systems that possess a level of autonomy, enabling them to make decisions and perform actions without constant human intervention. These systems operate as agents, meaning they have the capacity to assess their environment, interpret data, and execute tasks based on predefined objectives or learned behaviors.
            </p>

            <h2 className="text2"> Key Characteristics of Agentic AI </h2>
            <p className="text3">
            Autonomy: Agentic AI can function independently within its designated environment, making decisions and taking actions without requiring continuous human input. This autonomy allows for more efficient and scalable operations in complex settings.

            Goal-Oriented: These AI systems are programmed or trained to pursue specific goals, whether predefined by human developers or dynamically adapted as they interact with their environment. For example, an AI system in a self-driving car has the goal of safely transporting passengers from point A to point B.
            </p>

            <h3 className="text4"> Examples of Agentic AI </h3>
            <p className="text5">
            Autonomous Vehicles: Self-driving cars like those developed by Tesla or Waymo operate using agentic AI, making split-second decisions about speed, direction, and obstacle avoidance without human input.
            Robotic Process Automation (RPA): In industries like banking or manufacturing, agentic AI can automate workflows, such as processing transactions or managing inventory, without manual oversight.
            AI Trading Systems: In the financial sector, autonomous trading bots can analyze the stock market and make independent decisions on when to buy or sell based on complex algorithms.
            </p>

            <h4 className="text6">Ethical and Security Concerns</h4>
            <p className="text7">
            The independence of Agentic AI raises concerns about accountability, control, and transparency. As these systems make autonomous decisions, it becomes important to address who is responsible when mistakes occur or when an AI systems actions lead to unforeseen consequences. Additionally, ensuring that these AI agents remain secure from external tampering is crucial in preventing misuse.

            In summary, Agentic AI represents a more advanced form of AI that is empowered to act autonomously, making it useful for a wide range of applications where continuous human involvement would be inefficient or impractical. However, its development comes with important ethical and technical challenges that must be carefully managed.
            </p>

            <div className="back-to-home">
                <Link href="/">
                <button>Back</button>
                </Link>
            </div>
            </div>
    )
}
    