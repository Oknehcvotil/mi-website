// import AppSlider from "../../../AppSlider/AppSlider";
// import {
//   blockV,
//   sectionV,
// } from "../../../../lib/animations/home/animations.swipers";
// import { motion } from "framer-motion";
// import VideoReviewCard from "../../../VideoReviewCard/VideoReviewCard";
// import CaseInfoCard from "../../../CaseInfoCard/CaseInfoCard";
// import CasesMessage from "../../../CasesMessage/CasesMessage";

// const NS = "casesRecruitment";

// const OtherCases = () => {
//   return (
//     <motion.section
//       initial="hidden"
//       whileInView="show"
//       viewport={{ once: true, amount: 0.3 }}
//       variants={sectionV}
//     >
//       <motion.div variants={blockV}>
//         <AppSlider>
//           <CasesMessage
//             translationNs={NS}
//             titleKey="others.objectOne.title"
//             textKey="others.objectOne.items"
//             imgSrc="/images/cases-pages/recruiment/object-one-person"
//             className={["not-list", "gap"]}
//           />
//           <CaseInfoCard
//             logos={[
//               {
//                 src: "/images/clients-logos/object-one",
//                 width: 160,
//                 height: 40,
//               },
//             ]}
//             translationNs={NS}
//             keyPrefix="others.objectOne"
//           />
//           <CasesMessage
//             translationNs={NS}
//             titleKey="others.reelly.title"
//             textKey="others.reelly.items"
//             imgSrc="/images/cases-pages/recruiment/reelly-person"
//             className={["not-list", "gap"]}
//           />
//           <CaseInfoCard
//             logos={[
//               {
//                 src: "/images/clients-logos/reelly",
//                 width: 110,
//                 height: 40,
//               },
//             ]}
//             translationNs={NS}
//             keyPrefix="others.reelly"
//           />
//           <VideoReviewCard
//             youtubeUrl="https://youtu.be/h_jeb5pweos"
//             translationNs={NS}
//             author="others.eugene.name"
//             position="others.eugene.position"
//           />
//           <CaseInfoCard
//             logos={[
//               { src: "/images/clients-logos/yz-pro", width: 155, height: 45 },
//             ]}
//             translationNs={NS}
//             keyPrefix="others.eugene"
//           />
//           <CasesMessage
//             translationNs={NS}
//             titleKey="others.everest.title"
//             textKey="others.everest.items"
//             imgSrc="/images/cases-pages/recruiment/everest-person"
//           />
//           <CaseInfoCard
//             logos={[
//               { src: "/images/clients-logos/everest", width: 75, height: 60 },
//             ]}
//             translationNs={NS}
//             keyPrefix="others.everest"
//           />
//           <CasesMessage
//             translationNs={NS}
//             titleKey="others.smartDevelopment.title"
//             textKey="others.smartDevelopment.items"
//             imgSrc="/images/cases-pages/recruiment/smart-development-person"
//             className={["not-list", "gap"]}
//           />
//           <CaseInfoCard
//             logos={[
//               {
//                 src: "/images/clients-logos/smart-development",
//                 width: 285,
//                 height: 25,
//               },
//             ]}
//             translationNs={NS}
//             keyPrefix="others.smartDevelopment"
//           />
//         </AppSlider>
//       </motion.div>
//     </motion.section>
//   );
// };

// export default OtherCases;
