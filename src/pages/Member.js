import React from 'react';
import './Member.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import deepakSarkarImage from '../images/members/Deepak Sarkar.jpg';
import drGourangaChBaraiImage from '../images/members/Dr. Gouranga Ch. Barai.jpg';
import pradeepKumarBoseImage from '../images/members/Pradeep Kumar Bose.jpg';
import niranjanBeruImage from '../images/members/Niranjan Beru.jpg';
import bananiBeruImage from '../images/members/Banani Beru.jpg';
import soumenBaraiImage from '../images/members/Soumen Barai.jpg';
import santoshBaraiImage from '../images/members/Santosh Barai.jpg';
import sheuliBaraiImage from '../images/members/Sheuli Barai.jpg';
import ratanMondalImage from '../images/members/Ratan Mondal.jpg';
import prabirKarmakarImage from '../images/members/Prabir Karmakar.jpg';
import bharatChRoyImage from '../images/members/Bharat Ch. Roy.jpg';

import becomeAMember from '../images/members/become a member.png';

const Member = () => {
  const year = '2015-16';
  const body = [
    {
      src: deepakSarkarImage,
      name: 'Deepak Sarkar',
      designation: 'Chairman'
    },
    {
      src: drGourangaChBaraiImage,
      name: 'Dr. Gouranga Ch. Barai',
      designation: 'President'
    },
    {
      src: pradeepKumarBoseImage,
      name: 'Pradeep Kumar Bose',
      designation: 'Vice President'
    },
    {
      src: niranjanBeruImage,
      name: 'Niranjan Beru',
      designation: 'Secretary'
    },
    {
      src: bananiBeruImage,
      name: 'Banani Beru',
      designation: 'Assistant Secretary'
    },
    {
      src: soumenBaraiImage,
      name: 'Soumen Barai',
      designation: 'Treasurer'
    },
    {
      src: santoshBaraiImage,
      name: 'Santosh Barai',
      designation: 'Member'
    },
    {
      src: sheuliBaraiImage,
      name: 'Sheuli Barai',
      designation: 'Member'
    },
    {
      src: ratanMondalImage,
      name: 'Ratan Mondal',
      designation: 'Member'
    },
    {
      src: prabirKarmakarImage,
      name: 'Prabir Karmakar',
      designation: 'Member'
    },
    {
      src: bharatChRoyImage,
      name: 'Bharat Ch. Roy',
      designation: 'Member'
    }
  ];

  return (
    <main className='member'>
      <Header />
      <div className='ourMember'>
        <h2>Governing Body of {year}</h2>
        <hr />
        <ul>
          {body.map((member, index) => (
            <li key={index}>
              {member.src && <img src={member.src} alt={member.name} />}
              <div className='designation'>
                <p>{member.name}</p>
                <p>{member.designation}</p>
              </div>
            </li>
          ))}
          <li className='newMember'>
            <h3>Want to become a member?</h3>
            <p>Contact the number given at the bottom of the page</p>
          </li>
        </ul>
      </div>
      <img src={becomeAMember} alt='become a member'/>
      <div className='newMember'>
        <h3>Membership</h3>
        <ol>
          <li>
            <strong>Admission:</strong>
            <p>a) The signatories to the Memorandum of Associations & the office bearers of the Governing Body of the society shall be first members of the Society,</p>
            <p>b) The Governing Body may admit to membership any person of any caste, creed, or sex who has attained the age of 13 years and agreed in writing to be bound by the Memorandum of Association and regulations of the society and who, in the opinion of the Governing Body, will be interested in the advancement of the objects of the society. Be it noted here that the power to admit members is the sole and absolute power of the Governing Body, and the Governing Body may refuse to admit any person as a member without assigning any reason therefore.</p>
          </li>
          <li>
            <strong>Types of Members:</strong>
            <p>a) Honorary members: Any person whose connection with the society is deemed to be useful may, with the consent of such person, be elected as an honorary member of the society. Such members shall not, however, be eligible to be members of the Governing Body nor shall they be entitled to vote in any meeting.</p>
            <p>b) Ordinary member: Any person, qualified to be a member and paying the prescribed ordinary membership fee, may be admitted as ordinary members of the society.</p>
          </li>
          <li>
            <strong>Cessation of Membership:</strong>
            <p>Any member shall cease to be a member:</p>
            <p>(a) On the acceptance of his resignation from membership</p>
            <p>(b) On his becoming insane or insolvent,</p>
            <p>(c) On his conviction of any offense in connection with the formation, promotion, management, or conduct of affairs of society or a body corporate, or of any offense involving moral turpitude.</p>
          </li>
          <li>
            <strong>Register of Members:</strong>
            <p>The society shall maintain a Register of members containing the names, addresses, and their occupations, the date of admission and of cessation of membership. The Register will be kept open for inspection by the members of the society on requisition. All entries required to be made therein shall be entered within a period of 15 days.</p>
          </li>
          <li>
            <strong>Rights and Obligations of Members:</strong>
            <p>Any ordinary member of the society has the right:</p>
            <p>(a) To elect and to be elected in any election of the society.</p>
            <p>(b) To submit suggestions for discussion to the Governing Body and sub-committee on any matter relating to society;</p>
            <p>(c) To inspect the accounts and the proceedings of the meetings of the society on appointment with the secretary;</p>
            <p>(d) To pay his subscription within the prescribed time. Defaulting members shall not be allowed to take part or vote in a meeting. Members shall have one vote each.</p>
          </li>
          <li>
            <strong>Expulsion & Removal:</strong>
            <p>Frequent actions of any member, if found by the Governing Body to be detrimental to the interest and in violation of the rules and regulations of the society, may be, after due enquiry, censured, suspended, or expelled from membership by the Governing Body. In that case, the Governing Body shall first serve the member concerned with a show cause notice, showing therein the charges framed, and ask him to submit his statement of defense within a month. On receipt of the explanation, the Governing Body shall have the power to take suitable action against the delinquent member after allowing him to defend his case. If no reply to the show cause notice is received within a month, the Governing Body may take an ex-parte decision.</p>
            <p>For an act of expulsion or termination, no such member shall be entitled to prefer any claim for compensation or damage, even if improved on a subsequent date that such act of expulsion or termination was wrongful and/or unlawful.</p>
          </li>
        </ol>
      </div>
      <Footer />
    </main>
  );
};

export default Member;
