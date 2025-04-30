
const AboutMission = () => {
  return (
    <section className="section bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6 text-gray-900">Our Mission & Vision</h2>
            <p className="text-lg text-gray-700 mb-6">
              SkillGalaxy was founded on a simple yet powerful idea: everyone has something valuable to teach and something new to learn.
            </p>
            <p className="text-lg text-gray-700 mb-6">
              We believe that by removing money from the equation and focusing on the exchange of knowledge itself, 
              we can create a more equitable learning ecosystem that benefits everyone.
            </p>
            <p className="text-lg text-gray-700">
              Our vision is a world where skills and knowledge flow freely between people, 
              where teaching is valued as much as learning, and where everyone has access to the education they seek, 
              regardless of financial circumstances.
            </p>
          </div>
          <div className="bg-gray-100 rounded-lg p-8 border border-gray-200">
            <h3 className="text-2xl font-semibold mb-4 text-skill-purple">Our Core Values</h3>
            <ul className="space-y-4">
              <li className="flex">
                <div className="mr-4 bg-skill-purple/10 rounded-full p-2">
                  <div className="w-8 h-8 bg-skill-purple rounded-full flex items-center justify-center text-white font-bold">1</div>
                </div>
                <div>
                  <h4 className="text-xl font-medium mb-2">Reciprocity</h4>
                  <p className="text-gray-700">We believe in the give-and-take nature of learning, where everyone both contributes and benefits.</p>
                </div>
              </li>
              <li className="flex">
                <div className="mr-4 bg-skill-teal/10 rounded-full p-2">
                  <div className="w-8 h-8 bg-skill-teal rounded-full flex items-center justify-center text-white font-bold">2</div>
                </div>
                <div>
                  <h4 className="text-xl font-medium mb-2">Accessibility</h4>
                  <p className="text-gray-700">Knowledge should be available to all, not just those who can afford it.</p>
                </div>
              </li>
              <li className="flex">
                <div className="mr-4 bg-skill-orange/10 rounded-full p-2">
                  <div className="w-8 h-8 bg-skill-orange rounded-full flex items-center justify-center text-white font-bold">3</div>
                </div>
                <div>
                  <h4 className="text-xl font-medium mb-2">Community</h4>
                  <p className="text-gray-700">We foster connections that go beyond transactions, building a supportive learning community.</p>
                </div>
              </li>
              <li className="flex">
                <div className="mr-4 bg-skill-lightPurple/10 rounded-full p-2">
                  <div className="w-8 h-8 bg-skill-lightPurple rounded-full flex items-center justify-center text-white font-bold">4</div>
                </div>
                <div>
                  <h4 className="text-xl font-medium mb-2">Trust</h4>
                  <p className="text-gray-700">Our platform is built on transparency, reviews, and accountability.</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMission;
