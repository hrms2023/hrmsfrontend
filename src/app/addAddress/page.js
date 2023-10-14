// 'use client'
// import WithAuth from '../../components/auth/WithAuth';
// import AddAddressPage from './AddAdressPage';

// const ProtectedAddAddressPage = WithAuth(AddAddressPage);

// const AddAddress = () => {
//   return <ProtectedAddAddressPage />;
// };

// export default AddAddress;


// pages/addAddress.js
'use client'
import HomePageCreativeBanner from '@/components/HomePageCreativeBanner'
import HomePageNavbar from '@/components/Navbar/HomePageNavbar'
import React, { useState } from 'react'
import AddAdressForm from './AddAdressForm'
import ProfileSidebar from '@/components/sidebar/ProfileSidebar'
import Title from '@/components/Title/Title'
// import { useRouter } from 'next/router';

const title = "Add/Edit Address";
const breadCrums = "Home / My Account / Address"
const page = () => {

  // const router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(true);
  return (
    <div className=''>
      <HomePageNavbar />
      <HomePageCreativeBanner />
      <Title title = {title} breadCrums= {breadCrums} />
      <div className="flex flex-col lg:flex-row m-4 px-4">
        {isMenuOpen && (
          <ProfileSidebar isMenuOpen={isMenuOpen} />
        )}
        <AddAdressForm />
      </div>
    </div>
  )
}

export default page
