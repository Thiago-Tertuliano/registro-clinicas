
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Edit, Trash2 } from "lucide-react";
import Link from "next/link";
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from "@/components/ui/alert-dialog";

interface Clinic {
  id: string;
  name: string;
  address: string;
  contact: string;
  services: string;
}

const ClinicDetailsPage = ({ params }: { params: { id: string } }) => {
  // Mock clinic data
  const clinic: Clinic = {
    id: params.id,
    name: "Clínica Mock",
    address: "123 Rua Falsa, Cidadetown",
    contact: "555-555-5555",
    services: "Serviços mock fornecidos aqui.",
  };

  return (
    <div className="container mx-auto py-10">
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle>Detalhes da Clínica</CardTitle>
          <div className="space-x-2">
            <Link href={`/clinics/${clinic.id}/edit`}>
              <Button variant="outline" size="sm">
                <Edit className="mr-2 h-4 w-4" />
                Editar
              </Button>
            </Link>
            <AlertDialog>
              <AlertDialogTrigger asChild>
                <Button variant="destructive" size="sm">
                  <Trash2 className="mr-2 h-4 w-4" />
                  Excluir
                </Button>
              </AlertDialogTrigger>
              <AlertDialogContent>
                <AlertDialogHeader>
                  <AlertDialogTitle>Tem certeza absoluta?</AlertDialogTitle>
                  <AlertDialogDescription>
                    Esta ação não pode ser desfeita. Isso irá excluir permanentemente a clínica dos nossos
                    servidores.
                  </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                  <AlertDialogCancel>Cancelar</AlertDialogCancel>
                  <AlertDialogAction>Continuar</AlertDialogAction>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-1">
            <h2 className="text-lg font-semibold">Nome</h2>
            <p>{clinic.name}</p>
          </div>
          <div className="space-y-1">
            <h2 className="text-lg font-semibold">Endereço</h2>
            <p>{clinic.address}</p>
          </div>
          <div className="space-y-1">
            <h2 className="text-lg font-semibold">Contato</h2>
            <p>{clinic.contact}</p>
          </div>
          <div className="space-y-1">
            <h2 className="text-lg font-semibold">Serviços</h2>
            <p>{clinic.services}</p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ClinicDetailsPage;
