import Galaxy from '../components/Backgrounds/Galaxy/Galaxy';
import '../components/Backgrounds/Galaxy/Galaxy.css';
import CardNav from '../components/Components/CardNav/CardNav'; 
import '../css/App.css'
// Assets in `public/` should be referenced via root-relative URLs in Vite
const logo = '/Space-Portfolio-main/Images/icon.png';
import { ImTextColor } from 'react-icons/im';



// here is the color pallete im am going to use https://colorhunt.co/palette/0000009929eacc66dafaeb92
export default function App() {

  const items = [
    {
      label: "LinkedIn",
      bgColor: "#0056b8ff",
      textColor: '#ffffffff', 
      links: [
        { label: "LinkedIn", ariaLabel: "", href: "https://www.linkedin.com/in/gavin-ogren", image: "/Space-Portfolio-main/Images/icon.png" },
      ]
    },
      {
      label: "GitHub",
      bgColor: "#000000ff",
      textColor: '#fdfdfdff', 
      links: [
        { label: "GitHub", ariaLabel: "", href: "https://github.com/gav-ogren", image: "/Space-Portfolio-main/Images/icon.png" },
      ]
    },
      {
      label: "Simplified Portfolio",
      bgColor: "#ffffffff",
      textColor: '#000000ff', 
      links: [
        { label: "Simplified Resume", ariaLabel: "About Company", href: "/gavin-ogren-bio/index.html", image: "/Space-Portfolio-main/Images/icon.png" },
      ]
    },
  ];

  return (
    <Galaxy mouseInteraction={false}>
      <CardNav logo={logo} items={items} ease='power3.out' buttonHref='https://github.com/gav-ogren'></CardNav>
      <div className='text-box'>  
       <div className='hero'>
        <h1>GO ON A<br/>PRIVATE <br/><span style={{ color: "red" }}>MISSION</span></h1>
         <a href="/Space-Portfolio-main/index.html" style={{ fontSize: "1.5rem" }}> GO NOW! </a> 
      </div>
     </div>
    </Galaxy>
  ); 
}
