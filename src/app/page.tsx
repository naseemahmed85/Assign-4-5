import Link from "next/link";

// type Idata = {
//   title : string;
//   discraption : string;
// };

// const data : Idata[] = [{
//   title: "Ubaid", discraption: "Hellow from ubaid blog"
// },
// {
//   title: "Ahmer", discraption: "Hellow from ubaid blog"
// },
// {
//   title: "Anas", discraption: "Hellow from ubaid blog"
// }];

// export default function Home (){
//   return(
//     <div className="parent">
//       {
//         data.map((Idata) =>(
//           <div className="childCondainer bouce-in-right">
//             <div className="image container"></div>
//             <h1 className="Title">{Idata.title}</h1>
//             <p className="discraption">{Idata.discraption}</p>
//             <button className="Readmore">Read More</button>
//           </div>
//       ))}
//     </div>
//   )
// }


export default function Home() {
  return (
    <div className="parent">
    <h1 className="h1">Trending Blog!</h1>

    <div className="childContainer"> 

      <div className="imageContainer">
      <img src="../image/AI.webp" alt="AI Image" /></div>
      </div>
      
      <div className="samicontainer">
      <div className="minisamicontainer">
      <div className="imageContainer">
      <img src="../image/Open source AI.jpg" alt="Open source" /></div>
      <h1 className="Title"> Open Source AI </h1>
      <p className="discription"> Open Source AI empowers global innovation by making powerful AI tools and technologies accessible, collaborative, and customizable for everyone.</p>
      <Link href="/open-source-ai">
      <button className="readmore"> Read More </button>
      </Link>
      </div>

      <div className="minisamicontainer">
      <div className="imageContainer">
      <img src="../image/Agentic AI.png" alt="Agentic AI" /></div>
      <h1 className="Title"> Agentic AI </h1>
      <p className="discription"> Agentic AI refers to autonomous systems capable of making independent decisions and taking actions in complex environments, driving innovation in intelligent automation.</p>
      <Link href="/agenticai">
      <button className="readmore"> Read More </button>
      </Link>
      </div>

      <div className="minisamicontainer">
      <div className="imageContainer">
      <img src="../image/AI design trends.webp" alt="AI design trends" /></div>
      <h1 className="Title"> AI Design Trends </h1>
      <p className="discription"> 
      AI design trends are transforming user experiences with personalized interfaces, voice interactions, and intelligent automation, shaping the future of digital creativity.</p>
      <Link href="/aidesigntrends">
      <button className="readmore"> Read More </button>
      </Link>
      </div>

      <div className="minisamicontainer">
      <div className="imageContainer">
      <img src="../image/AI in cybersecurity.jpg" alt="AI in cybersecurity" /></div>
      <h1 className="Title"> AI In Cybersecurity </h1>
      <p className="discription"> AI in cybersecurity enhances threat detection, automates defense responses, and strengthens overall security by identifying vulnerabilities faster than traditional methods.</p>
      <Link href="/aiincybersecurity">
      <button className="readmore"> Read More </button>
      </Link>
      </div>

      <div className="minisamicontainer">
      <div className="imageContainer">
      <img src="../image/Ai in Motoring 1.webp" alt="AI in Motring" /></div>
      <h1 className="Title"> AI In Motoring </h1>
      <p className="discription"> 
      AI in motoring is revolutionizing the automotive industry with autonomous driving, predictive maintenance, and smart navigation systems, enhancing safety and efficiency on the road.</p>
      <Link href="/aiinmotoring">
      <button className="readmore"> Read More </button>
      </Link>
      </div>

      <div className="minisamicontainer">
      <div className="imageContainer">
      <img src="../image/generativeai.png" alt="Generative AI" /></div>
      <h1 className="Title"> Generative AI </h1>
      <p className="discription"> Generative AI is transforming creativity and innovation by producing original content, from art and music to text and code, through machine learning models.</p>
      <Link href="/generativeai">
      <button className="readmore"> Read More </button>
      </Link>
      </div>

      </div>
    </div>
  );
}
