import Image from "next/image";
import marni from "../img/marni.JPG"
import brian from "../img/brian.jpeg"
import aoife from "../img/aoife.jpg"
import sergii from "../img/sergii.jpg"
import brendon from "../img/brendon.jpg"

// add more links to object is need
const team = [
  {
    id: 1,
    name: 'Aoife',
    href: '#',
    src: aoife,
    imageAlt: 'Aoife',
    about: 'I\'m Aoife Mulligan and I\'m a software developer. I\'m a Passionate worker with a strong strong background in the sciences, specifically microbiology, biotech, bioinformatics, and also in art. I am a creative problem solver and a team player who is skilled at contributing to and helping coordinate group efforts. In my free time she enjoys cooking, painting, playing video games, and playing with my two dogs.',
    linkedIn: "https://www.linkedin.com/in/aoife-mulligan-b3a821220/",
    GitHub: "https://github.com/AoifeWM"
  },
  {
    id: 2,
    name: 'Brendon',
    href: '#',
    src: brendon,
    imageAlt: 'Brendon',
    about: 'My name is Brendon and I’ll be honest, I didn’t plan on a Career in Web Development. At first, I coded because I enjoyed it, then I realized that if I want to make something serious out of it, I need to learn the industry and practices. So here I am.',
    linkedIn: "https://www.linkedin.com/in/brendon-hampton-37132899/",
    GitHub: "https://github.com/BrendonLH"
  },
  {
    id: 3,
    name: 'Brian',
    href: '#',
    src: brian,
    imageAlt: 'Brian',
    about: 'My name is Brian and I am a Software Developer with a background in Supply Chain Leadership. My dream is to work with a team that helps spacecraft navigate the stars.',
    linkedIn: "https://www.linkedin.com/in/brianjtarte/",
    GitHub: "https://github.com/brianjtarte"
  },
  {
    id: 4,
    name: 'Marni',
    href: '#',
    src: marni,
    imageAlt: 'Marni',
    about: 'My name is Marni Hager. I am a software developer with a background in manufacturing engineering for aerospace companies. As a manufacturing engineer, I have learned to optimize various types of processes, including mapping out the steps of a process and determining which are value added and which are waste. I have translated this into code in more recent years at my job by automating processes that were taking a full day into something that takes less than an hour. My current goal is to find a job that will allow me to combine my skills as a manufacturing engineer with being a programmer.',
    linkedIn: "https://www.linkedin.com/in/marnihager/",
    GitHub: "https://github.com/mlh6118"
  },
  {
    id: 5,
    name: 'Sergii',
    href: '#',
    src: sergii,
    imageAlt: 'Sergii',
    about: 'My name is Sergii Otryshko and I\'m a software engineer who enjoys taking on challenges and finding solutions that prioritize efficiency and user experience. I have a background in law, telecommunications and customer service and I\'m looking to bring my various work experiences to my new career to approach problems from non-standard angles.',
    linkedIn: "https://www.linkedin.com/in/sergii-otryshko/",
    GitHub: "https://github.com/S14mx"
  },

]
export default function AboutUs() {

  return (
    <>
      {team.map((team) => (
        <div key={team.id} className="card card-plain">
          <div className="flex">
            <div className="w-1/3 m-6">
              <Image
                className="rounded-lg"
                src={team.src}
                alt="card image"
              />
            </div>
            <div className="flex flex-col justify-between w-2/3 m-4 card-body">
              <div>
                <span className="font-bold uppercase text-rose">{team.name}</span>
                <p className="mb-5 opacity-80">
                  {team.about}
                </p>
              </div>
              <div>
                <p className="font-bold text-mediumBlue"><a target="_blank" href={team.linkedIn}>LinkedIn</a></p>
                <p className="font-bold text-mediumBlue"><a target="_blank" href={team.GitHub}>GitHub</a></p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  )
}

