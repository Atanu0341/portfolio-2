import Image from "next/image";
import ProfileImage from "../../public/profile-pic.jpeg"

export default function Intro() {
  return (
    <section>
        <div className="flex items-center justify-center">
            <div>
                <Image src={ProfileImage} alt="Atanu-Image" width="192" height="192" quality="95" priority={true} />
            </div>
        </div>
    </section>
  )
}
