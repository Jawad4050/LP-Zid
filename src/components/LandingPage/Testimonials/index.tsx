import Image from "next/image";
import Link from "next/link";
import ImageSlide from "../ImageSlide";
const Testimonials = () => {
  
  const data1 = [
    {
      id: 1,
      followers: '+9’000 Followers',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
      name: 'Benjamin B.',
      title: 'CEO @ Courchevel',
      imageSrc: 'Avatar.svg',
      stars: 5,
    },
    {
      id: 2,
      followers: '+8’500 Followers',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
      name: 'John Doe',
      title: 'CEO @ Courchevel',
      imageSrc: 'Avatar.svg',
      stars: 4,
    },
    {
      id: 3,
      followers: '+7’000 Followers',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
      name: 'Jane Smith',
      title: 'CEO @ Courchevel',
      imageSrc: 'Avatar.svg',
      stars: 5,
    },
    {
      id: 4,
      followers: '+7’000 Followers',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
      name: 'Jane Smith',
      title: 'CEO @ Courchevel',
      imageSrc: 'Avatar.svg',
      stars: 5,
    },
    {
      id: 5,
      followers: '+7’000 Followers',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
      name: 'Jane Smith',
      title: 'CEO @ Courchevel',
      imageSrc: 'Avatar.svg',
      stars: 5,
    },
    {
      id: 6,
      followers: '+7’000 Followers',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
      name: 'Jane Smith',
      title: 'CEO @ Courchevel',
      imageSrc: 'Avatar.svg',
      stars: 5,
    },
    {
      id: 7,
      followers: '+7’000 Followers',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
      name: 'Jane Smith',
      title: 'CEO @ Courchevel',
      imageSrc: 'Avatar.svg',
      stars: 5,
    },
    {
      id: 8,
      followers: '+7’000 Followers',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
      name: 'Jane Smith',
      title: 'CEO @ Courchevel',
      imageSrc: 'Avatar.svg',
      stars: 5,
    },
    {
      id: 9,
      followers: '+7’000 Followers',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
      name: 'Jane Smith',
      title: 'CEO @ Courchevel',
      imageSrc: 'Avatar.svg',
      stars: 5,
    },
    {
      id: 10,
      followers: '+7’000 Followers',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
      name: 'Jane Smith',
      title: 'CEO @ Courchevel',
      imageSrc: 'Avatar.svg',
      stars: 5,
    },
    {
      id: 11,
      followers: '+7’000 Followers',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
      name: 'Jane Smith',
      title: 'CEO @ Courchevel',
      imageSrc: 'Avatar.svg',
      stars: 5,
    },
    {
      id: 12,
      followers: '+7’000 Followers',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
      name: 'Jane Smith',
      title: 'CEO @ Courchevel',
      imageSrc: 'Avatar.svg',
      stars: 5,
    }
  ];
  const data2 = [
    {
      id: 1,
      followers: '+9’000 Followers',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
      name: 'Benjamin B.',
      title: 'CEO @ Courchevel',
      imageSrc: 'Avatar.svg',
      stars: 5,
    },
    {
      id: 2,
      followers: '+8’500 Followers',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
      name: 'John Doe',
      title: 'CEO @ Courchevel',
      imageSrc: 'Avatar.svg',
      stars: 4,
    },
    {
      id: 3,
      followers: '+7’000 Followers',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
      name: 'Jane Smith',
      title: 'CEO @ Courchevel',
      imageSrc: 'Avatar.svg',
      stars: 5,
    },
    {
      id: 4,
      followers: '+7’000 Followers',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
      name: 'Jane Smith',
      title: 'CEO @ Courchevel',
      imageSrc: 'Avatar.svg',
      stars: 5,
    },
    {
      id: 5,
      followers: '+7’000 Followers',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
      name: 'Jane Smith',
      title: 'CEO @ Courchevel',
      imageSrc: 'Avatar.svg',
      stars: 5,
    },
    {
      id: 6,
      followers: '+7’000 Followers',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
      name: 'Jane Smith',
      title: 'CEO @ Courchevel',
      imageSrc: 'Avatar.svg',
      stars: 5,
    },
    {
      id: 7,
      followers: '+7’000 Followers',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
      name: 'Jane Smith',
      title: 'CEO @ Courchevel',
      imageSrc: 'Avatar.svg',
      stars: 5,
    },
    {
      id: 8,
      followers: '+7’000 Followers',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
      name: 'Jane Smith',
      title: 'CEO @ Courchevel',
      imageSrc: 'Avatar.svg',
      stars: 5,
    },
    {
      id: 9,
      followers: '+7’000 Followers',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
      name: 'Jane Smith',
      title: 'CEO @ Courchevel',
      imageSrc: 'Avatar.svg',
      stars: 5,
    },
    {
      id: 10,
      followers: '+7’000 Followers',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
      name: 'Jane Smith',
      title: 'CEO @ Courchevel',
      imageSrc: 'Avatar.svg',
      stars: 5,
    },
    {
      id: 11,
      followers: '+7’000 Followers',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
      name: 'Jane Smith',
      title: 'CEO @ Courchevel',
      imageSrc: 'Avatar.svg',
      stars: 5,
    },
    {
      id: 12,
      followers: '+7’000 Followers',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
      name: 'Jane Smith',
      title: 'CEO @ Courchevel',
      imageSrc: 'Avatar.svg',
      stars: 5,
    }
  ];
    return (
        
        <div className="rounded-[36px] lg:px-0 px-[20px] lg:pb-[80px] pb-[40px]">
            <div className="lg:w-[65%] mx-auto">
                <div className="lg:flex">
                    <div className="lg:text-start text-center">
                        <div className="mb-[16px] flex items-center justify-center w-[45px] h-[45px] lg:mx-0 mx-auto rounded-[8px] bg-[#EBE2FD]"><Image alt="" src="/star-icon.svg" width={24} height={24} className="w-[24px] h-[24px] mx-auto" /></div>
                        <h4 className="text-[#403F3F] text-[42px] mb-[16px] font-bold-Rebond-Grotesque">Testimonials</h4>
                        <p className="text-[#635B5B] text-[16px] lg:w-[40%] w-full  lg:mx-0 mx-auto">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium</p>
                    </div>
                    <div className="mt-auto ms-auto">
                        <Link href="" className="text-[16px] block lg:w-fit w-full text-center mt-[16px] px-[20px] py-[13px] rounded-[8px] bg-[#403F3F]" >Get Started</Link>
                    </div>
                </div>
            </div>
            <div>
            <div className="mt-7"><ImageSlide data={data1} animation={true} /></div>
            <div className="mt-[0px]"><ImageSlide data={data2} animation={false} /></div>
            </div>
        </div>
    );
};

export default Testimonials;