
import ClinicRegistrationForm from '@/components/ClinicRegistrationForm';

const EditClinicPage = ({ params }: { params: { id: string } }) => {
  // TODO: Fetch clinic data based on params.id and pre-populate the form
  return (
    <div>
      <ClinicRegistrationForm />
    </div>
  );
};

export default EditClinicPage;
