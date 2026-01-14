import { Poppins, Urbanist } from "next/font/google";
import AwardeeCard from "./AwardeeCard";

const poppins = Urbanist({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "700"],
});

function AwardeeSection() {
  return (
    <section className="bg-gradient-to-br from-gray-50 to-gray-100 py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className={`text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-3 sm:mb-4 ${poppins.className}`}>Innovation Reward Winners</h2>
          <p className="text-sm sm:text-base lg:text-lg text-gray-600 max-w-2xl mx-auto px-4">
            Meet our amazing customers who earned their dream cars through dedication and hard work
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          <AwardeeCard
            name="Ethan Carter"
            description="Elon Musk announced Ethan as a winner in the Tesla Lovers Program for groundbreaking innovation and awarded a Tesla Model 3."
            img="/awardee-1.png"
            title="Tesla Innovation Recognition"
          />

          <AwardeeCard
            name="Liam Johnson"
            description="Declared by Elon Musk, Liam was recognized as a Tesla Lovers Program awardee for exceptional contributions to Tesla innovation."
            img="/awardee-7.png"
            title="Innovation Achievement Award"
          />

          <AwardeeCard
            name="Sophia Davis"
            description="Elon Musk acknowledged Sophia as a winner of the Tesla Lovers Program for her creativity and innovation, earning a Tesla Model 3."
            img="/awardee-2.png"
            title="Tesla Innovator Award"
          />

          <AwardeeCard
            name="Olivia Martinez"
            description="Declared by Elon Musk, Olivia was selected for outstanding achievements in Tesla innovation and rewarded with a Tesla Model 3."
            img="/awardee-3.png"
            title="Innovation Recognition Awardee"
          />

          <AwardeeCard
            name="Ava Thompson"
            description="Elon Musk announced Ava as a Tesla Lovers Program awardee for exceptional innovation contributions."
            img="/awardee-4.png"
            title="Innovation Achievement Award"
          />

          <AwardeeCard
            name="Isabella Wilson"
            description="Recognized by Elon Musk for her innovative ideas, Isabella received a Tesla Model 3 as part of the Tesla Lovers Program."
            img="/awardee-5.png"
            title="Tesla Innovation Recognition"
          />

          <AwardeeCard
            name="Mia Robinson"
            description="Declared by Elon Musk as one of the select Tesla Lovers Program winners, Mia was rewarded with a Tesla Model 3 for her innovation excellence."
            img="/awardee-6.png"
            title="Innovation Excellence Award"
          />
        </div>
      </div>
    </section>
  );
}

export default AwardeeSection;
