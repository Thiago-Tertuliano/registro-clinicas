
import ClinicRegistrationForm from '@/components/ClinicRegistrationForm';

const EditClinicPage = ({ params }: { params: { id: string } }) => {
  // TODO: Buscar dados da clínica com base em params.id e preencher o formulário
  return (
    <div>
      <ClinicRegistrationForm />
    </div>
  );
};

export default EditClinicPage;
