import React from "react";
import ProjectOffering from "./ProjectOffering";

function Offering() {
  const title1 = (
    <span>
      Season Of <span style={{ fontWeight: "700" }}> Liberation</span>
    </span>
  );
  const title2 = (
    <span>
      Offering & <span style={{ fontWeight: "700" }}> Tithe</span>
    </span>
  );

  const paragraph1 =
    "As a revival movement of people, we have heard the cry of a world that waits to know Jesus and are determined to answer it with His presence. We believe that this is the hour for the Church to arise and shine.";

  const paragraph2 =
    "Now is the time—time to arise and build for the purposes of our God as people united who are equipped and empowered to impact communities, cities, and nations for Him, bringing His manifest presence into the darkest corners of the earth";

  const offering1 =
    "Give, and it will be given to you. A good measure, pressed down, shaken together and running over, will be poured into your lap. For with the measure you use, it will be measured to you. - Luke 6:38";

  const offering2 =
    "We give because we love God and want to be partners with him in expanding the gospel of the kingdom of God.";
  return (
    <div>
      <ProjectOffering
        title={title1}
        paragraph1={paragraph1}
        paragraph2={paragraph2}
        bankName="United Bank for Africa"
        accountName="Faith of the Faithfuls (SOL)"
        accountNumber={5811990022}
      />
      <ProjectOffering
        title={title2}
        paragraph1={offering1}
        paragraph2={offering2}
        backgroundColor="#F2F2F2"
        bankName="United Bank for Africa"
        accountName="Faith of the Faithfuls"
        accountNumber={5811990022}
      />
    </div>
  );
}

export default Offering;
