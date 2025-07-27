function Community() {
  const supportGroups = [
    {
      name: "Reddit Mental Health Support",
      url: "https://www.reddit.com/r/depression/",
      description:
        "A community where people share their experiences, advice, and support regarding mental health struggles.",
    },
    {
      name: "7 Cups - Free Online Therapy and Counseling",
      url: "https://www.7cups.com/",
      description:
        "An online therapy and emotional support platform that connects users with licensed therapists or trained listeners.",
    },
    {
      name: "National Tele Mental Health Program of India",
      url: "https://telemanas.mohfw.gov.in/home",
      description:
        "An initiative by the Indian government to provide accessible mental health services across the country through digital platforms.",
    },
    {
      name: "NAMI - National Alliance on Mental Illness",
      url: "https://www.nami.org/Find-Support",
      description:
        "The NAMI website offers resources and links to local peer support groups for mental health, as well as educational materials.",
    },
    {
      name: "Mind - Mental Health Charity",
      url: "https://www.mind.org.uk/",
      description:
        "A UK-based charity providing information, advice, and support for people experiencing mental health problems.",
    },
  ];

  return (
    <div className="flex flex-col items-center justify-center min-h-screen  p-4 bg-purple-200 ">
      <div className="text-center mb-7">
        <h2 className="text-5xl font-extrabold text-black">
          Community Support Resources
        </h2>
        <p className="text-lg font-medium mt-2 text-black">
          Below are some external community support groups and resources that
          can provide help and guidance for mental health challenges:
        </p>
      </div>

      <ul className="space-y-6">
        {supportGroups.map((group, index) => (
          <li
            key={index}
            className="bg-neutral-800 p-6 rounded-lg shadow-lg hover:shadow-2xl transition-all border-l-4 border-blue-500 hover:border-blue-700"
          >
            <h3 className="text-xl font-semibold text-blue-600 mb-2 underline">
              <a
                href={group.url}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-red-500"
              >
                {group.name}
              </a>
            </h3>
            <p className="text-yellow-500">{group.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Community;
