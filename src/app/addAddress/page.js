'use client'
import WithAuth from '../../components/auth/WithAuth';
import AddAddressPage from './AddAdressPage';

const ProtectedAddAddressPage = WithAuth(AddAddressPage);

const AddAddress = () => {
  return <ProtectedAddAddressPage />;
};

export default AddAddress;


