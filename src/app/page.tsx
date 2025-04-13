
import ClinicList from '@/components/ClinicList';
import ClinicRegistrationForm from '@/components/ClinicRegistrationForm';
import { Button } from '@/components/ui/button';
import { Plus } from 'lucide-react';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="container mx-auto py-10">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Clínicas Registradas</h1>
        <Link href="/clinics/new">
          <Button>
            <Plus className="mr-2 h-4 w-4" />
            Registrar Nova Clínica
          </Button>
        </Link>
      </div>
      <ClinicList />
    </div>
  );
}
