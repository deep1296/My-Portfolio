import { ProjectCard } from "./ProjectCard"
import styles from "./Styles/ProjectsSection.module.css"
// import { SiReact } from "react-icons/si"
import { SiJavascript } from "react-icons/si"
import { SiHtml5 } from "react-icons/si"
import { SiCss3 } from "react-icons/si"
// import { SiRedux } from "react-icons/si"
import { SiNodedotjs } from "react-icons/si"
import { SiExpress } from "react-icons/si"
import { SiMongodb } from "react-icons/si"
import Fade from "react-reveal/Fade"
const projects = [
  {
    name: "Gymshark.com clone",
    img: "/gymshark.png",
    link: "https://gymshark-team-shark.vercel.app/",
    git: "https://github.com/deep1296/Gymshark_FRONTEND_Unit4.git",
    about:
      "“An e-commerce website of fitness apparel and accessories. Implemented features to get data from backend,Created routes and Methods,Implemented Dynamic cart functionality",
    stacks: [
      <SiNodedotjs className={styles.stackIcon} />,
      <SiExpress className={styles.stackIcon} />,
      <SiMongodb className={styles.stackIcon} />,
      <SiJavascript className={styles.stackIcon} />,
      <SiHtml5 className={styles.stackIcon} />,
      <SiCss3 className={styles.stackIcon} />,
    ],
  },
  {
    name: "Rodan&Fields.com clone",
    img: "/rodan&fields.png",
    link: "https://focused-heisenberg-fa48d3.netlify.app/",
    git: "https://github.com/deep1296/cloneOfRodan-Fields.git",
    about:
      "An e-commerce website of beauty products and therapy. Created Dynamic cart and payment page using HTML,CSS,JavaScript,Added sorting Fuctionality",
    stacks: [
      <SiJavascript className={styles.stackIcon} />,
      <SiHtml5 className={styles.stackIcon} />,
      <SiCss3 className={styles.stackIcon} />,
    ],
  },

  
  // {
  //   name: "Zara.com clone",
  //   img: "/zara.jpg",
  //   link: "https://thotapavankumar.github.io/Zara_Project_Clone/",
  //   git: "https://github.com/Gajanan-Watt/zara_web.git",
  //   about:
  //     " It is an e-commerce website having varieties of luxury items which are of high quality. We have tried to clone the pixel perfect website with the help of HTML. Implemented using HTML, CSS and javascript.",
  //   stacks: [
  //     // <SiReact className={styles.stackIcon} />,
  //     <SiJavascript className={styles.stackIcon} />,
  //     <SiHtml5 className={styles.stackIcon} />,
  //     <SiCss3 className={styles.stackIcon} />,
  //   ],
  // },
  // {
  //   name: "Pixel Art",
  //   img: "/doggo2.png",
  //   link: "https://pixel-pic.vercel.app/",
  //   git: "https://github.com/Gajanan-Watt/pixelArt.git",
  //   about:
  //     "This project will let you design the pixel art. Let your creativity flow and convert them to images",
  //   stacks: [
  //     <SiReact className={styles.stackIcon} />,
  //     <SiJavascript className={styles.stackIcon} />,
  //     <SiHtml5 className={styles.stackIcon} />,
  //     <SiCss3 className={styles.stackIcon} />,
  //   ],
  // },

]
export function ProjectsSection() {
  return (
    <div className={styles.projectsSectionCont} id="projects">
      <Fade bottom>
        <p>Projects</p>
      </Fade>
      <div className={styles.projectGrid}>
        {projects.map((project) => (
          <Fade bottom>
            <ProjectCard {...project} />
          </Fade>
        ))}
      </div>
    </div>
  )
}
