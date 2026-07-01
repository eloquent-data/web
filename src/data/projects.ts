import type { Project, ProjectDetail } from './types';

export const projects: Project[] = [
  {
    id: 1,
    title: 'Virdash',
    img: 'assets/img/virdash.jpeg',
    summary:
      'Virdash aims to flatten the curve of COVID-19 in Africa by providing real-time information and access to digital health tools.',
  },
  {
    id: 2,
    title: 'Gender Based Violence',
    img: 'assets/img/gbv.jpg',
    summary:
      'To build a platform that tackles the issues of GBV with data through storytelling and help victims overcome the trauma by providing both medical, mental and legal support through partnership.',
  },
];

export const projectStats = {
  managed: 1,
  total: 1,
  team: 7,
};

export const projects_detail: ProjectDetail[] = [
  {
    id: 1,
    img: 'assets/img/virdash.jpeg',
    title: 'Virdash',
    summary:
      'Virdash aims to flatten the curve of COVID-19 in Africa by providing real-time information and access to digital health tools.',
    desc: "Wednesday 29th January 2020, the Novel Coronavirus was declared a Global Health Emergency by the World Health Organisation (WHO). On the 7th February 2020 the number of confirmed cases was 31,485 in over 28 countries, which rose to 71,811 by 17th February 2020 (ie over 128% in 10 days).</br>This project is to build an information hub for the 2019 novel coronavirus containing interactive dashboards that give real-time visualization on the coronavirus and up-to-date information on its prevention.",
    problem:
      'Amongst the major causes of the increasing spread of the COVID-19 is lack of awareness and misinformation spreading rapidly through social media platforms and other outlets.<br>Also the difficulty in tracking regions with new cases of the virus.',
    solution:
      'We are creating a resource hub that gives real-time visualization of COVID-19 and up-to-date information from credible sources such as WHO, UNICEF, Center for Disease Control etc. </br> A "report a suspected case" feature which allows people to self examine if they observe any symptoms; and if need be contact the nearest center disease control or seek counselling from a medical personnel',
    target:
      'We are targeting tech savvy Africans of ages ranging between 14-45 who make use of internet connection on their IT gadgets to surf the web.',
    objective: `
      <h3>Community</h3>
      <ul>
        <li><b>Information Distribution</b></br>Virdash will provide proper dissemination of information to the public by way of education on prevention and symptoms to curb the spread of COVID-19</li>
        <li><b>Accessibility</b></br>Virdash will provide access for people and community to access to digital health tools like telemedicine, interactive chatbot to any question about the virus and clarify rumour etc</li>
      </ul>
      </br>
      <h3>Government</h3>
      <ul>
        <li><b>Early Detection</b></br>With the report a case feature, we will be able to identify clusters of people having similar symptoms of the COVID-19 and alert the appropriate agency of such areas.</li>
        <li><b>Tracking virus in Africa</b></br>A completed Virdash will help to document and report spread of viruses in Africa. Also track the distribution of vaccines and drugs on infectious diseases.</li>
      </ul>
    `,
    project_link: 'https://virdash.com',
    team: [
      { name: 'Daouda Tandiang DJIBA', link: 'https://www.linkedin.com/in/daoudatandiangdjiba/' },
      { name: 'Susan Ofeimun', link: 'https://www.linkedin.com/in/susan-ofeimun/' },
      { name: 'Klinton Ehigiator', link: 'https://www.linkedin.com/in/ehigiator-klinton-26949b151/' },
      { name: 'Precious Omamode', link: 'https://www.linkedin.com/in/precious-omamode-18b568100/' },
      { name: 'Solomon Igori', link: 'https://www.linkedin.com/in/solomon-igori/' },
    ],
  },
  {
    id: 2,
    img: 'assets/img/gbv.jpg',
    title: 'Gender Based Violence',
    summary:
      'To build a platform that tackles the issues of GBV with data through storytelling and help victims overcome the trauma by providing both medical, mental and legal support through partnership.',
    desc: 'GBV is a global social problem that poses challenges in human health, with a higher prevalence in developing countries. Many studies show that all types of violence against women and girls, particularly domestic violence, have increased due to the COVID-19 pandemic thus a <i>"Shadow pandemic"</i> growth in violence against women and girls.',
    problem:
      "Gender-Based violence is a recurring hazard that violates the rights of women in Africa and beyond. The UN estimated that 2 out of 5 women have been subjected to one form of abuse or the other in Africa.",
    solution:
      "The project aims to build a resource hub for data on Gender-Based Violence (GBV) in Africa, and also to proffer sustainable solutions through strategic partnership. </br> The GBV platform will include an interactive dashboard with data from different sources including hospitals, surveys, social media, communities, ministries and parastatals.",
    target:
      "The main target groups are the survivors, communities, organisations and government agencies with programs for the promotion of women's rights in Africa.",
    objective: `
      <h3>Community</h3>
      <ul>
        <li>To increase the awareness of GBV.</li>
        <li>To increase community involvement through partnerships.</li>
        <li>Increase access to GBV's data analysis.</li>
      </ul>
      </br>
      <h3>Survivals</h3>
      <ul>
        <li>Assisting survivors to recover from Post Traumatic Stress Disorder (PTSD).</li>
        <li>Provide medical and legal support.</li>
      </ul>
    `,
    team: [
      { name: 'Ada Tapily', title: 'Project Co-ordinator', link: 'https://www.linkedin.com/in/ada-tapily-58a51b166/' },
      { name: 'Bola Yaya', title: 'Research Analyst', link: 'https://www.linkedin.com/in/bola-yaya-036a1b16a/' },
      { name: 'Solomon Igori', title: 'Product Manager', link: 'https://www.linkedin.com/in/solomon-igori/' },
      { name: 'Enock Mwesigwa', title: 'Data Analyst', link: 'https://www.linkedin.com/in/enock-mwesigwa-30bb39b6/' },
    ],
  },
];
