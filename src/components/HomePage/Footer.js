import {
  FaInstagram,
  FaTwitter,
  FaFacebookF,
  FaLinkedinIn,
  FaYoutube,
} from 'react-icons/fa';

const Footer = () => {
  const productsData = [
    { link: '#', text: 'Features' },
    { link: '#', text: 'About Us' },
    { link: '#', text: 'Contact Us' },
    { link: '#', text: 'Taken' },
    { link: '#', text: 'Security' },
    { link: '#', text: 'Comparison' },
  ];
  const resourceData = [
    { link: '#', text: 'Whitepaper' },
    { link: '#', text: 'Brand kits' },
    { link: '#', text: 'Compliance' },
    { link: '#', text: 'Privacy Policy' },
    { link: '#', text: 'Terms of service' },
  ];
  const communityData = [
    { link: '#', text: 'Guide' },
    { link: '#', text: 'Blog' },
    { link: '#', text: 'FAQs' },
    { link: '#', text: 'Forum' },
    { link: '#', text: 'Help center' },
    { link: '#', text: 'Support desk' },
  ];
  return (
    <div className="w-full flex flex-col gap-40 pt-16 pb-8 px-28 text-[#E2E4E9] size-4">
      <div className="w-full flex gap-20">
        <div className="w-[25%]">
          <h3 className="font-black leading-[150%] mb-10">ConnectApp</h3>
          <p className="w-[323px] font-normal leading-6 tracking-[-0.02em] mt-5">
            Connect App is a social media app that allows users to connect and
            chat with people around the world daily; based on social preferences
            and at a social distance.
          </p>
        </div>
        <div className="grid grid-cols-3 w-[75%]">
          <div className="flex flex-col gap-5 w-1/2">
            <h3 className="font-normal leading-[150%] mb-5">Products</h3>
            {productsData.map((data, idx) => (
              <div key={idx}>
                <FooterLinks data={data} />
              </div>
            ))}
          </div>
          <div className="flex flex-col gap-5 w-1/2">
            <h3 className="font-normal leading-[150%] mb-5">Resource</h3>
            {resourceData.map((data, idx) => (
              <div key={idx}>
                <FooterLinks data={data} />
              </div>
            ))}
          </div>
          <div className="flex flex-col gap-5 w-1/2">
            <h3 className="font-normal leading-[150%] mb-5">Community</h3>
            {communityData.map((data, idx) => (
              <div key={idx}>
                <FooterLinks data={data} />
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="flex justify-between items-center pb-10 w-full">
        <p className="font-normal size-[14px] leading-[150%] w-full">
          © 2025 ConnectApp. Powered by ConnectApp
        </p>
        <div className="flex gap-4 mt-4">
          <FaFacebookF className="cursor-pointer hover:text-[#A20030]" />
          <FaTwitter className="cursor-pointer hover:text-[#A20030]" />
          <FaYoutube className="cursor-pointer hover:text-[#A20030]" />
          <FaInstagram className="cursor-pointer hover:text-[#A20030]" />
        </div>
      </div>
    </div>
  );
};

export default Footer;

const FooterLinks = ({ data }) => {
  return (
    <a
      href={data.link}
      className="text-[#E2E4E9] hover:text-[#A20030] w-max whitespace-nowrap break-keep"
    >
      {data.text}
    </a>
  );
};
